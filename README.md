# **SecrecyChat - Real-Time Chat Application**

SecrecyChat is a real-time chat application built with **Node.js, Express.js, and Socket.io**, enabling users to communicate seamlessly in different chat rooms. The application utilizes **WebSockets** for instant message transmission.

## **Features**

- **Real-time messaging** with WebSockets
- **Chat rooms** for group conversations
- **User join/leave notifications**
- **Broadcast messages** to all users in a room
- **Simple and lightweight UI**

## **Technologies Used**

- **Node.js** - Backend runtime
- **Express.js** - Web framework for handling routes
- **Socket.io** - WebSocket library for real-time communication
- **HTML, CSS, JavaScript** - Frontend technologies

## **Installation & Setup**

### **Prerequisites**

Ensure you have **Node.js** installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### **Steps to Run the Project**

1. **Clone the repository**
   ```bash
   git clone https://github.com/sarthakrawat498/SecrecyChat.git
   cd SecrecyChat
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the server**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000/` by default.

## **Project Structure**

```bash
SecrecyChat/
│── public/         # Frontend files (HTML, CSS, JavaScript)
│── utils/          # Utility functions for message formatting and user management
│── server.js       # Main server file (Handles WebSockets & Express setup)
│── package.json    # Project metadata and dependencies
│── README.md       # Project documentation
```

## **Usage**

- Open `http://localhost:3000/` in your browser.
- Enter a username and choose a chat room.
- Start chatting with other users in real time.

## **Future Enhancements**

- **User authentication** (Login & Register system)
- **Private messaging** between users
- **Message storage** using a database (MongoDB or Firebase)
- **File sharing** support
- **Custom password protected** chatrooms with ChatID

## **License**

This project is licensed under the **MIT License**.


