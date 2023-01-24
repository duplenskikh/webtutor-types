type KpiGroupCatalogDocumentTopElem = XmlTopElem & { Doc: KpiGroupCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  workflow_id: XmlElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type KpiGroupCatalogDocument = XmlDocument & { TopElem: KpiGroupCatalogDocumentTopElem; };
