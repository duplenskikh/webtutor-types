type DlgNewPersonDocumentTopElem = XmlTopElem &
PersonNameBase & {
  Doc: DlgNewPersonDocument;
  title: XmlElem<string>;
};

type DlgNewPersonDocument = XmlDocument & {
  TopElem: DlgNewPersonDocumentTopElem;
  dlg_new_person: DlgNewPersonDocumentTopElem;
};
