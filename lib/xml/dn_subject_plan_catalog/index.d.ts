type DnSubjectPlanCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  subject: XmlElem<string | null>;
  program_discipline_id: XmlElem<number | null, DnProgramDisciplCatalogDocumentTopElem>;
  prog_disc_append_id: XmlElem<number | null, DnProgDiscAppendCatalogDocumentTopElem>;
  educat_event_id: XmlElem<number | null, DnEducatEventCatalogDocumentTopElem>;
  hours: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
