interface QualificationDocumentCourse {
  course_id: XmlElem<number>;
}

interface QualificationDocumentAssessment {
  assessment_id: XmlElem<number>;
}

interface QualificationDocumentEducationMethod {
  education_method_id: XmlElem<number>;
}

interface QualificationDocumentCompoundProgram {
  compound_program_id: XmlElem<number>;
}

interface QualificationDocumentQualification {
  qualification_id: XmlElem<number>;
}

interface QualificationDocumentAssessmentAppraise {
  assessment_appraise_id: XmlElem<number>;
}

interface QualificationDocumentEvalCondition {
  id: XmlElem<string>;
  name: XmlElem<string>;
  eval_str: XmlElem<string>;
  max_value: XmlElem<number>;
}

type QualificationDocumentTopElem = XmlTopElem & { Doc: QualificationDocument } &
ObjectCodeNameBase &
GameBonusBase &
FileListBase &
AdminAccessBase &
CustomElemsBase &
KnowledgePartsBase & {
  join_mode: XmlElem<string>;
  level_id: XmlElem<number>;
  parent_id: XmlElem<number>;
  status: XmlElem<string>;
  test_on_hire: XmlElem<boolean>;
  days_for_check: XmlElem<number>;
  term_days: XmlElem<number>;
  expires_days: XmlElem<number>;
  yourself_start: XmlElem<boolean>;
  courses: XmlMultiElem<QualificationDocumentCourse>;
  assessments: XmlMultiElem<QualificationDocumentAssessment>;
  education_methods: XmlMultiElem<QualificationDocumentEducationMethod>;
  compound_programs: XmlMultiElem<QualificationDocumentCompoundProgram>;
  qualifications: XmlMultiElem<QualificationDocumentQualification>;
  assessment_appraises: XmlMultiElem<QualificationDocumentAssessmentAppraise>;
  allow_assign(): unknown;
  eval_conditions: XmlMultiElem<QualificationDocumentEvalCondition>;
  eval_assignment_query: XmlElem<string>;
  get_assignment_persons(): unknown;
  get_scaled_progress(): unknown;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
};

type QualificationDocument = XmlDocument & {
  TopElem: QualificationDocumentTopElem;
};
