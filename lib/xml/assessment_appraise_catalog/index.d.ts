type AssessmentAppraiseCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.assessment_appraise_statuses>;
  is_model: XmlElem<boolean>;
  web_display: XmlElem<boolean>;
  flag_use_plan: XmlElem<boolean>;
  ignore_presence: XmlElem<boolean | null>;
  external_display_options: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  is_visible_auditorys: XmlElem<boolean>;
  is_visible_evaluatings: XmlElem<boolean>;
  is_visible_experts: XmlElem<boolean>;
  player: XmlElem<number>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
