type ContractTypeCatalogDocumentTopElem = XmlTopElem & { Doc: ContractTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  current_number: XmlElem<string>;
  prefix: XmlElem<string>;
  suffix: XmlElem<string>;
  default_flag: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ContractTypeCatalogDocument = XmlDocument & { TopElem: ContractTypeCatalogDocumentTopElem; };
