type ContractStateDocumentTopElem = XmlTopElem & {
  Doc: ContractStateDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ContractStateDocument = XmlDocument & {
  TopElem: ContractStateDocumentTopElem;
  contract_state: ContractStateDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
