interface PollReportViewer extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

interface PollQuestionRowColumn {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  bg_color?: XmlElem<string>;
}

interface PollQuestionRow {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  columns?: XmlMultiElem<PollQuestionRowColumn>;
}

interface PollQuestionEntriesEntry {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  weight?: XmlElem<number>;
  bg_color?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface PollQuestionEntries {
  entry?: XmlMultiElem<undefined>;
  entry?: XmlElem<PollQuestionEntriesEntry>;
}

interface PollQuestion extends CustomElemsBase {
  class?: XmlElem<Attr>;
  id?: XmlElem<number>;
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  is_in_table?: XmlElem<boolean>;
  show_header?: XmlElem<boolean>;
  required?: XmlElem<boolean>;
  catalog?: XmlElem<string>;
  add_comment?: XmlElem<boolean>;
  subtype?: XmlElem<number>;
  is_multiple?: XmlElem<boolean>;
  value_condition?: XmlElem<string>;
  completed?: XmlElem<boolean>;
  image_id?: XmlElem<number>;
  is_current?: XmlElem<boolean>;
  catalog_entry_id?: XmlElem<number>;
  rows?: XmlMultiElem<PollQuestionRow>;
  entries?: XmlElem<PollQuestionEntries>;
}

interface PollItemRowColumn {
  id?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  question_id?: XmlElem<number>;
  value?: XmlElem<string>;
  is_title?: XmlElem<boolean>;
}

interface PollItemRow {
  id?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  question_id?: XmlElem<number>;
  value?: XmlElem<string>;
  columns?: XmlMultiElem<PollItemRowColumn>;
  is_title?(): any;
}

interface PollItemCondition {
  id?: XmlElem<string>;
  question_id?: XmlElem<number>;
  entry_id?: XmlElem<number>;
  and_or?: XmlElem<string>;
}

interface PollItem {
  id?: XmlElem<string>;
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  question_id?: XmlElem<number>;
  required?: XmlElem<boolean>;
  resource_type?: XmlElem<string>;
  max_duration?: XmlElem<number>;
  preparation_time?: XmlElem<number>;
  prohibit_viewing?: XmlElem<boolean>;
  prohibit_overwriting?: XmlElem<boolean>;
  rows?: XmlMultiElem<PollItemRow>;
  conditions?: XmlMultiElem<PollItemCondition>;
}

interface PollViewFilter extends AuFtFilter {
}

interface PollView extends DescBase {
  filter?: XmlElem<PollViewFilter>;
}

interface PollTopElem extends XmlTopElem<PollDocument>, ObjectCodeNameBase, CourseExpertsBase, CustomElemsBase, AdminAccessBase, ProctoringBase, GameBonusBase, KnowledgePartsBase {
  class?: XmlElem<string>;
  poll_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
  completed?: XmlElem<boolean>;
  is_main?: XmlElem<boolean>;
  is_one_time?: XmlElem<boolean>;
  is_anonymous?: XmlElem<boolean>;
  show_report?: XmlElem<boolean>;
  show_comments_in_report?: XmlElem<boolean>;
  is_multiple_select?: XmlElem<boolean>;
  columns_num?: XmlElem<number>;
  allow_delete_poll_result?: XmlElem<boolean>;
  complete_message?: XmlElem<string>;
  view_templates?: XmlElem<MsViewTemplatesBase>;
  complete_massege?: XmlElem<string>;
  processing_code?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  report_viewers?: XmlMultiElem<PollReportViewer>;
  questions?: XmlMultiElem<PollQuestion>;
  items?: XmlMultiElem<PollItem>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<PollView>;
  adaptive_mode?(): any;
  get_report_data?(): any;
  set_question_id?(): any;
  set_value?(): any;
}

type PollDocument = XmlDocument<PollTopElem>;
