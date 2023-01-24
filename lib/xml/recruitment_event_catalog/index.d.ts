type RecruitmentEventCatalogDocumentTopElem = XmlTopElem & { Doc: RecruitmentEventCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  vacancy_id: XmlElem<number>;
  estaff_event_type_id: XmlElem<number>;
  estaff_event_type_status_id: XmlElem<number>;
  recruitment_system_id: XmlElem<number>;
  site_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type RecruitmentEventCatalogDocument = XmlDocument & { TopElem: RecruitmentEventCatalogDocumentTopElem; };
