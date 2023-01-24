type OutstaffContractCatalogDocumentTopElem = XmlTopElem & { Doc: OutstaffContractCatalogDocument } & 
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  date: XmlElem<Date>;
  status: XmlElem<string>;
  type_id: XmlElem<string>;
  number: XmlElem<string>;
  contract_type_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  outstaff_provider_id: XmlElem<number>;
  disp_name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type OutstaffContractCatalogDocument = XmlDocument & { TopElem: OutstaffContractCatalogDocumentTopElem; };
