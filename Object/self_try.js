const student = {
  name: "Sami",
  marks: {
    math: 90,
    english: 80
  },
  hobbies: ["Football", "Gaming", "Reading"]
};

const {
  marks: { math },
  hobbies: [, secondHobby]
} = student;

console.log(math);
console.log(secondHobby);

