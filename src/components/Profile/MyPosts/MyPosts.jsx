import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPost = (props) => {

let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

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