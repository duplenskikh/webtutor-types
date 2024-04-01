type DlgXqueryDocumentTopElem = XmlTopElem &
FieldNamesBase & {
  Doc: DlgXqueryDocument;
  fields_text_temp(): unknown;
  array: XmlElem<unknown>;
  objects_num(): unknown;
};

type DlgXqueryDocument = XmlDocument & {
  TopElem: DlgXqueryDocumentTopElem;
  dlg_xquery: DlgXqueryDocumentTopElem;
};
