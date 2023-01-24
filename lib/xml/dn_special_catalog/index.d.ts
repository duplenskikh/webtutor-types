type DnSpecialCatalogDocumentTopElem = XmlTopElem & { Doc: DnSpecialCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  facult_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnSpecialCatalogDocument = XmlDocument & { TopElem: DnSpecialCatalogDocumentTopElem; };
