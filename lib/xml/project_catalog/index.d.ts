type ProjectCatalogDocumentTopElem = XmlTopElem & { Doc: ProjectCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  org_id: XmlElem<number>;
  subdivision_id: XmlElem<number>;
  group_id: XmlElem<number>;
  contract_id: XmlElem<number>;
  project_type_id: XmlElem<number>;
  sale_contract_id: XmlElem<number>;
  status: XmlElem<string>;
  is_model: XmlElem<boolean>;
  workflow_id: XmlElem<number>;
  plan_labor_costs: XmlElem<number>;
  fact_labor_costs: XmlElem<number>;
  percent_complete: XmlElem<number>;
  team_selected: XmlElem<boolean>;
  start_date_plan: XmlElem<Date>;
  end_date_plan: XmlElem<Date>;
  start_date_fact: XmlElem<Date>;
  end_date_fact: XmlElem<Date>;
  allow_assessment: XmlElem<boolean>;
  join_mode: XmlElem<string>;
  resource_type_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type ProjectCatalogDocument = XmlDocument & { TopElem: ProjectCatalogDocumentTopElem; };
