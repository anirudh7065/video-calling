# ZOlo – Video Meeting and Sharing App

ZOlo is a modern video meeting and sharing application built with **Next.js**, **ShadCN UI**, **Clerk** for authentication, and **Stream** for real-time video. It provides a clean and secure platform for users to join, host, and collaborate via video sessions.

---

## 🚀 Features

- 🔐 Secure authentication with Clerk (Sign In/Up + session management)
- 📹 Real-time video meetings with Stream Video
- ⚡ Optimized performance with Next.js
- 🎨 Elegant UI built using ShadCN (Tailwind + Radix UI)
- 🔄 Seamless joining and hosting of meetings
- 🌐 Environment-ready for Vercel or self-hosted deployment

---

## 🔧 Environment Variables

Create a `.env.local` file in the root directory and include the following:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Stream Video API
NEXT_PUBLIC_STREAM_API_KEY=your-stream-api-key
STREAM_SECRET_KEY=your-stream-secret-key

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
