using { Proyectoprueba as db } from '../db/schema';
 
  service CatalogService {
    @Capabilities.Insertable : true
    @Capabilities.Updatable : true
    @Capabilities.Deletable : true
    entity Products as projection on db.Products;
  }
