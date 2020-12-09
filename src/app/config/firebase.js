import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDg90IkHooZ2lxaCDNClRMSw8RaLLPBM6Y',
  authDomain: 're-vents-4a9be.firebaseapp.com',
  projectId: 're-vents-4a9be',
  storageBucket: 're-vents-4a9be.appspot.com',
  messagingSenderId: '278165613279',
  appId: '1:278165613279:web:574547c07e42c966fc176a',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
