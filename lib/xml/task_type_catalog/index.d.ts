type TaskTypeCatalogDocumentTopElem = XmlTopElem & { Doc: TaskTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  workflow_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
}

type TaskTypeCatalogDocument = XmlDocument & { TopElem: TaskTypeCatalogDocumentTopElem; };
