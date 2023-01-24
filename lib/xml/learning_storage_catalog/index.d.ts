type LearningStorageCatalogDocumentTopElem = XmlTopElem & { Doc: LearningStorageCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  use_extended_analytics: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type LearningStorageCatalogDocument = XmlDocument & { TopElem: LearningStorageCatalogDocumentTopElem; };
