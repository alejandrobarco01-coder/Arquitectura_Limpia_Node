import { Router } from 'express';
import { categoriesController } from '../config/dependencies';

export class CategoriesRoutes {
  static get routes(): Router {
    const router = Router();

    /**
     * @openapi
     * /api/categories:
     *   get:
     *     summary: Obtener categorías del catálogo
     *     tags: [Categories]
     *     responses:
     *       200:
     *         description: Lista de categorías disponibles
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Category'
     */
    router.get('/', categoriesController.getAll);
    return router;
  }
}
