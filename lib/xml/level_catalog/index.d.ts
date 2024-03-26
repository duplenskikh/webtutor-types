type LevelCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  prev_level_id: XmlElem<number, LevelCatalogDocumentTopElem>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  min_value: XmlElem<number>;
  max_value: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
