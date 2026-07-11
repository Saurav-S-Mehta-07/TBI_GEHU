# TBI GEHU Website

![Node.js](https://img.shields.io/badge/node.js-18.x-green)
![React](https://img.shields.io/badge/react-19.x-blue)
![Express](https://img.shields.io/badge/express-5.x-grey)
![MongoDB](https://img.shields.io/badge/mongodb-6.x-green)
![Status](https://img.shields.io/badge/status-production%20ready-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

TBI GEHU Website is a production-ready web application for the Technology Business Incubator at Graphic Era Hill University. It combines a public-facing React website, an authenticated admin dashboard, and a Node.js + Express REST API with MongoDB persistence.

This repository is built for students, founders, incubator administrators, and community stakeholders who need a polished digital presence, program showcase, and content management flow.

---

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Overview](#api-overview)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Project Description

TBI GEHU Website provides an engaging online experience for the TBI community at Graphic Era Hill University. It showcases incubator programs, mentors, events, startups, and resources to visitors while offering an authenticated admin portal for managing content and contact submissions.

The project is intended for incubator teams, campus entrepreneurs, startup mentors, prospective applicants, and university stakeholders.

---

## Features

### User Features
- Public landing page with incubator mission, highlights, and ecosystem overview
- Program listing with descriptions, categories, duration, and application links
- Mentor profiles with expertise, organization, and role details
- Event listing with schedule, venue, speakers, and visual cards
- Startup showcase with sector, founder details, and funding status
- Contact form for visitor inquiries
- Responsive React interface with styled pages and sections

### Admin Features
- Admin login page with secure authentication
- Dashboard with tab navigation for Mentors, Programs, Events, Startups, and Contact
- Create, read, update, and delete (CRUD) operations for mentors, programs, events, and startups
- Contact message review and deletion
- Protected routes using JWT token authentication

### Authentication
- Admin sign-in using email and password
- JWT-based authorization for protected API endpoints
- Auth middleware for secure backend access

### Dashboard
- Admin sidebar navigation
- Client-side protected route guard
- Tabbed content management experience
- Login-based session persistence via local storage

### Programs
- Program CRUD operations via admin panel
- Program metadata includes category, status, duration, and application link
- Public program retrieval through REST API

### Mentors
- Mentor directory management for admin users
- Public listing of mentor cards on the website
- Mentor details include image, designation, organization, and expertise

### Events
- Event management workflow for admin users
- Public event card rendering with date, type, venue, and speaker metadata

### Startups
- Startup showcase with sector, founder, status, and photo support
- Admin CRUD operations for startup records

### Contact
- Public contact submission endpoint
- Admin viewing and deletion support for messages
- API-backed contact form handling

### Security
- Password hashing using bcryptjs
- JWT token issuance and validation
- Environment-driven secret management
- Centralized error handling middleware

### Responsive Design
- Mobile-friendly React layouts
- Tailwind CSS styling across components
- Adaptive admin and public pages

### Performance
- Vite-powered React development and build environment
- Minimal backend dependency footprint
- API-driven content loading for fast page rendering

---

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 19, Vite, Tailwind CSS, React Router DOM, Axios |
| Admin Panel | React 19, Vite, Tailwind CSS, React Router DOM, Axios, react-icons |
| Backend | Node.js, Express 5, Mongoose, JSON Web Token, bcryptjs, dotenv, CORS |
| Database | MongoDB |
| Authentication | JWT-based auth, protected Express middleware |
| Development Tools | npm, Vite, ESLint, Nodemon |
| Libraries | axios, cors, dotenv, bcryptjs, jsonwebtoken, mongoose |

---

## Project Structure

```
TBI_GEHU/
├── admin/
│   ├── package.json
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── pages/
│   │   │   ├── Contact/
│   │   │   ├── Dashboard/
│   │   │   ├── Events/
│   │   │   ├── Login/
│   │   │   ├── Mentors/
│   │   │   ├── Programs/
│   │   │   └── Startups/
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx
│   │   └── styles/
│   └── vite.config.js
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── scripts/
│   │   └── createAdmin.js
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── contactController.js
│   │   │   ├── eventController.js
│   │   │   ├── mentorController.js
│   │   │   ├── programController.js
│   │   │   └── startupController.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   └── errorMiddleware.js
│   │   ├── models/
│   │   │   ├── Admin.js
│   │   │   ├── Contact.js
│   │   │   ├── Event.js
│   │   │   ├── Mentor.js
│   │   │   ├── Program.js
│   │   │   └── Startup.js
│   │   └── routes/
│   │       ├── authRoutes.js
│   │       ├── contactRoutes.js
│   │       ├── eventRoutes.js
│   │       ├── mentorRoutes.js
│   │       ├── programRoutes.js
│   │       └── startupRoutes.js
└── frontend/
    ├── package.json
    ├── public/
    ├── src/
    │   ├── main.jsx
    │   ├── assets/
    │   ├── components/
    │   ├── layouts/
    │   ├── pages/
    │   ├── routes/
    │   │   └── AppRouter.jsx
    │   └── styles/
    └── vite.config.js
```

---

## Installation

### Clone repository

```bash
git clone https://github.com/your-org/tbi-gehu.git
cd TBI_GEHU
```

### Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install

cd ../admin
npm install
```

---

## Environment Variables

Create a `.env` file inside `backend/` with the following content:

```env
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=5000
NODE_ENV=development
```

- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret used to sign JWT tokens.
- `PORT`: Optional server port (default `5000`).
- `NODE_ENV`: Environment mode, such as `development` or `production`.

---

## Running the Project

### Development

Start the backend server:

```bash
cd backend
npm run dev
```

Start the frontend app:

```bash
cd ../frontend
npm run dev
```

Start the admin panel:

```bash
cd ../admin
npm run dev
```

### Production

Build frontend assets:

```bash
cd frontend
npm run build
```

Build admin assets:

```bash
cd ../admin
npm run build
```

Start backend server:

```bash
cd ../backend
npm start
```

---

## API Overview

### Authentication
- `POST /api/auth/login` — Sign in admin
- `GET /api/auth/profile` — Retrieve authenticated admin profile

### Mentors
- `GET /api/mentors` — List mentors
- `GET /api/mentors/:id` — Get mentor details
- `POST /api/mentors` — Create mentor
- `PUT /api/mentors/:id` — Update mentor
- `DELETE /api/mentors/:id` — Delete mentor

### Programs
- `GET /api/programs` — List programs
- `GET /api/programs/:id` — Get program details
- `POST /api/programs` — Create program
- `PUT /api/programs/:id` — Update program
- `DELETE /api/programs/:id` — Delete program

### Events
- `GET /api/events` — List events
- `GET /api/events/:id` — Get event details
- `POST /api/events` — Create event
- `PUT /api/events/:id` — Update event
- `DELETE /api/events/:id` — Delete event

### Startups
- `GET /api/startups` — List startups
- `GET /api/startups/:id` — Get startup details
- `POST /api/startups` — Create startup
- `PUT /api/startups/:id` — Update startup
- `DELETE /api/startups/:id` — Delete startup

### Contact
- `POST /api/contact` — Submit a contact message
- `GET /api/contact` — List contact messages
- `GET /api/contact/:id` — Get contact message
- `DELETE /api/contact/:id` — Delete contact message

### Authorization
Protected routes require the `Authorization` header:

```http
Authorization: Bearer <token>
```

---

## Screenshots

> Add actual screenshots to the `/screenshots` folder and update these links.

![Homepage](./screenshots/homepage.png)
![Programs](./screenshots/programs.png)
![Mentors](./screenshots/mentors.png)
![Admin Dashboard](./screenshots/admin-dashboard.png)

---

## Deployment

Deployment recommendations:

- Configure `backend/.env` with production MongoDB and JWT settings
- Build `frontend` and `admin` before deployment
- Use a static host for React builds and a Node.js host for the backend
- Secure API traffic with HTTPS
- Remove or rotate default seeded admin credentials

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Install dependencies and run locally
4. Submit a pull request with a clear summary

---

## Acknowledgements

- Graphic Era Hill University Technology Business Incubator
- React, Vite, Express, and MongoDB open-source communities
- Open-source UI and tooling libraries used by the project
