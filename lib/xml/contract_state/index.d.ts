type ContractStateDocumentTopElem = XmlTopElem & {
  Doc: ContractStateDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ContractStateDocument = XmlDocument & {
  TopElem: ContractStateDocumentTopElem;
  contract_state: ContractStateDocumentTopElem;
  OnInit(): unknown;
  DocDesc(): unknown;
};
