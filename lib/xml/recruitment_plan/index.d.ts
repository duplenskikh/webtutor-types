interface RecruitmentPlanBudgetPeriod {
  budget_period_id?: XmlElem<number>;
  budget_period_name?: XmlElem<string>;
  quantity?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface RecruitmentPlanRecruitmentMethod {
  recruitment_method_id?: XmlElem<number>;
}

interface RecruitmentPlanCandidateSource {
  candidate_source_id?: XmlElem<number>;
}

interface RecruitmentPlanCoordinator extends PersonFillingBase {
  person_id?: XmlElem<number>;
  is_native?: XmlElem<boolean>;
  boss_type_id?: XmlElem<number>;
  is_responsible?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}

interface RecruitmentPlanTopElem extends XmlTopElem<RecruitmentPlanDocument>, FileListBase, CustomElemsBase, AdminAccessBase {
  position_type?: XmlElem<string>;
  position_common_id?: XmlElem<number>;
  position_name?: XmlElem<string>;
  comment?: XmlElem<string>;
  state?: XmlElem<string>;
  budget_period_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  subdivision_group_id?: XmlElem<number>;
  position_family_id?: XmlElem<number>;
  grade_id?: XmlElem<number>;
  vacancy_type_id?: XmlElem<number>;
  quantity?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  budget_periods?: XmlMultiElem<RecruitmentPlanBudgetPeriod>;
  recruitment_methods?: XmlMultiElem<RecruitmentPlanRecruitmentMethod>;
  candidate_sources?: XmlMultiElem<RecruitmentPlanCandidateSource>;
  coordinators?: XmlMultiElem<RecruitmentPlanCoordinator>;
  access?: XmlElem<AccessDocBase>;
}

type RecruitmentPlanDocument = XmlDocument<RecruitmentPlanTopElem>;
