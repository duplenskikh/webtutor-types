type BossTypeCatalogDocumentTopElem = XmlTopElem & { Doc: BossTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  operations: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  object_type: XmlMultiElem<string>;
  operation_id: XmlMultiElem<string>;
}

type BossTypeCatalogDocument = XmlDocument & { TopElem: BossTypeCatalogDocumentTopElem; };
