type VerbCatalogDocumentTopElem = XmlTopElem & { Doc: VerbCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  processed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type VerbCatalogDocument = XmlDocument & { TopElem: VerbCatalogDocumentTopElem; };
