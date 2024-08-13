type ContractTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  current_number: XmlElem<string | null>;
  prefix: XmlElem<string | null>;
  suffix: XmlElem<string | null>;
  default_flag: XmlElem<boolean | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
