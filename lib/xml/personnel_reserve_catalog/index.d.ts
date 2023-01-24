type PersonnelReserveCatalogDocumentTopElem = XmlTopElem & { Doc: PersonnelReserveCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  career_reserve_type_id: XmlElem<number>;
  exclusion_reason_id: XmlElem<number>;
  nomination_id: XmlElem<number>;
  development_potential_id: XmlElem<number>;
  efficiency_estimation_id: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  start_date: XmlElem<Date>;
  include_reserve_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PersonnelReserveCatalogDocument = XmlDocument & { TopElem: PersonnelReserveCatalogDocumentTopElem; };
