type ContractTypeDocumentTopElem = XmlTopElem & {
  Doc: ContractTypeDocument;
  code: XmlElem<string>;
  current_number: XmlElem<number>;
  name: XmlElem<string>;
  prefix: XmlElem<string>;
  suffix: XmlElem<string>;
  default_flag: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ContractTypeDocument = XmlDocument & {
  TopElem: ContractTypeDocumentTopElem;
  contract_type: ContractTypeDocumentTopElem;
  DocDesc(): unknown;
};
