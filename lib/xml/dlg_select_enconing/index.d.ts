type DlgSelectEnconingDocumentTopElem = XmlTopElem & {
  Doc: DlgSelectEnconingDocument;
  encoding_type: XmlElem<string>;
};

type DlgSelectEnconingDocument = XmlDocument & {
  TopElem: DlgSelectEnconingDocumentTopElem;
  dlg_select_enconing: DlgSelectEnconingDocumentTopElem;
};
