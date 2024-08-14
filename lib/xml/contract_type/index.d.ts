type ContractTypeDocumentTopElem = XmlTopElem & {
  Doc: ContractTypeDocument;
  code: XmlElem<string | null>;
  current_number: XmlElem<number | null>;
  name: XmlElem<string | null>;
  prefix: XmlElem<string | null>;
  suffix: XmlElem<string | null>;
  default_flag: XmlElem<boolean | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ContractTypeDocument = XmlDocument & {
  TopElem: ContractTypeDocumentTopElem;
  contract_type: ContractTypeDocumentTopElem;
  DocDesc(): string;
};
