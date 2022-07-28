interface AssessmentPlanDocumentAssessmentResultRecommend {
  assessment_result_recommend_id?: XmlElem<number>;
  assessment_result_recommend_name?: XmlElem<string>;
}

interface AssessmentPlanDocumentAppraisedPeriod {
  period_id?: XmlElem<string>;
  period_name?: XmlElem<string>;
  is_done?: XmlElem<boolean>;
}

interface AssessmentPlanDocumentCustomComment {
  person_id?: XmlElem<number>;
  workflow_state?: XmlElem<string>;
  comment?: XmlElem<string>;
  comment_date?: XmlElem<Date>;
}

interface AssessmentPlanDocumentCustomExpert {
  person_id?: XmlElem<number>;
  person_type?: XmlElem<number>;
  is_done?: XmlElem<boolean>;
  responsible?: XmlElem<boolean>;
}

interface AssessmentPlanDocumentExpert {
  person_id?: XmlElem<number>;
  status?: XmlElem<string>;
  is_custom?: XmlElem<boolean>;
}

interface AssessmentPlanDocumentCustomField {
  name?: XmlElem<string>;
  value?: XmlElem<string>;
}

type AssessmentPlanDocumentTopElem = XmlTopElem & { Doc: AssessmentPlanDocument } & 
  WorkflowDataBase &
  SupplementaryQuestionsBase &
  CustomElemsBase &
  AdminAccessBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  assessment_appraise_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  expert_person_id?: XmlElem<number>;
  boss_id?: XmlElem<number>;
  department_id?: XmlElem<number>;
  department_name?: XmlElem<string>;
  flag_appraise_department?: XmlElem<boolean>;
  assessment_object_type?: XmlElem<string>;
  assessment_appraise_type?: XmlElem<string>;
  status?: XmlElem<string>;
  is_done?: XmlElem<boolean>;
  integral_mark?: XmlElem<number>;
  flag_is_processed?: XmlElem<boolean>;
  assessment_result_recommends?: XmlMultiElem<AssessmentPlanDocumentAssessmentResultRecommend>;
  assessment_appraise_matrix_id?: XmlElem<number>;
  appraised_periods?: XmlMultiElem<AssessmentPlanDocumentAppraisedPeriod>;
  custom_comments?: XmlMultiElem<AssessmentPlanDocumentCustomComment>;
  custom_experts?: XmlMultiElem<AssessmentPlanDocumentCustomExpert>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  temp?: XmlElem<string>;
  fire_wf_action?: XmlElem<string>;
  flag_expert_select?: XmlElem<boolean>;
  experts?: XmlMultiElem<AssessmentPlanDocumentExpert>;
  custom_fields?: XmlMultiElem<AssessmentPlanDocumentCustomField>;
  index?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
  budget_period_id?: XmlElem<number>;
  period_start?: XmlElem<Date>;
  period_end?: XmlElem<Date>;
}

type AssessmentPlanDocument = XmlDocument & { TopElem: AssessmentPlanDocumentTopElem; };
