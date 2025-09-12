namespace Proyectoprueba;
 
entity Products {
    key ID          : UUID;
    name        : String(100);
    description : String;
    stock       : Integer;
}
