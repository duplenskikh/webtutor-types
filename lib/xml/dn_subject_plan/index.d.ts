type DnSubjectPlanDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnSubjectPlanDocument;
  code: XmlElem<string | null>;
  subject: XmlElem<string | null>;
  program_discipline_id: XmlElem<number | null, DnProgramDisciplCatalogDocumentTopElem>;
  prog_disc_append_id: XmlElem<number | null, DnProgDiscAppendCatalogDocumentTopElem>;
  educat_event_id: XmlElem<number | null, DnEducatEventCatalogDocumentTopElem>;
  hours: XmlElem<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnSubjectPlanDocument = XmlDocument & {
  TopElem: DnSubjectPlanDocumentTopElem;
  dn_subject_plan: DnSubjectPlanDocumentTopElem;
  DocDesc(): string;
};
