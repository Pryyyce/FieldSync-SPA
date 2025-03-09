import { Column } from 'typeorm';
import { Address as AddressInterface, 
    Company as CompanyInterface,
    Geo as GeoInterface } from '../interfaces';

// Entities without primary keys to be embedded in other entities
export class Address implements AddressInterface {
    @Column({ nullable: true })
    street: string=Address.prototype.street;

    @Column({ nullable: true })
    suite: string;

    @Column({ nullable: true })
    city: string;

    @Column({ nullable: true })
    zipcode: string;
}

export class Company implements CompanyInterface {
    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    catchPhrase: string;

    @Column({ nullable: true })
    bs: string;
}

export class Geo implements GeoInterface {
    @Column({ nullable: true })
    lat: string;

    @Column({ nullable: true })
    lng: string;
}
