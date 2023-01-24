type ContactTypeCatalogDocumentTopElem = XmlTopElem & { Doc: ContactTypeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ContactTypeCatalogDocument = XmlDocument & { TopElem: ContactTypeCatalogDocumentTopElem; };
