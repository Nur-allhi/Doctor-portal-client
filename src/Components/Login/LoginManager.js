import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Configs/FirebaseConfig";

// To prevent Firebase Common Error : Default Somthing?:
export const initializeAppLoginFrameWork = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

// Create new User:
export const newAccountCreate = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      updateUserName(name);
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};

// Old User Login in:
export const oldUserSignIn = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};
// Google sign In:
export const handlegoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */

      const { displayName, email } = result.user;
      const signedInUser = {
        isSignedIn: true,
        success: true,
        name: displayName,
        email: email,
      };
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = result.credential;
      const token = credential.accessToken;
      console.log({ token });
      return signedInUser;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// FaceBook sign in:
// export const handlefaceBookSignIn = () => {
//   var fbProvider = new firebase.auth.FacebookAuthProvider();
//   return firebase
//     .auth()
//     .signInWithPopup(fbProvider)
//     .then((result) => {
//       /** @type {firebase.auth.OAuthCredential} */
//       var user = result.user;
//       user.success = true;
//       console.log(user);
//       return user;
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       // const credential = result.credential;
//       // const token = credential.accessToken;
//       // console.log({ token });
//       // return signedInUser;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// Update user name:
const updateUserName = (name) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      // Update successful.
      console.log("user Name updated successfully");
    })
    .catch(function (error) {
      console.log(error);
    });
};
