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
          <button type='submit'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Submit
            </span>
          </button>
        </form>
    </main>
  )
}

export default NewPost