interface PositionFamilyDocumentCompetenceProfile {
  id: XmlElem<number>;
}

interface PositionFamilyDocumentKpiProfile {
  id: XmlElem<number>;
  period_type_id: XmlElem<string>;
}

type PositionFamilyDocumentTopElem = XmlTopElem & { Doc: PositionFamilyDocument } & 
  ObjectCodeNameBase &
  ViewConditionsBase &
  RequirementsBase &
  FileListBase &
  KnowledgePartsBase &
  KnowledgePartsBaseOld &
  AdminAccessBase &
  CustomElemsBase & {
  parent_position_family_id: XmlElem<number>;
  subdivision_group_id: XmlElem<number>;
  is_dynamic: XmlElem<boolean>;
  bonus_profile_id: XmlElem<number>;
  competence_profile_id: XmlElem<number>;
  competence_profiles: XmlMultiElem<PositionFamilyDocumentCompetenceProfile>;
  kpi_profile_id: XmlElem<number>;
  kpi_profiles: XmlMultiElem<PositionFamilyDocumentKpiProfile>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  dynamic_select_position_commons(): unknown;
}

type PositionFamilyDocument = XmlDocument & { TopElem: PositionFamilyDocumentTopElem; };
