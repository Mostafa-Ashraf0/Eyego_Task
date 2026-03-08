# Eyego Internship Task

# Live Demo
https://eyego-task-kappa.vercel.app/

## Features

- Display data in a dynamic table with sorting, filtering and pagination
- Data visualization using charts
- Authentication system
- Global state management
- Responsive UI

---

## Tech Stack

- Next.js
- React
- Redux Toolkit
- Firebase
- Chart.js
- Tailwind CSS

---

## Installation

Clone the repository:

git clone https://github.com/Mostafa-Ashraf0/Eyego_Task

Go to the project directory:

cd Eyego_Task

Install dependencies:

npm install

---

## Firebase Setup

Install Firebase:

npm install firebase

Create a Firebase project from the Firebase Console.

After creating the project, create a file called:

firebase.js

Then copy your Firebase SDK configuration from the Firebase console and paste it in the file.

Example:

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "your_key",
  authDomain: "your_domain",
  projectId: "your_project_id",
  storageBucket: "your_bucket",
  messagingSenderId: "your_sender_id",
  appId: "your_app_id"
};

const app = initializeApp(firebaseConfig);

export default app;

---

## Environment Variables

Create a `.env` file in the root directory and add your Firebase configuration.

copy these variables to your .env file

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENTID=

---

## Run the Project

Start the development server:

npm run dev

Then open:

http://localhost:3000

---

