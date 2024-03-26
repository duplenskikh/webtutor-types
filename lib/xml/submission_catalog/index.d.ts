type SubmissionCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  submission_type_id: XmlElem<number, SubmissionTypeCatalogDocumentTopElem>;
  submission_type_name: XmlElem<string>;
  period_date_start: XmlElem<Date>;
  period_date_finish: XmlElem<Date>;
  phase_name: XmlElem<string>;
  phase_id: XmlElem<number>;
  status_id: XmlElem<string, typeof common.submission_states>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
