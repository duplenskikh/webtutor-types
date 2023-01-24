type WebDesignCatalogDocumentTopElem = XmlTopElem & { Doc: WebDesignCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type WebDesignCatalogDocument = XmlDocument & { TopElem: WebDesignCatalogDocumentTopElem; };
