type ObjectDataTypeCatalogDocumentTopElem = XmlTopElem & { Doc: ObjectDataTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string>;
  sec_object_type: XmlElem<string>;
  access_block_type: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ObjectDataTypeCatalogDocument = XmlDocument & { TopElem: ObjectDataTypeCatalogDocumentTopElem; };
