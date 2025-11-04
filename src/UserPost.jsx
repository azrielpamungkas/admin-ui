import PostCard from "./PostCard";
import { postData } from "./postsData";

function UserPost() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-6">
                <h1 className="text-3xl font-bold text-center mb-6 text-red-700">
                    Post Cards
                </h1>
                <div className="grid grid-cols-5 gap-6  mx-auto">
                    {postData.map((post, index) => (
                        <PostCard key={index} {...post} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default UserPost;