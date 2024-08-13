type ArticleCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  weight: XmlElem<number | null>;
  parent_object_id: XmlElem<number | null, ArticleCatalogDocumentTopElem>;
  book_id: XmlElem<number | null, BookCatalogDocumentTopElem>;
  library_material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
