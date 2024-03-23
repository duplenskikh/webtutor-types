type KpiCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  parent_object_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.kpi_types>;
  status: XmlElem<string, typeof common.kpi_states>;
  is_kpi: XmlElem<boolean>;
  kpi_group_id: XmlElem<number, KpiGroupCatalogDocumentTopElem>;
  range_min: XmlElem<number>;
  range_max: XmlElem<number>;
  owners_ids: XmlElem<string>;
  formula_id: XmlElem<number, FormulaCatalogDocumentTopElem>;
  scale_id: XmlElem<number, ScaleCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  access_block_type: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  previous_version_object_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  OnBuild(): void;
};
