type OrgCatalogDocumentTopElem = XmlTopElem & { Doc: OrgCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  disp_name: XmlElem<string>;
  account_id: XmlElem<number>;
  kpi_profile_id: XmlElem<number>;
  bonus_profile_id: XmlElem<number>;
  place_id: XmlElem<number>;
  region_id: XmlElem<number>;
  tags: XmlElem<string>;
  tag_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type OrgCatalogDocument = XmlDocument & { TopElem: OrgCatalogDocumentTopElem; };
