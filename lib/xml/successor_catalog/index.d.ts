type SuccessorCatalogDocumentTopElem = XmlTopElem & { Doc: SuccessorCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  key_position_id: XmlElem<number>;
  key_person_id: XmlElem<number>;
  key_person_fullname: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  budget_period_id: XmlElem<number>;
  readiness_level_id: XmlElem<number>;
  development_potential_id: XmlElem<number>;
  efficiency_estimation_id: XmlElem<number>;
  request_id: XmlElem<number>;
  status: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SuccessorCatalogDocument = XmlDocument & { TopElem: SuccessorCatalogDocumentTopElem; };
