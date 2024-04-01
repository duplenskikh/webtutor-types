type DlgSelectItemsConvertOptionDocumentTopElem = XmlTopElem & {
  Doc: DlgSelectItemsConvertOptionDocument;
  catalog_name: XmlElem<string>;
  delete_canceled: XmlElem<boolean>;
  score_canceled: XmlElem<boolean>;
  convert_changed: XmlElem<boolean>;
  score_changed: XmlElem<boolean>;
};

type DlgSelectItemsConvertOptionDocument = XmlDocument & {
  TopElem: DlgSelectItemsConvertOptionDocumentTopElem;
  dlg_select_items_convert_option: DlgSelectItemsConvertOptionDocumentTopElem;
};
