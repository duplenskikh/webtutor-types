interface PositionDocumentCompetenceProfile {
  id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
}

interface PositionDocumentKpiProfile {
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
}

type PositionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
CustomElemsBase & {
  Doc: PositionDocument;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  basic_collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  basic_rate: XmlElem<number | null>;
  is_boss: XmlElem<boolean>;
  position_date: XmlElem<Date | null>;
  cost_month: XmlElem<number | null>;
  currency: XmlElem<string | null, typeof lists.currency_types>;
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  competence_profiles: XmlMultiElem<PositionDocumentCompetenceProfile | null>;
  competence_codes: XmlElem<string | null>;
  kpi_profile_id: XmlElem<number | null>;
  kpi_profiles: XmlMultiElem<PositionDocumentKpiProfile | null>;
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  knowledge_profile_id: XmlElem<number | null, KnowledgeProfileCatalogDocumentTopElem>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  position_common_level_id: XmlElem<number | null>;
  position_common_level_name: XmlElem<string | null>;
  position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
  position_finish_date: XmlElem<Date | null>;
  is_position_finished: XmlElem<boolean | null>;
  position_assignment_type: XmlElem<string | null, typeof common.position_assignment_types>;
  position_appointment_type_id: XmlElem<number | null, AppointmentTypeCatalogDocumentTopElem>;
  staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PositionDocument = XmlDocument & {
  TopElem: PositionDocumentTopElem;
  position: PositionDocumentTopElem;
  OnBeforeSave(): void;
  OnSave(): void;
  OnLocalInit(): void;
  DocDesc(): string;
};
