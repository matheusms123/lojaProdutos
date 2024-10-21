import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
class User {
    
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    adim: boolean

}

export default User