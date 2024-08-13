type IntervalScheduleCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.agreement_status_types>;
  create_date: XmlElem<Date | null>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  workflow_state: XmlElem<string | null>;
  workflow_state_name: XmlElem<string | null>;
  workflow_type: XmlElem<string | null>;
  change_start_date: XmlElem<Date | null>;
  change_finish_date: XmlElem<Date | null>;
  workflow_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  workflow_matching_type: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
