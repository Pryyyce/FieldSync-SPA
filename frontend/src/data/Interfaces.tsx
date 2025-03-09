export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface Geo {
    lat: string;
    lng: string;
}

export default interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    geo: Geo;
    phone: string;
    website: string;
    company: Company;
    
}