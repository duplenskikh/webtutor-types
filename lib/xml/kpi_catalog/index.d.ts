type KpiCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  parent_object_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.kpi_types>;
  status: XmlElem<string | null, typeof common.kpi_states>;
  is_kpi: XmlElem<boolean>;
  kpi_group_id: XmlElem<number | null, KpiGroupCatalogDocumentTopElem>;
  range_min: XmlElem<number | null>;
  range_max: XmlElem<number | null>;
  owners_ids: XmlElem<string | null>;
  formula_id: XmlElem<number | null, FormulaCatalogDocumentTopElem>;
  scale_id: XmlElem<number | null, ScaleCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  previous_version_object_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  OnBuild(): void;
};
