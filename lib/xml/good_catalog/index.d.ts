type GoodCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  good_type_id: XmlElem<number, GoodTypeCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  state_id: XmlElem<string, typeof common.good_states>;
  is_cant_chose: XmlElem<boolean>;
  cost_desc: XmlElem<string>;
  bonus_shop_cost: XmlElem<number>;
  role_id: XmlMultiElemObject<number>;
  delivery_type: XmlElem<string, typeof common.delivery_types>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
