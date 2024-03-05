type OrderCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.order_status_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  sum: XmlElem<number>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  formed_date: XmlElem<Date>;
  paid_date: XmlElem<Date>;
  issue_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
