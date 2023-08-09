import { IsEmail, IsEnum, Length } from 'class-validator';
import { Entity, Column, OneToMany, Relation } from 'typeorm';

import Model from './Model.js';
import { Post } from './Post.js';

@Entity('users')
export class User extends Model {
  @Column()
  @Length(1, 255)
  name: string;

  @Column({ unique: true })
  @Length(1, 255)
  @IsEmail()
  email: string;

  @Column({
    type: 'enum',
    enum: ['user', 'admin', 'superadmin'],
    default: 'user',
  })
  @IsEnum(['user', 'admin', 'superadmin', undefined])
  role: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Relation<Post[]>;
}
