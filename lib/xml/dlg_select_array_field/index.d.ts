type DlgSelectArrayFieldDocumentTopElem = XmlTopElem & {
  Doc: DlgSelectArrayFieldDocument;
  object_id: XmlElem<number>;
  field_id: XmlElem<number>;
  object_valid: XmlElem<boolean>;
  title: XmlElem<string>;
  list_expr: XmlElem<string>;
  disp_elem: XmlElem<string>;
  key_title: XmlElem<string>;
  field_expr: XmlElem<string>;
  field_expr_eval: XmlElem<string>;
  disp_field: XmlElem<string>;
  type_field: XmlElem<string>;
  disp_search: XmlElem<boolean>;
};

type DlgSelectArrayFieldDocument = XmlDocument & {
  TopElem: DlgSelectArrayFieldDocumentTopElem;
  dlg_select_array_field: DlgSelectArrayFieldDocumentTopElem;
};
