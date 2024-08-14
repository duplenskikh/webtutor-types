interface SubdivisionDocumentKpiProfile {
  /** Профиль KPI */
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  /** Обязательный */
  obligatory: XmlElem<boolean>;
}

type SubdivisionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
FuncManagersBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
DocumentPersonsBase & {
  Doc: SubdivisionDocument;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Родительское подразделение */
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Подразделение расформировано */
  is_disbanded: XmlElem<boolean | null>;
  /** Язык веб интерфейса */
  lng_id: XmlElem<string | null>;
  /** Расположение файлов учебных материалов */
  location_id: XmlElem<string | null, typeof lists.locations>;
  /** Время доступа с */
  access_time_start: XmlElem<string | null>;
  /** Время доступа по */
  access_time_end: XmlElem<string | null>;
  /** Показывать подробную информацию */
  show_detailed: XmlElem<boolean | null>;
  /** Показывать информацию о дочерних подразделениях */
  show_children: XmlElem<boolean | null>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<SubdivisionDocumentKpiProfile | null>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  /** Дата формирования */
  formed_date: XmlElem<Date | null>;
  /** Дата расформирования */
  disbanded_date: XmlElem<Date | null>;
  /** Центр затрат */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  /** Факультет */
  is_faculty: XmlElem<boolean>;
  outstaff: XmlElem<OutstaffPeriodsBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  start_action(type: string): number;
};

type SubdivisionDocument = XmlDocument & {
  TopElem: SubdivisionDocumentTopElem;
  subdivision: SubdivisionDocumentTopElem;
  OnBeforeSave(): void;
  OnSave(): void;
  DocDesc(): string;
};
