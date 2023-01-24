type OrderCatalogDocumentTopElem = XmlTopElem & { Doc: OrderCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  sum: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  formed_date: XmlElem<Date>;
  paid_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type OrderCatalogDocument = XmlDocument & { TopElem: OrderCatalogDocumentTopElem; };
