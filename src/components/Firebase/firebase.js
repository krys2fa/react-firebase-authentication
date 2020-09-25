import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDR44rd_ZkrO-zQQY-QsCx28deRrqPjWjw',
  authDomain: 'react-firebase-authentic-43220.firebaseapp.com',
  databaseURL: 'https://react-firebase-authentic-43220.firebaseio.com',
  projectId: 'react-firebase-authentic-43220',
  storageBucket: 'react-firebase-authentic-43220.appspot.com',
  messagingSenderId: '159943670953',
  appId: '1:159943670953:web:c7ee8078ea398968db7db8',
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailandPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
