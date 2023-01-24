type KpiValueCatalogDocumentTopElem = XmlTopElem & { Doc: KpiValueCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
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
  expert_id: XmlMultiElem<number>;
  workflow_id: XmlElem<number>;
  workflow_state: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  workflow_person_id: XmlMultiElem<number>;
  workflow_matching_type: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type KpiValueCatalogDocument = XmlDocument & { TopElem: KpiValueCatalogDocumentTopElem; };
