interface KpiBase extends CustomElemsBase {
  plan: XmlElem<string | null>;
  threshold: XmlElem<number | null>;
  challenge: XmlElem<number | null>;
  weight: XmlElem<number>;
  kpi_plan_id: XmlElem<number | null, KpiPlanCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
}

interface KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3Kpi3Kpis4Kpi4 extends KpiBase {
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  parent_kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
}

interface KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3Kpi3Kpis4 {
  kpi_4: XmlElem<KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3Kpi3Kpis4Kpi4 | null>;
}

interface KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3Kpi3 extends KpiBase {
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  parent_kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  level: XmlElem<number | null>;
  kpis_4: XmlElem<KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3Kpi3Kpis4 | null>;
}

interface KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3 {
  kpi_3: XmlElem<KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3Kpi3 | null>;
}

interface KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2 extends KpiBase {
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  parent_kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  level: XmlElem<number | null>;
  kpis_3: XmlElem<KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2Kpis3 | null>;
}

interface KpiProfileDocumentKpiKpis1Kpi1Kpis2 {
  kpi_2: XmlElem<KpiProfileDocumentKpiKpis1Kpi1Kpis2Kpi2 | null>;
}

interface KpiProfileDocumentKpiKpis1Kpi1 extends KpiBase {
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  parent_kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  level: XmlElem<number | null>;
  kpis_2: XmlElem<KpiProfileDocumentKpiKpis1Kpi1Kpis2 | null>;
}

interface KpiProfileDocumentKpiKpis1 {
  kpi_1: XmlElem<KpiProfileDocumentKpiKpis1Kpi1 | null>;
}

interface KpiProfileDocumentKpi extends KpiBase {
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  parent_kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  level: XmlElem<number | null>;
  kpis_1: XmlElem<KpiProfileDocumentKpiKpis1 | null>;
}

interface KpiProfileDocumentProject extends WorkflowFieldsAssessmentBase {
  project_id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  threshold: XmlElem<number | null>;
  plan: XmlElem<string | null>;
  challenge: XmlElem<number | null>;
  weight: XmlElem<number>;
  comment: XmlElem<string | null>;
}

interface KpiProfileDocumentWorkflowMatching {
  id: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type KpiProfileDocumentTopElem = XmlTopElem &
FileListBase &
KnowledgePartsBase &
WorkflowDataBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: KpiProfileDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  kpis: XmlMultiElem<KpiProfileDocumentKpi | null>;
  projects: XmlMultiElem<KpiProfileDocumentProject | null>;
  competence_profile_family_id: XmlElem<number | null, CompetenceProfileFamilyCatalogDocumentTopElem>;
  period_type: XmlElem<string | null, typeof common.perioditys>;
  parent_kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  workflow_matchings: XmlMultiElem<KpiProfileDocumentWorkflowMatching | null>;
  workflow_matching_type: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type KpiProfileDocument = XmlDocument & {
  TopElem: KpiProfileDocumentTopElem;
  kpi_profile: KpiProfileDocumentTopElem;
  DocDesc(): string;
};
