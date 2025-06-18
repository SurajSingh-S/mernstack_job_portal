# 💼 Job Application Tracker – Mini CRM

A full-stack job tracking platform designed to simplify the process of managing job applications for job seekers and streamline job posting for recruiters. The system includes role-based access, real-time UI updates, secure authentication, and dynamic filtering to enhance productivity and user experience.

---

## 🧠 Problem Understanding

Managing job applications can be overwhelming, especially when applying to multiple roles with different companies and statuses. Recruiters also need a reliable platform to post and manage job openings. This project addresses those needs by providing:

- ✅ Status tracking (Applied, Interview, Offer, Rejected, Accepted)
- ✅ Role-based dashboards for job seekers and recruiters
- ✅ Filtering, sorting, and search functionality
- ✅ Email notifications for successful applications
- ✅ Secure, scalable deployment using modern tech

---

## 🏗️ Architecture & Tech Stack

### 🔧 Tech Stack
- **Frontend:** React + Vite, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (MongoDB Atlas)  
- **Authentication:** JWT (JSON Web Tokens)  
- **State Management:** React Context API  
- **Deployment:** Render (for both frontend & backend)

---

### 🧱 Architecture Overview

**Client (React + Vite)**
- Role-based Dashboards (Seeker & Recruiter)
- Protected Routes using Context API
- Dynamic UI for job status updates
- Form handling for Job Posting and Applications
- Real-time search, filter, and sorting

**Server (Node.js + Express.js)**
- Auth APIs (Login, Register)
- JWT-based Role Authorization
- CRUD operations for job data
- Role middleware for route protection

**MongoDB Atlas**
- User Model (with role field: seeker/recruiter)
- Job Model (with status, company, title, description)

---

## 🛠️ Development Approach

1. **Requirement Gathering**: Defined user stories for job seekers and recruiters  
2. **Frontend Implementation**: Set up routing, authentication, forms, dashboards  
3. **Backend Development**: Created RESTful APIs with JWT authentication  
4. **Role-Based Access**: Configured middleware and UI logic for role restrictions  
5. **Deployment**: Used Render for seamless full-stack deployment with environment configs

---

## ⚔️ Challenges Faced & Solutions

| Challenge                  | Solution                                                                 |
|----------------------------|--------------------------------------------------------------------------|
| Implementing Role-Based UI | Used React Context + conditional rendering per user role                 |
| Managing JWT Auth Securely | Axios interceptors to attach tokens on each request                      |
| Ensuring Real-time Updates | Leveraged React state and conditional rendering after each operation     |
| Deployment Errors          | Applied dynamic environment configs (`process.env`) & Render port config |

---

## 🎓 Key Learnings

- Implemented full JWT authentication with protected routes
- Gained experience in RESTful API design and integration
- Built dynamic UI components with filtering, sorting, and search
- Successfully deployed a full-stack MERN app using Render
- Learned best practices for role-based UI and secure token management

---

## 🌐 Live Demo

**Hosted on Render:**  
🔗 https://mernstack-job-portal.onrender.com/

---

## 📩 Contact

For questions or feedback, feel free to reach out via ss4921702@gmail.com.

