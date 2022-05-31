import React from "react";
import s from './Dialogs.module.css'
import Message from "../Dialogs/Message/Message"
import DialogItem from "../Dialogs/DialogItem/DialogsItem"


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    return (
        <div>
            <img src='https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/61b1c519fa18e4674c519b57_BSC_Providing_Smart_Contract_Developers_Opportunities_with_Chainlink-p-1080.jpeg' />
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElements}
                </div>
                <div  className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;