interface PositionFamilyDocumentCompetenceProfile {
  /** Профиль компетенций */
  id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
}

interface PositionFamilyDocumentKpiProfile {
  /** Профиль KPI */
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  /** Обязательный */
  obligatory: XmlElem<boolean>;
}

type PositionFamilyDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ViewConditionsBase &
RequirementsBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
CustomElemsBase & {
  Doc: PositionFamilyDocument;
  parent_position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
  /** Группа подразделений */
  subdivision_group_id: XmlElem<number | null, SubdivisionGroupCatalogDocumentTopElem>;
  /** Является динамической */
  is_dynamic: XmlElem<boolean>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Профиль компетенций */
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  /** Профили компетенций */
  competence_profiles: XmlMultiElem<PositionFamilyDocumentCompetenceProfile | null>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null>;
  kpi_profiles: XmlMultiElem<PositionFamilyDocumentKpiProfile | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  dynamic_select_position_commons(clearList: unknown): unknown;
};

type PositionFamilyDocument = XmlDocument & {
  TopElem: PositionFamilyDocumentTopElem;
  position_family: PositionFamilyDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
