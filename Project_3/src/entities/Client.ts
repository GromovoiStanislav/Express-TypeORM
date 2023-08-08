import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  Relation,
} from 'typeorm';
import { Banker } from './Banker.js';
import { Transaction } from './Transaction.js';
import { Person } from './Person.js';

@Entity('client')
export class Client extends Person {
  @Column({
    type: 'numeric',
  })
  balance: number;

  @Column({
    name: 'active',
    default: true,
  })
  is_active: boolean;

  @Column({
    type: 'simple-json',
    nullable: true,
  })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @Column({ type: 'simple-array', default: [] })
  family_members: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany((type) => Banker, {
    cascade: true,
  })
  bankers: Relation<Banker[]>;

  @OneToMany(() => Transaction, (transaction) => transaction.client)
  transactions: Relation<Promise<Transaction[]>>;
}
