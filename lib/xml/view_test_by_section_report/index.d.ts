interface ViewTestBySectionReportDocumentReportAssessmentsAssessmentSection {
  section_id: XmlElem<string>;
  title: XmlElem<string>;
  sum: XmlElem<number>;
  count: XmlElem<number>;
  avg_max_score: XmlElem<number>;
  duration: XmlElem<number>;
}

interface ViewTestBySectionReportDocumentReportAssessmentsAssessmentPersonSection {
  section_id: XmlElem<string>;
  score: XmlElem<string>;
  question_count: XmlElem<number>;
  question_right_count: XmlElem<number>;
  question_wrong_count: XmlElem<number>;
  max_score: XmlElem<number>;
}

interface ViewTestBySectionReportDocumentReportAssessmentsAssessmentPerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_code: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_list_staff: XmlElem<string>;
  assessment_max_score: XmlElem<number>;
  assessment_question_count: XmlElem<number>;
  assessment_question_right_count: XmlElem<number>;
  assessment_question_wrong_count: XmlElem<number>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  duration: XmlElem<number>;
  score: XmlElem<number>;
  sections: XmlMultiElem<ViewTestBySectionReportDocumentReportAssessmentsAssessmentPersonSection>;
}

interface ViewTestBySectionReportDocumentReportAssessmentsAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string>;
  sections: XmlMultiElem<ViewTestBySectionReportDocumentReportAssessmentsAssessmentSection>;
  persons: XmlMultiElem<ViewTestBySectionReportDocumentReportAssessmentsAssessmentPerson>;
}

interface ViewTestBySectionReportDocumentReportAssessments {
  assessment: XmlElem<ViewTestBySectionReportDocumentReportAssessmentsAssessment>;
}

type ViewTestBySectionReportDocumentTopElem = XmlTopElem & {
  Doc: ViewTestBySectionReportDocument;
  is_minimized: XmlElem<boolean>;
  report_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  disp_person_list_staff: XmlElem<boolean>;
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  date_start: XmlElem<Date>;
  date_end: XmlElem<Date>;
  section_number: XmlElem<number>;
  report_assessments: XmlElem<ViewTestBySectionReportDocumentReportAssessments>;
};

type ViewTestBySectionReportDocument = XmlDocument & {
  TopElem: ViewTestBySectionReportDocumentTopElem;
  view_test_by_section_report: ViewTestBySectionReportDocumentTopElem;
  OnInit(): void;
};
