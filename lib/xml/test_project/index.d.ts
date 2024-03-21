interface TestProjectDocumentExpert extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  item_count: XmlElem<number>;
}

interface TestProjectDocumentGroupPerson extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  is_master: XmlElem<boolean>;
}

interface TestProjectDocumentGroup {
  id: XmlElem<string>;
  name: XmlElem<string>;
  persons: XmlMultiElem<TestProjectDocumentGroupPerson>;
}

interface TestProjectDocumentPurpose {
  id: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<string>;
  weight: XmlElem<number>;
  item_count: XmlElem<number>;
  _expanded: XmlElem<boolean>;
}

interface TestProjectDocumentItem {
  id: XmlElem<number>;
  title: XmlElem<string>;
  question_text: XmlElem<string>;
  type_id: XmlElem<string, typeof common.item_types>;
  question_points: XmlElem<number>;
  create_date: XmlElem<Date>;
  status: XmlElem<string, typeof common.item_status_types>;
  quota_correct: XmlElem<number>;
  quota_approved: XmlElem<number>;
  quota_rejected: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  purpose_id: XmlElem<string>;
}

interface TestProjectDocumentItemComment {
  id: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname(): unknown;
  item_id: XmlElem<number>;
  quota_correct: XmlElem<number>;
  status: XmlElem<string, typeof common.item_status_types>;
  comment: XmlElem<string>;
}

interface TestProjectDocumentVariant {
  id: XmlElem<string>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  status: XmlElem<string, typeof common.test_project_types>;
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  group_id: XmlElem<string>;
  angof_avg: XmlElem<number>;
  max_score: XmlElem<number>;
}

interface TestProjectDocumentReportPhi {
  min: XmlElem<number>;
  max: XmlElem<number>;
  bk_color: XmlElem<string>;
}

interface TestProjectDocumentReportDx {
  min: XmlElem<number>;
  max: XmlElem<number>;
  bk_color: XmlElem<string>;
}

interface TestProjectDocumentReportPercent {
  min: XmlElem<number>;
  max: XmlElem<number>;
  bk_color: XmlElem<string>;
}

interface TestProjectDocumentReportQuestionVariant {
  ident: XmlElem<string>;
  correct: XmlElem<string>;
  cor_value: XmlElem<string>;
  value: XmlElem<string>;
  text: XmlElem<string>;
  correct_num: XmlElem<number>;
  per_cent: XmlElem<number>;
  cor_text: XmlElem<string>;
  ws_score: XmlElem<string>;
  cond: XmlMultiElemObject<string>;
}

interface TestProjectDocumentReportQuestion {
  ident: XmlElem<string>;
  text: XmlElem<string>;
  qtype: XmlElem<string, typeof common.annals_item_types>;
  maxweight: XmlElem<string>;
  num: XmlElem<number>;
  correct_num: XmlElem<number>;
  per_cent: XmlElem<number>;
  phi: XmlElem<number>;
  dx: XmlElem<number>;
  state: XmlElem<string, typeof common.annals_states>;
  variants: XmlMultiElem<TestProjectDocumentReportQuestionVariant>;
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string>;
  section_id: XmlElem<string>;
  section_name: XmlElem<string>;
}

interface TestProjectDocumentReportLinesLinePoint {
  elem: XmlElem<number>;
  value: XmlElem<number>;
  tip_text: XmlElem<string>;
}

interface TestProjectDocumentReportLinesLine {
  name: XmlElem<string>;
  color: XmlElem<string>;
  weight: XmlElem<number>;
  points: XmlMultiElem<TestProjectDocumentReportLinesLinePoint>;
}

interface TestProjectDocumentReportLinesVLine {
  name: XmlElem<string>;
  elem: XmlElem<number>;
  color: XmlElem<string>;
  weight: XmlElem<number>;
}

interface TestProjectDocumentReportLines {
  title: XmlElem<string>;
  x_name: XmlElem<string>;
  y_name: XmlElem<string>;
  x_step: XmlElem<number>;
  line: XmlElem<TestProjectDocumentReportLinesLine>;
  v_line: XmlElem<TestProjectDocumentReportLinesVLine>;
}

interface TestProjectDocumentReportVariant {
  id: XmlElem<string>;
  name: XmlElem<string>;
  assessment_name: XmlElem<string>;
  create_date: XmlElem<Date>;
  status: XmlElem<string, typeof common.test_project_types>;
  num: XmlElem<number>;
  correct_num: XmlElem<number>;
  per_cent: XmlElem<number>;
  phi: XmlElem<number>;
  dx: XmlElem<number>;
  avg_score: XmlElem<number>;
  avg: XmlElem<number>;
  min_score: XmlElem<number>;
  min: XmlElem<number>;
  max_score: XmlElem<number>;
  max: XmlElem<number>;
}

interface TestProjectDocumentReport {
  variant_id: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  sort_type_id: XmlElem<string>;
  disp_answers: XmlElem<boolean>;
  disp_learning_type: XmlElem<string>;
  x_step: XmlElem<number>;
  phi: XmlElem<TestProjectDocumentReportPhi>;
  dx: XmlElem<TestProjectDocumentReportDx>;
  percent: XmlElem<TestProjectDocumentReportPercent>;
  questions: XmlMultiElem<TestProjectDocumentReportQuestion>;
  lines: XmlElem<TestProjectDocumentReportLines>;
  variants: XmlMultiElem<TestProjectDocumentReportVariant>;
}

type TestProjectDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: TestProjectDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.test_project_types>;
  experts: XmlMultiElem<TestProjectDocumentExpert>;
  groups: XmlMultiElem<TestProjectDocumentGroup>;
  purposes: XmlMultiElem<TestProjectDocumentPurpose>;
  items: XmlMultiElem<TestProjectDocumentItem>;
  item_comments: XmlMultiElem<TestProjectDocumentItemComment>;
  variants: XmlMultiElem<TestProjectDocumentVariant>;
  default_quota_correct: XmlElem<number>;
  default_quota_approved: XmlElem<number>;
  default_quota_rejected: XmlElem<number>;
  variant_counter: XmlElem<number>;
  get_variant_counter(): unknown;
  desc: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  report: XmlElem<TestProjectDocumentReport>;
  get_angof_avg(variantId: number, itemsSource: unknown): unknown;
  pul_list_file(): unknown;
  set_assessment_status(assessmentId: number, status: unknown): unknown;
};

type TestProjectDocument = XmlDocument & {
  TopElem: TestProjectDocumentTopElem;
  test_project: TestProjectDocumentTopElem;
  DocDesc(): unknown;
};
