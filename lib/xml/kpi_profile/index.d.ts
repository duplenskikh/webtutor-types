interface KpiProfileKpi extends CustomElemsBase {
  kpi_id?: XmlElem<number>;
  plan?: XmlElem<string>;
  threshold?: XmlElem<number>;
  challenge?: XmlElem<number>;
  weight?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface KpiProfileProject extends WorkflowFieldsAssessmentBase {
  project_id?: XmlElem<string>;
  name?: XmlElem<string>;
  threshold?: XmlElem<number>;
  plan?: XmlElem<string>;
  challenge?: XmlElem<number>;
  weight?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface KpiProfileView {
  selector?: XmlElem<string>;
}

interface KpiProfileTopElem extends XmlTopElem<KpiProfileDocument>, FileListBase, KnowledgePartsBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  competence_profile_family_id?: XmlElem<number>;
  period_type?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
  kpis?: XmlMultiElem<KpiProfileKpi>;
  projects?: XmlMultiElem<KpiProfileProject>;
  view?: XmlElem<KpiProfileView>;
}

type KpiProfileDocument = XmlDocument<KpiProfileTopElem>;
