import { Category } from '../../domain/models/category.model';

/** In-memory source for the catalog categories used by this workshop. */
export class CategoryDatasource {
  async getAll(): Promise<Category[]> {
    return [
      { id: 1, name: 'Carnes', description: 'Carnes y proteínas' },
      { id: 2, name: 'Frutas', description: 'Frutas frescas' },
      { id: 3, name: 'Lacteos', description: 'Leches y derivados' },
      { id: 4, name: 'Verduras', description: 'Verduras y hortalizas' },
    ];
  }
}
