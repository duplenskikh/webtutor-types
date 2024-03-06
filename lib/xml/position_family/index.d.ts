interface PositionFamilyDocumentCompetenceProfile {
  id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
}

interface PositionFamilyDocumentKpiProfile {
  id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string, typeof common.perioditys>;
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
  parent_position_family_id: XmlElem<number, PositionFamilyCatalogDocumentTopElem>;
  subdivision_group_id: XmlElem<number, SubdivisionGroupCatalogDocumentTopElem>;
  is_dynamic: XmlElem<boolean>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  competence_profiles: XmlMultiElem<PositionFamilyDocumentCompetenceProfile>;
  kpi_profile_id: XmlElem<number>;
  kpi_profiles: XmlMultiElem<PositionFamilyDocumentKpiProfile>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  dynamic_select_position_commons(_clear_list: unknown): unknown;
};

type PositionFamilyDocument = XmlDocument & {
  TopElem: PositionFamilyDocumentTopElem;
  position_family: PositionFamilyDocumentTopElem;
  OnInit(): unknown;
  DocDesc(): unknown;
};
