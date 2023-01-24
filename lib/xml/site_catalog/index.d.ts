type SiteCatalogDocumentTopElem = XmlTopElem & { Doc: SiteCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  web_design_id: XmlElem<number>;
  lng_id: XmlElem<string>;
  object_id: XmlElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  owner_object: XmlMultiElem<number>;
}

type SiteCatalogDocument = XmlDocument & { TopElem: SiteCatalogDocumentTopElem; };
