type FileSourceCatalogDocumentTopElem = XmlTopElem & { Doc: FileSourceCatalogDocument } & 
AccessDocBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  category: XmlElem<string>;
  search_available: XmlElem<boolean>;
  selection_available: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type FileSourceCatalogDocument = XmlDocument & { TopElem: FileSourceCatalogDocumentTopElem; };
