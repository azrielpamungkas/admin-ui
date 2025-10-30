export const users = [
    {
        name: "April",
        email: "april@gmail.com",
        street: "Jl. Indraprasta",
        city: "Semarang",
        age: 25,
    },
    {
        name: "Yani",
        email: "yani@gmail.com",
        street: "Jl. Imam Bonjol",
        city: "Ungaran",
    },
    {
        name: "Safitri",
        email: "safitri@gmail.com",
        street: "Jl. Pemuda",
        city: "Kendal",
    },
];
const city = "Jakarta";
const street = "Jl. Merdeka";

export const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) =>
            users.map((user) => ({
                name: user.name,
                email: user.email,
                city,
                street,
            }))
        )
        .catch((error) => {
            console.error("Error fetching users:", error);
            throw error;
        });
};