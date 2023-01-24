type KeyPositionCatalogDocumentTopElem = XmlTopElem & { Doc: KeyPositionCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  position_id: XmlElem<number>;
  position_name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_code: XmlElem<string>;
  budget_period_id: XmlElem<number>;
  risk_perspective_id: XmlElem<number>;
  risk_levels: XmlElem<string>;
  key_position_threat_id: XmlElem<number>;
  career_reserve_type_id: XmlElem<number>;
  status: XmlElem<string>;
  is_open: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type KeyPositionCatalogDocument = XmlDocument & { TopElem: KeyPositionCatalogDocumentTopElem; };
