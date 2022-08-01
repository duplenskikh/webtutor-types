interface RepositoriumDocumentAuthor extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

type RepositoriumDocumentTopElem = XmlTopElem & { Doc: RepositoriumDocument } & 
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  parent_object_id?: XmlElem<number>;
  authors?: XmlMultiElem<RepositoriumDocumentAuthor>;
  access?: XmlElem<AccessDocBase>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type RepositoriumDocument = XmlDocument & { TopElem: RepositoriumDocumentTopElem; };
