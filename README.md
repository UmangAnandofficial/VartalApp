# VartalApp | वार्तालाप

A premium full-stack video conferencing web application built with the MERN stack and WebRTC.

🌐 **Live Demo:** _Coming soon — deploying now_

## ✨ Features

- 🎥 HD peer-to-peer video calling powered by WebRTC
- 💬 Real-time chat using Socket.IO
- 🖥️ Screen sharing support
- 🔐 User authentication with bcrypt password hashing
- 📱 Fully responsive luxury UI with bilingual branding (English + Hindi)
- 🎨 Custom dark + gold premium design

## 🛠️ Tech Stack

**Frontend**
- React 18
- Material UI (MUI)
- Socket.IO Client
- WebRTC (RTCPeerConnection)
- React Router DOM

**Backend**
- Node.js + Express
- Socket.IO
- MongoDB + Mongoose
- bcrypt for password hashing
- CORS middleware

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Install backend dependencies: `cd backend && npm install`
3. Install frontend dependencies: `cd ../frontend && npm install`
4. Create a `.env` file in `backend/` with `MONGO_URI`, `PORT`, and `FRONTEND_URL`
5. Start backend: `npm run dev` (in backend folder)
6. Start frontend: `npm start` (in frontend folder)
7. Open `http://localhost:3000`

## 📝 Architecture

The app uses a full-mesh WebRTC topology where each peer maintains an `RTCPeerConnection` with every other peer. Socket.IO handles signaling (SDP offers/answers, ICE candidates) while media streams flow peer-to-peer.

## 👤 Author

Built by **Umang Anand**

---

*वार्तालाप — Where every conversation feels like home.*