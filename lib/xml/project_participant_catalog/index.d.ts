type ProjectParticipantCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  participant_roles_id: XmlMultiElemObject<number | null, ProjectParticipantRoleCatalogDocumentTopElem>;
  is_excluded: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  plan_load: XmlElem<number | null>;
  percent_plan_load: XmlElem<number | null>;
  status_id: XmlElem<string | null, typeof common.agreement_status_types>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  workflow_state: XmlElem<string | null>;
  workflow_state_name: XmlElem<string | null>;
  workflow_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  workflow_matching_type: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
