type EducationMethodCatalogDocumentTopElem = XmlTopElem &
CostCurrencyTypeBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.education_method_types>;
  state_id: XmlElem<string, typeof common.education_method_states>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  is_open: XmlElem<boolean>;
  duration: XmlElem<number>;
  duration_days: XmlElem<number>;
  person_num: XmlElem<number>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  event_form: XmlElem<string, typeof lists.event_forms>;
  event_type_id: XmlElem<number, EventTypeCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  OnBuild(): unknown;
};
