type SubdivisionGroupCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_dynamic: XmlElem<boolean>;
  kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles_id: XmlMultiElemObject<number, KpiProfileCatalogDocumentTopElem>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  OnBuild(): void;
};
