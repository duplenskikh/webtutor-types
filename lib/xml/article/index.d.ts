type ArticleDocumentTopElem = XmlTopElem &
CatalogListBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
CustomElemsBase & {
  Doc: ArticleDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  parent_object_id: XmlElem<number | null, ArticleCatalogDocumentTopElem>;
  book_id: XmlElem<number | null, BookCatalogDocumentTopElem>;
  library_material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  weight: XmlElem<number | null>;
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ArticleDocument = XmlDocument & {
  TopElem: ArticleDocumentTopElem;
  article: ArticleDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
