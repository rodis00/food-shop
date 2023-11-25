export class Food {
  id!: number; // ! - required
  name!: string;
  price!: number;
  tags?: string[]; // ? - optional
  favorite: boolean = false;
  stars: number = 0;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
}
