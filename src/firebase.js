import {initializeApp} from "firebase/app";
import {getMessaging} from "firebase/messaging";

export const vapidKey = 'BCSX7ieufXNvVE78HLpUSInt9xddzgAZsVCBHWcrdZR2BpT3pxw8rqwRxgbtxonbgvTp9rLpG7411JJ6xzmdsMo';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export default messaging;