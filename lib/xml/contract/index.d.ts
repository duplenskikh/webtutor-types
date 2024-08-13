type ContractDocumentTopElem = XmlTopElem &
CostCurrencyBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ContractDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  number: XmlElem<string | null>;
  contract_type_id: XmlElem<number | null, ContractTypeCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  legal_entity_name: XmlElem<string | null>;
  legal_entity_code: XmlElem<string | null>;
  files_count(): number;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ContractDocument = XmlDocument & {
  TopElem: ContractDocumentTopElem;
  contract: ContractDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
