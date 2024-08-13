type UiDataDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  Doc: UiDataDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name(): string;
  create_date: XmlElem<Date | null>;
  data: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type UiDataDocument = XmlDocument & {
  TopElem: UiDataDocumentTopElem;
  ui_data: UiDataDocumentTopElem;
  DocDesc(): string;
};
