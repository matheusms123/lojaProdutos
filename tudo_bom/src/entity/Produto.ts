import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Produtos")

class Produtos {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    preco: number;

    @Column()
    acabou: boolean;
}

export default Produtos