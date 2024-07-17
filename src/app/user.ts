export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    website: string,
    phone: string,
    address: {
        city:string,
        street:string,
        zipcode:string,
    },
    company: {
        name: string,
        catchPhrase: string,
        bs:string
    }
}
