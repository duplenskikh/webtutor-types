type ViewEduMapDocumentsDocumentTopElem = XmlTopElem & {
  Doc: ViewEduMapDocumentsDocument;
  filter: XmlElem<AuFtFilter>;
};

type ViewEduMapDocumentsDocument = XmlDocument & {
  TopElem: ViewEduMapDocumentsDocumentTopElem;
  view_edu_map_documents: ViewEduMapDocumentsDocumentTopElem;
};
