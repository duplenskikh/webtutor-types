type DnSubjectPlanDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnSubjectPlanDocument;
  code: XmlElem<string>;
  subject: XmlElem<string>;
  program_discipline_id: XmlElem<number, DnProgramDisciplCatalogDocumentTopElem>;
  prog_disc_append_id: XmlElem<number, DnProgDiscAppendCatalogDocumentTopElem>;
  educat_event_id: XmlElem<number, DnEducatEventCatalogDocumentTopElem>;
  hours: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnSubjectPlanDocument = XmlDocument & {
  TopElem: DnSubjectPlanDocumentTopElem;
};
