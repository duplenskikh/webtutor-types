type EducationPlanCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  program_id: XmlElem<number | null>;
  parent_progpam_id: XmlElem<number | null>;
  position: XmlElem<number | null>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  development_plan_id: XmlElem<number | null, DevelopmentPlanCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  type: XmlElem<string | null>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  object_code: XmlElem<string | null>;
  object_start_date: XmlElem<Date | null>;
  state_id: XmlElem<number, typeof common.learning_states>;
  plan_date: XmlElem<Date | null>;
  result_type: XmlElem<string | null, typeof common.exchange_object_types>;
  result_object_id: XmlElem<number | null>;
  result_object_name: XmlElem<string | null>;
  result_object_code: XmlElem<string | null>;
  result_object_start_date: XmlElem<Date | null>;
  result_object_finish_date: XmlElem<Date | null>;
  weight: XmlElem<number | null>;
  create_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  readiness_percent: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_position: XmlElem<string | null>;
  person_org_name: XmlElem<string | null>;
  person_subdivision_name: XmlElem<string | null>;
  is_collaborator: XmlElem<boolean>;
  is_tutor: XmlElem<boolean>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
