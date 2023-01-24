type LibraryPlayerCatalogDocumentTopElem = XmlTopElem & { Doc: LibraryPlayerCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  learning_storage_id: XmlElem<number>;
  activity_id: XmlElem<number>;
  cmi5: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
}

type LibraryPlayerCatalogDocument = XmlDocument & { TopElem: LibraryPlayerCatalogDocumentTopElem; };
