type DlgEditTextDocumentTopElem = XmlTopElem & {
  Doc: DlgEditTextDocument;
  url: XmlElem<string>;
  desc: XmlElem<string>;
  title: XmlElem<string>;
  is_rich: XmlElem<boolean>;
  height: XmlElem<string>;
  width: XmlElem<string>;
};

type DlgEditTextDocument = XmlDocument & {
  TopElem: DlgEditTextDocumentTopElem;
  dlg_edit_text: DlgEditTextDocumentTopElem;
};
