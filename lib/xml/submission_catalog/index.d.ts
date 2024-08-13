type SubmissionCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  submission_type_id: XmlElem<number | null, SubmissionTypeCatalogDocumentTopElem>;
  submission_type_name: XmlElem<string | null>;
  period_date_start: XmlElem<Date | null>;
  period_date_finish: XmlElem<Date | null>;
  phase_name: XmlElem<string | null>;
  phase_id: XmlElem<number | null>;
  status_id: XmlElem<string, typeof common.submission_states>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
