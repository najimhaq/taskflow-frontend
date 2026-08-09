src/
├── app/
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   ├── sign-in/
│   │   │   └── page.tsx
│   │   └── sign-up/
│   │       └── page.tsx
│
├── components/
│   ├── auth/
│   │   ├── auth-shell.tsx
│   │   ├── sign-in-form.tsx
│   │   ├── sign-up-form.tsx
│   │   └── password-input.tsx
│   │
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       └── form-field.tsx
│
└── features/
    └── auth/
        └── auth.schema.ts

DashboardLayout
├── Sidebar
│   ├── Workspace switcher
│   ├── Overview
│   ├── My tasks
│   ├── Projects
│   └── Settings
├── Topbar
│   ├── Search
│   ├── Notification
│   └── User menu
└── Dashboard overview
    ├── Welcome card
    ├── Task stats
    ├── Recent projects
    └── Activity
