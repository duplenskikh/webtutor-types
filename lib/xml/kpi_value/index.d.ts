interface KpiValueDocumentCustomDataHeaderColumn {
  title: XmlElem<string | null>;
  type: XmlElem<string, typeof common.spxml_types>;
}

interface KpiValueDocumentCustomDataHeader {
  column: XmlElem<KpiValueDocumentCustomDataHeaderColumn | null>;
}

interface KpiValueDocumentCustomDataDataRowColumn {
  value: XmlElem<string | null>;
}

interface KpiValueDocumentCustomDataDataRow {
  columns: XmlMultiElem<KpiValueDocumentCustomDataDataRowColumn | null>;
}

interface KpiValueDocumentCustomDataData {
  row: XmlElem<KpiValueDocumentCustomDataDataRow | null>;
}

interface KpiValueDocumentCustomData {
  header: XmlElem<KpiValueDocumentCustomDataHeader | null>;
  data: XmlElem<KpiValueDocumentCustomDataData | null>;
}

interface KpiValueDocumentExpert {
  expert_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface KpiValueDocumentWorkflowMatching {
  id: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type KpiValueDocumentTopElem = XmlTopElem &
WorkflowDataBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: KpiValueDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name(): string;
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  responsible_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  custom_data: XmlElem<KpiValueDocumentCustomData | null>;
  fact: XmlElem<number | null>;
  fact_text: XmlElem<string | null>;
  fact_value: XmlElem<number | null>;
  value: XmlElem<number | null>;
  object_catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  experts: XmlMultiElem<KpiValueDocumentExpert | null>;
  workflow_matchings: XmlMultiElem<KpiValueDocumentWorkflowMatching | null>;
  workflow_matching_type: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  obtain_custom_data(kPITopElem: unknown, aData: unknown): unknown;
  calc_data(formula: string): unknown;
};

type KpiValueDocument = XmlDocument & {
  TopElem: KpiValueDocumentTopElem;
  kpi_value: KpiValueDocumentTopElem;
  DocDesc(): string;
};
