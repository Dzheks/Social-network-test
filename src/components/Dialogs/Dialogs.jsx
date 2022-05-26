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
    let dialogsData = [
        { id: 1, name: 'Evgeniy' },
        { id: 2, name: 'Irina' },
        { id: 3, name: 'Nadeaya' },
        { id: 4, name: 'Сергей' },
        { id: 5, name: 'Екатерина' },
        { id: 6, name: 'Валера' }
    ]

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Irina' },
        { id: 3, message: 'How is your it-kamasutra?' },
      
    ]

return (
    <div>
        <img src='https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/61b1c519fa18e4674c519b57_BSC_Providing_Smart_Contract_Developers_Opportunities_with_Chainlink-p-1080.jpeg' />
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name= { dialogsData[0].name} id= {dialogsData[0].id}/>
                <DialogItem name= { dialogsData[1].name} id= {dialogsData[1].id}/>
                <DialogItem name= { dialogsData[2].name} id= {dialogsData[2].id}/>
            </div>
            <div className={s.messages}>
                <Message message= {messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id} />
                <Message message={messagesData[2].message} id={messagesData[2].id} />
                
            </div>
        </div>
    </div>
)
}

export default Dialogs;