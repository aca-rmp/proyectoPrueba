using { proyectoPrueba as my } from '../db/schema.cds';

@path: '/service/proyectoPrueba'
@requires: 'authenticated-user'
service proyectoPruebaSrv {
  @odata.draft.enabled
  entity Publishers as projection on my.Publishers;
}