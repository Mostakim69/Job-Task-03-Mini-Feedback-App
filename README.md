# Mini Feedback App

A small web application built with **Next.js 15+** (App Router), **Tailwind CSS**, and **SweetAlert2** that allows users to submit feedback and view all submissions.

This project is ideal for learning **Next.js server & client components**, **API routes**, and deploying a full-stack app to **Vercel**.

---

## 🌟 Features

- Submit feedback with **Name**, **Email**, and **Message**.
- **Client-side validation**:
  - All fields required
  - Email format check
  - Feedback minimum 20 characters
- **SweetAlert2** notifications for success, errors, and warnings.
- **Live character counter** for feedback input.
- **Responsive design** with Tailwind CSS.
- **Server-side rendering** for feedback list.
- Deploy-ready for **Vercel**.

---

## 📁 Folder Structure


├── app
    ├── api
    │   └── feedback
    │   │   └── route.js
    ├── components
    │   ├── FeedbackForm.jsx
    │   └── FeedbackList.jsx
    ├── favicon.ico
    ├── globals.css
    ├── layout.js
    ├── page.js
    └── styles
    │   └── globals.css
├── eslint.config.mjs
├── jsconfig.json
├── .gitignore
├── README.md
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
    ├── file.svg
    ├── globe.svg
    ├── next.svg
    ├── vercel.svg
    └── window.svg
└── tailwind.config.js
