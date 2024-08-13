type SubmissionDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: SubmissionDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  submission_type_id: XmlElem<number | null, SubmissionTypeCatalogDocumentTopElem>;
  submission_type_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  period_date_start: XmlElem<Date | null>;
  period_date_finish: XmlElem<Date | null>;
  date_start: XmlElem<Date | null>;
  date_finish: XmlElem<Date | null>;
  status_id: XmlElem<string, typeof common.submission_states>;
  decline_desc: XmlElem<string | null>;
  phase_name: XmlElem<string | null>;
  phase_id: XmlElem<number | null>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SubmissionDocument = XmlDocument & {
  TopElem: SubmissionDocumentTopElem;
  submission: SubmissionDocumentTopElem;
  DocDesc(): string;
};
