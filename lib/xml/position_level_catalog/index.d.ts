type PositionLevelCatalogDocumentTopElem = XmlTopElem & { Doc: PositionLevelCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PositionLevelCatalogDocument = XmlDocument & { TopElem: PositionLevelCatalogDocumentTopElem; };
