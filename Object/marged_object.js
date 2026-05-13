const arr = [
  { a: 1 },
  { b: 2 },
  { c: 3 }
];

const marged= arr.reduce((acc,curr)=>({
    ...acc,
    ...arr
}),{})

console.log(marged)