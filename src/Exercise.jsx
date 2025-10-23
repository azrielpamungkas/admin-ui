import React from "react";

function Exercise() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-6">
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
                    User Cards
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <UserCard name="April" email="april@example.com" address={{ street: "123 Main St", city: "Anytown" }} />
                    <UserCard name="Yani" email="yani@example.com" address={{ street: "456 Elm St", city: "Othertown" }} />
                    <UserCard name="Safitri" email="safitri@example.com" address={{ street: "789 Oak St", city: "Sometown" }} />
                </div>
            </div>
        </>
    );
}

export default Exercise;