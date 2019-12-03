// Initialize Firebase
var config = {
    apiKey: 'AIzaSyCbBsA6NBf-Ko1iIQZLcIR2cpspWslwx5I',
    authDomain: "fnplus-rle-mvp.firebaseapp.com",
    projectId: "fnplus-rle-mvp",
    appId: "1:1064007003546:web:187ca42dbcf8a58d"
  };
  firebase.initializeApp(config);
  
  /**
   * initApp handles setting up the Firebase context and registering
   * callbacks for the auth status.
   *
   * The core initialization is in firebase.App - this is the glue class
   * which stores configuration. We provide an app name here to allow
   * distinguishing multiple app instances.
   *
   * This method also registers a listener with firebase.auth().onAuthStateChanged.
   * This listener is called when the user is signed in or out, and that
   * is where we update the UI.
   *
   * When signed in, we also authenticate to the Firebase Realtime Database.
   */

   var body=document.querySelector('body');
   body.onload=function(){
     var meta=document.querySelector('meta');
     console.log(meta);
   }
  function initApp() {
    // Listen for auth state changes.
    // [START authstatelistener]
    var doc= document.querySelector('meta');
    console.log(doc);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // [START_EXCLUDE]
        document.getElementById('sign-in-button').textContent = 'Sign out';
        document.getElementById('sign-in-status').textContent = 'Signed in';
        
        //chrome.storage.local.set({loggedIn: true});
        chrome.browserAction.setPopup({popup: "popup.html"});
        // [END_EXCLUDE]
      } else {
        // Let's try to get a Google auth token programmatically.
        // [START_EXCLUDE]
        document.getElementById('sign-in-button').textContent = 'Sign-in with Google';
        document.getElementById('sign-in-status').textContent = 'Signed out';

         //chrome.storage.local.set({logged_in: false});
        chrome.browserAction.setPopup({popup: "auth.html"});
        // [END_EXCLUDE]
      }
      document.getElementById('sign-in-button').disabled = false;
    });
    // [END authstatelistener]
  
    document.getElementById('sign-in-button').addEventListener('click', startSignIn, false);
  }
  
  /**
   * Start the auth flow and authorizes to Firebase.
   * @param{boolean} interactive True if the OAuth flow should request with an interactive mode.
   */
  function startAuth(interactive) {
    // Request an OAuth token from the Chrome Identity API.
    chrome.identity.getAuthToken({interactive: !!interactive}, function(token) {
      if (chrome.runtime.lastError && !interactive) {
        console.log('It was not possible to get a token programmatically.');
      } else if(chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else if (token) {
        // Authorize Firebase with the OAuth Access Token.
        var credential = firebase.auth.GoogleAuthProvider.credential(null, token);
        firebase.auth().signInWithCredential(credential).catch(function(error) {
          // The OAuth token might have been invalidated. Lets' remove it from cache.
          if (error.code === 'auth/invalid-credential') {
            chrome.identity.removeCachedAuthToken({token: token}, function() {
              startAuth(interactive);
            });
          }
        });
      } else {
        console.error('The OAuth Token was null');
      }
    });
  }
  
  /**
   * Starts the sign-in process.
   */
  function startSignIn() {
    document.getElementById('sign-in-button').disabled = true;
    if (firebase.auth().currentUser) {
      firebase.auth().signOut();
    } else {
      startAuth(true);
    }
  }
  
  window.onload = function() {
    initApp();
  };