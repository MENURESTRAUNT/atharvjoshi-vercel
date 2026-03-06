# Gaylord's Express - Restaurant Website

A fully functional, luxury-themed restaurant website with a complete admin panel. Built with the MERN stack (MongoDB, Express, React/Next.js, Node.js).

## Features
- **Modern Luxury UI**: Powered by Tailwind CSS and Framer Motion.
- **Admin Panel**: Manage Menu, Reviews, Owner Info, and Contact Messages.
- **Dynamic Menu**: Categorized and fully editable.
- **Authentication**: Secure JWT-based admin login.
- **Responsive**: Mobile-first design with smooth animations.
- **SEO Optimized**: Next.js App Router structure.

## Tech Stack
- **Frontend**: Next.js 14, Tailwind CSS, Framer Motion, Axios.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose).
- **Authentication**: JWT (JSON Web Tokens).

## Local Setup

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas URI)

### 1. Clone & Install
**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd client
npm install
```

### 2. Environment Variables
Create `.env` in `server/`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Create `.env.local` in `client/`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 3. Database Seeding
Run the seeder to create the Admin user and initial data:
```bash
cd server
node seeder.js
# Default Admin: username: admin, password: adminpassword123
```

### 4. Run Locally
**Start Backend:**
```bash
cd server
npm run dev
# Runs on http://localhost:5000
```

**Start Frontend:**
```bash
cd client
npm run dev
# Runs on http://localhost:3000
```

## Deployment

### Deploying to Vercel
1. **Frontend**: Import the `client` folder as a project in Vercel. Set `NEXT_PUBLIC_API_URL` to your production backend URL.
2. **Backend**: Import the `server` folder as a separate project in Vercel. Set the environment variables (`MONGO_URI`, `JWT_SECRET`).
   - The `vercel.json` and code are configured for Vercel Serverless.

Note: For the backend on Vercel, the API URL will be `https://your-backend-project.vercel.app/api`.

---
© 2025 Gaylord's Express.
