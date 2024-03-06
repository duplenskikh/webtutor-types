type ProjectTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: ProjectTypeDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type ProjectTypeDocument = XmlDocument & {
  TopElem: ProjectTypeDocumentTopElem;
  project_type: ProjectTypeDocumentTopElem;
  DocDesc(): unknown;
};
