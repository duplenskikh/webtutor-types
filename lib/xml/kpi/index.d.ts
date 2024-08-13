interface KpiDocumentScale {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Процент */
  percent: XmlElem<number | null>;
  /** Описание */
  desc: XmlElem<string | null>;
}

interface KpiDocumentOwner extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface KpiDocumentResponsiblePerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Является непосредственным руководителем */
  is_native: XmlElem<boolean>;
  /** Тип руководителя */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
}

interface KpiDocumentResponsibleGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /** Название */
  group_name: XmlElem<string | null>;
  /** Является непосредственным руководителем */
  is_native: XmlElem<boolean>;
  /** Тип руководителя */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
}

interface KpiDocumentResponsibleStaff {
  staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  /** Название */
  staff_position_name: XmlElem<string | null>;
  /** Является непосредственным руководителем */
  is_native: XmlElem<boolean>;
  /** Тип руководителя */
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
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null, typeof common.kpi_types>;
  status: XmlElem<string, typeof common.kpi_states>;
  is_kpi: XmlElem<boolean>;
  /** KPI */
  parent_object_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  /** Группа */
  kpi_group_id: XmlElem<number | null, KpiGroupCatalogDocumentTopElem>;
  /** Минимальное значение */
  range_min: XmlElem<number | null>;
  /** Максимальное значение */
  range_max: XmlElem<number | null>;
  norma: XmlElem<number | null>;
  calc_type: XmlElem<string, typeof common.kpi_calc_types>;
  /** Формула */
  formula_id: XmlElem<number | null, FormulaCatalogDocumentTopElem>;
  /** Шкала */
  scale_id: XmlElem<number | null, ScaleCatalogDocumentTopElem>;
  /** Шкала */
  scales: XmlMultiElem<KpiDocumentScale | null>;
  /** Владельцы */
  owners: XmlMultiElem<KpiDocumentOwner | null>;
  /** Ответственные сотрудники */
  responsible_persons: XmlMultiElem<KpiDocumentResponsiblePerson | null>;
  responsible_groups: XmlMultiElem<KpiDocumentResponsibleGroup | null>;
  responsible_staffs: XmlMultiElem<KpiDocumentResponsibleStaff | null>;
  /** Формула */
  auto_formula: XmlElem<string | null>;
  load_formula: XmlElem<string | null>;
  /** Источник премирования */
  is_bonus_source: XmlElem<boolean>;
  /** Глобальный показатель */
  is_global: XmlElem<boolean>;
  /** Единица измерения */
  unit_of_measurement: XmlElem<string | null>;
  period_type: XmlElem<string | null, typeof common.perioditys>;
  /** Документооборот по умолчанию */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  custom_data: XmlElem<KpiDocumentCustomData | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  access: XmlElem<AccessDocBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type KpiDocument = XmlDocument & {
  TopElem: KpiDocumentTopElem;
  kpi: KpiDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
