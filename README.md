# Clean Architecture API - Node.js

Backend del Taller 6. Expone módulos de usuarios, productos y categorías mediante Express y mantiene las reglas de aplicación detrás de contratos de repositorio.

## Requisitos

- Node.js compatible con TypeScript 5.9.
- npm.

## Instalación y ejecución

```bash
npm install
npm start
```

El servidor inicia en `http://localhost:3000`. Para revisar la compilación TypeScript:

```bash
npm run build
```

## API y documentación

Swagger UI: `http://localhost:3000/api/docs`

| Método | Endpoint | Respuesta |
|---|---|---|
| GET | `/api/users/{countUsers}` | Usuarios generados; `countUsers` entre 1 y 1000 |
| GET | `/api/products/{countProducts}` | Productos generados; `countProducts` entre 1 y 1000 |
| GET | `/api/categories` | Categorías del catálogo |

Las listas de usuarios y productos se generan con Faker. Categorías usa el catálogo fijo `Carnes`, `Frutas`, `Lacteos` y `Verduras`. Los tres endpoints responden JSON y usan HTTP 200 cuando la consulta es correcta; las cantidades inválidas responden HTTP 400.

## Capas

```text
src/
├── domain/                 # Modelos y contratos de repositorio
├── application/usecases/   # Acciones de aplicación
└── infrastructure/
    ├── datasources/        # Fuentes de datos
    ├── repositories/       # Adaptadores de contratos
    └── web/
        ├── config/         # Variables y composición de dependencias
        ├── controllers/    # Adaptadores HTTP
        ├── routes/         # Rutas Express y anotaciones OpenAPI
        └── server.ts
```

`infrastructure/web/config/dependencies.ts` es la raíz de composición. Allí se construyen los datasources, repositorios, casos de uso y controladores; las rutas reciben los controladores ya configurados.

## Contrato de categoría

```json
{ "id": 1, "name": "Carnes", "description": "Carnes y proteínas" }
```

El backend Spring Boot debe exponer el mismo contrato en `GET /api/categories` para que Angular pueda alternar proveedores sin cambiar los casos de uso ni las vistas.
