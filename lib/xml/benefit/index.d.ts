type BenefitDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: BenefitDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.benefit_statuses>;
  weight: XmlElem<number>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type BenefitDocument = XmlDocument & {
  TopElem: BenefitDocumentTopElem;
  benefit: BenefitDocumentTopElem;
  DocDesc(): string;
};
