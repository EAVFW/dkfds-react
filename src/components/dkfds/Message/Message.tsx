import React from 'react';
import 'dkfds/dist/css/dkfds-virkdk.css'

enum MessageType {
  alert= "alert-info",
  succes= "alert-success",
  warning="alert-warning",
  error="alert-error",
}

interface MessageProps {
    title: string,
    text: string,
    messageType: MessageType
}

const defaultMessageProps: MessageProps = {
  title: "Information text",
  text: "This is some dummy text",
  messageType: MessageType.alert
}

function Message(props: MessageProps): JSX.Element {
    const {title, text, messageType} = props;

    return(
      <>
        <div 
        className={"alert alert--show-icon has-close " + messageType} 
        role={MessageType.warning || MessageType.error === messageType ? "alert" : undefined} 
        aria-atomic={MessageType.warning === messageType || MessageType.error ? "true" : undefined}
        >
          <div className="alert-body">
            <p className="alert-heading">{ title }</p>
            <p className="alert-text">{text}</p>
            <button type="button"
            className="alert-close">Luk</button>
          </div>
        </div>
      </>
    );
}

Message.defaultProps = defaultMessageProps;

export default Message;