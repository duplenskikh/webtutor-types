type MaterialLiabilityDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: MaterialLiabilityDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type MaterialLiabilityDocument = XmlDocument & {
  TopElem: MaterialLiabilityDocumentTopElem;
  material_liability: MaterialLiabilityDocumentTopElem;
  DocDesc(): string;
};
