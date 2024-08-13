interface OrgDocumentKpiProfile {
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
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
  account_id: XmlElem<number | null, AccountCatalogDocumentTopElem>;
  contract_num: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  lng_id: XmlElem<string | null>;
  location_id: XmlElem<string | null, typeof lists.locations>;
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  access_time_start: XmlElem<string | null>;
  access_time_end: XmlElem<string | null>;
  show_detailed: XmlElem<boolean | null>;
  show_children: XmlElem<boolean | null>;
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<OrgDocumentKpiProfile | null>;
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  start_action(type: string): number;
  role_id: XmlMultiElemObject<number | null>;
};

type OrgDocument = XmlDocument & {
  TopElem: OrgDocumentTopElem;
  org: OrgDocumentTopElem;
  DocDesc(): string;
};
