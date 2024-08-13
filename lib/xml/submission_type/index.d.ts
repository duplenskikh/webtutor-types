interface SubmissionTypeDocumentRecipient extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface SubmissionTypeDocumentSender extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface SubmissionTypeDocumentPhase {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  period_date_start: XmlElem<Date | null>;
  period_date_finish: XmlElem<Date | null>;
  date_start: XmlElem<Date | null>;
  date_finish: XmlElem<Date | null>;
  collect_state: XmlElem<string, typeof common.collect_states>;
}

type SubmissionTypeDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: SubmissionTypeDocument;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  periodity_id: XmlElem<string | null, typeof common.perioditys>;
  period_form: XmlElem<number | null>;
  recipients: XmlMultiElem<SubmissionTypeDocumentRecipient | null>;
  senders: XmlMultiElem<SubmissionTypeDocumentSender | null>;
  phases: XmlMultiElem<SubmissionTypeDocumentPhase | null>;
  confirm_req: XmlElem<boolean>;
  use_form: XmlElem<boolean>;
  eval_prev_form: XmlElem<string | null>;
  eval_post_form: XmlElem<string | null>;
  form_file: XmlElem<InsertFileBase | null>;
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SubmissionTypeDocument = XmlDocument & {
  TopElem: SubmissionTypeDocumentTopElem;
  submission_type: SubmissionTypeDocumentTopElem;
  DocDesc(): string;
};
