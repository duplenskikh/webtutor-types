interface SubdivisionGroupDocumentSubdivision {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string | null>;
}

interface SubdivisionGroupDocumentKpiProfile {
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
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
  subdivisions: XmlMultiElem<SubdivisionGroupDocumentSubdivision | null>;
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<SubdivisionGroupDocumentKpiProfile | null>;
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
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
