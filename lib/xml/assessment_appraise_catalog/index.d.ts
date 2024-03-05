type AssessmentAppraiseCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.assessment_appraise_statuses>;
  is_model: XmlElem<boolean>;
  web_display: XmlElem<boolean>;
  flag_use_plan: XmlElem<boolean>;
  ignore_presence: XmlElem<boolean>;
  external_display_options: XmlElem<string>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  is_visible_auditorys: XmlElem<boolean>;
  is_visible_evaluatings: XmlElem<boolean>;
  is_visible_experts: XmlElem<boolean>;
  player: XmlElem<number>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
