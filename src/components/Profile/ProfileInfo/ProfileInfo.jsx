import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/627e9be8e158c9a20981a2e6_apeswap%203.jpeg' />
      </div>
        <div className={s.descriptionBlock}>
        Ava + description
      </div>

    </div>)
}
export default ProfileInfo;