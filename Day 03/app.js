// Type a User with an optional phone, a role union and an address object; write a function that returns a display name and handles missing data.
const user1 = {
    id: "a1",
    name: "John Doe",
    role: "admin",
    address: {
        street: '123 highway',
        city: 'Dhaka'
    }
};
const user2 = {
    id: "u1",
    name: "Shelly",
    phone: "012345",
    role: "client",
    address: {
        street: '000 downstreet',
        city: "New York"
    }
};
// no return therefor type void
function showName(user) {
    console.log(user.name);
}
showName(user2);
// if use return then the type should be specified
function showName2(user) {
    return user.name;
}
console.log(showName2(user1));
export {};
