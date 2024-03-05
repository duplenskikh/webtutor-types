type OrderTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  number: XmlElem<string>;
  prefix: XmlElem<string>;
  suffix: XmlElem<string>;
  signing_person_fullname: XmlElem<string>;
  responsible_person_fullname: XmlElem<string>;
  performer_person_fullname: XmlElem<string>;
  default_flag: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
