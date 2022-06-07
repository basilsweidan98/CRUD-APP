import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost, deletePost, updatePost } from '../redux/postsSlice';
import { useSelector } from 'react-redux';
import DetailsPost from './DetailsPost';
import { Formik } from 'formik';


export default function Posts() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const posts = useSelector(state => state.posts.items)
    const dispatch = useDispatch();

    const handleUpdate = (newPost) => {
        dispatch(updatePost(newPost))
    }
    const handleDelete = (id) => {
        dispatch(deletePost(id))
    }


    return (
        <div>
            <Formik
                initialValues={{ title: '', description: '' }}

                validate={values => {
                    const errors = {};

                    if (!values.title) {
                        errors.title = 'This Is Required';

                    } else if (values.title.length < 3) {
                        errors.title = 'Must be 4 characters or more';
                    }

                    if (!values.description) {
                        errors.description = 'This Is Required';}
                        else if (values.title.length < 3) {
                            errors.title = 'Must be 4 characters or more';
                        }

                    return errors;
                }
            
            } 
                onSubmit={(v) => {
                    dispatch(addPost({ id: posts.length + 1,title: v.title,description: v.description }))
                    

                }}>
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit} >
                        <div className='form'>
                            <input type="text"
                              name="title"
                              placeholder='Enter Post Title'
                              value={values.title}
                              onChange={handleChange} />

                            { errors.title ? <div>{errors.title}</div>: null}

                            <input type="text"
                             name="description"
                             placeholder='Enter Post Description' 
                             value={values.description}
                             onChange={handleChange} />

                            <button type="submit" >Add Post</button>

                        </div>

                        
                    </form>
                    
                )}
                
            </Formik>
            <div className='posts'>
                    {posts.length > 0 ?
                        posts.map(post => <DetailsPost onUpdate={handleUpdate} onDelete={handleDelete} post={post} />
                        ) : "There is no Posts!!"}
                </div>

        </div>
    )
}




{/* <form>
<div className='form'>
<input type="text" value={title} placeholder='Enter Post Title' onChange={(e) => setTitle(e.target.value) } />
<input type="text" value={description} placeholder='Enter Post Description' onChange={(e) => setDescription(e.target.value) } />
<button onClick={() => {
    dispatch(addPost({id: posts.length +1, title, description}))
    setTitle("");
    setDescription("");

}}>Add Post</button>

</div>

<div className='posts'>
   {posts.length > 0 ? 
   posts.map(post => <DetailsPost onUpdate={handleUpdate} onDelete={handleDelete} post={post} />
     ) : "There is no Posts!!" }
</div>
    </form>  */}