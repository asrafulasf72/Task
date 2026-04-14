const isAdmin= true

const user = {
    name: "Asraful",
    ...(isAdmin && {role: "Admin"})
}

console.log(user)