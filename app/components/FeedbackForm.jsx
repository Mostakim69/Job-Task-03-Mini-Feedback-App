"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function FeedbackForm({ onFeedbackSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.feedback) {
      Swal.fire({
        icon: "warning", title: "Oops!", text: "All fields are required!",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      Swal.fire({
        icon: "error", title: "Invalid Email", text: "Please enter a valid email address!",
      });
      return;
    }

    if (form.feedback.length < 20) {
      Swal.fire({
        icon: "info", title: "Too Short", text: "Feedback must be at least 20 characters!",
      });
      return;
    }

    try {
      const res = await fetch("/api/feedback", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success", title: "Feedback Submitted!", text: "Thank you for your feedback.", timer: 2000, showConfirmButton: false,
        });

        setForm({ name: "", email: "", feedback: "" });
        if (onFeedbackSubmit) onFeedbackSubmit();
      } else {
        const data = await res.json();
        Swal.fire({
          icon: "error",title: "Submission Failed", text: data.message || "Something went wrong!",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error", title: "Server Error", text: "Could not submit feedback. Try again later.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-4 mb-8 animate-fadeIn">
      <input type="text" placeholder="Name" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <input type="email" placeholder="Email" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <textarea placeholder="Your Feedback" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105" rows={4} value={form.feedback} onChange={(e) => setForm({ ...form, feedback: e.target.value })} ></textarea>

      {/* Character Counter */}
      <p className={`text-sm transition-all duration-500 ${form.feedback.length < 20 ? "text-red-500 animate-bounce" : "text-green-600 animate-pulse"}`} >
        {form.feedback.length} / 20 characters minimum
      </p>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 hover:scale-105 active:scale-95 transition transform duration-300 cursor-pointer" >
        Submit Feedback
      </button>
    </form>
  );
}
