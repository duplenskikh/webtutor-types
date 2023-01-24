type ContractCatalogDocumentTopElem = XmlTopElem & { Doc: ContractCatalogDocument } & 
CostCurrencyBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  date: XmlElem<Date>;
  number: XmlElem<string>;
  contract_type_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  education_org_id: XmlElem<number>;
  files_count: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ContractCatalogDocument = XmlDocument & { TopElem: ContractCatalogDocumentTopElem; };
