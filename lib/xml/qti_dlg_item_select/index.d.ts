interface QtiDlgItemSelectDocumentDlgItemSelect extends MsViewCatalogBase, ViewColumnsBase {
  role_id: XmlElem<number>;
  role_name: XmlElem<string>;
  item_array: XmlElem<unknown>;
}

type QtiDlgItemSelectDocumentTopElem = XmlTopElem & {
  Doc: QtiDlgItemSelectDocument;

};

type QtiDlgItemSelectDocument = XmlDocument & {
  TopElem: QtiDlgItemSelectDocumentTopElem;
  qti_dlg_item_select: QtiDlgItemSelectDocumentTopElem;
  dlg_item_select: XmlElem<QtiDlgItemSelectDocumentDlgItemSelect>;
  OnInit(): void;
};
