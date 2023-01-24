type OutstaffAdditionalWorkCatalogDocumentTopElem = XmlTopElem & { Doc: OutstaffAdditionalWorkCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type OutstaffAdditionalWorkCatalogDocument = XmlDocument & { TopElem: OutstaffAdditionalWorkCatalogDocumentTopElem; };
