using { Proyectoprueba as db } from '../db/schema';

service CatalogService {

  @odata.draft.enabled
  entity Products as projection on db.Products{
        *,
        action addStock(quantity: Integer) returns Products;
    };

}

annotate CatalogService.Products with @(
  Capabilities.Insertable,
  Capabilities.Updatable,
  Capabilities.Deletable
);