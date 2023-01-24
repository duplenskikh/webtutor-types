type RepositoriumCatalogDocumentTopElem = XmlTopElem & { Doc: RepositoriumCatalogDocument } & 
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  authors_count: XmlElem<number>;
  parent_object_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type RepositoriumCatalogDocument = XmlDocument & { TopElem: RepositoriumCatalogDocumentTopElem; };
