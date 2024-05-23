type TestLearningCatalogDocumentTopElem = XmlTopElem &
AnnalsNumsBase &
AdminAccessBase & {
  id: XmlElem<number>;
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_org_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_instance_id: XmlElem<string>;
  person_current_state: XmlElem<string>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  start_usage_date: XmlElem<Date>;
  start_learning_date: XmlElem<Date>;
  last_usage_date: XmlElem<Date>;
  max_end_date: XmlElem<Date>;
  score: XmlElem<number>;
  text_result: XmlElem<string>;
  state_id: XmlElem<number, typeof common.learning_states>;
  time: XmlElem<number>;
  max_score: XmlElem<number>;
  link_report: XmlElem<string>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  active_test_learning_id: XmlElem<number>;
  creation_date: XmlElem<Date>;
  creation_user_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  modification_user_id: XmlElem<number>;
  app_instance_id: XmlElem<string>;
  is_self_enrolled: XmlElem<boolean>;
  use_proctoring: XmlElem<boolean>;
  OnBuild(): void;
};
