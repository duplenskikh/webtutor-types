type RequestCatalogDocumentTopElem = XmlTopElem & { Doc: RequestCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  type: XmlElem<string>;
  request_type_id: XmlElem<number>;
  status_id: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  is_group: XmlElem<boolean>;
  person_num: XmlElem<number>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  budget_period_id: XmlElem<number>;
  workflow_id: XmlElem<number>;
  workflow_state: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  create_date: XmlElem<Date>;
  close_date: XmlElem<Date>;
  tag_id: XmlMultiElem<number>;
  workflow_person_id: XmlMultiElem<number>;
  workflow_matching_type: XmlElem<string>;
  workflow_main_person_id: XmlMultiElem<number>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type RequestCatalogDocument = XmlDocument & { TopElem: RequestCatalogDocumentTopElem; };
