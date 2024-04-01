type ViewTrashDocumentTopElem = XmlTopElem & {
  Doc: ViewTrashDocument;
  filter: XmlElem<AuFtFilter>;
};

type ViewTrashDocument = XmlDocument & {
  TopElem: ViewTrashDocumentTopElem;
  view_trash: ViewTrashDocumentTopElem;
};
