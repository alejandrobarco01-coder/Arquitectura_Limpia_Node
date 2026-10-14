import { Category } from '../../domain/models/category.model';
import { CategoryRepository } from '../../domain/repositories/category.repository';
import { CategoryDatasource } from '../datasources/category.datasource';

/** Adapts category datasource data to the domain contract. */
export class CategoryRepositoryImpl extends CategoryRepository {
  constructor(private readonly datasource: CategoryDatasource) {
    super();
  }

  getAll(): Promise<Category[]> {
    return this.datasource.getAll();
  }
}
