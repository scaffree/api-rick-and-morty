import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity()
export class Characters {
    @PrimaryColumn()
    characterId: number

    @Column()
    name: string

    @Column()
    comment: string

    @Column()
    createdBy: string
}