"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  let errorData;

  try {
    // Coba parsing pesan error dari service
    errorData = JSON.parse(error.message);
  } catch (e: unknown) {
    // Pastikan error dalam bentuk instance Error
    if (e instanceof Error && "message" in e) {
      console.error("Parsing error message failed:", e.message);
      errorData = {
        status: false,
        statusCode: 500,
        message: e.message,
      };
    } else {
      console.error("An unknown error occurred", e);
      errorData = {
        status: false,
        statusCode: 500,
        message: "An unexpected error occurred",
      };
    }
  }

  return (
    <div>
      <h2>Error Occurred!</h2>
      <p>Status: {errorData.status.toString()}</p>
      <p>Status Code: {errorData.statusCode}</p>
      <p>Message: {errorData.message}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
