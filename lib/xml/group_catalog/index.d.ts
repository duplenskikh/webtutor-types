type GroupCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  person_num: XmlElem<number>;
  forum_id: XmlElem<number, ForumCatalogDocumentTopElem>;
  is_dynamic: XmlElem<boolean>;
  is_educ: XmlElem<boolean>;
  is_hidden: XmlElem<boolean>;
  allow_social_post: XmlElem<boolean>;
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles_id: XmlMultiElemObject<number, KpiProfileCatalogDocumentTopElem>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  tags: XmlElem<string>;
  tag_id: XmlMultiElemObject<number, TagCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
