import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    nullable: true,
  })
  address: string | null;

  @Column({
    nullable: true,
  })
  hobbies: string | null;

  @Column({
    default: 18,
  })
  age: number;
}
