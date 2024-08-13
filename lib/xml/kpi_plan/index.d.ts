interface KpiPlanDocumentCustomDataHeaderColumn {
  title: XmlElem<string | null>;
  type: XmlElem<string, typeof common.spxml_types>;
}

interface KpiPlanDocumentCustomDataHeader {
  column: XmlElem<KpiPlanDocumentCustomDataHeaderColumn | null>;
}

interface KpiPlanDocumentCustomDataDataRowColumn {
  value: XmlElem<string | null>;
}

interface KpiPlanDocumentCustomDataDataRow {
  columns: XmlMultiElem<KpiPlanDocumentCustomDataDataRowColumn | null>;
}

interface KpiPlanDocumentCustomDataData {
  row: XmlElem<KpiPlanDocumentCustomDataDataRow | null>;
}

interface KpiPlanDocumentCustomData {
  header: XmlElem<KpiPlanDocumentCustomDataHeader | null>;
  data: XmlElem<KpiPlanDocumentCustomDataData | null>;
}

interface KpiPlanDocumentExpert {
  expert_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface KpiPlanDocumentWorkflowMatching {
  id: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type KpiPlanDocumentTopElem = XmlTopElem &
WorkflowDataBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: KpiPlanDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name(): string;
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  responsible_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  custom_data: XmlElem<KpiPlanDocumentCustomData | null>;
  threshold: XmlElem<string | null>;
  threshold_text: XmlElem<string | null>;
  threshold_value: XmlElem<number | null>;
  challenge: XmlElem<string | null>;
  challenge_text: XmlElem<string | null>;
  challenge_value: XmlElem<number | null>;
  plan: XmlElem<string | null>;
  plan_text: XmlElem<string | null>;
  plan_value: XmlElem<number | null>;
  object_catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  experts: XmlMultiElem<KpiPlanDocumentExpert | null>;
  workflow_matchings: XmlMultiElem<KpiPlanDocumentWorkflowMatching | null>;
  workflow_matching_type: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  obtain_custom_data(kPITopElem: unknown, aData: unknown): unknown;
  calc_data(formula: string): unknown;
};

type KpiPlanDocument = XmlDocument & {
  TopElem: KpiPlanDocumentTopElem;
  kpi_plan: KpiPlanDocumentTopElem;
  DocDesc(): string;
};
