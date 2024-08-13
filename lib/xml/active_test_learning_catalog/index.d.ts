type ActiveTestLearningCatalogDocumentTopElem = XmlTopElem &
AnnalsNumsBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_position_name: XmlElem<string | null>;
  person_org_name: XmlElem<string | null>;
  person_subdivision_name: XmlElem<string | null>;
  person_instance_id: XmlElem<string | null>;
  person_current_state: XmlElem<string | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  proctor_prefer_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  testing_link: XmlElem<string | null>;
  start_usage_date: XmlElem<Date | null>;
  start_learning_date: XmlElem<Date | null>;
  last_usage_date: XmlElem<Date | null>;
  max_end_date: XmlElem<Date | null>;
  score: XmlElem<number | null>;
  state_id: XmlElem<number, typeof common.learning_states>;
  time: XmlElem<number | null>;
  use_proctoring: XmlElem<boolean>;
  is_self_enrolled: XmlElem<boolean | null>;
  max_score: XmlElem<number | null>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  creation_date: XmlElem<Date | null>;
  creation_user_id: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  modification_user_id: XmlElem<number | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
