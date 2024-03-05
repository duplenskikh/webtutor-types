type ChangeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
