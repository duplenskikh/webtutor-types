type DnSubjectPlanCatalogDocumentTopElem = XmlTopElem & { Doc: DnSubjectPlanCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  subject: XmlElem<string>;
  program_discipline_id: XmlElem<number>;
  prog_disc_append_id: XmlElem<number>;
  educat_event_id: XmlElem<number>;
  hours: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnSubjectPlanCatalogDocument = XmlDocument & { TopElem: DnSubjectPlanCatalogDocumentTopElem; };
