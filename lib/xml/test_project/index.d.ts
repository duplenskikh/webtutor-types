interface TestProjectDocumentExpert extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  item_count: XmlElem<number | null>;
}

interface TestProjectDocumentGroupPerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  is_master: XmlElem<boolean>;
}

interface TestProjectDocumentGroup {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  persons: XmlMultiElem<TestProjectDocumentGroupPerson | null>;
}

interface TestProjectDocumentPurpose {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  parent_id: XmlElem<string | null>;
  weight: XmlElem<number | null>;
  item_count: XmlElem<number | null>;
  _expanded: XmlElem<boolean | null>;
}

interface TestProjectDocumentItem {
  id: XmlElem<number | null>;
  title: XmlElem<string | null>;
  question_text: XmlElem<string | null>;
  type_id: XmlElem<string | null, typeof common.item_types>;
  question_points: XmlElem<number>;
  create_date: XmlElem<Date | null>;
  status: XmlElem<string, typeof common.item_status_types>;
  quota_correct: XmlElem<number | null>;
  quota_approved: XmlElem<number | null>;
  quota_rejected: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  purpose_id: XmlElem<string | null>;
}

interface TestProjectDocumentItemComment {
  id: XmlElem<string | null>;
  person_id: XmlElem<number | null>;
  person_fullname(): string;
  item_id: XmlElem<number | null>;
  quota_correct: XmlElem<number | null>;
  status: XmlElem<string, typeof common.item_status_types>;
  comment: XmlElem<string | null>;
}

interface TestProjectDocumentVariant {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  status: XmlElem<string | null, typeof common.test_project_types>;
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  group_id: XmlElem<string | null>;
  angof_avg: XmlElem<number | null>;
  max_score: XmlElem<number | null>;
}

interface TestProjectDocumentReportPhi {
  min: XmlElem<number | null>;
  max: XmlElem<number | null>;
  bk_color: XmlElem<string | null>;
}

interface TestProjectDocumentReportDx {
  min: XmlElem<number | null>;
  max: XmlElem<number | null>;
  bk_color: XmlElem<string | null>;
}

interface TestProjectDocumentReportPercent {
  min: XmlElem<number | null>;
  max: XmlElem<number | null>;
  bk_color: XmlElem<string | null>;
}

interface TestProjectDocumentReportQuestionVariant {
  ident: XmlElem<string | null>;
  correct: XmlElem<string | null>;
  cor_value: XmlElem<string | null>;
  value: XmlElem<string | null>;
  text: XmlElem<string | null>;
  correct_num: XmlElem<number>;
  per_cent: XmlElem<number>;
  cor_text: XmlElem<string | null>;
  ws_score: XmlElem<string | null>;
  cond: XmlMultiElemObject<string | null>;
}

interface TestProjectDocumentReportQuestion {
  ident: XmlElem<string | null>;
  text: XmlElem<string | null>;
  qtype: XmlElem<string | null, typeof common.annals_item_types>;
  maxweight: XmlElem<string | null>;
  num: XmlElem<number>;
  correct_num: XmlElem<number>;
  per_cent: XmlElem<number>;
  phi: XmlElem<number | null>;
  dx: XmlElem<number | null>;
  state: XmlElem<string | null, typeof common.annals_states>;
  variants: XmlMultiElem<TestProjectDocumentReportQuestionVariant | null>;
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string | null>;
  section_id: XmlElem<string | null>;
  section_name: XmlElem<string | null>;
}

interface TestProjectDocumentReportLinesLinePoint {
  elem: XmlElem<number | null>;
  value: XmlElem<number | null>;
  tip_text: XmlElem<string | null>;
}

interface TestProjectDocumentReportLinesLine {
  name: XmlElem<string | null>;
  color: XmlElem<string | null>;
  weight: XmlElem<number | null>;
  points: XmlMultiElem<TestProjectDocumentReportLinesLinePoint | null>;
}

interface TestProjectDocumentReportLinesVLine {
  name: XmlElem<string | null>;
  elem: XmlElem<number | null>;
  color: XmlElem<string | null>;
  weight: XmlElem<number | null>;
}

interface TestProjectDocumentReportLines {
  title: XmlElem<string | null>;
  x_name: XmlElem<string | null>;
  y_name: XmlElem<string | null>;
  x_step: XmlElem<number | null>;
  line: XmlElem<TestProjectDocumentReportLinesLine | null>;
  v_line: XmlElem<TestProjectDocumentReportLinesVLine | null>;
}

interface TestProjectDocumentReportVariant {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  assessment_name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  status: XmlElem<string | null, typeof common.test_project_types>;
  num: XmlElem<number>;
  correct_num: XmlElem<number>;
  per_cent: XmlElem<number>;
  phi: XmlElem<number | null>;
  dx: XmlElem<number | null>;
  avg_score: XmlElem<number | null>;
  avg: XmlElem<number | null>;
  min_score: XmlElem<number | null>;
  min: XmlElem<number | null>;
  max_score: XmlElem<number | null>;
  max: XmlElem<number | null>;
}

interface TestProjectDocumentReport {
  variant_id: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  sort_type_id: XmlElem<string>;
  disp_answers: XmlElem<boolean>;
  disp_learning_type: XmlElem<string>;
  x_step: XmlElem<number | null>;
  phi: XmlElem<TestProjectDocumentReportPhi | null>;
  dx: XmlElem<TestProjectDocumentReportDx | null>;
  percent: XmlElem<TestProjectDocumentReportPercent | null>;
  questions: XmlMultiElem<TestProjectDocumentReportQuestion | null>;
  lines: XmlElem<TestProjectDocumentReportLines | null>;
  variants: XmlMultiElem<TestProjectDocumentReportVariant | null>;
}

type TestProjectDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: TestProjectDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.test_project_types>;
  experts: XmlMultiElem<TestProjectDocumentExpert | null>;
  groups: XmlMultiElem<TestProjectDocumentGroup | null>;
  purposes: XmlMultiElem<TestProjectDocumentPurpose | null>;
  items: XmlMultiElem<TestProjectDocumentItem | null>;
  item_comments: XmlMultiElem<TestProjectDocumentItemComment | null>;
  variants: XmlMultiElem<TestProjectDocumentVariant | null>;
  default_quota_correct: XmlElem<number>;
  default_quota_approved: XmlElem<number>;
  default_quota_rejected: XmlElem<number>;
  variant_counter: XmlElem<number>;
  get_variant_counter(): unknown;
  desc: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  report: XmlElem<TestProjectDocumentReport | null>;
  get_angof_avg(variantId: number, itemsSource: unknown): unknown;
  pul_list_file(): unknown;
  set_assessment_status(assessmentId: number, status: unknown): unknown;
};

type TestProjectDocument = XmlDocument & {
  TopElem: TestProjectDocumentTopElem;
  test_project: TestProjectDocumentTopElem;
  DocDesc(): string;
};
