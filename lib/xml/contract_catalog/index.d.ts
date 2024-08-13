type ContractCatalogDocumentTopElem = XmlTopElem &
CostCurrencyBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  number: XmlElem<string | null>;
  contract_type_id: XmlElem<number | null, ContractTypeCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  files_count: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
