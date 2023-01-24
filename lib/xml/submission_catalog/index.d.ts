type SubmissionCatalogDocumentTopElem = XmlTopElem & { Doc: SubmissionCatalogDocument } & 
PersonFillingBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  submission_type_id: XmlElem<number>;
  submission_type_name: XmlElem<string>;
  period_date_start: XmlElem<Date>;
  period_date_finish: XmlElem<Date>;
  phase_name: XmlElem<string>;
  phase_id: XmlElem<number>;
  status_id: XmlElem<string>;
  person_id: XmlElem<number>;
}

type SubmissionCatalogDocument = XmlDocument & { TopElem: SubmissionCatalogDocumentTopElem; };
