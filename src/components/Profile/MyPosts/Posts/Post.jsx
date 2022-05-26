import React from "react";
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/60e08366d03c5885bbe93824_IMG_20210630_085608_392-min.jpeg" />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  )
}
export default Post;