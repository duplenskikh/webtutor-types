type QtiAssessmentCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  title: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.course_test_states>;
  duration: XmlElem<number>;
  duration_days: XmlElem<number>;
  passing_score: XmlElem<number>;
  not_display_unfinished_score: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  use_proctoring: XmlElem<boolean>;
  external_type: XmlElem<string, typeof common.assessment_external_types>;
  modification_date: XmlElem<Date>;
  creation_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  OnBuild(): unknown;
};
