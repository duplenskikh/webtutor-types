interface ViewTestByQuestionReportDocumentLearningQuestion {
  question_id: XmlElem<string>;
  quest_type: XmlElem<string>;
  quest_length: XmlElem<number>;
  result: XmlElem<string>;
  answer: XmlElem<string>;
  correct_answer: XmlElem<string>;
}

interface ViewTestByQuestionReportDocumentLearning {
  id: XmlElem<number>;
  start_usage_date: XmlElem<Date>;
  score: XmlElem<number>;
  state_id: XmlElem<number, typeof common.learning_states>;
  state_name: XmlElem<string>;
  max_score: XmlElem<number>;
  per_cent: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_code: XmlElem<string>;
  person_org_name: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_list_staff: XmlElem<string>;
  questions: XmlMultiElem<ViewTestByQuestionReportDocumentLearningQuestion>;
}

interface ViewTestByQuestionReportDocumentQuestion {
  question_id: XmlElem<string>;
  text: XmlElem<string>;
}

type ViewTestByQuestionReportDocumentTopElem = XmlTopElem & {
  Doc: ViewTestByQuestionReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_full_question_text: XmlElem<boolean>;
  text_length: XmlElem<number>;
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  last_assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  sort_type_id: XmlElem<string>;
  learnings: XmlMultiElem<ViewTestByQuestionReportDocumentLearning>;
  questions: XmlMultiElem<ViewTestByQuestionReportDocumentQuestion>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
  disp_learning_type: XmlElem<string>;
};

type ViewTestByQuestionReportDocument = XmlDocument & {
  TopElem: ViewTestByQuestionReportDocumentTopElem;
  view_test_by_question_report: ViewTestByQuestionReportDocumentTopElem;
  OnInit(): void;
};
