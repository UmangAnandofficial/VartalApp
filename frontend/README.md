# Vartalaap | वार्तालाप

A premium video conferencing web application built with the MERN stack and WebRTC.

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
   \`\`\`bash
   git clone <your-repo-url>
   cd vartalaap
   \`\`\`

2. Install backend dependencies
   \`\`\`bash
   cd backend
   npm install
   \`\`\`

3. Install frontend dependencies
   \`\`\`bash
   cd ../frontend
   npm install
   \`\`\`

4. Create a `.env` file in the `backend/` folder:
   \`\`\`
   MONGO_URI=your_mongodb_connection_string
   PORT=8000
   FRONTEND_URL=http://localhost:3000
   \`\`\`

5. Start the backend
   \`\`\`bash
   cd backend
   npm run dev
   \`\`\`

6. Start the frontend (in a new terminal)
   \`\`\`bash
   cd frontend
   npm start
   \`\`\`

7. Open `http://localhost:3000` in your browser

## 📝 Architecture

The app uses a full-mesh WebRTC topology where each peer maintains an `RTCPeerConnection` with every other peer. Socket.IO handles the signaling layer (SDP offers/answers, ICE candidates) while the actual media streams flow peer-to-peer.

## 🎯 Roadmap

- [ ] Add TURN server for cross-network reliability
- [ ] Implement JWT-based authentication
- [ ] Add meeting recording feature
- [ ] Migrate to SFU architecture for larger meetings
- [ ] Add user avatars and profiles

## 👤 Author

Built by **Umang Anand**

---

*वार्तालाप — Where every conversation feels like home.*