type ViewEduDocumentsDocumentTopElem = XmlTopElem & {
  Doc: ViewEduDocumentsDocument;
  filter: XmlElem<AuFtFilter>;
};

type ViewEduDocumentsDocument = XmlDocument & {
  TopElem: ViewEduDocumentsDocumentTopElem;
  view_edu_documents: ViewEduDocumentsDocumentTopElem;
};
