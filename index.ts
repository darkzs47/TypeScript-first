// 1

interface User {
    id: number;
    name: string;
    age?: number;
    email?: string;
    status?: Status
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

// 2 and 5

enum UserRole {
    Admin,
    User,
    Guest,
}

interface Admin extends User {
    role: UserRole;
}

const Admin: Admin = {
    id: Date.now(),
    name: "Admin",
    role: UserRole.Admin,
}

// 3

const greetUser = (user: User): string => {
    if (user.age !== undefined) {
        return `Привет ${user.name}, тебе ${user.age} лет`;
    }
    return `Привет ${user.name}`
}

// 6

const UserStatus = {
    Active: "active",
    Inactive: "inactive",
    Pending: "pending",
} as const;

type UserStatusType = typeof UserStatus[keyof typeof UserStatus];

// Доп

type Status = "active" | "inactive" | 0 | 1
let userStatus: Status = 1

const getDescStatus = (status: Status) => {
    switch (status) {
        case "active":
            return `Получен статус active: ${status}`;
        case "inactive":
            return `Получен статус inactive: ${status}`
        case 0:
            return `Получен статус 0: ${status}`
        case 1:
            return `Получен статус 1: ${status}`
        default:
            return `Неизвестный статус`
    }
}

console.log(getDescStatus("active"))
console.log(getDescStatus(userStatus))

// 7 

class Car {
    make: string;
    model: string;
    year: number;
    mileage: number = 0;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    drive(distance: number): void {
        this.mileage += distance;
    }

    getDescription(): string {
        return `Машина: ${this.make}, модель: ${this.model}, год выпуска: ${this.year}, проехала: ${this.mileage} км.`;
    }

}

