// src/models/genre.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'genres' }) // Use object notation with the `name` property
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;

  // Add more properties and relationships as needed
}
