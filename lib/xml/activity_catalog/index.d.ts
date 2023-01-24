type ActivityCatalogDocumentTopElem = XmlTopElem & { Doc: ActivityCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_eval: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ActivityCatalogDocument = XmlDocument & { TopElem: ActivityCatalogDocumentTopElem; };
