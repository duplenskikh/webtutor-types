interface KpiPlanDocumentCustomDataHeaderColumn {
  title: XmlElem<string>;
  type: XmlElem<string, typeof common.spxml_types>;
}

interface KpiPlanDocumentCustomDataHeader {
  column: XmlElem<KpiPlanDocumentCustomDataHeaderColumn>;
}

interface KpiPlanDocumentCustomDataDataRowColumn {
  value: XmlElem<string>;
}

interface KpiPlanDocumentCustomDataDataRow {
  columns: XmlMultiElem<KpiPlanDocumentCustomDataDataRowColumn>;
}

interface KpiPlanDocumentCustomDataData {
  row: XmlElem<KpiPlanDocumentCustomDataDataRow>;
}

interface KpiPlanDocumentCustomData {
  header: XmlElem<KpiPlanDocumentCustomDataHeader>;
  data: XmlElem<KpiPlanDocumentCustomDataData>;
}

interface KpiPlanDocumentExpert {
  expert_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface KpiPlanDocumentWorkflowMatching {
  id: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

type KpiPlanDocumentTopElem = XmlTopElem &
WorkflowDataBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: KpiPlanDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): string;
  kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  responsible_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  custom_data: XmlElem<KpiPlanDocumentCustomData>;
  threshold: XmlElem<string>;
  threshold_text: XmlElem<string>;
  threshold_value: XmlElem<number>;
  challenge: XmlElem<string>;
  challenge_text: XmlElem<string>;
  challenge_value: XmlElem<number>;
  plan: XmlElem<string>;
  plan_text: XmlElem<string>;
  plan_value: XmlElem<number>;
  object_catalog: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  experts: XmlMultiElem<KpiPlanDocumentExpert>;
  workflow_matchings: XmlMultiElem<KpiPlanDocumentWorkflowMatching>;
  workflow_matching_type: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  obtain_custom_data(kPITopElem: unknown, aData: unknown): unknown;
  calc_data(formula: string): unknown;
};

type KpiPlanDocument = XmlDocument & {
  TopElem: KpiPlanDocumentTopElem;
  kpi_plan: KpiPlanDocumentTopElem;
  DocDesc(): string;
};
