type DlgSelectUiLngDocumentTopElem = XmlTopElem & {
  Doc: DlgSelectUiLngDocument;
  ui_lng_id: XmlElem<string>;
};

type DlgSelectUiLngDocument = XmlDocument & {
  TopElem: DlgSelectUiLngDocumentTopElem;
  dlg_select_ui_lng: DlgSelectUiLngDocumentTopElem;
};
