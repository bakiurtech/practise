// Type a User with an optional phone, a role union and an address object; write a function that returns a display name and handles missing data.


// role union type
export type Role = "admin" | "client" | "dev";


// object address tyoe
export type Address = {
    street: string,
    city: string
}


// template of the all user
// user type
export type User = {
    id: string,
    name: string,
    phone?: string,
    role: Role,
    address: Address
}