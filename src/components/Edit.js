import React from 'react'

function Edit({chekEdit}) {
  return (
    <div>
      <input type="text" placeholder='updated Title'/>
            <input type="text" placeholder='updated Desc'/>
            <button onClick={chekEdit}>Update</button>
    </div>
  )
}

export default Edit