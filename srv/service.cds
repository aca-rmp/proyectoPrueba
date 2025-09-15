using { Proyectoprueba as db } from '../db/schema';
 
service CatalogService {
    @odata.draft.enabled
    entity Products as projection on db.Products;
}

// Se extiende la PROYECCIÓN para añadirle la ACCIÓN
extend projection CatalogService.Products with actions {
    action addStock(quantity : Integer) returns CatalogService.Products
}

annotate CatalogService.Products with @(
  Capabilities.Insertable,
  Capabilities.Updatable,
  Capabilities.Deletable
);