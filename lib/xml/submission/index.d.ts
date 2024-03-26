type SubmissionDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: SubmissionDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  submission_type_id: XmlElem<number, SubmissionTypeCatalogDocumentTopElem>;
  submission_type_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  period_date_start: XmlElem<Date>;
  period_date_finish: XmlElem<Date>;
  date_start: XmlElem<Date>;
  date_finish: XmlElem<Date>;
  status_id: XmlElem<string, typeof common.submission_states>;
  decline_desc: XmlElem<string>;
  phase_name: XmlElem<string>;
  phase_id: XmlElem<number>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SubmissionDocument = XmlDocument & {
  TopElem: SubmissionDocumentTopElem;
  submission: SubmissionDocumentTopElem;
  DocDesc(): string;
};
