import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPost = (props) => {

let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

let newPostElements = React.createRef();

let addPost =() => {
  debugger;
  let text = newPostElements.current.value;
  props.addPost(text);
}

  return (
    <div className={s.postBlock}>
      My posts
      <div>
        <div>
          <textarea ref={newPostElements}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}
export default MyPost;