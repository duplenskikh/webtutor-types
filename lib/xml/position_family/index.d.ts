interface PositionFamilyDocumentCompetenceProfile {
  id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
}

interface PositionFamilyDocumentKpiProfile {
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
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
  subdivision_group_id: XmlElem<number | null, SubdivisionGroupCatalogDocumentTopElem>;
  is_dynamic: XmlElem<boolean>;
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  competence_profiles: XmlMultiElem<PositionFamilyDocumentCompetenceProfile | null>;
  kpi_profile_id: XmlElem<number | null>;
  kpi_profiles: XmlMultiElem<PositionFamilyDocumentKpiProfile | null>;
  desc: XmlElem<string | null>;
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
