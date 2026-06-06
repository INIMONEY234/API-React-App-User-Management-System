export interface Address {
    street: string;
    city: string;
} 

export interface User {
    id: number;
    name: string;
    email: string;
    address: Address; 
}

export interface UserFormData {
    id: number;
    name: string;
    email: string;
    street: string;
    city: string;
}