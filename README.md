My React Project for Softuni (https://softuni.bg/) exam - 09.04.2023
EN-version

Simple website for creating jobs and track stats.
It uses own REST server and MongoDB Atlas as database for the backend.

Supported functionality: login, register, logout, create, delete, search. There is one demo user which you can use to explore the app, but you cannot modify or create content. To access demo version just click "Demo" button on register or login page. Only the creator can modify it's own content. Authorization for users in session uses JWT token. Passwords for users are stored hashed in database using Bcrypt.

package.json for client installs React client and some other libraries like Axios, Recharts etc...

package.json for server install Express and some other libraries nedeed

Required version of NodeJS: 16.18.0 and up

Live demo here:

Local installation:

1. Install NodeJS
2. Download zipped folder
3. Unzip and open terminal in this folder
4. Enter unzipped folder and run npm i
5. Run: npm start / in the same folder
6. Open browser at http://localhost:4200 or http://127.0.0.1:4200
7. REST server is running on port 4000 (ensure the port is not used by some other application)
8. Enjoy

Author: Petar Zhelev
