// 1

interface User {
    id: number;
    name: string;
    age?: number;
    email?: string;
}

const Vasya: User = {
    id: Date.now(),
    name: "Vasya",
    age: 52,
    email: "vasiliy52@gmail.com",
}

const Petya: User = {
    id: Date.now(),
    name: "Petya",
    age: 52,
}

const Ivan: User = {
    id: Date.now(),
    name: "Ivan",
}

// 2

interface Admin extends User {
    role: string;
}

const Admin: Admin = {
    id: Date.now(),
    name: "Admin",
    role: 'Admin',
}

// 3

const greetUser = (user: User): string => {
    if (user.age !== undefined) {
        return `Привет ${user.name}, тебе ${user.age} лет`;
    }
    return `Привет ${user.name}`
}

