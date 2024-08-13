type GroupCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  person_num: XmlElem<number | null>;
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  is_dynamic: XmlElem<boolean>;
  is_educ: XmlElem<boolean>;
  is_hidden: XmlElem<boolean>;
  allow_social_post: XmlElem<boolean>;
  join_mode: XmlElem<string | null, typeof common.join_mode_types>;
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles_id: XmlMultiElemObject<number | null, KpiProfileCatalogDocumentTopElem>;
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  tags: XmlElem<string | null>;
  tag_id: XmlMultiElemObject<number | null, TagCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
