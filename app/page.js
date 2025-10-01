"use client";

import { useState, useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

export default function Page() {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch all feedbacks initially
  const loadFeedbacks = async () => {
    const res = await fetch("/api/feedback");
    const data = await res.json();
    setFeedbacks(data);
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">💬 Mini Feedback App</h1>

      {/* Feedback Form */}
      <FeedbackForm onFeedbackSubmit={loadFeedbacks} />

      {/* Feedback List */}
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}
