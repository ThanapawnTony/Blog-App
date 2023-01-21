import React from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const EditPost = ({ handleEdit, editBody, setEditBody, editTitle, posts, setEditTitle }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])
    return (
        <main className='NewPost'>
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form onSubmit={(e) => e.preventDefault()} className="newPostForm">
                        <label htmlFor="postTitle">Title:</label>
                        <input type="text" id='postTitle' required value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                        <label htmlFor="postBody">Post:</label>
                        <textarea name="" id="postBody" required value={editBody} onChange={(e) => setEditBody(e.target.value)} />
                        <button type='submit' onClick={() => handleEdit(post.id)}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Submit Edit
                            </span>
                        </button>
                    </form>
                </>
                }
                {!editTitle &&
                    <>
                        <h2>Page Not Found</h2>
                        <p>Well, that sucks.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
            }
        </main>
    )
    }

export default EditPost