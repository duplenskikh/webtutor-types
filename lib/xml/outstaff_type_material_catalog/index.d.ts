type OutstaffTypeMaterialCatalogDocumentTopElem = XmlTopElem & { Doc: OutstaffTypeMaterialCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type OutstaffTypeMaterialCatalogDocument = XmlDocument & { TopElem: OutstaffTypeMaterialCatalogDocumentTopElem; };
