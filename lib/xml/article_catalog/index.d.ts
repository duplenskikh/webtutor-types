type ArticleCatalogDocumentTopElem = XmlTopElem & { Doc: ArticleCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  weight: XmlElem<number>;
  parent_object_id: XmlElem<number>;
  book_id: XmlElem<number>;
  library_material_id: XmlElem<number>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ArticleCatalogDocument = XmlDocument & { TopElem: ArticleCatalogDocumentTopElem; };
