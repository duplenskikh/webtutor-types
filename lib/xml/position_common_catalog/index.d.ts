type PositionCommonCatalogDocumentTopElem = XmlTopElem & { Doc: PositionCommonCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  min_salary: XmlElem<number>;
  max_salary: XmlElem<number>;
  currency: XmlElem<string>;
  position_familys: XmlElem<string>;
  allow_outstaff: XmlElem<boolean>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  kpi_profile_id: XmlElem<number>;
  bonus_profile_id: XmlElem<number>;
  knowledge_profile_id: XmlElem<number>;
  parent_position_common_id: XmlMultiElem<number>;
  grade_ids: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type PositionCommonCatalogDocument = XmlDocument & { TopElem: PositionCommonCatalogDocumentTopElem; };
