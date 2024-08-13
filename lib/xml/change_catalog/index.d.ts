type ChangeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  object_id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_name: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
