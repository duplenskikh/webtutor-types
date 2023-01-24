type LicenseCatalogDocumentTopElem = XmlTopElem & { Doc: LicenseCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string>;
  object_name: XmlElem<string>;
  computer_name: XmlElem<string>;
  domain_name: XmlElem<string>;
  domain_short_name: XmlElem<string>;
  user_name: XmlElem<string>;
  is_temporary: XmlElem<boolean>;
  status_id: XmlElem<string>;
  sale_contract_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  maintaince_date: XmlElem<Date>;
  users_num: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type LicenseCatalogDocument = XmlDocument & { TopElem: LicenseCatalogDocumentTopElem; };
