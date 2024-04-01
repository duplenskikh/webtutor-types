interface ViewQuestionByDepartReportDocumentDataLearningsAggregatedLearningAggregatedQuestion {
  ident: XmlElem<string>;
  maxweight: XmlElem<string>;
  text: XmlElem<string>;
  num: XmlElem<number>;
  correct_num: XmlElem<number>;
  per_cent(): unknown;
  incorrect_num: XmlElem<number>;
  incorrect_per_cent(): unknown;
  avg_score(): unknown;
  assessment_name: XmlElem<string>;
  section_name: XmlElem<string>;
}

interface ViewQuestionByDepartReportDocumentDataLearningsAggregatedLearningAggregated {
  id: XmlElem<number>;
  obj_id: XmlElem<number>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  obj_sub_path: XmlElem<string>;
  flag_expanded: XmlElem<boolean>;
  color: XmlElem<string>;
  num: XmlElem<number>;
  correct_num: XmlElem<number>;
  per_cent(): unknown;
  incorrect_num: XmlElem<number>;
  incorrect_per_cent(): unknown;
  avg_score(): unknown;
  questions: XmlMultiElem<ViewQuestionByDepartReportDocumentDataLearningsAggregatedLearningAggregatedQuestion>;
}

interface ViewQuestionByDepartReportDocumentDataLearningsAggregated {
  learning_aggregated: XmlElem<ViewQuestionByDepartReportDocumentDataLearningsAggregatedLearningAggregated>;
}

interface ViewQuestionByDepartReportDocumentDataLearningsAggregatedTotalLearningAggregatedTotal {
  id: XmlElem<number>;
  obj_id: XmlElem<number>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  obj_sub_path: XmlElem<string>;
  flag_expanded: XmlElem<boolean>;
  color: XmlElem<string>;
  num: XmlElem<number>;
  correct_num: XmlElem<number>;
  per_cent(): unknown;
  incorrect_num: XmlElem<number>;
  incorrect_per_cent(): unknown;
  avg_score(): unknown;
}

interface ViewQuestionByDepartReportDocumentDataLearningsAggregatedTotal {
  learning_aggregated_total: XmlElem<ViewQuestionByDepartReportDocumentDataLearningsAggregatedTotalLearningAggregatedTotal>;
}

interface ViewQuestionByDepartReportDocumentData {
  learnings_aggregated: XmlElem<ViewQuestionByDepartReportDocumentDataLearningsAggregated>;
  learnings_aggregated_total: XmlElem<ViewQuestionByDepartReportDocumentDataLearningsAggregatedTotal>;
}

type ViewQuestionByDepartReportDocumentTopElem = XmlTopElem & {
  Doc: ViewQuestionByDepartReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  show_people: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  disp_all_org_list: XmlElem<boolean>;
  view_sub_selector: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  disp_learning_type: XmlElem<string>;
  expanded_all: XmlElem<boolean>;
  data: XmlElem<ViewQuestionByDepartReportDocumentData>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
};

type ViewQuestionByDepartReportDocument = XmlDocument & {
  TopElem: ViewQuestionByDepartReportDocumentTopElem;
  view_question_by_depart_report: ViewQuestionByDepartReportDocumentTopElem;
  OnInit(): void;
};
