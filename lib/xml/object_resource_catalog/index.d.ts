type ObjectResourceCatalogDocumentTopElem = XmlTopElem & { Doc: ObjectResourceCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  state_id: XmlElem<string>;
  place_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ObjectResourceCatalogDocument = XmlDocument & { TopElem: ObjectResourceCatalogDocumentTopElem; };
