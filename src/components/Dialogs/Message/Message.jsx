import React from "react";
import s from './../Dialogs.module.css'


const Message = (props) => {
    let newMessagesElements = React.createRef();

    let addPost =() => {
      let text = newMessagesElements.current.value;
      alert('samuraijs.com');
    }

    return (
     <div>
    <div className={s.dialog}>{props.message}
    <div>
        <div>
          <textarea ref={newMessagesElements}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add fPost</button>
        </div>
      </div>
    </div> 
    </div>   
    )
}

export default Message;