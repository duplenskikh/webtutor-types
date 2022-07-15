interface SubmissionView extends DescBase {
  submission_type_doc?: XmlElem<any>;
  fill_submission_type_doc?(): any;
}

interface SubmissionTopElem extends XmlTopElem<SubmissionDocument>, PersonFillingBase, FileListBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  submission_type_id?: XmlElem<number>;
  submission_type_name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  period_date_start?: XmlElem<Date>;
  period_date_finish?: XmlElem<Date>;
  date_start?: XmlElem<Date>;
  date_finish?: XmlElem<Date>;
  status_id?: XmlElem<string>;
  decline_desc?: XmlElem<string>;
  phase_name?: XmlElem<string>;
  phase_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<SubmissionView>;
}

type SubmissionDocument = XmlDocument<SubmissionTopElem>;
