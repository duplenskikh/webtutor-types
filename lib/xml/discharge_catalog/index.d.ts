type DischargeCatalogDocumentTopElem = XmlTopElem & { Doc: DischargeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DischargeCatalogDocument = XmlDocument & { TopElem: DischargeCatalogDocumentTopElem; };
