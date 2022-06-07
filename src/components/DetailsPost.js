import React, { useState } from 'react'


function DetailsPost(props) {

    const [isEdit, setIsEdit] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedDescription, setUpdatedDescription] = useState("");


    const handleOnUpdate = () =>{
        let newPost = {
            id: props.post.id,
            title: updatedTitle,
            description: updatedDescription,
        }
        props.onUpdate(newPost);
        setIsEdit(false);
    }
    const handleOnDelete = () =>{
        
        props.onDelete(props.post.id)
    }
    return (
        <div>
            <div className='post' key={props.post.id}>
                <h2>{props.post.title}</h2>
                <p>{props.post.description}</p>
                <button onClick={() => { setIsEdit(true) }}>Edit</button>
                <button onClick={handleOnDelete}>Delete</button>
                <br />
                {isEdit && <div>
                    <input type="text" placeholder='updated Title' onChange={(e) =>setUpdatedTitle(e.target.value)} />
                    <input type="text" placeholder='updated Desc' onChange={(e) =>setUpdatedDescription(e.target.value)}/>
                    <button onClick={handleOnUpdate} >Update</button>
                    
                </div>

                
                }


            </div>
        </div>
    )
}

export default DetailsPost