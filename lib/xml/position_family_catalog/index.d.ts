type PositionFamilyCatalogDocumentTopElem = XmlTopElem & { Doc: PositionFamilyCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_position_family_id: XmlElem<number>;
  is_dynamic: XmlElem<boolean>;
  bonus_profile_id: XmlElem<number>;
  competence_profile_id: XmlElem<number>;
  kpi_profile_id: XmlElem<number>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  subdivision_group_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PositionFamilyCatalogDocument = XmlDocument & { TopElem: PositionFamilyCatalogDocumentTopElem; };
