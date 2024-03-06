interface SubdivisionDocumentKpiProfile {
  id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string, typeof common.perioditys>;
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
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  is_disbanded: XmlElem<boolean>;
  lng_id: XmlElem<string>;
  location_id: XmlElem<string, typeof lists.locations>;
  access_time_start: XmlElem<string>;
  access_time_end: XmlElem<string>;
  show_detailed: XmlElem<boolean>;
  show_children: XmlElem<boolean>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<SubdivisionDocumentKpiProfile>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  schedule_type_id: XmlElem<number, ScheduleTypeCatalogDocumentTopElem>;
  formed_date: XmlElem<Date>;
  disbanded_date: XmlElem<Date>;
  cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  is_faculty: XmlElem<boolean>;
  outstaff: XmlElem<OutstaffPeriodsBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  start_action(sTypeParam: string): unknown;
};

type SubdivisionDocument = XmlDocument & {
  TopElem: SubdivisionDocumentTopElem;
  subdivision: SubdivisionDocumentTopElem;
  OnBeforeSave(): unknown;
  OnSave(): unknown;
  DocDesc(): unknown;
};
