type KpiProfileCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  competence_profile_family_id: XmlElem<number, CompetenceProfileFamilyCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  parent_kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  kpi_id: XmlMultiElemObject<number, KpiCatalogDocumentTopElem>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  workflow_state: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  workflow_person_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  workflow_matching_type: XmlElem<string>;
  workflow_main_person_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
