interface OrgDocumentKpiProfile {
  id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string, typeof common.perioditys>;
  obligatory: XmlElem<boolean>;
}

type OrgDocumentTopElem = XmlTopElem &
OrgBase &
FileListBase &
FuncManagersBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
DocumentPersonsBase &
CustomElemsBase & {
  Doc: OrgDocument;
  account_id: XmlElem<number, AccountCatalogDocumentTopElem>;
  contract_num: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  lng_id: XmlElem<string>;
  location_id: XmlElem<string, typeof lists.locations>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  access_time_start: XmlElem<string>;
  access_time_end: XmlElem<string>;
  show_detailed: XmlElem<boolean>;
  show_children: XmlElem<boolean>;
  kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<OrgDocumentKpiProfile>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  start_action(sTypeParam: string): unknown;
  role_id: XmlMultiElemObject<number>;
};

type OrgDocument = XmlDocument & {
  TopElem: OrgDocumentTopElem;
  org: OrgDocumentTopElem;
  DocDesc(): unknown;
};
