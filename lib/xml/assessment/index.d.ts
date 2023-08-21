interface AssessmentSectionSelectionOrderingPoint {
  point_num: XmlElem<number>;
  item_num: XmlElem<number>;
  item_sum_num(): number;
  item_count: XmlElem<number>;
}

interface AssessmentSectionSelectionOrdering {
  order: XmlElem<string>;
  select_id: XmlElem<string>;
  select_num: XmlElem<number>;
  points: XmlMultiElem<AssessmentSectionSelectionOrderingPoint>;
}

interface AssessmentSectionRole {
  id: XmlElem<number>;
}

interface AssessmentSectionItemScale {
  scale_id: XmlElem<string>;
}

interface AssessmentSectionItem {
  id: XmlElem<number>;
  title: XmlElem<string>;
  question_points: XmlElem<number>;
  scales: XmlMultiElem<AssessmentSectionItemScale>;
}

interface AssessmentSection {
  id: XmlElem<number>;
  code: XmlElem<string>;
  title: XmlElem<string>;
  duration: XmlElem<number>;
  passing_score: XmlElem<number>;
  display_correct_answer: XmlElem<boolean>;
  not_display_feedback: XmlElem<boolean>;
  not_disp_last_attempt: XmlElem<boolean>;
  feedback_wrong: XmlElem<string>;
  feedback_correct: XmlElem<string>;
  rubric: XmlElem <RubricBase>;
  objectives: XmlElem <ObjectiveBase>;
  selection_ordering: XmlElem <AssessmentSectionSelectionOrdering>;
  items: XmlMultiElem<AssessmentSectionItem>;
  comment: XmlElem<string>;
  roles: XmlMultiElem<AssessmentSectionRole>;
}

interface AssessmentPlayer {
  type: XmlElem<string>;
  fit_screen: XmlElem<boolean>;
  position: XmlElem<string>;
  language: XmlElem<string>;
  send_type: XmlElem<string>;
  send_timer: XmlElem<number>;
  display_type: XmlElem<string>;
  rubric_display_type: XmlElem<string>;
  display_map: XmlElem<boolean>;
  navigate_map: XmlElem<boolean>;
  strict_navigation: XmlElem<boolean>;
  navigate_progress: XmlElem<boolean>;
  strict_timing: XmlElem<boolean>;
  accept_next: XmlElem<boolean>;
  lock_result: XmlElem<boolean>;
  connection_break: XmlElem<boolean>;
  url_params: XmlElem<string>;
  display_res_score: XmlElem<boolean>;
}

interface AssessmentScale {
  id: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
}

type AssessmentDocumentTopElem = XmlTopElem &
ProctoringBase &
CatalogListBase &
CourseExpertsBase &
FileListBaseFile &
CustomElemsBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
GameBonusBase &
EstimationLevelsBase &
ClLocalizationsBase &
AdminAccessBase & {
  Doc: AssessmentDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  title: XmlElem<string>;
  name(): string;
  resource_id: XmlElem<number>;
  status: XmlElem<string>;
  testing_system_id: XmlElem<number>;
  duration: XmlElem<number>;
  duration_days: XmlElem<number>;
  attempts_num: XmlElem<number>;
  passing_score: XmlElem<number>;
  use_scale_calculation: XmlElem<boolean>;
  test_finish_redirect: XmlElem<string>;
  test_finish_redirect_url: XmlElem<string>;
  activation_code: XmlElem<string>;
  not_display_feedback: XmlElem<boolean>;
  not_disp_last_attempt: XmlElem<boolean>;
  not_display_unfinished_score: XmlElem<boolean>;
  feedback_wrong: XmlElem<string>;
  feedback_correct: XmlElem<string>;
  feedback_passed: XmlElem<string>;
  feedback_failed: XmlElem<string>;
  use_launch_code: XmlElem<boolean>;
  not_sent_correct_answer: XmlElem<boolean>;
  rubric: XmlElem <RubricBase>;
  objectives: XmlElem <ObjectiveBase>;
  sections: XmlMultiElem<AssessmentSection>;
  certificate_type_id: XmlElem<number>;
  display_result: XmlElem<boolean>;
  is_adaptive_test: XmlElem<boolean>;
  display_correct_answer: XmlElem<boolean>;
  display_result_report: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  display_correct_answer_in_report: XmlElem<boolean>;
  display_answers_in_report: XmlElem<boolean>;
  proctoring_system_id: XmlElem<number>;
  external_type: XmlElem<string>;
  not_use_default_notification: XmlElem<boolean>;
  view_templates: XmlElem<unknown>;
  comment: XmlElem<string>;
  schedule: XmlElem<unknown>;
  access: XmlElem<AccessDocBase>;
  publish_url: XmlElem<string>;
  publish_date: XmlElem<Date>;
  template_url: XmlElem<string>;
  win_width: XmlElem<string>;
  win_height: XmlElem<string>;
  player: XmlElem <AssessmentPlayer>;
  scales: XmlMultiElem<AssessmentScale>;
  before_finish_eval: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  get_info(): null | Object;
  update_structure(): boolean;
  role_id: XmlMultiElem<number>;
};

type AssessmentDocument = XmlDocument & {
  TopElem: AssessmentDocumentTopElem
};
