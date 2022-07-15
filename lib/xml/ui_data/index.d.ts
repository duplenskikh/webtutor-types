interface UiDataView {
}

interface UiDataTopElem extends XmlTopElem<UiDataDocument>, ObjectTypeBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  data?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<UiDataView>;
  name?(): any;
}

type UiDataDocument = XmlDocument<UiDataTopElem>;
