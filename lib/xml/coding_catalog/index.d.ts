type CodingCatalogDocumentTopElem = XmlTopElem & { Doc: CodingCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  catalog_name: XmlElem<string>;
  next_index: XmlElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CodingCatalogDocument = XmlDocument & { TopElem: CodingCatalogDocumentTopElem; };
