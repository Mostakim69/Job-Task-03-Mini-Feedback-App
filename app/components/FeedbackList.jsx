export default function FeedbackList({ feedbacks }) {
  return (
    <div className="w-full max-w-md space-y-4 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-2">📜 All Feedback</h2>
      {feedbacks.length === 0 ? (
        <p className="text-gray-500">No feedback yet.</p>
      ) : (
        feedbacks.map((fb, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow transition hover:scale-105 duration-300">
            <h3 className="font-bold">{fb.name}</h3>
            <p className="text-sm text-gray-500">{fb.email}</p>
            <p className="mt-2">{fb.feedback}</p>
          </div>
        ))
      )}
    </div>
  );
}
