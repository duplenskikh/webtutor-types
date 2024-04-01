type DlgNewObjectDocumentTopElem = XmlTopElem & {
  Doc: DlgNewObjectDocument;
  title: XmlElem<string>;
  desc: XmlElem<string>;
  object_name: XmlElem<string>;
};

type DlgNewObjectDocument = XmlDocument & {
  TopElem: DlgNewObjectDocumentTopElem;
  dlg_new_object: DlgNewObjectDocumentTopElem;
};
