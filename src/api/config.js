import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAVZZat8SxBymZJEUSOLWMv1uAaTK2F1Cs',
	authDomain: 'smart-shopping-list-4bda3.firebaseapp.com',
	projectId: 'smart-shopping-list-4bda3',
	storageBucket: 'smart-shopping-list-4bda3.appspot.com',
	messagingSenderId: '387315570914',
	appId: '1:387315570914:web:5cfc159735530153e0e6bb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
