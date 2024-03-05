type DnSubjectPlanCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  subject: XmlElem<string>;
  program_discipline_id: XmlElem<number, DnProgramDisciplCatalogDocumentTopElem>;
  prog_disc_append_id: XmlElem<number, DnProgDiscAppendCatalogDocumentTopElem>;
  educat_event_id: XmlElem<number, DnEducatEventCatalogDocumentTopElem>;
  hours: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
