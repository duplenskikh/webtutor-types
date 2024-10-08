interface AssessmentPlanDocumentAssessmentResultRecommend {
  assessment_result_recommend_id: XmlElem<number | null, AssessmentResultRecommendCatalogDocumentTopElem>;
  assessment_result_recommend_name: XmlElem<string | null>;
}

interface AssessmentPlanDocumentAppraisedPeriod {
  period_id: XmlElem<string | null>;
  period_name: XmlElem<string | null>;
  is_done: XmlElem<boolean | null>;
}

interface AssessmentPlanDocumentCustomComment {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  workflow_state: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  comment_date: XmlElem<Date | null>;
}

interface AssessmentPlanDocumentCustomExpert {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_type: XmlElem<number | null>;
  is_done: XmlElem<boolean>;
  responsible: XmlElem<boolean>;
  expert_code: XmlElem<string | null>;
}

interface AssessmentPlanDocumentExpert {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  is_custom: XmlElem<boolean>;
}

interface AssessmentPlanDocumentCustomField {
  /** Название */
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

type AssessmentPlanDocumentTopElem = XmlTopElem &
WorkflowDataBase &
SupplementaryQuestionsBase &
CustomElemsBase &
FileListBase &
AdminAccessBase & {
  Doc: AssessmentPlanDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Процедура оценки */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Оценивающий */
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Руководитель */
  boss_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Подразделение */
  department_id: XmlElem<number | null>;
  /** Название подразделения */
  department_name: XmlElem<string | null>;
  flag_appraise_department: XmlElem<boolean>;
  /** Объект оценки */
  assessment_object_type: XmlElem<string>;
  /** Тип процедуры */
  assessment_appraise_type: XmlElem<string | null, typeof common.assessment_appraise_types>;
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /** Признак завершения */
  is_done: XmlElem<boolean>;
  /** Интегральная оценка */
  integral_mark: XmlElem<number | null>;
  flag_is_processed: XmlElem<boolean>;
  /** Рекомендации */
  assessment_result_recommends: XmlMultiElem<AssessmentPlanDocumentAssessmentResultRecommend | null>;
  /** Сотрудник */
  workflow_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** План. дата завершения */
  workflow_end_date: XmlElem<Date | null>;
  /** Матрица ответственности */
  assessment_appraise_matrix_id: XmlElem<number | null, AssessmentAppraiseMatrixCatalogDocumentTopElem>;
  appraised_periods: XmlMultiElem<AssessmentPlanDocumentAppraisedPeriod | null>;
  /** Комментарии */
  custom_comments: XmlMultiElem<AssessmentPlanDocumentCustomComment | null>;
  /** Согласующие эксперты */
  custom_experts: XmlMultiElem<AssessmentPlanDocumentCustomExpert | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  temp: XmlElem<string | null>;
  fire_wf_action: XmlElem<string | null>;
  flag_expert_select: XmlElem<boolean>;
  experts: XmlMultiElem<AssessmentPlanDocumentExpert | null>;
  custom_fields: XmlMultiElem<AssessmentPlanDocumentCustomField | null>;
  index: XmlElem<number>;
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  period_start: XmlElem<Date | null>;
  period_end: XmlElem<Date | null>;
};

type AssessmentPlanDocument = XmlDocument & {
  TopElem: AssessmentPlanDocumentTopElem;
  assessment_plan: AssessmentPlanDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
