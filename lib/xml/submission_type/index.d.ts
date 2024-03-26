interface SubmissionTypeDocumentRecipient extends PersonFillingBase {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface SubmissionTypeDocumentSender extends PersonFillingBase {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface SubmissionTypeDocumentPhase {
  id: XmlElem<number>;
  name: XmlElem<string>;
  period_date_start: XmlElem<Date>;
  period_date_finish: XmlElem<Date>;
  date_start: XmlElem<Date>;
  date_finish: XmlElem<Date>;
  collect_state: XmlElem<string, typeof common.collect_states>;
}

type SubmissionTypeDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: SubmissionTypeDocument;
  name: XmlElem<string>;
  code: XmlElem<string>;
  periodity_id: XmlElem<string, typeof common.perioditys>;
  period_form: XmlElem<number>;
  recipients: XmlMultiElem<SubmissionTypeDocumentRecipient>;
  senders: XmlMultiElem<SubmissionTypeDocumentSender>;
  phases: XmlMultiElem<SubmissionTypeDocumentPhase>;
  confirm_req: XmlElem<boolean>;
  use_form: XmlElem<boolean>;
  eval_prev_form: XmlElem<string>;
  eval_post_form: XmlElem<string>;
  form_file: XmlElem<InsertFileBase>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SubmissionTypeDocument = XmlDocument & {
  TopElem: SubmissionTypeDocumentTopElem;
  submission_type: SubmissionTypeDocumentTopElem;
  DocDesc(): string;
};
