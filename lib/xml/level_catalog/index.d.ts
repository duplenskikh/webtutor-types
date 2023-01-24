type LevelCatalogDocumentTopElem = XmlTopElem & { Doc: LevelCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  prev_level_id: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  min_value: XmlElem<number>;
  max_value: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type LevelCatalogDocument = XmlDocument & { TopElem: LevelCatalogDocumentTopElem; };
