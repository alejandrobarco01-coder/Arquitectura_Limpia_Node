import { GetAllCategoriesUseCase } from '../../../application/usecases/get-all-categories.usecase';
import { GetAllProductsUseCase } from '../../../application/usecases/get-all-products.usecase';
import { GetAllUsersUseCase } from '../../../application/usecases/get-all-users.usecase';
import { CategoryDatasource } from '../../datasources/category.datasource';
import { ProductDatasource } from '../../datasources/product.datasource';
import { UserDatasource } from '../../datasources/user.datasource';
import { CategoryRepositoryImpl } from '../../repositories/category.repository.impl';
import { ProductRepositoryImpl } from '../../repositories/product.repository.impl';
import { UserRepositoryImpl } from '../../repositories/user.repository.impl';
import { CategoriesController } from '../controllers/categories.controller';
import { ProductsController } from '../controllers/products.controller';
import { UsersController } from '../controllers/users.controller';

/** Composition root: constructs infrastructure adapters and injects them inward. */
export const usersController = new UsersController(
  new GetAllUsersUseCase(new UserRepositoryImpl(new UserDatasource())),
);
export const productsController = new ProductsController(
  new GetAllProductsUseCase(new ProductRepositoryImpl(new ProductDatasource())),
);
export const categoriesController = new CategoriesController(
  new GetAllCategoriesUseCase(new CategoryRepositoryImpl(new CategoryDatasource())),
);
