interface TestProjectExpert extends PersonFillingBase {
  person_id?: XmlElem<number>;
  item_count?: XmlElem<number>;
}

interface TestProjectGroupPerson extends PersonFillingBase {
  person_id?: XmlElem<number>;
  is_master?: XmlElem<boolean>;
}

interface TestProjectGroup {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  persons?: XmlMultiElem<TestProjectGroupPerson>;
}

interface TestProjectPurpose {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<string>;
  weight?: XmlElem<number>;
  item_count?: XmlElem<number>;
  _level?: XmlElem<number>;
  _expanded?: XmlElem<boolean>;
}

interface TestProjectItem {
  id?: XmlElem<number>;
  title?: XmlElem<string>;
  question_text?: XmlElem<string>;
  type_id?: XmlElem<string>;
  question_points?: XmlElem<number>;
  create_date?: XmlElem<Date>;
  status?: XmlElem<string>;
  quota_correct?: XmlElem<number>;
  quota_approved?: XmlElem<number>;
  quota_rejected?: XmlElem<number>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  purpose_id?: XmlElem<string>;
}

interface TestProjectItemComment {
  id?: XmlElem<string>;
  person_id?: XmlElem<number>;
  item_id?: XmlElem<number>;
  quota_correct?: XmlElem<number>;
  status?: XmlElem<string>;
  comment?: XmlElem<string>;
  person_fullname?(): any;
}

interface TestProjectVariant {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  status?: XmlElem<string>;
  assessment_id?: XmlElem<number>;
  group_id?: XmlElem<string>;
  angof_avg?: XmlElem<number>;
  max_score?: XmlElem<number>;
  learning_filter?: XmlElem<string>;
}

interface TestProjectReportQuestionVariant {
  ident?: XmlElem<string>;
  correct?: XmlElem<string>;
  cor_value?: XmlElem<string>;
  value?: XmlElem<string>;
  text?: XmlElem<string>;
  correct_num?: XmlElem<number>;
  per_cent?: XmlElem<number>;
  cor_text?: XmlElem<string>;
  ws_score?: XmlElem<string>;
  cond?: XmlMultiElem<string>;
}

interface TestProjectReportQuestion {
  ident?: XmlElem<string>;
  text?: XmlElem<string>;
  qtype?: XmlElem<string>;
  maxweight?: XmlElem<string>;
  num?: XmlElem<number>;
  correct_num?: XmlElem<number>;
  per_cent?: XmlElem<number>;
  phi?: XmlElem<number>;
  dx?: XmlElem<number>;
  state?: XmlElem<string>;
  phi_a?: XmlElem<number>;
  phi_b?: XmlElem<number>;
  phi_c?: XmlElem<number>;
  phi_d?: XmlElem<number>;
  avg?: XmlElem<number>;
  dx_doubly_sum?: XmlElem<number>;
  assessment_id?: XmlElem<number>;
  assessment_name?: XmlElem<string>;
  section_id?: XmlElem<string>;
  section_name?: XmlElem<string>;
  variants?: XmlMultiElem<TestProjectReportQuestionVariant>;
}

interface TestProjectReportLinePoint {
  elem?: XmlElem<number>;
  value?: XmlElem<number>;
  tip_text?: XmlElem<string>;
}

interface TestProjectReportLine {
  name?: XmlElem<string>;
  color?: XmlElem<string>;
  weight?: XmlElem<number>;
  points?: XmlMultiElem<TestProjectReportLinePoint>;
}

interface TestProjectReportVariant {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  assessment_name?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  status?: XmlElem<string>;
  num?: XmlElem<number>;
  correct_num?: XmlElem<number>;
  per_cent?: XmlElem<number>;
  phi?: XmlElem<number>;
  dx?: XmlElem<number>;
  avg_score?: XmlElem<number>;
  avg?: XmlElem<number>;
  min_score?: XmlElem<number>;
  min?: XmlElem<number>;
  max_score?: XmlElem<number>;
  max?: XmlElem<number>;
  phi_a?: XmlElem<number>;
  phi_b?: XmlElem<number>;
  phi_c?: XmlElem<number>;
  phi_d?: XmlElem<number>;
  dx_doubly_sum?: XmlElem<number>;
}

interface TestProjectReportPhi {
  min?: XmlElem<number>;
  max?: XmlElem<number>;
  bk_color?: XmlElem<string>;
}

interface TestProjectReportDx {
  min?: XmlElem<number>;
  max?: XmlElem<number>;
  bk_color?: XmlElem<string>;
}

interface TestProjectReportPercent {
  min?: XmlElem<number>;
  max?: XmlElem<number>;
  bk_color?: XmlElem<string>;
}

interface TestProjectReport {
  variant_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  sort_type_id?: XmlElem<string>;
  disp_answers?: XmlElem<boolean>;
  disp_learning_type?: XmlElem<string>;
  x_step?: XmlElem<number>;
  questions?: XmlMultiElem<TestProjectReportQuestion>;
  lines?: XmlMultiElem<TestProjectReportLine>;
  variants?: XmlMultiElem<TestProjectReportVariant>;
  phi?: XmlElem<TestProjectReportPhi>;
  dx?: XmlElem<TestProjectReportDx>;
  percent?: XmlElem<TestProjectReportPercent>;
}

interface TestProjectView extends DescBase {
  part_index?: XmlElem<number>;
  item_id?: XmlElem<number>;
  expert_id?: XmlElem<number>;
  group_id?: XmlElem<string>;
  variant_id?: XmlElem<string>;
  disp_items?: XmlElem<boolean>;
  disp_active_test_learnings?: XmlElem<boolean>;
  disp_color_settings?: XmlElem<boolean>;
}

interface TestProjectTopElem extends XmlTopElem<TestProjectDocument>, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  status?: XmlElem<string>;
  default_quota_correct?: XmlElem<number>;
  default_quota_approved?: XmlElem<number>;
  default_quota_rejected?: XmlElem<number>;
  variant_counter?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  experts?: XmlMultiElem<TestProjectExpert>;
  groups?: XmlMultiElem<TestProjectGroup>;
  purposes?: XmlMultiElem<TestProjectPurpose>;
  items?: XmlMultiElem<TestProjectItem>;
  item_comments?: XmlMultiElem<TestProjectItemComment>;
  variants?: XmlMultiElem<TestProjectVariant>;
  report?: XmlElem<TestProjectReport>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<TestProjectView>;
  get_variant_counter?(): any;
  get_angof_avg?(): any;
  pul_list_file?(): any;
  set_assessment_status?(): any;
}

type TestProjectDocument = XmlDocument<TestProjectTopElem>;
