type CareerReserveCatalogDocumentTopElem = XmlTopElem & { Doc: CareerReserveCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_position: XmlElem<string>;
  start_date: XmlElem<Date>;
  plan_readiness_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  readiness_percent: XmlElem<number>;
  personnel_reserve_id: XmlElem<number>;
  position_type: XmlElem<string>;
  position_name: XmlElem<string>;
  position_id: XmlElem<number>;
  position_common_id: XmlElem<number>;
  subdivision_id: XmlElem<number>;
  development_programs_id: XmlMultiElem<number>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CareerReserveCatalogDocument = XmlDocument & { TopElem: CareerReserveCatalogDocumentTopElem; };
