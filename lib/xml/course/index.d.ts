interface CourseDocumentPartActivityState {
  activity_state_id: XmlElem<number | null, ActivityStateCatalogDocumentTopElem>;
  score: XmlElem<number | null>;
  state_id: XmlElem<number | null, typeof common.learning_states>;
}

interface CourseDocumentPartCompletedParentPart {
  part_code: XmlElem<string | null>;
}

interface CourseDocumentPart {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string, typeof common.course_part_types>;
  max_score: XmlElem<number | null>;
  mastery_score: XmlElem<number | null>;
  mastery_score_relative: XmlElem<number | null>;
  url: XmlElem<string | null>;
  course_module_id: XmlElem<number | null, CourseModuleCatalogDocumentTopElem>;
  parent_part_code: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  win_width: XmlElem<number | null>;
  win_height: XmlElem<number | null>;
  disp_scrolling: XmlElem<boolean>;
  resizable: XmlElem<boolean>;
  is_mandatory: XmlElem<boolean>;
  is_visible: XmlElem<boolean>;
  max_time_allowed: XmlElem<string | null>;
  time_limit_action: XmlElem<string | null>;
  set_status_side: XmlElem<string>;
  score_factor: XmlElem<number>;
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  attempts_num: XmlElem<number>;
  start_day: XmlElem<number | null>;
  duration_day: XmlElem<number | null>;
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  activity_states: XmlMultiElem<CourseDocumentPartActivityState | null>;
  object_id: XmlElem<number | null>;
  cl_module_view: XmlElem<string | null>;
  completed_parent_parts: XmlMultiElem<CourseDocumentPartCompletedParentPart | null>;
  view: XmlElem<ViewConditionsBase | null>;
  launch: XmlElem<ViewConditionsBase | null>;
  cl_module_protocol: XmlElem<string | null>;
}

type CourseDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
EstimationLevelsBase &
CourseExpertsBase &
CourseSettingsBase &
CatalogListBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
ProctoringBase &
GameBonusBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: CourseDocument;
  desc: XmlElem<string | null>;
  status: XmlElem<string, typeof common.course_test_states>;
  win_width: XmlElem<number | null>;
  win_height: XmlElem<number | null>;
  disp_scrolling: XmlElem<boolean>;
  resizable: XmlElem<boolean>;
  struct_type: XmlElem<string>;
  library_url: XmlElem<string | null>;
  parts: XmlMultiElem<CourseDocumentPart | null>;
  course_finish_redirect: XmlElem<string>;
  course_finish_redirect_url: XmlElem<string | null>;
  base_url: XmlElem<string | null>;
  view_type: XmlElem<string>;
  mastery_score: XmlElem<number | null>;
  max_score: XmlElem<number>;
  score_sum_type: XmlElem<string>;
  score_sum_eval: XmlElem<string>;
  yourself_start: XmlElem<boolean>;
  finish_without_mastery_score: XmlElem<boolean>;
  auto_finish: XmlElem<boolean>;
  ignor_location: XmlElem<boolean>;
  start_after_finish: XmlElem<boolean>;
  no_url_info: XmlElem<boolean>;
  disp_folder_desc: XmlElem<boolean>;
  duration: XmlElem<number | null>;
  no_encoding_core_lesson: XmlElem<boolean | null>;
  not_use_default_notification: XmlElem<boolean | null>;
  default_response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  mandatory_fill_response: XmlElem<boolean>;
  allow_disp_response: XmlElem<boolean>;
  cl_course_id: XmlElem<number | null, ClCourseCatalogDocumentTopElem>;
  version: XmlElem<string | null>;
  price: XmlElem<number | null>;
  pwt_disp: XmlElem<boolean>;
  import_type: XmlElem<string | null>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  schedule: XmlElem<MsWeekScheduleBase | null>;
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  get_part_code(): string;
  Width(code: string): number;
  Height(code: string): number;
  DispScrolling(code: unknown): boolean;
  Resizable(code: unknown): boolean;
  get_workflow_id(): null;
  get_pwt_info(source: unknown): string;
  GetPartUrl(code: unknown, index: unknown): string;
  get_info(): null | Object;
  role_id: XmlMultiElemObject<number | null>;
};

type CourseDocument = XmlDocument & {
  TopElem: CourseDocumentTopElem;
  course: CourseDocumentTopElem;
  DocDesc(): string;
};
