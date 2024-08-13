type GoodInstanceCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string, typeof common.good_instance_status_types>;
  good_id: XmlElem<number | null, GoodCatalogDocumentTopElem>;
  reserved_date: XmlElem<Date | null>;
  paid_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
