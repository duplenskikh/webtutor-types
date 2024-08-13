interface RepositoriumDocumentAuthor extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type RepositoriumDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: RepositoriumDocument;
  parent_object_id: XmlElem<number | null, RepositoriumCatalogDocumentTopElem>;
  authors: XmlMultiElem<RepositoriumDocumentAuthor | null>;
  access: XmlElem<AccessDocBase | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RepositoriumDocument = XmlDocument & {
  TopElem: RepositoriumDocumentTopElem;
  repositorium: RepositoriumDocumentTopElem;
  DocDesc(): string;
};
