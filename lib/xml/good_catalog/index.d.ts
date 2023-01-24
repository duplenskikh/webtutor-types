type GoodCatalogDocumentTopElem = XmlTopElem & { Doc: GoodCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  good_type_id: XmlElem<number>;
  state_id: XmlElem<string>;
  cost_desc: XmlElem<string>;
  bonus_shop_cost: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type GoodCatalogDocument = XmlDocument & { TopElem: GoodCatalogDocumentTopElem; };
