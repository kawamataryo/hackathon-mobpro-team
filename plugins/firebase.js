import firebase from 'firebase'

// .env に設定した値を取得してる
const config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECTID,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APPID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
