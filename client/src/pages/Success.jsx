import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50">
      <div className="w-[450px] rounded-3xl bg-white p-10 text-center shadow-xl">

        <div className="mb-4 text-6xl">✅</div>

        <h1 className="text-3xl font-bold text-green-600">
          Payment Successful
        </h1>

        <p className="mt-4 text-gray-500">
          Thank you for upgrading to TaskMatrix Pro.
        </p>

        <p className="mt-2 text-sm text-gray-400">
          This is a demo payment confirmation page for the project.
        </p>

        <Link
          to="/dashboard"
          className="mt-8 inline-block rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Back to Dashboard
        </Link>

      </div>
    </div>
  );
}

export default Success;