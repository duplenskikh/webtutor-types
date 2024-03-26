type GoodInstanceCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.good_instance_status_types>;
  good_id: XmlElem<number, GoodCatalogDocumentTopElem>;
  reserved_date: XmlElem<Date>;
  paid_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
