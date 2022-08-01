interface RecruitmentPlanDocumentBudgetPeriod {
  budget_period_id?: XmlElem<number>;
  budget_period_name?: XmlElem<string>;
  quantity?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface RecruitmentPlanDocumentRecruitmentMethod {
  recruitment_method_id?: XmlElem<number>;
}

interface RecruitmentPlanDocumentCandidateSource {
  candidate_source_id?: XmlElem<number>;
}

interface RecruitmentPlanDocumentCoordinator extends PersonFillingBase {
  person_id?: XmlElem<number>;
  is_native?: XmlElem<boolean>;
  boss_type_id?: XmlElem<number>;
  is_responsible?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}

type RecruitmentPlanDocumentTopElem = XmlTopElem & { Doc: RecruitmentPlanDocument } & 
FileListBase &
CustomElemsBase &
AdminAccessBase & {
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
  budget_periods?: XmlMultiElem<RecruitmentPlanDocumentBudgetPeriod>;
  recruitment_methods?: XmlMultiElem<RecruitmentPlanDocumentRecruitmentMethod>;
  candidate_sources?: XmlMultiElem<RecruitmentPlanDocumentCandidateSource>;
  coordinators?: XmlMultiElem<RecruitmentPlanDocumentCoordinator>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type RecruitmentPlanDocument = XmlDocument & { TopElem: RecruitmentPlanDocumentTopElem; };
