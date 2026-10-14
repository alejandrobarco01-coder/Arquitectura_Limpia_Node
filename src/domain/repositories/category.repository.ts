import { Category } from '../models/category.model';

/** Domain contract for retrieving catalog categories. */
export abstract class CategoryRepository {
  abstract getAll(): Promise<Category[]>;
}
