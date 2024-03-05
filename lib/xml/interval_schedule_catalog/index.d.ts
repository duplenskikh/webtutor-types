type IntervalScheduleCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  presence_state_id: XmlElem<number, PresenceStateCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.agreement_status_types>;
  create_date: XmlElem<Date>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  workflow_state: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  workflow_type: XmlElem<string>;
  change_start_date: XmlElem<Date>;
  change_finish_date: XmlElem<Date>;
  workflow_person_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  workflow_matching_type: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
