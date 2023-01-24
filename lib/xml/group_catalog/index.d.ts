type GroupCatalogDocumentTopElem = XmlTopElem & { Doc: GroupCatalogDocument } & 
AccessDocBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  person_num: XmlElem<number>;
  forum_id: XmlElem<number>;
  is_dynamic: XmlElem<boolean>;
  is_educ: XmlElem<boolean>;
  is_hidden: XmlElem<boolean>;
  allow_social_post: XmlElem<boolean>;
  join_mode: XmlElem<string>;
  kpi_profile_id: XmlElem<number>;
  bonus_profile_id: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  tags: XmlElem<string>;
  tag_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type GroupCatalogDocument = XmlDocument & { TopElem: GroupCatalogDocumentTopElem; };
