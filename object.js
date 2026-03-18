const users=[
    {id:1, name:"saimon"},
    {id:2, name:"Mashuk"}
]

const obj={};

for(let u of users){
    obj[u.id]=u
}

console.log(obj)   