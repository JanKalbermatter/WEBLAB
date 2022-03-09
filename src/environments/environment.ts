import { config } from "src/config";


export const environment = {
    production: false,
    firebaseConfig: {
      apiKey: config.FIREBASE_API_KEY,
      authDomain: "leaguetracker-1a5e3.firebaseapp.com",
      projectId: "leaguetracker-1a5e3",
      storageBucket: "leaguetracker-1a5e3.appspot.com",
      messagingSenderId: "755250788100",
      appId: "1:755250788100:web:4b2e55f6b6a2afd0ff8251",
      measurementId: "G-0DETJQ2NTT"
    }
  };