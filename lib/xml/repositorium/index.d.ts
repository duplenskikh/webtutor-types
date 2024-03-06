interface RepositoriumDocumentAuthor extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

type RepositoriumDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: RepositoriumDocument;
  parent_object_id: XmlElem<number, RepositoriumCatalogDocumentTopElem>;
  authors: XmlMultiElem<RepositoriumDocumentAuthor>;
  access: XmlElem<AccessDocBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type RepositoriumDocument = XmlDocument & {
  TopElem: RepositoriumDocumentTopElem;
  repositorium: RepositoriumDocumentTopElem;
  DocDesc(): unknown;
};
