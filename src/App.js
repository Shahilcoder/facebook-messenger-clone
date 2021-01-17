import React, { useEffect, useState } from "react";
import { FormControl, Input, IconButton } from '@material-ui/core';
import './App.css';
import logo from './facebook_ml.png';

import Message from "./Message";
import firebase from "firebase";
import db from "./firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection('Messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      const theMessages = snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}));
      setMessages(theMessages);
      window.scrollTo(0,document.body.scrollHeight);
    });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please Enter Your Name: "));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    
    db.collection('Messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  };

  return (
    <div className="App">
      <div class="app__header">
      <img src={logo} alt="Logo" />
        <h1>Facebook Messenger Clone</h1>
        <h2>Welcome {username}</h2>
      </div>
      <form onSubmit={sendMessage} className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit">
            <SendIcon />
          </IconButton>
        </FormControl>
        
      </form>

      <div className="app__flipmove">
        <FlipMove>
          {/* object de-structuring */}
          {messages.map(({id, message}) => {
            return <Message key={id} currentUser={username} messageData={message} />;
          })}
        </FlipMove>
      </div>

    </div>
  );
}

export default App;
