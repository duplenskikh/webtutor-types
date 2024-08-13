type EducationMethodLectorCatalogDocumentTopElem = XmlTopElem &
CostCurrencyTypeBase & {
  id: XmlElem<number | null>;
  /** Учебная программа */
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип проведения */
  type: XmlElem<string, typeof common.education_method_types>;
  /** Статус */
  state_id: XmlElem<string, typeof common.education_method_states>;
  /** Является открытой учебной программой */
  is_open: XmlElem<boolean>;
  /** Организация */
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  /** Длительность (часов) */
  duration: XmlElem<number | null>;
  /** Длительность (дней) */
  duration_days: XmlElem<number | null>;
  /** Количество участников */
  person_num: XmlElem<number | null>;
  /** Преподаватель */
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
