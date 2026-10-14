import { Router } from "express";
import { usersController } from '../config/dependencies';

export class UsersRoutes {
  static get routes(): Router {
    const router = Router();

    /**
     * @openapi
     * /api/users/{countUsers}:
     *   get:
     *     summary: Obtener listado de usuarios
     *     description: Retorna una lista de usuarios generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Users
     *     parameters:
     *       - in: path
     *         name: countUsers
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           maximum: 1000
     *           example: 10
     *         description: Cantidad de usuarios a generar
     *     responses:
     *       200:
     *         description: Lista de usuarios generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/User'
     *       400:
     *         description: countUsers no es un entero entre 1 y 1000
     */
    router.get("/:countUsers", usersController.getAllUsers);

    return router;
  }
}
