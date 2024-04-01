type ViewDiagDocumentTopElem = XmlTopElem & {
  Doc: ViewDiagDocument;
};

type ViewDiagDocument = XmlDocument & {
  TopElem: ViewDiagDocumentTopElem;
  view_diag: ViewDiagDocumentTopElem;
  OnInit(): void;
};
