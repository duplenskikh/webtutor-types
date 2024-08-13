type DimensionDocumentTopElem = XmlTopElem & {
  Doc: DimensionDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DimensionDocument = XmlDocument & {
  TopElem: DimensionDocumentTopElem;
  dimension: DimensionDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
