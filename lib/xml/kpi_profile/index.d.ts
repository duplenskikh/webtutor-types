interface KpiProfileDocumentKpi extends CustomElemsBase {
  kpi_id: XmlElem<number>;
  plan: XmlElem<string>;
  threshold: XmlElem<number>;
  challenge: XmlElem<number>;
  weight: XmlElem<number>;
  comment: XmlElem<string>;
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

type KpiProfileDocumentTopElem = XmlTopElem & { Doc: KpiProfileDocument } & 
FileListBase &
KnowledgePartsBase &
AdminAccessBase &
CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  kpis: XmlMultiElem<KpiProfileDocumentKpi>;
  projects: XmlMultiElem<KpiProfileDocumentProject>;
  competence_profile_family_id: XmlElem<number>;
  period_type: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type KpiProfileDocument = XmlDocument & { TopElem: KpiProfileDocumentTopElem; };
