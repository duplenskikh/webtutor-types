type ArticleCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  weight: XmlElem<number>;
  parent_object_id: XmlElem<number, ArticleCatalogDocumentTopElem>;
  book_id: XmlElem<number, BookCatalogDocumentTopElem>;
  library_material_id: XmlElem<number, LibraryMaterialCatalogDocumentTopElem>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
