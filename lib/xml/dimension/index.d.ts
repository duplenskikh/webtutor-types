type DimensionDocumentTopElem = XmlTopElem & {
  Doc: DimensionDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DimensionDocument = XmlDocument & {
  TopElem: DimensionDocumentTopElem;
  dimension: DimensionDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
