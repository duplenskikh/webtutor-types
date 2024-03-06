type ArticleDocumentTopElem = XmlTopElem &
CatalogListBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
CustomElemsBase & {
  Doc: ArticleDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_object_id: XmlElem<number, ArticleCatalogDocumentTopElem>;
  book_id: XmlElem<number, BookCatalogDocumentTopElem>;
  library_material_id: XmlElem<number, LibraryMaterialCatalogDocumentTopElem>;
  weight: XmlElem<number>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
};

type ArticleDocument = XmlDocument & {
  TopElem: ArticleDocumentTopElem;
  article: ArticleDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
