interface KpiDocumentScale {
  id: XmlElem<string>;
  name: XmlElem<string>;
  percent: XmlElem<number>;
  desc: XmlElem<string>;
}

interface KpiDocumentOwner extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface KpiDocumentResponsiblePersonsResponsiblePerson extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
}

interface KpiDocumentResponsiblePersons {
  responsible_person: XmlElem<KpiDocumentResponsiblePersonsResponsiblePerson>;
}

interface KpiDocumentResponsibleGroup {
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  group_name: XmlElem<string>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
}

interface KpiDocumentResponsibleStaff {
  staff_position_id: XmlElem<number, StaffPositionCatalogDocumentTopElem>;
  staff_position_name: XmlElem<string>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
}

interface KpiDocumentCustomDataColumn {
  title: XmlElem<string>;
  type: XmlElem<string, typeof common.spxml_types>;
}

interface KpiDocumentCustomData {
  on: XmlElem<boolean>;
  columns: XmlMultiElem<KpiDocumentCustomDataColumn>;
  custom_data_formula: XmlElem<string>;
}

type KpiDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase &
KnowledgePartsBase & {
  Doc: KpiDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.kpi_types>;
  status: XmlElem<string, typeof common.kpi_states>;
  is_kpi: XmlElem<boolean>;
  parent_object_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  kpi_group_id: XmlElem<number, KpiGroupCatalogDocumentTopElem>;
  range_min: XmlElem<number>;
  range_max: XmlElem<number>;
  norma: XmlElem<number>;
  calc_type: XmlElem<string, typeof common.kpi_calc_types>;
  formula_id: XmlElem<number, FormulaCatalogDocumentTopElem>;
  scale_id: XmlElem<number, ScaleCatalogDocumentTopElem>;
  scales: XmlMultiElem<KpiDocumentScale>;
  owners: XmlMultiElem<KpiDocumentOwner>;
  responsible_persons: XmlElem<KpiDocumentResponsiblePersons>;
  responsible_groups: XmlMultiElem<KpiDocumentResponsibleGroup>;
  responsible_staffs: XmlMultiElem<KpiDocumentResponsibleStaff>;
  auto_formula: XmlElem<string>;
  load_formula: XmlElem<string>;
  is_bonus_source: XmlElem<boolean>;
  is_global: XmlElem<boolean>;
  unit_of_measurement: XmlElem<string>;
  period_type: XmlElem<string, typeof common.perioditys>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  custom_data: XmlElem<KpiDocumentCustomData>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  disp_block: XmlElem<MsDispBlockBase>;
  access: XmlElem<AccessDocBase>;
  role_id: XmlMultiElemObject<number>;
};

type KpiDocument = XmlDocument & {
  TopElem: KpiDocumentTopElem;
};
