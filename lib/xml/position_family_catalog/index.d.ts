type PositionFamilyCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_position_family_id: XmlElem<number, PositionFamilyCatalogDocumentTopElem>;
  is_dynamic: XmlElem<boolean>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles_id: XmlMultiElemObject<number, KpiProfileCatalogDocumentTopElem>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  subdivision_group_id: XmlElem<number, SubdivisionGroupCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
