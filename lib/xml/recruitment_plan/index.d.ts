interface RecruitmentPlanDocumentBudgetPeriod {
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  budget_period_name: XmlElem<string | null>;
  quantity: XmlElem<number | null>;
  comment: XmlElem<string | null>;
}

interface RecruitmentPlanDocumentRecruitmentMethod {
  recruitment_method_id: XmlElem<number | null, RecruitmentMethodCatalogDocumentTopElem>;
}

interface RecruitmentPlanDocumentCandidateSource {
  candidate_source_id: XmlElem<number | null, CandidateSourceCatalogDocumentTopElem>;
}

interface RecruitmentPlanDocumentCoordinator extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  is_responsible: XmlElem<boolean>;
  comment: XmlElem<string | null>;
}

type RecruitmentPlanDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: RecruitmentPlanDocument;
  id: XmlElem<number | null>;
  position_type: XmlElem<string | null>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  position_name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  state: XmlElem<string, typeof common.recruitment_plan_state_types>;
  budget_period_id: XmlElem<number | null>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_group_id: XmlElem<number | null, SubdivisionGroupCatalogDocumentTopElem>;
  position_family_id: XmlElem<number | null, PositionFamilyCatalogDocumentTopElem>;
  grade_id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
  vacancy_type_id: XmlElem<number | null, VacancyTypeCatalogDocumentTopElem>;
  quantity: XmlElem<number | null>;
  budget_periods: XmlMultiElem<RecruitmentPlanDocumentBudgetPeriod | null>;
  recruitment_methods: XmlMultiElem<RecruitmentPlanDocumentRecruitmentMethod | null>;
  candidate_sources: XmlMultiElem<RecruitmentPlanDocumentCandidateSource | null>;
  coordinators: XmlMultiElem<RecruitmentPlanDocumentCoordinator | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type RecruitmentPlanDocument = XmlDocument & {
  TopElem: RecruitmentPlanDocumentTopElem;
  recruitment_plan: RecruitmentPlanDocumentTopElem;
  DocDesc(): string;
};
