type OutstaffContractCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  date: XmlElem<Date>;
  status: XmlElem<string, typeof common.order_status_types>;
  type_id: XmlElem<string, typeof common.outstaff_contract_types>;
  number: XmlElem<string>;
  contract_type_id: XmlElem<number, ContractTypeCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  outstaff_provider_id: XmlElem<number, OutstaffProviderCatalogDocumentTopElem>;
  disp_name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
