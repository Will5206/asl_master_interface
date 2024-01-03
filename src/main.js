import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  setDoc,
} from 'firebase/firestore';


const app = initializeApp({
  apiKey: "AIzaSyA3P1khZmDH2DOu_V0C5WB3spyE_KcLaco",
  authDomain: "sign-sub-span.firebaseapp.com",
  databaseURL: "https://sign-sub-span-default-rtdb.firebaseio.com",
  projectId: "sign-sub-span",
  storageBucket: "sign-sub-span.appspot.com",
  messagingSenderId: "1088979665664",
  appId: "1:1088979665664:web:83b053709cfbcfbf3da9e5",
  measurementId: "G-15V06ZY6PZ"
  /* ORIGINAL KEYS< RESTORE WHEN DONE
  apiKey: 'AIzaSyA3P1khZmDH2DOu_V0C5WB3spyE_KcLaco',
  authDomain: 'sign-sub-span.firebaseapp.com',
  databaseURL: 'https://sign-sub-span-default-rtdb.firebaseio.com',
  projectId: 'sign-sub-span',
  storageBucket: 'sign-sub-span.appspot.com',
  messagingSenderId: '1088979665664',
  appId: '1:1088979665664:web:83b053709cfbcfbf3da9e5',
  measurementId: 'G-15V06ZY6PZ',*/
});

const auth = getAuth(app);
const db = getFirestore(app);
let uid = null,
  loggedIn = false;

  /**
   * Save an action done by a user
   * @param {string} action The name of the action 
   * @param {Object} params An object that has the parameters of the action 
   * @returns 
   */
async function save(action, params = {}) {
  if (!loggedIn) {
    return false;
  }
  try {
    const timestamp = new Date();
    const obj = {
      timestamp: timestamp.getTime(),
      readable_time: timestamp.toGMTString(),
      action: action,
      params: params,
    };
    const docRef = doc(db, 'participants', uid);
    // https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array
    await updateDoc(docRef, { actions: arrayUnion(obj) });
    console.log('Action added: ', obj);
    return true;
  } catch (e) {
    console.error('Error updating document: ', e);
    return false;
  }
}

/**
 * Creates a new user if it does not exist.
 */
async function initUser() {
  // https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document
  const docRef = doc(db, 'participants', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Participant exists:', docSnap.data());
  } else {
    console.log('Will create a new doc.');
    setDoc(docRef, {
      actions: [
        {
          timestamp: Date.now(),
          action: 'login',
          params: {},
        },
      ],
    });
  }
}

Vue.prototype.$saveAction = save;

/**
 * Signs a user in the system
 */
signInAnonymously(auth)
  .then((user) => {
    uid = user.user.uid;
    Vue.prototype.$uid = uid;
    loggedIn = true;
    console.log(`Signed in... ${user.user.uid}`);
    initUser();
  })
  .catch((error) => {
    console.log(`${error.code}\n${error.message}`);
  });

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');