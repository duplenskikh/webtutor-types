interface KpiProfileDocumentKpi extends CustomElemsBase {
  kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  plan: XmlElem<string>;
  threshold: XmlElem<number>;
  challenge: XmlElem<number>;
  weight: XmlElem<number>;
  kpi_plan_id: XmlElem<number, KpiPlanCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  parent_kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
}

interface KpiProfileDocumentProject extends WorkflowFieldsAssessmentBase {
  project_id: XmlElem<string>;
  name: XmlElem<string>;
  threshold: XmlElem<number>;
  plan: XmlElem<string>;
  challenge: XmlElem<number>;
  weight: XmlElem<number>;
  comment: XmlElem<string>;
}

interface KpiProfileDocumentWorkflowMatching {
  id: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

type KpiProfileDocumentTopElem = XmlTopElem &
FileListBase &
KnowledgePartsBase &
WorkflowDataBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: KpiProfileDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  kpis: XmlMultiElem<KpiProfileDocumentKpi>;
  projects: XmlMultiElem<KpiProfileDocumentProject>;
  competence_profile_family_id: XmlElem<number, CompetenceProfileFamilyCatalogDocumentTopElem>;
  period_type: XmlElem<string, typeof common.perioditys>;
  parent_kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  workflow_matchings: XmlMultiElem<KpiProfileDocumentWorkflowMatching>;
  workflow_matching_type: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
};

type KpiProfileDocument = XmlDocument & {
  TopElem: KpiProfileDocumentTopElem;
  kpi_profile: KpiProfileDocumentTopElem;
  DocDesc(): unknown;
};
