type ProjectParticipantCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  project_id: XmlElem<number, ProjectCatalogDocumentTopElem>;
  participant_roles_id: XmlMultiElemObject<number, ProjectParticipantRoleCatalogDocumentTopElem>;
  is_excluded: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  plan_load: XmlElem<number>;
  percent_plan_load: XmlElem<number>;
  status_id: XmlElem<string, typeof common.agreement_status_types>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  workflow_state: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  workflow_person_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  workflow_matching_type: XmlElem<string>;
  experts: XmlElem<string>;
  tags: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
