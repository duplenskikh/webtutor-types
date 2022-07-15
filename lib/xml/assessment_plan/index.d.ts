interface AssessmentPlanAssessmentResultRecommend {
  assessment_result_recommend_id?: XmlElem<number>;
  assessment_result_recommend_name?: XmlElem<string>;
}

interface AssessmentPlanAppraisedPeriod {
  period_id?: XmlElem<string>;
  period_name?: XmlElem<string>;
  is_done?: XmlElem<boolean>;
}

interface AssessmentPlanCustomComment {
  person_id?: XmlElem<number>;
  workflow_state?: XmlElem<string>;
  comment?: XmlElem<string>;
  comment_date?: XmlElem<Date>;
}

interface AssessmentPlanCustomExpert {
  person_id?: XmlElem<number>;
  person_type?: XmlElem<number>;
  is_done?: XmlElem<boolean>;
  responsible?: XmlElem<boolean>;
}

interface AssessmentPlanKilledPa {
  pa_id?: XmlElem<number>;
}

interface AssessmentPlanParticipant {
  participant_id?: XmlElem<number>;
  pa_id?: XmlElem<number>;
  expert_person_id?: XmlElem<number>;
  expert_person_fullname?: XmlElem<string>;
  status?: XmlElem<string>;
  assessment_appraise_type?: XmlElem<string>;
  is_done?: XmlElem<boolean>;
  is_ready?: XmlElem<boolean>;
}

interface AssessmentPlanExpert {
  person_id?: XmlElem<number>;
  status?: XmlElem<string>;
  is_custom?: XmlElem<boolean>;
}

interface AssessmentPlanCustomField {
  name?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface AssessmentPlanView {
  selector?: XmlElem<string>;
  flag_count?: XmlElem<number>;
}

interface AssessmentPlanTopElem extends XmlTopElem<AssessmentPlanDocument>, WorkflowDataBase, SupplementaryQuestionsBase, CustomElemsBase, AdminAccessBase {
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
  assessment_appraise_matrix_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  temp?: XmlElem<string>;
  fire_wf_action?: XmlElem<string>;
  flag_expert_select?: XmlElem<boolean>;
  index?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
  budget_period_id?: XmlElem<number>;
  period_start?: XmlElem<Date>;
  period_end?: XmlElem<Date>;
  assessment_result_recommends?: XmlMultiElem<AssessmentPlanAssessmentResultRecommend>;
  appraised_periods?: XmlMultiElem<AssessmentPlanAppraisedPeriod>;
  custom_comments?: XmlMultiElem<AssessmentPlanCustomComment>;
  custom_experts?: XmlMultiElem<AssessmentPlanCustomExpert>;
  killed_pas?: XmlMultiElem<AssessmentPlanKilledPa>;
  participants?: XmlMultiElem<AssessmentPlanParticipant>;
  experts?: XmlMultiElem<AssessmentPlanExpert>;
  custom_fields?: XmlMultiElem<AssessmentPlanCustomField>;
  view?: XmlElem<AssessmentPlanView>;
}

type AssessmentPlanDocument = XmlDocument<AssessmentPlanTopElem>;
