type QualificationCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  parent_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.qualification_statuss>;
  yourself_start: XmlElem<boolean>;
  qualification_id: XmlMultiElemObject<number>;
  level_id: XmlElem<number, LevelCatalogDocumentTopElem>;
  is_reward: XmlElem<boolean>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  role_id: XmlMultiElemObject<number>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
