interface PollDocumentReportViewer extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface PollDocumentQuestionEntry {
  id: XmlElem<number | null>;
  value: XmlElem<string | null>;
  weight: XmlElem<number | null>;
  bg_color: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
}

interface PollDocumentQuestionRowColumn {
  id: XmlElem<number | null>;
  value: XmlElem<string | null>;
  bg_color: XmlElem<string | null>;
}

interface PollDocumentQuestionRow {
  id: XmlElem<number | null>;
  value: XmlElem<string | null>;
  bg_color: XmlElem<string | null>;
  columns: XmlMultiElem<PollDocumentQuestionRowColumn | null>;
}

interface PollDocumentQuestion extends CustomElemsBase {
  class: XmlElem<unknown | null>;
  id: XmlElem<number | null>;
  type: XmlElem<string, typeof common.poll_types>;
  title: XmlElem<string | null>;
  is_in_table: XmlElem<boolean | null>;
  show_header: XmlElem<boolean | null>;
  required: XmlElem<boolean | null>;
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  add_comment: XmlElem<boolean | null>;
  subtype: XmlElem<number>;
  is_multiple: XmlElem<boolean | null>;
  value_condition: XmlElem<string | null>;
  completed: XmlElem<boolean>;
  image_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  entries: XmlMultiElem<PollDocumentQuestionEntry | null>;
  rows: XmlMultiElem<PollDocumentQuestionRow | null>;
  is_current: XmlElem<boolean>;
  catalog_entry_id: XmlElem<number | null>;
}

interface PollDocumentItemRowColumn {
  id: XmlElem<string | null>;
  bg_color: XmlElem<string | null>;
  question_id: XmlElem<number | null>;
  value: XmlElem<string | null>;
  is_title: XmlElem<boolean | null>;
}

interface PollDocumentItemRow {
  id: XmlElem<string | null>;
  bg_color: XmlElem<string | null>;
  question_id: XmlElem<number | null>;
  value: XmlElem<string | null>;
  columns: XmlMultiElem<PollDocumentItemRowColumn | null>;
  is_title(): boolean;
}

interface PollDocumentItemCondition {
  id: XmlElem<string | null>;
  question_id: XmlElem<number | null>;
  entry_id: XmlElem<number | null>;
  and_or: XmlElem<string>;
}

interface PollDocumentItem {
  id: XmlElem<string | null>;
  type: XmlElem<string, typeof common.poll_item_types>;
  title: XmlElem<string | null>;
  question_id: XmlElem<number | null>;
  required: XmlElem<boolean>;
  resource_type: XmlElem<string | null, typeof common.resource_types>;
  max_duration: XmlElem<number | null>;
  preparation_time: XmlElem<number | null>;
  prohibit_viewing: XmlElem<boolean | null>;
  prohibit_overwriting: XmlElem<boolean | null>;
  rows: XmlMultiElem<PollDocumentItemRow | null>;
  conditions: XmlMultiElem<PollDocumentItemCondition | null>;
}

type PollDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CourseExpertsBase &
CustomElemsBase &
AdminAccessBase &
ProctoringBase &
GameBonusBase &
KnowledgePartsBase & {
  Doc: PollDocument;
  class: XmlElem<string | null>;
  poll_id: XmlElem<number | null>;
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  completed: XmlElem<boolean>;
  is_main: XmlElem<boolean>;
  is_one_time: XmlElem<boolean>;
  is_anonymous: XmlElem<boolean>;
  show_report: XmlElem<boolean>;
  show_comments_in_report: XmlElem<boolean>;
  report_viewers: XmlMultiElem<PollDocumentReportViewer | null>;
  is_multiple_select: XmlElem<boolean>;
  columns_num: XmlElem<number>;
  questions: XmlMultiElem<PollDocumentQuestion | null>;
  items: XmlMultiElem<PollDocumentItem | null>;
  allow_delete_poll_result: XmlElem<boolean | null>;
  complete_message: XmlElem<string | null>;
  view_templates: XmlElem<MsViewTemplatesBase | null>;
  adaptive_mode(): unknown;
  access: XmlElem<AccessDocBase | null>;
  complete_massege: XmlElem<string | null>;
  processing_code: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
  get_report_data(): unknown;
  set_question_id(fldQuestionIdTarget: unknown, fldItem: unknown, itemType: string, isNew: boolean): unknown;
  set_value(fldValueTarget: unknown): boolean;
};

type PollDocument = XmlDocument & {
  TopElem: PollDocumentTopElem;
  poll: PollDocumentTopElem;
  OnInit(): void;
  OnCreate(): void;
  DocDesc(): string;
};
