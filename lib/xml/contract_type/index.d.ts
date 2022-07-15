interface ContractTypeView {
  name_start?: XmlElem<string>;
}

interface ContractTypeTopElem extends XmlTopElem<ContractTypeDocument> {
  code?: XmlElem<string>;
  current_number?: XmlElem<number>;
  name?: XmlElem<string>;
  prefix?: XmlElem<string>;
  suffix?: XmlElem<string>;
  default_flag?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<ContractTypeView>;
}

type ContractTypeDocument = XmlDocument<ContractTypeTopElem>;
