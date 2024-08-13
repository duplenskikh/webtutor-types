type QualificationCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  parent_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.qualification_statuss>;
  yourself_start: XmlElem<boolean>;
  qualification_id: XmlMultiElemObject<number | null>;
  level_id: XmlElem<number | null, LevelCatalogDocumentTopElem>;
  is_reward: XmlElem<boolean | null>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  role_id: XmlMultiElemObject<number | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
