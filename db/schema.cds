namespace proyectoPrueba;
using { cuid } from '@sap/cds/common';

@assert.unique: { name: [name] }
entity Publishers : cuid {
  name: String(100) @mandatory;
  address: String(200);
  phoneNumber: String(15);
  email: String(100);
  establishedYear: Integer;
}

