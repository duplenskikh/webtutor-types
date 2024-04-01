interface KpiBase extends CustomElemsBase {
  plan: XmlElem<string>;
  threshold: XmlElem<number>;
  challenge: XmlElem<number>;
  weight: XmlElem<number>;
  kpi_plan_id: XmlElem<number, KpiPlanCatalogDocumentTopElem>;
  comment: XmlElem<string>;
}

interface KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3Kpi3Kpis4Kpi4 extends KpiBase {
  kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  parent_kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
}

interface KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3Kpi3Kpis4 {
  kpi_4: XmlElem<KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3Kpi3Kpis4Kpi4>;
}

interface KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3Kpi3 extends KpiBase {
  kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  parent_kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  level: XmlElem<number>;
  kpis_4: XmlElem<KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3Kpi3Kpis4>;
}

interface KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3 {
  kpi_3: XmlElem<KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3Kpi3>;
}

interface KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2 extends KpiBase {
  kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  parent_kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  level: XmlElem<number>;
  kpis_3: XmlElem<KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3>;
}

interface KpiProfileDocumentKpiKpis1Kpi1Kpis2 {
  kpi_2: XmlElem<KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2>;
}

interface KpiProfileDocumentKpiKpis1Kpi1 extends KpiBase {
  kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  parent_kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  level: XmlElem<number>;
  kpis_2: XmlElem<KpiProfileDocumentKpiKpis1Kpi1Kpis2>;
}

interface KpiProfileDocumentKpiKpis1 {
  kpi_1: XmlElem<KpiProfileDocumentKpiKpis1Kpi1>;
}

interface KpiProfileDocumentKpi extends KpiBase {
  kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  parent_kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  level: XmlElem<number>;
  kpis_1: XmlElem<KpiProfileDocumentKpiKpis1>;
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
  DocDesc(): string;
};
