type BasketCatalogDocumentTopElem = XmlTopElem & { Doc: BasketCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  currency_type_id: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type BasketCatalogDocument = XmlDocument & { TopElem: BasketCatalogDocumentTopElem; };
