type LibrarySectionCatalogDocumentTopElem = XmlTopElem & { Doc: LibrarySectionCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_object_id: XmlElem<number>;
  position: XmlElem<number>;
  link: XmlElem<string>;
  external_id: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type LibrarySectionCatalogDocument = XmlDocument & { TopElem: LibrarySectionCatalogDocumentTopElem; };
