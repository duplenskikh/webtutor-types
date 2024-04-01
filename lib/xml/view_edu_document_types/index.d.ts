type ViewEduDocumentTypesDocumentTopElem = XmlTopElem & {
  Doc: ViewEduDocumentTypesDocument;
  filter: XmlElem<AuFtFilter>;
};

type ViewEduDocumentTypesDocument = XmlDocument & {
  TopElem: ViewEduDocumentTypesDocumentTopElem;
  view_edu_document_types: ViewEduDocumentTypesDocumentTopElem;
};
