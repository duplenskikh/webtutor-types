type ProjectTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: ProjectTypeDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type ProjectTypeDocument = XmlDocument & {
  TopElem: ProjectTypeDocumentTopElem;
  project_type: ProjectTypeDocumentTopElem;
  DocDesc(): string;
};
