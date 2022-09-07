interface KpiValueDocumentExpert {
  expert_id: XmlElem<number>;
}

interface KpiValueDocumentWorkflowMatching {
  id: XmlElem<string>;
  person_id: XmlElem<number>;
}

type KpiValueDocumentTopElem = XmlTopElem & { Doc: KpiValueDocument } & 
WorkflowDataBase &
CustomElemsBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name?(): string;
  kpi_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  responsible_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  fact: XmlElem<number>;
  value: XmlElem<number>;
  object_catalog: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  experts: XmlMultiElem<KpiValueDocumentExpert>;
  workflow_matchings: XmlMultiElem<KpiValueDocumentWorkflowMatching>;
  workflow_matching_type: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  obtain_custom_data?(): unknown;
  calc_data?(): unknown;
}

type KpiValueDocument = XmlDocument & { TopElem: KpiValueDocumentTopElem; };
