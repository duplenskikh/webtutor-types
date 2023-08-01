interface DevelopmentPlanDocumentCustomExpert {
  person_id: XmlElem<number>;
  is_done: XmlElem<boolean>;
}

interface DevelopmentPlanDocumentCustomComment {
  person_id: XmlElem<number>;
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
  name(): string;
  person_id: XmlElem<number>;
  expert_person_id: XmlElem<number>;
  department_id: XmlElem<number>;
  department_name: XmlElem<string>;
  is_done: XmlElem<boolean>;
  is_final: XmlElem<boolean>;
  is_ready: XmlElem<boolean>;
  flag_is_processed: XmlElem<boolean>;
  flag_appraise_department: XmlElem<boolean>;
  assessment_appraise_id: XmlElem<number>;
  assessment_plan_id: XmlElem<number>;
  career_reserve_id: XmlElem<number>;
  assessment_appraise_type: XmlElem<string>;
  status: XmlElem<string>;
  assessment_appraise_matrix_id: XmlElem<number>;
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
