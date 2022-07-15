interface KpiScale {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  percent?: XmlElem<number>;
  desc?: XmlElem<string>;
}

interface KpiOwner extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

interface KpiResponsiblePerson extends PersonFillingBase {
  person_id?: XmlElem<number>;
  is_native?: XmlElem<boolean>;
  boss_type_id?: XmlElem<number>;
}

interface KpiResponsibleGroup {
  group_id?: XmlElem<number>;
  is_native?: XmlElem<boolean>;
  boss_type_id?: XmlElem<number>;
}

interface KpiCustomDataColumn {
  title?: XmlElem<string>;
  type?: XmlElem<string>;
}

interface KpiCustomData {
  on?: XmlElem<boolean>;
  custom_data_formula?: XmlElem<string>;
  columns?: XmlMultiElem<KpiCustomDataColumn>;
}

interface KpiView extends DescBase {
  selector?: XmlElem<string>;
  flag_bad_formula?: XmlElem<boolean>;
}

interface KpiTopElem extends XmlTopElem<KpiDocument>, FileListBase, AdminAccessBase, CustomElemsBase, KnowledgePartsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  status?: XmlElem<string>;
  is_kpi?: XmlElem<boolean>;
  parent_object_id?: XmlElem<number>;
  kpi_group_id?: XmlElem<number>;
  range_min?: XmlElem<number>;
  range_max?: XmlElem<number>;
  norma?: XmlElem<number>;
  calc_type?: XmlElem<string>;
  auto_formula?: XmlElem<string>;
  load_formula?: XmlElem<string>;
  is_bonus_source?: XmlElem<boolean>;
  is_global?: XmlElem<boolean>;
  unit_of_measurement?: XmlElem<string>;
  period_type?: XmlElem<string>;
  workflow_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  scales?: XmlMultiElem<KpiScale>;
  owners?: XmlMultiElem<KpiOwner>;
  responsible_persons?: XmlMultiElem<KpiResponsiblePerson>;
  responsible_groups?: XmlMultiElem<KpiResponsibleGroup>;
  custom_data?: XmlElem<KpiCustomData>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<KpiView>;
}

type KpiDocument = XmlDocument<KpiTopElem>;
