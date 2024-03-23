type MaterialLiabilityDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: MaterialLiabilityDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type MaterialLiabilityDocument = XmlDocument & {
  TopElem: MaterialLiabilityDocumentTopElem;
  material_liability: MaterialLiabilityDocumentTopElem;
  DocDesc(): string;
};
