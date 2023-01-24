type MessengerServiceCatalogDocumentTopElem = XmlTopElem & { Doc: MessengerServiceCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type MessengerServiceCatalogDocument = XmlDocument & { TopElem: MessengerServiceCatalogDocumentTopElem; };
