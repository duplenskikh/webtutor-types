interface ContractView extends DescBase {
}

interface ContractTopElem extends XmlTopElem<ContractDocument>, CostCurrencyBase, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  date?: XmlElem<Date>;
  number?: XmlElem<string>;
  contract_type_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  education_org_id?: XmlElem<number>;
  legal_entity_name?: XmlElem<string>;
  legal_entity_code?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<ContractView>;
  files_count?(): any;
}

type ContractDocument = XmlDocument<ContractTopElem>;
