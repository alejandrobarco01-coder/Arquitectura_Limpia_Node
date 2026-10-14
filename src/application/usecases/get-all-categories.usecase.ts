import { Category } from '../../domain/models/category.model';
import { CategoryRepository } from '../../domain/repositories/category.repository';

/** Application action that retrieves all catalog categories. */
export class GetAllCategoriesUseCase {
  constructor(private readonly repository: CategoryRepository) {}

  execute(): Promise<Category[]> {
    return this.repository.getAll();
  }
}
