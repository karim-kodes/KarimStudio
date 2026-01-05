# KarimStudio — Portfolio & Client Portal System

KarimStudio is a modern portfolio platform combined with a full-featured client management system.  
It serves as both a public-facing portfolio and a private client portal where clients can track project progress, view deliverables, invoices, and updates — all in one place.

---

## ✨ Features

### 🌐 Public Portfolio

- Professional landing page
- Services & packages
- Featured projects
- Contact & project inquiry CTA

### 👤 Client Portal

- Dashboard overview
- Project tracking & timelines
- Deliverables management
- Invoices & payments
- Activity updates
- Client settings

### 🛠 Admin Panel (Planned)

- Client & project management
- Invoice generation
- Project progress updates
- Deliverables upload
- Role-based access control

---

## 🧱 Tech Stack

### Frontend

- **React (Vite)**
- **Tailwind CSS**
- **React Router**
- **Lucide Icons**

### Backend (Planned)

- **Node.js**
- **Express**
- **MongoDB**
- **JWT Authentication**

### Design

- **Figma** (UI/UX Design)
- Custom design system & color palette

---

## 📁 Project Structure

````txt
karimstudio/
├── client/                # Frontend (React)
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── client/
│   │   │   └── public/
│   │   ├── layout/
│   │   │   ├── PublicLayout.jsx
│   │   │   └── ClientLayout.jsx
│   │   ├── pages/
│   │   │   ├── public/
│   │   │   └── client/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/                # Backend (Node/Express) [WIP]
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
│
├── .gitignore
└── README.md

🚀 Getting Started (Frontend)
    cd client
    npm install
    npm run dev
The app will run at:
    http://localhost:5173

🔒 Environment Variables
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_secret_key
    ```
🧭 Project Status

    ✅ Landing page completed

    ✅ Client dashboard UI completed

    🚧 Client portal pages (in progress)

    🚧 Backend development (planned)

    🚧 Admin panel (planned)
````

👨‍💻 Author

    Abdikarim Mohamed Abdi
    Founder & Full-Stack Developer
    KarimStudio

📄 License

    This project is for personal and commercial portfolio use.
    All rights reserved.
