interface SubdivisionGroupDocumentSubdivision {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string | null>;
}

interface SubdivisionGroupDocumentKpiProfile {
  /** Профиль KPI */
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  /** Обязательный */
  obligatory: XmlElem<boolean>;
}

type SubdivisionGroupDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
RequirementsBase &
ViewConditionsBase & {
  Doc: SubdivisionGroupDocument;
  /** Является динамической */
  is_dynamic: XmlElem<boolean>;
  /** Сотрудники */
  subdivisions: XmlMultiElem<SubdivisionGroupDocumentSubdivision | null>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<SubdivisionGroupDocumentKpiProfile | null>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  dynamic_select_subdivision(clearList: unknown): unknown;
  dynamic_select_person(clearList: unknown): unknown;
  start_action(type: string): number;
};

type SubdivisionGroupDocument = XmlDocument & {
  TopElem: SubdivisionGroupDocumentTopElem;
  subdivision_group: SubdivisionGroupDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
