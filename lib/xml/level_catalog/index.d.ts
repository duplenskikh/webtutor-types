type LevelCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  prev_level_id: XmlElem<number | null, LevelCatalogDocumentTopElem>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  min_value: XmlElem<number | null>;
  max_value: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
