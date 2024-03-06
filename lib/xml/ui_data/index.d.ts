type UiDataDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  Doc: UiDataDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): unknown;
  create_date: XmlElem<Date>;
  data: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type UiDataDocument = XmlDocument & {
  TopElem: UiDataDocumentTopElem;
  ui_data: UiDataDocumentTopElem;
  DocDesc(): unknown;
};
