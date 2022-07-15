interface DevelopmentPlanCustomExpert {
  person_id?: XmlElem<number>;
  is_done?: XmlElem<boolean>;
}

interface DevelopmentPlanCustomComment {
  person_id?: XmlElem<number>;
  workflow_state?: XmlElem<string>;
  comment?: XmlElem<string>;
  comment_date?: XmlElem<Date>;
}

interface DevelopmentPlanView {
  selector?: XmlElem<string>;
}

interface DevelopmentPlanTopElem extends XmlTopElem<DevelopmentPlanDocument>, WorkflowDataBase, SupplementaryQuestionsBase, DevelopmentPlanDataBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  expert_person_id?: XmlElem<number>;
  department_id?: XmlElem<number>;
  department_name?: XmlElem<string>;
  is_done?: XmlElem<boolean>;
  is_final?: XmlElem<boolean>;
  is_ready?: XmlElem<boolean>;
  flag_is_processed?: XmlElem<boolean>;
  flag_appraise_department?: XmlElem<boolean>;
  assessment_appraise_id?: XmlElem<number>;
  assessment_plan_id?: XmlElem<number>;
  career_reserve_id?: XmlElem<number>;
  assessment_appraise_type?: XmlElem<string>;
  status?: XmlElem<string>;
  assessment_appraise_matrix_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  temp?: XmlElem<string>;
  comment?: XmlElem<string>;
  appraise_date?: XmlElem<Date>;
  index?: XmlElem<number>;
  custom_experts?: XmlMultiElem<DevelopmentPlanCustomExpert>;
  custom_comments?: XmlMultiElem<DevelopmentPlanCustomComment>;
  view?: XmlElem<DevelopmentPlanView>;
}

type DevelopmentPlanDocument = XmlDocument<DevelopmentPlanTopElem>;
