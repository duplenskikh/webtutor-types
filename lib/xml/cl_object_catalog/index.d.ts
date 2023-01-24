type ClObjectCatalogDocumentTopElem = XmlTopElem & { Doc: ClObjectCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  group: XmlElem<string>;
  resource_url: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
}

type ClObjectCatalogDocument = XmlDocument & { TopElem: ClObjectCatalogDocumentTopElem; };
