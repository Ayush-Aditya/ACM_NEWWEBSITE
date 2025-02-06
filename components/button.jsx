import Link from "next/link";

export default function Button({ link, className = "", children }) {
  return (
    <div
      className={`flex items-center cursor-pointer inset-0 min-w-fit min-h-12 py-2 transition duration-500 ease-in-out
         px-6 bg-transparent text-white hover:bg-white hover:text-black ${className}`}
    >
      <Link className="min-w-24" href={link || "#"}>
        {children}
      </Link>
    </div>
  );
}
