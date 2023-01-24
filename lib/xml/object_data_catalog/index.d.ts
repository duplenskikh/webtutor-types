type ObjectDataCatalogDocumentTopElem = XmlTopElem & { Doc: ObjectDataCatalogDocument } & 
ObjectTypeBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_data_type_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  status_id: XmlElem<string>;
  create_date: XmlElem<Date>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  sec_object_type: XmlElem<string>;
  sec_object_id: XmlElem<number>;
  sec_object_name: XmlElem<string>;
  data_str: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ObjectDataCatalogDocument = XmlDocument & { TopElem: ObjectDataCatalogDocumentTopElem; };
