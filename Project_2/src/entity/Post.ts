import { Entity, Column, ManyToOne, Relation } from 'typeorm';

import Model from './Model.js';
import { User } from './User.js';

@Entity('posts')
export class Post extends Model {
  @Column()
  title: string;

  @Column()
  body: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: Relation<User>;
}
