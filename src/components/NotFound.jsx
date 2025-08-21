import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <img
        src="https://support.heberjahiz.com/hc/article_attachments/21013076295570"
        alt="Not Found"
        className="w-64 md:w-80 lg:w-96"
      />

      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-800">
        Oops! Product not found
      </h2>
      <p className="mt-2 text-gray-500 max-w-md">
        The product you’re looking for doesn’t exist or has been removed.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-brand text-white px-6 py-2 rounded-lg shadow hover:bg-brand/80 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
