import { useState } from "react";

function PostCard({ id, userId, title, body }) {
    const [clicked, setClicked] = useState(null);
    return (
        <div className=" flex flex-col gap-2 text-center justify-between  items-center bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow hover:border-1 hover:scale-105 hover:bg-pink-50">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</h2>
            <p className="text-gray-600">
                {body}
            </p>
            <button onClick={() => setClicked(true)} className={`${clicked ? "bg-special-red2" : "bg-gray-500"} text-white p-2 rounded-md w-full hover:opacity-60 transition-opacity mt-4`}>
                {clicked ? "Tombol sudah diklik" : "Silahkan klik"}
            </button>
        </div>
    );
}
export default PostCard;