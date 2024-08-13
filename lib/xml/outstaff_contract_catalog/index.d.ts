type OutstaffContractCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  status: XmlElem<string, typeof common.order_status_types>;
  type_id: XmlElem<string, typeof common.outstaff_contract_types>;
  number: XmlElem<string | null>;
  contract_type_id: XmlElem<number | null, ContractTypeCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  outstaff_provider_id: XmlElem<number | null, OutstaffProviderCatalogDocumentTopElem>;
  disp_name: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
