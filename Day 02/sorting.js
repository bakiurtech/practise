// Given an array of 10 users, return the names of active users sorted by age, in one chain.

const users = [
  { id: 1,  name: "Aarav Sharma",   age: 28, active: true  },
  { id: 2,  name: "Bella Rahman",   age: 34, active: false },
  { id: 3,  name: "Carlos Mendes",  age: 22, active: true  },
  { id: 4,  name: "Dina Karim",     age: 41, active: true  },
  { id: 5,  name: "Ethan Brooks",   age: 19, active: false },
  { id: 6,  name: "Farhan Ahmed",   age: 31, active: true  },
  { id: 7,  name: "Grace Liu",      age: 26, active: true  },
  { id: 8,  name: "Hasan Mahmud",   age: 37, active: false },
  { id: 9,  name: "Isha Patel",     age: 24, active: true  },
  { id: 10, name: "Jamal Hossain",  age: 45, active: true  },
  { id: 11, name: "Kiara Singh",    age: 29, active: false },
  { id: 12, name: "Liam O'Connor",  age: 33, active: true  },
  { id: 13, name: "Maya Chowdhury", age: 21, active: true  },
  { id: 14, name: "Noor Alam",      age: 38, active: false },
  { id: 15, name: "Omar Faruk",     age: 27, active: true  },
];


// filter the users who are active 
const filterByStatus = users.filter(user=>user.active);
console.log(filterByStatus);
console.log("\n");


// sorting the filtered array with age
const sortedArr = filterByStatus.sort((a, b) => a.age - b.age);
console.log(sortedArr);
console.log("\n");


// printing only user name sorted by age
const sortedUsers = sortedArr.map(user => user.name);
console.log(sortedUsers);
console.log("\n");