type KpiCatalogDocumentTopElem = XmlTopElem & { Doc: KpiCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  parent_object_id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  status: XmlElem<string>;
  is_kpi: XmlElem<boolean>;
  kpi_group_id: XmlElem<number>;
  range_min: XmlElem<number>;
  range_max: XmlElem<number>;
  owners_ids: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  access_block_type: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
}

type KpiCatalogDocument = XmlDocument & { TopElem: KpiCatalogDocumentTopElem; };
