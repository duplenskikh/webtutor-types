interface KpiDocumentScale {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  percent: XmlElem<number | null>;
  desc: XmlElem<string | null>;
}

interface KpiDocumentOwner extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface KpiDocumentResponsiblePerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
}

interface KpiDocumentResponsibleGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  group_name: XmlElem<string | null>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
}

interface KpiDocumentResponsibleStaff {
  staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  staff_position_name: XmlElem<string | null>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
}

interface KpiDocumentCustomDataColumn {
  title: XmlElem<string | null>;
  type: XmlElem<string, typeof common.spxml_types>;
}

interface KpiDocumentCustomData {
  on: XmlElem<boolean>;
  columns: XmlMultiElem<KpiDocumentCustomDataColumn | null>;
  custom_data_formula: XmlElem<string | null>;
}

type KpiDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase &
KnowledgePartsBase & {
  Doc: KpiDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.kpi_types>;
  status: XmlElem<string, typeof common.kpi_states>;
  is_kpi: XmlElem<boolean>;
  parent_object_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  kpi_group_id: XmlElem<number | null, KpiGroupCatalogDocumentTopElem>;
  range_min: XmlElem<number | null>;
  range_max: XmlElem<number | null>;
  norma: XmlElem<number | null>;
  calc_type: XmlElem<string, typeof common.kpi_calc_types>;
  formula_id: XmlElem<number | null, FormulaCatalogDocumentTopElem>;
  scale_id: XmlElem<number | null, ScaleCatalogDocumentTopElem>;
  scales: XmlMultiElem<KpiDocumentScale | null>;
  owners: XmlMultiElem<KpiDocumentOwner | null>;
  responsible_persons: XmlMultiElem<KpiDocumentResponsiblePerson | null>;
  responsible_groups: XmlMultiElem<KpiDocumentResponsibleGroup | null>;
  responsible_staffs: XmlMultiElem<KpiDocumentResponsibleStaff | null>;
  auto_formula: XmlElem<string | null>;
  load_formula: XmlElem<string | null>;
  is_bonus_source: XmlElem<boolean>;
  is_global: XmlElem<boolean>;
  unit_of_measurement: XmlElem<string | null>;
  period_type: XmlElem<string | null, typeof common.perioditys>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  custom_data: XmlElem<KpiDocumentCustomData | null>;
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  access: XmlElem<AccessDocBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type KpiDocument = XmlDocument & {
  TopElem: KpiDocumentTopElem;
  kpi: KpiDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
