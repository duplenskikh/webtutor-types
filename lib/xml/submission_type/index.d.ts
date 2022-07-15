interface SubmissionTypeRecipient extends PersonFillingBase {
  collaborator_id?: XmlElem<number>;
}

interface SubmissionTypeSender extends PersonFillingBase {
  collaborator_id?: XmlElem<number>;
}

interface SubmissionTypePhase {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  period_date_start?: XmlElem<Date>;
  period_date_finish?: XmlElem<Date>;
  date_start?: XmlElem<Date>;
  date_finish?: XmlElem<Date>;
  collect_state?: XmlElem<string>;
}

interface SubmissionTypeFormFile extends InsertFileBase {
}

interface SubmissionTypeView extends DescBase {
  flag_delete_doc?: XmlElem<number>;
}

interface SubmissionTypeTopElem extends XmlTopElem<SubmissionTypeDocument>, CustomElemsBase {
  name?: XmlElem<string>;
  code?: XmlElem<string>;
  periodity_id?: XmlElem<string>;
  period_form?: XmlElem<number>;
  confirm_req?: XmlElem<boolean>;
  use_form?: XmlElem<boolean>;
  eval_prev_form?: XmlElem<string>;
  eval_post_form?: XmlElem<string>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  recipients?: XmlMultiElem<SubmissionTypeRecipient>;
  senders?: XmlMultiElem<SubmissionTypeSender>;
  phases?: XmlMultiElem<SubmissionTypePhase>;
  form_file?: XmlElem<SubmissionTypeFormFile>;
  view?: XmlElem<SubmissionTypeView>;
}

type SubmissionTypeDocument = XmlDocument<SubmissionTypeTopElem>;
