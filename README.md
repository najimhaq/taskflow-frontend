<div align="center">

# Taskflow

### "TaskFlow" - A Team Collaboration & Task Management SaaS

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Platform-FF7E36?style=for-the-badge&logo=vercel&logoColor=white)](https://Taskflow.najimhub.xyz/)
[![Frontend Repository](https://img.shields.io/badge/Frontend-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/najimhaq/Taskflow-frontend)
[![Backend Repository](https://img.shields.io/badge/Backend-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/najimhaq/Taskflow-backend)
[![Next.js](https://img.shields.io/badge/Next.js-App_Router-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strictly_Typed-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)

</div>

---

## Table of contents

- [About](#about)
- [Why Taskflow?](#why-Taskflow)
- [Key features](#key-features)
- [User journeys](#user-journeys)
- [Architecture](#architecture)
- [Technology stack](#technology-stack)
- [Project structure](#project-structure)
- [Data model](#data-model)
- [API overview](#api-overview)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Author](#author)

---

## About

**Taskflow** is a full-stack e-learning platform that brings the complete learning lifecycle into one product: discovering a course, joining a cohort, learning from structured lessons, submitting practical work, receiving mentor feedback, tracking progress, and earning a certificate.

It is designed around three distinct roles—**Student**, **Instructor**, and **Admin**—with purpose-built dashboards, protected workflows, and role-based access control. The platform is not only a course catalog; it is a structured environment for teaching, assessment, moderation, and measurable student progress.

> **Core idea:** Learning should produce visible outcomes. Taskflow connects lesson progress, assignments, review feedback, and certificate eligibility into one continuous workflow.

---

## Why Taskflow?

Most course platforms focus on watching content. Taskflow focuses on the full learning loop:

```text
Discover a course
      ↓
Join a cohort
      ↓
Learn through structured modules and lessons
      ↓
Complete assignments
      ↓
Receive instructor feedback and scores
      ↓
Track progress
      ↓
Meet completion requirements
      ↓
Unlock a certificate
```

### Product principles

- **Outcome-oriented learning** — lessons lead to assignments, feedback, and proof of completion.
- **Cohort-based delivery** — courses can have scheduled cohorts, limited seats, and defined start/end dates.
- **Clear ownership** — instructors manage teaching, admins moderate the platform, and students own their learning path.
- **Portfolio-aware assessment** — assignments can capture GitHub repositories, live project URLs, written responses, and optional files.
- **Role-first UX** — each user sees tools relevant to their responsibilities.

---

## Key features

### Public experience

- Modern landing page and course discovery experience.
- Course catalog with search and filters for category, skill level, and price.
- Detailed course pages with curriculum, instructor information, free preview lessons, and cohort availability.
- Public instructor profile pages.
- Cohort start dates, capacity, and available-seat visibility.

### Student dashboard

- Personalized learning overview.
- Enrolled course management and continue-learning experience.
- Lesson completion tracking and progress visibility.
- Assignment submission with GitHub repository URL, live project URL, written answer, and optional file support.
- Instructor feedback, scores, review status, and completion tracking.
- Certificate eligibility flow.
- Enrollment and payment history.
- Profile image upload with file validation and ImgBB hosting.

### Instructor dashboard

- Create, update, and publish courses.
- Build modules and lessons for structured course delivery.
- Create and manage cohorts with seat limits and start/end dates.
- View enrolled students.
- Review assignment submissions from a dedicated queue.
- Provide feedback, score work, and update review status.
- View course-level analytics such as enrollments, completions, and pending reviews.
- Manage instructor profile, professional links, expertise, preferences, and profile image.

### Admin dashboard

- User management and role-aware administration.
- Course review, approval, and moderation workflow.
- Instructor verification support.
- Payment and enrollment monitoring.
- Reported-content handling.
- Platform-level statistics and operational visibility.

### Platform capabilities

- Better Auth-based authentication and session handling.
- Role-based route protection for Student, Instructor, and Admin areas.
- Type-safe frontend and backend codebases.
- MongoDB-backed data model using Mongoose.
- Image upload validation for JPEG, PNG, and WebP files up to 5 MB.
- ImgBB-powered hosted profile image uploads.
- Production API deployment through Render and custom-domain support.

---

## User journeys

### Instructor → Admin → Student workflow

```text
Instructor creates a course
        ↓
Admin reviews and approves it
        ↓
Instructor creates a cohort with dates and seat limits
        ↓
Student discovers the course and enrolls
        ↓
Student receives access to lessons
        ↓
Student completes lessons and submits assignments
        ↓
Instructor reviews work, gives feedback, and assigns a score
        ↓
Student monitors feedback and progress
        ↓
Completion requirements are met
        ↓
Certificate becomes available
```

### Assignment workflow

```text
Student submits work
  ├── GitHub repository URL
  ├── Live project URL
  ├── Written answer
  └── Optional file
        ↓
Instructor opens the review queue
        ↓
Instructor gives feedback, score, and review status
        ↓
Student sees review results in the dashboard
```

---

## Architecture

Taskflow follows a separated frontend/backend architecture with a REST API boundary.

```text
┌──────────────────────────────────────────────────────────────┐
│                         Frontend                             │
│     Next.js App Router · React · TypeScript · Tailwind CSS   │
└──────────────────────────────┬───────────────────────────────┘
                               │ HTTPS / REST API
┌──────────────────────────────▼───────────────────────────────┐
│                          Backend                              │
│      Node.js · Express.js · TypeScript · Better Auth         │
│     Role guards · Validation · Business rules · Upload API   │
└───────────────┬──────────────────────────────┬───────────────┘
                │                              │
┌───────────────▼──────────────┐  ┌────────────▼──────────────┐
│        MongoDB Atlas         │  │           ImgBB            │
│ Users · Courses · Cohorts    │  │ Hosted profile image URLs  │
│ Enrollments · Submissions    │  │                            │
└──────────────────────────────┘  └───────────────────────────┘
```

### Authentication and authorization

- **Better Auth** manages user identity, sessions, and user records.
- A role is associated with each user: `STUDENT`, `INSTRUCTOR`, or `ADMIN`.
- Backend middleware protects authenticated routes and restricts role-specific operations.
- The frontend uses authenticated requests with credentials included for protected API calls.

---

## Technology stack

### Frontend

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) | App Router, routing, rendering, and frontend framework |
| [React](https://react.dev/) | Component-based user interface |
| [TypeScript](https://www.typescriptlang.org/) | Static typing and safer application code |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling system |
| [daisyUI](https://daisyui.com/) | Tailwind component utilities |
| [Framer Motion](https://motion.dev/) | UI animation and motion |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [Lucide](https://lucide.dev/) | Interface icons |

### Backend

| Technology | Purpose |
| --- | --- |
| [Node.js](https://nodejs.org/) | JavaScript runtime |
| [Express.js](https://expressjs.com/) | REST API framework |
| [TypeScript](https://www.typescriptlang.org/) | Typed backend development |
| [MongoDB Atlas](https://www.mongodb.com/atlas) | Cloud document database |
| [Mongoose](https://mongoosejs.com/) | MongoDB object modeling and validation |
| [Better Auth](https://www.better-auth.com/) | Authentication and session management |
| [Multer](https://github.com/expressjs/multer) | Multipart form-data and image handling |
| [ImgBB](https://imgbb.com/) | Hosted profile-image storage |

### Quality and product tooling

| Technology | Purpose |
| --- | --- |
| [Zod](https://zod.dev/) | Schema validation where applicable |
| [React Hook Form](https://react-hook-form.com/) | Form state management where applicable |
| [TanStack Query](https://tanstack.com/query/latest) | Server-state management where applicable |
| [Render](https://render.com/) | Backend deployment |
| [Vercel](https://vercel.com/) | Frontend deployment option |

---

## Project structure

```text
Taskflow/
├── Taskflow-frontend/
│   ├── src/
│   │   ├── app/                 # Next.js routes and dashboard pages
│   │   ├── components/          # Reusable UI components
│   │   ├── lib/                 # API clients and auth utilities
│   │   └── ...
│   ├── public/
│   └── package.json
│
└── Taskflow-backend/
    ├── src/
    │   ├── config/              # Environment, database, and auth configuration
    │   ├── controller/          # Request handlers and business logic
    │   ├── middlewares/         # Auth, role, upload, and error middleware
    │   ├── models/              # Mongoose schemas and models
    │   ├── routes/              # Express route modules
    │   ├── utils/               # Shared backend utilities
    │   └── server.ts            # Application entry point
    └── package.json
```

---

## Data model

### Core relationships

```text
User
 ├── creates → Course                     (Instructor)
 ├── owns → Cohort                        (Instructor)
 ├── enrolls in → Enrollment              (Student)
 ├── completes → LessonProgress            (Student)
 ├── submits → Submission                 (Student)
 └── receives → Certificate               (Student)

Course
 ├── has → Modules / Lessons
 ├── has → Cohorts
 └── has → Assignments

Cohort
 ├── belongs to → Course
 └── has → Enrollments

Submission
 ├── belongs to → Student
 ├── belongs to → Assignment
 └── receives → Review / Feedback
```

### Main collections

```text
user                  # Better Auth user data, profile image, and role
session               # Better Auth sessions
account               # OAuth account records when enabled

courses
cohorts
modules
lessons
enrollments
lessonProgress
assignments
submissions
reviews
payments
notifications
certificates
```

> Collection names may vary slightly based on Mongoose model configuration. Treat this as the domain-level data map.

---

## API overview

Below are representative protected API areas. Exact endpoints may expand as the platform evolves.

| Area | Example route | Access |
| --- | --- | --- |
| Student dashboard | `GET /api/dashboard/student/overview` | Student |
| Student profile image | `POST /api/dashboard/student/profile/image` | Student |
| Instructor profile | `GET /api/instructor/profile` | Instructor |
| Instructor profile image | `POST /api/instructor/profile/image` | Instructor |
| Instructor settings | `PATCH /api/instructor/settings` | Instructor |
| Course management | `/api/instructor/...` | Instructor |
| Platform management | `/api/admin/...` | Admin |

### Profile image upload contract

The student and instructor profile-image endpoints accept `multipart/form-data`.

```text
Field name: image
Allowed formats: JPEG, PNG, WebP
Maximum size: 5 MB
Storage: ImgBB
Persistence: Better Auth user.image field in MongoDB
```

---

## Getting started

### Prerequisites

Install the following before running the project locally:

- Node.js (current LTS recommended)
- npm, Yarn, or pnpm
- MongoDB Atlas database or local MongoDB instance
- An ImgBB API key for profile-image uploads

### 1. Clone repositories

```bash
git clone https://github.com/najimhaq/Taskflow-frontend.git
git clone https://github.com/najimhaq/Taskflow-backend.git
```

### 2. Run the backend

```bash
cd Taskflow-backend
npm install
npm run dev
```

### 3. Run the frontend

Open a second terminal:

```bash
cd Taskflow-frontend
npm install
npm run dev
```

Then visit the local frontend URL shown by Next.js, commonly `http://localhost:3000`.

---

## Environment variables

Create local environment files from the provided examples, if your repositories include them. Never commit real secrets to Git.

### Backend example

```env
NODE_ENV=development
PORT=8000

MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority

BETTER_AUTH_SECRET=<generate-a-long-random-secret>
BETTER_AUTH_URL=http://localhost:8000

CLIENT_URL=http://localhost:3000
IMGBB_API_KEY=<your-imgbb-api-key>
```

### Frontend example

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Production notes

- Use the deployed API URL for `NEXT_PUBLIC_API_URL`.
- Use a real MongoDB Atlas connection string in `MONGODB_URI`.
- Add `IMGBB_API_KEY` to the backend host environment variables.
- Configure CORS to allow the deployed frontend origin and credentials.
- Do not expose backend-only secrets with `NEXT_PUBLIC_` prefixes.

---

## Deployment

A practical deployment setup for Taskflow is:

| Service | Deployment target |
| --- | --- |
| Frontend | Vercel or another Next.js-capable host |
| Backend | Render web service |
| Database | MongoDB Atlas |
| Profile images | ImgBB |

### Deployment checklist

- [ ] Add all backend environment variables in Render.
- [ ] Confirm MongoDB Atlas network access and database-user credentials.
- [ ] Set the deployed frontend URL in backend CORS configuration.
- [ ] Set `NEXT_PUBLIC_API_URL` in the frontend deployment environment.
- [ ] Deploy the frontend after changing any `NEXT_PUBLIC_` variable.
- [ ] Verify authentication cookies work across frontend and backend domains.
- [ ] Test a Student, Instructor, and Admin account after deployment.
- [ ] Test profile image upload using JPEG, PNG, and WebP under 5 MB.

---

## Roadmap

### Next up

- [ ] Stripe payment integration and payment webhooks.
- [ ] Email notifications using Resend.
- [ ] Real-time notifications with Socket.IO.
- [ ] Richer course analytics and reporting.
- [ ] Instructor payout and revenue reporting.
- [ ] Assignment file storage integration.
- [ ] Certificate verification page with public validation code.
- [ ] Automated tests for critical role-based flows.
- [ ] Image lifecycle management for replacing/deleting old hosted profile images.

---

## Security notes

- Keep MongoDB URIs, ImgBB API keys, authentication secrets, and payment keys in environment variables only.
- Validate files on both the client and server; server-side validation is the security boundary.
- Enforce role checks on the backend, not only in frontend UI.
- Use HTTPS and secure cookie settings in production.
- Rotate any secret that was accidentally exposed in a commit, screenshot, or public message.

---

## Author

Built by **Najim Haq**.

- Portfolio: [najimul.com](https://najimul.com)
- GitHub: [@najimhaq](https://github.com/najimhaq)

---

<div align="center">

### If Taskflow helped inspire your learning-platform project, consider giving the repositories a star.

Made with care, TypeScript, and a focus on meaningful learning outcomes.

</div>
