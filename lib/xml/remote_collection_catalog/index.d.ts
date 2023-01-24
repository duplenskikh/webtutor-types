type RemoteCollectionCatalogDocumentTopElem = XmlTopElem & { Doc: RemoteCollectionCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  category: XmlElem<string>;
  catalog_name: XmlElem<string>;
  api_ver: XmlElem<string>;
  ready_to_analytics: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type RemoteCollectionCatalogDocument = XmlDocument & { TopElem: RemoteCollectionCatalogDocumentTopElem; };
