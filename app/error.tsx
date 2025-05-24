"use client";

export default function ErrorPage({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-red-500">Something went wrong!</h1>
      <button
        onClick={() => {
          reset();
        }}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go Home
      </button>
    </div>
  );
}
