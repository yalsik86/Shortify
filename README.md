# Shortify
Shortify is a URL shortening service built using the PERN Stack + Redis. It provides a simple and efficient way to convert long URLs into short, shareable links while also enabling analytics tracking. 

By leveraging PostgreSQL for storage, Express.js for backend handling, React.js for the frontend, and Node.js for server-side operations, Shortify ensures scalability and performance. Redis is used for caching to provide fast redirections and efficient handling of frequently accessed links. Additionally, Shortify implements asynchronous updates to optimize database writes and improve system responsiveness. This makes Shortify a robust solution for managing and analyzing URL redirections efficiently.

## Table of Contents
- [Folder Structure](#folder-structure)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)

## Folder Structure
```bash
shortify/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utilities/
│   ├── app.js
│   └── index.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   └   └── main.jsx
│
└── README.md
```
