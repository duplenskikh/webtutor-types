type OrgCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  disp_name: XmlElem<string>;
  account_id: XmlElem<number, AccountCatalogDocumentTopElem>;
  kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles_id: XmlMultiElemObject<number, KpiProfileCatalogDocumentTopElem>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  tags: XmlElem<string>;
  tag_id: XmlMultiElemObject<number, TagCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  OnBuild(): unknown;
};
