# ExpressJS with TypeORM (Active Record)

migrations:

```
npm run build
typeorm migration:generate src/db/migrations/NewMigration -d dist/db/data-source.js

npm run build
typeorm migration:run -d dist/db/data-source.js
```
