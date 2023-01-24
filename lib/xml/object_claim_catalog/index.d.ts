type ObjectClaimCatalogDocumentTopElem = XmlTopElem & { Doc: ObjectClaimCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  source_type: XmlElem<string>;
  source_id: XmlElem<number>;
  source_name: XmlElem<string>;
  source_code: XmlElem<string>;
  source_role: XmlElem<string>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  object_code: XmlElem<string>;
  element_type: XmlElem<string>;
  element_id: XmlElem<number>;
  element_name: XmlElem<string>;
  element_code: XmlElem<string>;
  read: XmlElem<boolean>;
  write: XmlElem<boolean>;
  delete: XmlElem<boolean>;
  list: XmlElem<boolean>;
  execute: XmlElem<boolean>;
  value: XmlElem<string>;
  is_active: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  data_str: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ObjectClaimCatalogDocument = XmlDocument & { TopElem: ObjectClaimCatalogDocumentTopElem; };
