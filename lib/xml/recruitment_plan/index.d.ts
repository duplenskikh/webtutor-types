interface RecruitmentPlanDocumentBudgetPeriod {
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  budget_period_name: XmlElem<string>;
  quantity: XmlElem<number>;
  comment: XmlElem<string>;
}

interface RecruitmentPlanDocumentRecruitmentMethod {
  recruitment_method_id: XmlElem<number, RecruitmentMethodCatalogDocumentTopElem>;
}

interface RecruitmentPlanDocumentCandidateSource {
  candidate_source_id: XmlElem<number, CandidateSourceCatalogDocumentTopElem>;
}

interface RecruitmentPlanDocumentCoordinator extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  is_responsible: XmlElem<boolean>;
  comment: XmlElem<string>;
}

type RecruitmentPlanDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: RecruitmentPlanDocument;
  id: XmlElem<number>;
  position_type: XmlElem<string>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  position_name: XmlElem<string>;
  comment: XmlElem<string>;
  state: XmlElem<string, typeof common.recruitment_plan_state_types>;
  budget_period_id: XmlElem<number>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subdivision_group_id: XmlElem<number, SubdivisionGroupCatalogDocumentTopElem>;
  position_family_id: XmlElem<number, PositionFamilyCatalogDocumentTopElem>;
  grade_id: XmlElem<number, GradeCatalogDocumentTopElem>;
  vacancy_type_id: XmlElem<number, VacancyTypeCatalogDocumentTopElem>;
  quantity: XmlElem<number>;
  budget_periods: XmlMultiElem<RecruitmentPlanDocumentBudgetPeriod>;
  recruitment_methods: XmlMultiElem<RecruitmentPlanDocumentRecruitmentMethod>;
  candidate_sources: XmlMultiElem<RecruitmentPlanDocumentCandidateSource>;
  coordinators: XmlMultiElem<RecruitmentPlanDocumentCoordinator>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type RecruitmentPlanDocument = XmlDocument & {
  TopElem: RecruitmentPlanDocumentTopElem;
  recruitment_plan: RecruitmentPlanDocumentTopElem;
  DocDesc(): string;
};
