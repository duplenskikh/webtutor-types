type GoodCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  good_type_id: XmlElem<number | null, GoodTypeCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  state_id: XmlElem<string, typeof common.good_states>;
  is_cant_chose: XmlElem<boolean | null>;
  cost_desc: XmlElem<string | null>;
  bonus_shop_cost: XmlElem<number | null>;
  role_id: XmlMultiElemObject<number | null>;
  delivery_type: XmlElem<string, typeof common.delivery_types>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
