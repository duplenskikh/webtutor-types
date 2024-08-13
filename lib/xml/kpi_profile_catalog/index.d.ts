type KpiProfileCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  competence_profile_family_id: XmlElem<number | null, CompetenceProfileFamilyCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  parent_kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_id: XmlMultiElemObject<number | null, KpiCatalogDocumentTopElem>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  workflow_state: XmlElem<string | null>;
  workflow_state_name: XmlElem<string | null>;
  workflow_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  workflow_matching_type: XmlElem<string | null>;
  workflow_main_person_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
