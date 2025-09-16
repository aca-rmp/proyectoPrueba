using { proyectoPruebaSrv } from '../srv/service.cds';

annotate proyectoPruebaSrv.Publishers with @UI.HeaderInfo: { TypeName: 'Publisher', TypeNamePlural: 'Publishers', Title: { Value: name } };
annotate proyectoPruebaSrv.Publishers with {
  ID @UI.Hidden @Common.Text: { $value: name, ![@UI.TextArrangement]: #TextOnly }
};
annotate proyectoPruebaSrv.Publishers with @UI.Identification: [{ Value: name }];
annotate proyectoPruebaSrv.Publishers with {
  name @title: 'Name';
  address @title: 'Address';
  phoneNumber @title: 'Phone Number';
  email @title: 'Email';
  establishedYear @title: 'Established Year'
};

annotate proyectoPruebaSrv.Publishers with @UI.LineItem: [
 { $Type: 'UI.DataField', Value: name },
 { $Type: 'UI.DataField', Value: address },
 { $Type: 'UI.DataField', Value: phoneNumber },
 { $Type: 'UI.DataField', Value: email },
 { $Type: 'UI.DataField', Value: establishedYear }
];

annotate proyectoPruebaSrv.Publishers with @UI.FieldGroup #Main: {
  $Type: 'UI.FieldGroupType', Data: [
 { $Type: 'UI.DataField', Value: name },
 { $Type: 'UI.DataField', Value: address },
 { $Type: 'UI.DataField', Value: phoneNumber },
 { $Type: 'UI.DataField', Value: email },
 { $Type: 'UI.DataField', Value: establishedYear }
  ]
};

annotate proyectoPruebaSrv.Publishers with @UI.Facets: [
  { $Type: 'UI.ReferenceFacet', ID: 'Main', Label: 'General Information', Target: '@UI.FieldGroup#Main' }
];

annotate proyectoPruebaSrv.Publishers with @UI.SelectionFields: [
  name
];

