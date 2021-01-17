import React, { forwardRef } from "react";
import "./Message.css";

// or function Message({messageData, currentUser}) --> object de-structuring
const Message = forwardRef((props, ref) => {
    const isUser = props.currentUser === props.messageData.username;

    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <p>
                <b>{!isUser && `${props.messageData.username || "Unknown"}: `}</b> {props.messageData.message}
            </p>
        </div>
    );
});

export default Message;