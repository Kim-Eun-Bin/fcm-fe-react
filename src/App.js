import "./App.css";

import React, {useEffect} from "react";
import messaging, {vapidKey} from "./firebase";
import {getToken, onMessage} from "firebase/messaging";
import {toast, ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';


function App() {
  useEffect(() => {
    Notification.requestPermission().then(async (permission) => {
      if (permission === 'granted') {
        getToken(messaging, {vapidKey}).then((currentToken) => {
          console.log(currentToken);
        });

      }
    })
  }, []);

  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    toast(
      <div>
        <h3>
          {payload.notification.title}
        </h3>
        <p>
          {payload.notification.body}
        </p>
      </div>
    )
  });

  return (
    <div className="App">
      <ToastContainer/>
    </div>
  );
}

export default App;
