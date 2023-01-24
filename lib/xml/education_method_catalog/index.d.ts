type EducationMethodCatalogDocumentTopElem = XmlTopElem & { Doc: EducationMethodCatalogDocument } & 
CostCurrencyTypeBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  type: XmlElem<string>;
  state_id: XmlElem<string>;
  education_org_id: XmlElem<number>;
  course_id: XmlElem<number>;
  is_open: XmlElem<boolean>;
  duration: XmlElem<number>;
  duration_days: XmlElem<number>;
  person_num: XmlElem<number>;
  workflow_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  event_form: XmlElem<string>;
  event_type_id: XmlElem<number>;
  role_id: XmlMultiElem<number>;
}

type EducationMethodCatalogDocument = XmlDocument & { TopElem: EducationMethodCatalogDocumentTopElem; };
