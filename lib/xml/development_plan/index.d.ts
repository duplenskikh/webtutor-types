interface DevelopmentPlanDocumentCustomExpert {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_type: XmlElem<number>;
  is_done: XmlElem<boolean>;
  responsible: XmlElem<boolean>;
  expert_code: XmlElem<string>;
}

interface DevelopmentPlanDocumentCustomComment {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  workflow_state: XmlElem<string>;
  comment: XmlElem<string>;
  comment_date: XmlElem<Date>;
}

type DevelopmentPlanDocumentTopElem = XmlTopElem &
WorkflowDataBase &
SupplementaryQuestionsBase &
DevelopmentPlanDataBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DevelopmentPlanDocument;
  code: XmlElem<string>;
  name(): unknown;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  expert_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  department_id: XmlElem<number>;
  department_name: XmlElem<string>;
  is_done: XmlElem<boolean>;
  is_final: XmlElem<boolean>;
  is_ready: XmlElem<boolean>;
  flag_is_processed: XmlElem<boolean>;
  flag_appraise_department: XmlElem<boolean>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  assessment_plan_id: XmlElem<number, AssessmentPlanCatalogDocumentTopElem>;
  career_reserve_id: XmlElem<number, CareerReserveCatalogDocumentTopElem>;
  assessment_appraise_type: XmlElem<string, typeof common.assessment_appraise_types>;
  status: XmlElem<string, typeof common.assessment_appraise_participants>;
  assessment_appraise_matrix_id: XmlElem<number, AssessmentAppraiseMatrixCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
  temp: XmlElem<string>;
  custom_experts: XmlMultiElem<DevelopmentPlanDocumentCustomExpert>;
  custom_comments: XmlMultiElem<DevelopmentPlanDocumentCustomComment>;
  comment: XmlElem<string>;
  appraise_date: XmlElem<Date>;
  index: XmlElem<number>;
};

type DevelopmentPlanDocument = XmlDocument & {
  TopElem: DevelopmentPlanDocumentTopElem;
};
