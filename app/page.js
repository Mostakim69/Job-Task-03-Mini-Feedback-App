import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

export const dynamic = "force-dynamic";

async function getFeedbacks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/feedback`, {
    cache: "no-store",
  });
  return res.json();
}


export default async function Page() {
  const feedbacks = await getFeedbacks(); // 🚀 SSR data fetch

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">💬 Mini Feedback App</h1>

      {/* Feedback form (still client component) */}
      <FeedbackForm />

      {/* Feedback list rendered by server */}
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}
