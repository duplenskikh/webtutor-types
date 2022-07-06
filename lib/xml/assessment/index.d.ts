interface IWTAssessmentSectionSelectionOrderingPoint {
  point_num?: XmlElem<number>;
  item_num?: XmlElem<number>;
  item_sum_num?(): number;
  item_count?: XmlElem<number>;
}

interface IWTAssessmentSectionSelectionOrdering {
  order?: XmlElem<string>;
  select_id?: XmlElem<string>;
  select_num?: XmlElem<number>;
  points?: XmlMultiElem<IWTAssessmentSectionSelectionOrderingPoint>;
}

interface IWTAssessmentSectionRole {
  id?: XmlElem<number>;
}

interface IWTAssessmentSectionItemScale {
  scale_id?: XmlElem<string>;
}

interface IWTAssessmentSectionItem {
  id?: XmlElem<number>;
  title?: XmlElem<string>;
  question_points?: XmlElem<number>;
  scales?: XmlMultiElem<IWTAssessmentSectionItemScale>;
}

interface IWTAssessmentSection {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  title?: XmlElem<string>;
  duration?: XmlElem<number>;
  passing_score?: XmlElem<number>;
  display_correct_answer?: XmlElem<boolean>;
  not_display_feedback?: XmlElem<boolean>;
  not_disp_last_attempt?: XmlElem<boolean>;
  feedback_wrong?: XmlElem<string>;
  feedback_correct?: XmlElem<string>;
  rubric?: XmlElem<IWTRubricBase>;
  objectives?: XmlElem<IWTObjectiveBase>;
  selection_ordering?: XmlElem<IWTAssessmentSectionSelectionOrdering>;
  items?: XmlMultiElem<IWTAssessmentSectionItem>;
  comment?: XmlElem<string>;
  roles?: XmlMultiElem<IWTAssessmentSectionRole>;
}

interface IWTAssessmentPlayer {
  type?: XmlElem<string>;
  fit_screen?: XmlElem<boolean>;
  position?: XmlElem<string>;
  language?: XmlElem<string>;
  send_type?: XmlElem<string>;
  send_timer?: XmlElem<number>;
  display_type?: XmlElem<string>;
  rubric_display_type?: XmlElem<string>;
  display_map?: XmlElem<boolean>;
  navigate_map?: XmlElem<boolean>;
  strict_navigation?: XmlElem<boolean>;
  navigate_progress?: XmlElem<boolean>;
  strict_timing?: XmlElem<boolean>;
  accept_next?: XmlElem<boolean>;
  lock_result?: XmlElem<boolean>;
  connection_break?: XmlElem<boolean>;
  url_params?: XmlElem<string>;
  display_res_score?: XmlElem<boolean>;
}

interface IWTAssessmentScale {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface AssessmentTopElem extends XmlTopElem<AssessmentDocument>,
  IWTProctoringBase,
  IWTCatalogListBase,
  // <INHERIT TYPE="course_experts_base"/>,
  IWTFileListBase,
  IWTCustomElemsBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTGameBonusBase,
  // <INHERIT TYPE="estimation_levels_base"/>,
  // <INHERIT TYPE="cl_localizations_base"/>,
  IWTAdminAccessBase
{
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  title?: XmlElem<string>;
  name?(): string;
  resource_id?: XmlElem<number>;
  status?: XmlElem<string>;
  testing_system_id?: XmlElem<number>;
  duration?: XmlElem<number>;
  duration_days?: XmlElem<number>;
  attempts_num?: XmlElem<number>;
  passing_score?: XmlElem<number>;
  use_scale_calculation?: XmlElem<boolean>;
  test_finish_redirect?: XmlElem<string>;
  test_finish_redirect_url?: XmlElem<string>;
  activation_code?: XmlElem<string>;
  not_display_feedback?: XmlElem<boolean>;
  not_disp_last_attempt?: XmlElem<boolean>;
  not_display_unfinished_score?: XmlElem<boolean>;
  feedback_wrong?: XmlElem<string>;
  feedback_correct?: XmlElem<string>;
  feedback_passed?: XmlElem<string>;
  feedback_failed?: XmlElem<string>;
  use_launch_code?: XmlElem<boolean>;
  not_sent_correct_answer?: XmlElem<boolean>;
  rubric?: XmlElem<IWTRubricBase>;
  objectives?: XmlElem<IWTObjectiveBase>;
  sections?: XmlMultiElem<IWTAssessmentSection>;
  certificate_type_id?: XmlElem<number>;
  display_result?: XmlElem<boolean>;
  is_adaptive_test?: XmlElem<boolean>;
  display_correct_answer?: XmlElem<boolean>;
  display_result_report?: XmlElem<boolean>;
  is_open?: XmlElem<boolean>;
  display_correct_answer_in_report?: XmlElem<boolean>;
  display_answers_in_report?: XmlElem<boolean>;
  proctoring_system_id?: XmlElem<number>;
  external_type?: XmlElem<string>;
  not_use_default_notification?: XmlElem<boolean>;
  // view_templates?: XmlElem<ms_view_templates_base>;
  comment?: XmlElem<string>;
  // <schedule TITLE="const=gzh99r7he8">
  //   <INHERIT TYPE="ms_week_schedule_base"/>
  // </schedule>
  access?: XmlElem<IWTAccessDocBase>;
  publish_url?: XmlElem<string>;
  publish_date?: XmlElem<Date>;
  template_url?: XmlElem<string>;
  win_width?: XmlElem<string>;
  win_height?: XmlElem<string>;
  player?: XmlElem<IWTAssessmentPlayer>;
  scales?: XmlMultiElem<IWTAssessmentScale>;
  before_finish_eval?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  get_info?(): null | Object;
  update_structure?(): boolean;
  role_id?: XmlMultiElem<number>;
}

type AssessmentDocument = XmlDocument<AssessmentTopElem>;
