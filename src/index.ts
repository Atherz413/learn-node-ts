const add = (a: number, b: number): number =>{
    return a + b;
};

type User = {
    id: number;
    name: string;
    role: "admin" | "sales";
};

const user: User = {
    id: 1,
    name: "Oam",
    role: "admin",
};

console.log(add(3, 7));
console.log(user.name);
console.log(user.role);