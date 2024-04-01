type DlgEditPpmCellDocumentTopElem = XmlTopElem & {
  Doc: DlgEditPpmCellDocument;
  value: XmlElem<string>;
  pict_url: XmlElem<string>;
  is_base: XmlElem<boolean>;
  comment: XmlElem<string>;
  cell_color: XmlElem<string>;
};

type DlgEditPpmCellDocument = XmlDocument & {
  TopElem: DlgEditPpmCellDocumentTopElem;
  dlg_edit_ppm_cell: DlgEditPpmCellDocumentTopElem;
};
