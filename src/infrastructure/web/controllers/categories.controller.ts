import { Request, Response } from 'express';
import { GetAllCategoriesUseCase } from '../../../application/usecases/get-all-categories.usecase';

/** HTTP adapter for the categories use case. */
export class CategoriesController {
  constructor(private readonly getAllCategories: GetAllCategoriesUseCase) {}

  getAll = async (_request: Request, response: Response): Promise<void> => {
    try {
      response.status(200).json(await this.getAllCategories.execute());
    } catch {
      response.status(500).json({ message: 'No fue posible obtener las categorías.' });
    }
  };
}
