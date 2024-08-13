interface DevelopmentPlanDocumentCustomExpert {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_type: XmlElem<number | null>;
  is_done: XmlElem<boolean>;
  responsible: XmlElem<boolean>;
  expert_code: XmlElem<string | null>;
}

interface DevelopmentPlanDocumentCustomComment {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  workflow_state: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  comment_date: XmlElem<Date | null>;
}

type DevelopmentPlanDocumentTopElem = XmlTopElem &
WorkflowDataBase &
SupplementaryQuestionsBase &
DevelopmentPlanDataBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DevelopmentPlanDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name(): string;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Оценивающий */
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Подразделение */
  department_id: XmlElem<number | null>;
  /** Название подразделения */
  department_name: XmlElem<string | null>;
  /** Признак завершенности */
  is_done: XmlElem<boolean>;
  /** Признак результирующей формы */
  is_final: XmlElem<boolean>;
  /** Признак готовности (для параллельной оценки) */
  is_ready: XmlElem<boolean>;
  flag_is_processed: XmlElem<boolean>;
  flag_appraise_department: XmlElem<boolean>;
  /** Оценочная процедура */
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  /** Планы оценки */
  assessment_plan_id: XmlElem<number | null, AssessmentPlanCatalogDocumentTopElem>;
  /** Карьерный резерв */
  career_reserve_id: XmlElem<number | null, CareerReserveCatalogDocumentTopElem>;
  /** Тип оценочной процедуры */
  assessment_appraise_type: XmlElem<string, typeof common.assessment_appraise_types>;
  /** Статус оценивающего */
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  /** Матрица ответственности */
  assessment_appraise_matrix_id: XmlElem<number | null, AssessmentAppraiseMatrixCatalogDocumentTopElem>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  temp: XmlElem<string | null>;
  /** Согласующие эксперты */
  custom_experts: XmlMultiElem<DevelopmentPlanDocumentCustomExpert | null>;
  custom_comments: XmlMultiElem<DevelopmentPlanDocumentCustomComment | null>;
  comment: XmlElem<string | null>;
  /** Дата последнего сохранения */
  appraise_date: XmlElem<Date | null>;
  /** Порядковый номер */
  index: XmlElem<number>;
};

type DevelopmentPlanDocument = XmlDocument & {
  TopElem: DevelopmentPlanDocumentTopElem;
  development_plan: DevelopmentPlanDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
