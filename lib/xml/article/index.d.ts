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
  parent_object_id: XmlElem<number>;
  book_id: XmlElem<number>;
  library_material_id: XmlElem<number>;
  weight: XmlElem<number>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
}

type ArticleDocument = XmlDocument & {
  TopElem: ArticleDocumentTopElem;
};
