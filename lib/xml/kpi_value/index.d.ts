interface KpiValueDocumentCustomDataHeaderColumn {
  title: XmlElem<string>;
  type: XmlElem<string, typeof common.spxml_types>;
}

interface KpiValueDocumentCustomDataHeader {
  column: XmlElem<KpiValueDocumentCustomDataHeaderColumn>;
}

interface KpiValueDocumentCustomDataDataRowColumn {
  value: XmlElem<string>;
}

interface KpiValueDocumentCustomDataDataRow {
  columns: XmlMultiElem<KpiValueDocumentCustomDataDataRowColumn>;
}

interface KpiValueDocumentCustomDataData {
  row: XmlElem<KpiValueDocumentCustomDataDataRow>;
}

interface KpiValueDocumentCustomData {
  header: XmlElem<KpiValueDocumentCustomDataHeader>;
  data: XmlElem<KpiValueDocumentCustomDataData>;
}

interface KpiValueDocumentExpert {
  expert_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface KpiValueDocumentWorkflowMatching {
  id: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

type KpiValueDocumentTopElem = XmlTopElem &
WorkflowDataBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: KpiValueDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): unknown;
  kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  responsible_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  custom_data: XmlElem<KpiValueDocumentCustomData>;
  fact: XmlElem<number>;
  fact_text: XmlElem<string>;
  fact_value: XmlElem<number>;
  value: XmlElem<number>;
  object_catalog: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  experts: XmlMultiElem<KpiValueDocumentExpert>;
  workflow_matchings: XmlMultiElem<KpiValueDocumentWorkflowMatching>;
  workflow_matching_type: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  obtain_custom_data(teKPI: unknown, aData: unknown): unknown;
  calc_data(formula: string): unknown;
};

type KpiValueDocument = XmlDocument & {
  TopElem: KpiValueDocumentTopElem;
  kpi_value: KpiValueDocumentTopElem;
  DocDesc(): unknown;
};
