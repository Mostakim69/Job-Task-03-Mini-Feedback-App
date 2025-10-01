# Mini Feedback App

A small web application built with **Next.js 15+** (App Router), **Tailwind CSS**, and **SweetAlert2** that allows users to submit feedback and view all submissions.

This project is ideal for learning **Next.js server & client components**, **API routes**, and deploying a full-stack app to **Vercel**.

---


![GitHub repo size](https://img.shields.io/github/repo-size/mostakim69/Job-Task-03-Mini-Feedback-App)
![GitHub language count](https://img.shields.io/github/languages/count/mostakim69/Job-Task-03-Mini-Feedback-App)
![License](https://img.shields.io/github/license/mostakim69/Job-Task-03-Mini-Feedback-App)
![GitHub last commit](https://img.shields.io/github/last-commit/mostakim69/Job-Task-03-Mini-Feedback-App)

## 🌐 Live Demo
[Visa Navigator Live](https://mini-feedback-app-three.vercel.app/)


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

```

app/
├── api/
│   └── feedback/
│       └── route.js         # Serverless API route
├── components/
│   ├── FeedbackForm.jsx      # Client component for submitting feedback
│   └── FeedbackList.jsx      # Server component for displaying feedback
├── styles/
│   └── globals.css           # Global Tailwind CSS
├── favicon.ico
├── layout.js                 # Root layout
└── page.js                   # Main page combining form + list

public/
├── file.svg
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg

root files:
├── .gitignore
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.mjs
├── next.config.mjs
├── jsconfig.json
└── README.md
```