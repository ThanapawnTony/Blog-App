import React from 'react'

const NewPost = ({ handleSubmit, setPostTitle, postTitle, postBody, setPostBody }) => {
  return (
    <main className='NewPost'>
        <h2>New post</h2>
        <form onSubmit={handleSubmit} className="newPostForm">
          <label htmlFor="postTitle">Title:</label>
          <input type="text" id='postTitle' required value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
          <label htmlFor="postBody">Post:</label>
          <textarea name="" id="postBody" required value={postBody} onChange={(e) => setPostBody(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
    </main>
  )
}

export default NewPost