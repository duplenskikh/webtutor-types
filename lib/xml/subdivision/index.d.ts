interface SubdivisionDocumentKpiProfile {
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  obligatory: XmlElem<boolean>;
}

type SubdivisionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
FuncManagersBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
DocumentPersonsBase & {
  Doc: SubdivisionDocument;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  is_disbanded: XmlElem<boolean | null>;
  lng_id: XmlElem<string | null>;
  location_id: XmlElem<string | null, typeof lists.locations>;
  access_time_start: XmlElem<string | null>;
  access_time_end: XmlElem<string | null>;
  show_detailed: XmlElem<boolean | null>;
  show_children: XmlElem<boolean | null>;
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<SubdivisionDocumentKpiProfile | null>;
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  formed_date: XmlElem<Date | null>;
  disbanded_date: XmlElem<Date | null>;
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  is_faculty: XmlElem<boolean>;
  outstaff: XmlElem<OutstaffPeriodsBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  start_action(type: string): number;
};

type SubdivisionDocument = XmlDocument & {
  TopElem: SubdivisionDocumentTopElem;
  subdivision: SubdivisionDocumentTopElem;
  OnBeforeSave(): void;
  OnSave(): void;
  DocDesc(): string;
};
