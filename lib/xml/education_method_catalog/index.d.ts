type EducationMethodCatalogDocumentTopElem = XmlTopElem &
CostCurrencyTypeBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.education_method_types>;
  state_id: XmlElem<string, typeof common.education_method_states>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  is_open: XmlElem<boolean>;
  duration: XmlElem<number | null>;
  duration_days: XmlElem<number | null>;
  person_num: XmlElem<number | null>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  event_form: XmlElem<string | null, typeof lists.event_forms>;
  event_type_id: XmlElem<number | null, EventTypeCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};
