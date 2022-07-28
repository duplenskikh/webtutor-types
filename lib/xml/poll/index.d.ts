interface PollDocumentReportViewer extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

interface PollDocumentQuestionEntry {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  weight?: XmlElem<number>;
  bg_color?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface PollDocumentQuestionRowColumn {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  bg_color?: XmlElem<string>;
}
interface PollDocumentQuestionRow {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  columns?: XmlMultiElem<PollDocumentQuestionRowColumn>;
}
interface PollDocumentQuestion extends CustomElemsBase {
  class?: XmlElem<unknown>;
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
  entries?: XmlMultiElem<PollDocumentQuestionEntry>;
  rows?: XmlMultiElem<PollDocumentQuestionRow>;
  is_current?: XmlElem<boolean>;
  catalog_entry_id?: XmlElem<number>;
}

interface PollDocumentItemRowColumn {
  id?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  question_id?: XmlElem<number>;
  value?: XmlElem<string>;
  is_title?: XmlElem<boolean>;
}
interface PollDocumentItemRow {
  id?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  question_id?: XmlElem<number>;
  value?: XmlElem<string>;
  columns?: XmlMultiElem<PollDocumentItemRowColumn>;
  is_title?(): unknown;
}

interface PollDocumentItemCondition {
  id?: XmlElem<string>;
  question_id?: XmlElem<number>;
  entry_id?: XmlElem<number>;
  and_or?: XmlElem<string>;
}
interface PollDocumentItem {
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
  rows?: XmlMultiElem<PollDocumentItemRow>;
  conditions?: XmlMultiElem<PollDocumentItemCondition>;
}

type PollDocumentTopElem = XmlTopElem & { Doc: PollDocument } & 
  ObjectCodeNameBase &
  CourseExpertsBase &
  CustomElemsBase &
  AdminAccessBase &
  ProctoringBase &
  GameBonusBase &
  KnowledgePartsBase & {
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
  report_viewers?: XmlMultiElem<PollDocumentReportViewer>;
  is_multiple_select?(): boolean;
  columns_num?: XmlElem<number>;
  questions?: XmlMultiElem<PollDocumentQuestion>;
  items?: XmlMultiElem<PollDocumentItem>;
  allow_delete_poll_result?: XmlElem<boolean>;
  complete_message?: XmlElem<string>;
  adaptive_mode?(): unknown;
  access?: XmlElem<AccessDocBase>;
  complete_massege?: XmlElem<string>;
  processing_code?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  get_report_data?(): unknown;
  set_question_id?(): unknown;
  set_value?(): unknown;
}

type PollDocument = XmlDocument & { TopElem: PollDocumentTopElem; };
