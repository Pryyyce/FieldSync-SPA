import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import UserInterface from '../interfaces';
import { Address, Geo, Company } from './EmbeddableEntities';

//the main object stored in the database, id is primary key
@Entity("usersDatabase")
export class UserEntity implements UserInterface {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    username: string;

    @Column({ nullable: true })
    email: string;

    @Column(type => Address )
    address: Address;

    @Column(type => Geo)
    geo: Geo;

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    website: string;

    @Column(type => Company)
    company: Company;
}