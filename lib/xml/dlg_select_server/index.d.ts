type DlgSelectServerDocumentTopElem = XmlTopElem &
SelectServerBase & {
  Doc: DlgSelectServerDocument;
};

type DlgSelectServerDocument = XmlDocument & {
  TopElem: DlgSelectServerDocumentTopElem;
  dlg_select_server: DlgSelectServerDocumentTopElem;
  OnInit(): void;
};
