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
  code: XmlElem<string | null>;
  name(): string;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  department_id: XmlElem<number | null>;
  department_name: XmlElem<string | null>;
  is_done: XmlElem<boolean>;
  is_final: XmlElem<boolean>;
  is_ready: XmlElem<boolean>;
  flag_is_processed: XmlElem<boolean>;
  flag_appraise_department: XmlElem<boolean>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  assessment_plan_id: XmlElem<number | null, AssessmentPlanCatalogDocumentTopElem>;
  career_reserve_id: XmlElem<number | null, CareerReserveCatalogDocumentTopElem>;
  assessment_appraise_type: XmlElem<string, typeof common.assessment_appraise_types>;
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  assessment_appraise_matrix_id: XmlElem<number | null, AssessmentAppraiseMatrixCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
  temp: XmlElem<string | null>;
  custom_experts: XmlMultiElem<DevelopmentPlanDocumentCustomExpert | null>;
  custom_comments: XmlMultiElem<DevelopmentPlanDocumentCustomComment | null>;
  comment: XmlElem<string | null>;
  appraise_date: XmlElem<Date | null>;
  index: XmlElem<number>;
};

type DevelopmentPlanDocument = XmlDocument & {
  TopElem: DevelopmentPlanDocumentTopElem;
  development_plan: DevelopmentPlanDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
