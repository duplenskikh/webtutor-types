type RequestTypeCatalogDocumentTopElem = XmlTopElem & { Doc: RequestTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string>;
  object_query_qual: XmlElem<string>;
  is_group: XmlElem<boolean>;
  access_block_type: XmlElem<string>;
  remote_action_id: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type RequestTypeCatalogDocument = XmlDocument & { TopElem: RequestTypeCatalogDocumentTopElem; };
