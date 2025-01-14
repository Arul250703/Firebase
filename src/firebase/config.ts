import Firebase from 'firebase'
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDqWQkjJENozE0rJWXRUlHIyQuYZqgBT9M",
  authDomain: "crud-f88da.firebaseapp.com",
  projectId: "crud-f88da",
  storageBucket: "crud-f88da.firebasestorage.app",
  messagingSenderId: "9253401065",
  appId: "1:9253401065:web:e86baa8dc3e590d4aa1b78"
};


const app = initializeApp(firebaseConfig);
export default app;
