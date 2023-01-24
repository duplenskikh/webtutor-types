type ChangeCatalogDocumentTopElem = XmlTopElem & { Doc: ChangeCatalogDocument } & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string>;
  object_name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ChangeCatalogDocument = XmlDocument & { TopElem: ChangeCatalogDocumentTopElem; };
