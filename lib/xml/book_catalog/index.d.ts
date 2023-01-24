type BookCatalogDocumentTopElem = XmlTopElem & { Doc: BookCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  library_section_id: XmlElem<number>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
}

type BookCatalogDocument = XmlDocument & { TopElem: BookCatalogDocumentTopElem; };
