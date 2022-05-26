import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = "dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}
const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Evgeniy' },
        { id: 2, name: 'Irina' },
        { id: 3, name: 'Nadeaya' }
    ]

    let messages = [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Yo' },
        { id: 3, message: 'How is your it-kamasutra?' },
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

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