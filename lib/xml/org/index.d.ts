interface OrgDocumentKpiProfile {
  /** Профиль KPI */
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  /** Обязательный */
  obligatory: XmlElem<boolean>;
}

type OrgDocumentTopElem = XmlTopElem &
OrgBase &
FileListBase &
FuncManagersBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
DocumentPersonsBase &
CustomElemsBase & {
  Doc: OrgDocument;
  /** Биллинговый счет */
  account_id: XmlElem<number | null, AccountCatalogDocumentTopElem>;
  /** Номер абонентского договора */
  contract_num: XmlElem<string | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Язык веб интерфейса */
  lng_id: XmlElem<string | null>;
  /** Расположение файлов учебных материалов */
  location_id: XmlElem<string | null, typeof lists.locations>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  /** Регион */
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  /** Время доступа с */
  access_time_start: XmlElem<string | null>;
  /** Время доступа по */
  access_time_end: XmlElem<string | null>;
  /** Показывать подробную информацию */
  show_detailed: XmlElem<boolean | null>;
  /** Показывать информацию о дочерних подразделениях */
  show_children: XmlElem<boolean | null>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<OrgDocumentKpiProfile | null>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  start_action(type: string): number;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type OrgDocument = XmlDocument & {
  TopElem: OrgDocumentTopElem;
  org: OrgDocumentTopElem;
  DocDesc(): string;
};
