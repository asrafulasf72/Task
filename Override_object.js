const user1={
    name:"Asraful",
    age:22,
};

const user2={
    age:25,
    city:"Dhaka"
};


const margeUser={
    ...user1,
    ...user2
}

console.log(margeUser)