interface KpiValueExpert {
  expert_id?: XmlElem<number>;
}

interface KpiValueWorkflowMatching {
  id?: XmlElem<string>;
  person_id?: XmlElem<number>;
}

interface KpiValueCustomDataHeaderColumn {
  title?: XmlElem<string>;
  type?: XmlElem<string>;
}

interface KpiValueCustomDataHeader {
  column?: XmlElem<KpiValueCustomDataHeaderColumn>;
}

interface KpiValueCustomDataDataRowColumn {
  value?: XmlElem<string>;
}

interface KpiValueCustomDataDataRow {
  columns?: XmlMultiElem<KpiValueCustomDataDataRowColumn>;
}

interface KpiValueCustomDataData {
  row?: XmlElem<KpiValueCustomDataDataRow>;
}

interface KpiValueCustomData {
  header?: XmlElem<KpiValueCustomDataHeader>;
  data?: XmlElem<KpiValueCustomDataData>;
}

interface KpiValueView {
  selector?: XmlElem<string>;
}

interface KpiValueTopElem extends XmlTopElem<KpiValueDocument>, WorkflowDataBase, CustomElemsBase, AdminAccessBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  kpi_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  responsible_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
  fact?: XmlElem<number>;
  value?: XmlElem<number>;
  object_catalog?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  workflow_matching_type?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  experts?: XmlMultiElem<KpiValueExpert>;
  workflow_matchings?: XmlMultiElem<KpiValueWorkflowMatching>;
  custom_data?: XmlElem<KpiValueCustomData>;
  view?: XmlElem<KpiValueView>;
  obtain_custom_data?(): any;
  calc_data?(): any;
}

type KpiValueDocument = XmlDocument<KpiValueTopElem>;
