type BenefitDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: BenefitDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.benefit_statuses>;
  weight: XmlElem<number | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type BenefitDocument = XmlDocument & {
  TopElem: BenefitDocumentTopElem;
  benefit: BenefitDocumentTopElem;
  DocDesc(): string;
};
