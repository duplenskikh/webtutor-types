interface QualificationAssignmentDocumentLearning {
  learning_id: XmlElem<number | null, LearningCatalogDocumentTopElem>;
}

interface QualificationAssignmentDocumentTestLearning {
  test_learning_id: XmlElem<number | null, TestLearningCatalogDocumentTopElem>;
}

interface QualificationAssignmentDocumentEducationMethod {
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

type QualificationAssignmentDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: QualificationAssignmentDocument;
  assignment_date: XmlElem<Date | null>;
  expiration_date: XmlElem<Date | null>;
  plan_end_date: XmlElem<Date | null>;
  reason: XmlElem<string | null>;
  status: XmlElem<string, typeof common.qualification_assignment_states>;
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  sender_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  is_reward: XmlElem<boolean | null>;
  learnings: XmlMultiElem<QualificationAssignmentDocumentLearning | null>;
  test_learnings: XmlMultiElem<QualificationAssignmentDocumentTestLearning | null>;
  education_methods: XmlMultiElem<QualificationAssignmentDocumentEducationMethod | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type QualificationAssignmentDocument = XmlDocument & {
  TopElem: QualificationAssignmentDocumentTopElem;
  qualification_assignment: QualificationAssignmentDocumentTopElem;
  DocDesc(): string;
};
