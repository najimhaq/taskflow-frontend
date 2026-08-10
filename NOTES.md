yarn add -D typescript@npm:@typescript/typescript6@^6.0.2
src/
├── app/
│ ├── (auth)/
│ │ ├── layout.tsx
│ │ ├── sign-in/
│ │ │ └── page.tsx
│ │ └── sign-up/
│ │ └── page.tsx
│
├── components/
│ ├── auth/
│ │ ├── auth-shell.tsx
│ │ ├── sign-in-form.tsx
│ │ ├── sign-up-form.tsx
│ │ └── password-input.tsx
│ │
│ └── ui/
│ ├── button.tsx
│ ├── input.tsx
│ └── form-field.tsx
│
└── features/
└── auth/
└── auth.schema.ts

Dashboard
├── Collapsible sidebar
│ ├── TaskFlow logo
│ ├── Workspace switcher
│ ├── Overview
│ ├── My Tasks
│ ├── Projects
│ └── Settings
├── Topbar
│ ├── Global search
│ ├── Notifications
│ └── User menu with sign out
└── Main overview
├── Welcome header
├── Task statistics
├── Priority tasks
├── Recent projects
└── Activity panel

Workspace
Membership
Project
Task
Comment
Activity
তারপর যখন আপনি project deploy করবেন, তখন local database থেকে Neon-এ যাব।

| ধাপ                     | Backend                                                   | Frontend                                  | আপনি কী শিখবেন                                   |
| ----------------------- | --------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------ |
| 1. Workspace foundation | Prisma Workspace ও Membership model, role enum, migration | Create workspace modal/page               | Prisma relation, enum, transaction               |
| 2. Workspace API        | Create, list, get-current workspace API                   | Real workspace switcher                   | Express controller/service/route, typed API call |
| 3. Authorization        | OWNER, ADMIN, MEMBER permission middleware                | UI action hide/disable based on role      | Union type, RBAC, TypeScript narrowing           |
| 4. Project module       | Project schema, CRUD API                                  | Project list and create project form      | Zod infer, request/response types                |
| 5. Task module          | Task model, status/priority/assignee API                  | Kanban board, task creation/edit modal    | Prisma relation, filters, typed forms            |
| 6. Collaboration        | Comment and activity model/API                            | Comments, activity timeline               | Nested relations, pagination                     |
| 7. Production polish    | Error handler, validation, API docs                       | Empty/loading/error states, responsive UI | Error narrowing, reusable state UI               |
| 8. Deployment           | Neon, environment, migration deploy                       | Vercel frontend                           | Production CORS/cookie configuration             |

User
└── Membership
└── Workspace
├── Project
├── Task
└── Activity

backend/
├── prisma/
│ └── schema.prisma ← Workspace/Membership model add
│
└── src/
├── modules/
│ └── workspace/
│ ├── workspace.schema.ts
│ ├── workspace.service.ts
│ ├── workspace.controller.ts
│ └── workspace.route.ts
└── middlewares/
└── require-workspace-role.ts

src/
├── app/
│ └── (dashboard)/
│ └── onboarding/
│ └── create-workspace/
│ └── page.tsx
│
├── components/
│ └── workspace/
│ └── create-workspace-form.tsx
│
└── features/
└── workspace/
└── workspace.schema.ts

এখন পর্যন্ত অর্জন
✅ Better Auth cookie session
✅ Protected Express API
✅ PostgreSQL + Prisma relations
✅ Workspace + Membership tables
✅ Owner membership creation transaction
✅ Workspace onboarding form
✅ Frontend/backend API integration
✅ Real workspace name in Sidebar
✅ Real workspace name in Topbar
✅ Workspace-based dashboard guard
✅ Reusable Workspace Provider state

পরবর্তী logical feature হলো workspace switcher—কারণ এখন “New workspace” button আছে, কিন্তু একাধিক workspace হলে active workspace change করার UI/state লাগবে। তারপর আমরা Project module শুরু করব।
