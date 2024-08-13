type OrderTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  number: XmlElem<string | null>;
  prefix: XmlElem<string | null>;
  suffix: XmlElem<string | null>;
  signing_person_fullname: XmlElem<string | null>;
  responsible_person_fullname: XmlElem<string | null>;
  performer_person_fullname: XmlElem<string | null>;
  default_flag: XmlElem<boolean | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
