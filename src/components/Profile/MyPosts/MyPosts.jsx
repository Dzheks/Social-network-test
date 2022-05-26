import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPost = (props) => {

  let postsData = [
    { id: 1, message: 'Hi, how are you' , likesCount: 25},
    { id: 2, message: 'It\'s my first post', likesCount: 55},
    { id: 2, message: 'Hi, how are you', likesCount: 155}
]


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
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
        <Post message={postsData[2].message} likesCount={postsData[2].likesCount} />
      </div>
    </div>
  )
}
export default MyPost;