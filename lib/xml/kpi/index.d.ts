interface KpiDocumentScale {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  percent?: XmlElem<number>;
  desc?: XmlElem<string>;
}

interface KpiDocumentOwner extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

interface KpiDocumentResponsiblePerson extends PersonFillingBase {
  person_id?: XmlElem<number>;
  is_native?: XmlElem<boolean>;
  boss_type_id?: XmlElem<number>;
}

interface KpiDocumentResponsibleGroup {
  group_id?: XmlElem<number>;
  is_native?: XmlElem<boolean>;
  boss_type_id?: XmlElem<number>;
}

type KpiDocumentTopElem = XmlTopElem & { Doc: KpiDocument } & 
  FileListBase &
  AdminAccessBase &
  CustomElemsBase &
  KnowledgePartsBase & {
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
  scales?: XmlMultiElem<KpiDocumentScale>;
  owners?: XmlMultiElem<KpiDocumentOwner>;
  responsible_persons?: XmlMultiElem<KpiDocumentResponsiblePerson>;
  responsible_groups?: XmlMultiElem<KpiDocumentResponsibleGroup>;
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
  disp_block?: XmlElem<MsDispBlockBase>;
  access?: XmlElem<AccessDocBase>;
  role_id?: XmlMultiElem<number>;
}

type KpiDocument = XmlDocument & { TopElem: KpiDocumentTopElem; };
