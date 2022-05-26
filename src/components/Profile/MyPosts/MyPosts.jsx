import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPost = (props) => {

  let posts = [
    { id: 1, message: 'Hi, how are you' , likesCount: 25},
    { id: 2, message: 'It\'s my first post', likesCount: 55},
    { id: 2, message: 'БЛАБЛА', likesCount: 155},
    { id: 2, message: 'It\'s my first post', likesCount: 55},
    { id: 2, message: 'Hi, how are you', likesCount: 155}
]

let postElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  return (
    <div className={s.postBlock}>
      My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}
export default MyPost;