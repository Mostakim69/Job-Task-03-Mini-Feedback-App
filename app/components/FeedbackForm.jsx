"use client";
import { useState } from "react";

export default function FeedbackForm({ onFeedbackSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setMessage("✅ Feedback submitted successfully!");
      setForm({ name: "", email: "", feedback: "" });
      onFeedbackSubmit(); // Refresh list after submit
    } else {
      setMessage("❌ All fields are required!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md space-y-4 mb-8"
    >
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 border rounded"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="Your Feedback"
        className="w-full p-2 border rounded"
        rows={4}
        value={form.feedback}
        onChange={(e) => setForm({ ...form, feedback: e.target.value })}
      ></textarea>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Submit Feedback
      </button>

      {message && <p className="text-center text-green-600 mt-2">{message}</p>}
    </form>
  );
}
