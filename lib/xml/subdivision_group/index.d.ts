interface SubdivisionGroupDocumentSubdivision {
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string>;
}

interface SubdivisionGroupDocumentKpiProfile {
  id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string, typeof common.perioditys>;
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
  is_dynamic: XmlElem<boolean>;
  subdivisions: XmlMultiElem<SubdivisionGroupDocumentSubdivision>;
  kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<SubdivisionGroupDocumentKpiProfile>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  schedule_type_id: XmlElem<number, ScheduleTypeCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  desc: XmlElem<string>;
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
