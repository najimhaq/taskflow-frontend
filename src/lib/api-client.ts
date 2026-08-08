//src/lib/api-client.ts
//TaskFlow-এর protected API—যেমন /api/workspaces, /api/tasks—call করার জন্য একটি Axios instance রাখব।
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});


// /api/workspaces
// /api/projects
// /api/tasks
