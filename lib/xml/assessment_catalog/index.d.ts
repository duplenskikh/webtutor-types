type AssessmentCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  title: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.course_test_states>;
  duration: XmlElem<number | null>;
  duration_days: XmlElem<number | null>;
  passing_score: XmlElem<number | null>;
  not_display_unfinished_score: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  use_proctoring: XmlElem<boolean>;
  external_type: XmlElem<string | null, typeof common.assessment_external_types>;
  modification_date: XmlElem<Date | null>;
  creation_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  testing_system_id: XmlElem<number | null, TestingSystemCatalogDocumentTopElem>;
  OnBuild(): void;
};
