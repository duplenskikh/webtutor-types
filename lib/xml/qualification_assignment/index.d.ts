interface QualificationAssignmentDocumentLearning {
  learning_id: XmlElem<number, LearningCatalogDocumentTopElem>;
}

interface QualificationAssignmentDocumentTestLearning {
  test_learning_id: XmlElem<number, TestLearningCatalogDocumentTopElem>;
}

interface QualificationAssignmentDocumentEducationMethod {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
}

type QualificationAssignmentDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: QualificationAssignmentDocument;
  assignment_date: XmlElem<Date>;
  expiration_date: XmlElem<Date>;
  plan_end_date: XmlElem<Date>;
  reason: XmlElem<string>;
  status: XmlElem<string, typeof common.qualification_assignment_states>;
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  sender_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  competence_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  is_reward: XmlElem<boolean>;
  learnings: XmlMultiElem<QualificationAssignmentDocumentLearning>;
  test_learnings: XmlMultiElem<QualificationAssignmentDocumentTestLearning>;
  education_methods: XmlMultiElem<QualificationAssignmentDocumentEducationMethod>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type QualificationAssignmentDocument = XmlDocument & {
  TopElem: QualificationAssignmentDocumentTopElem;
  qualification_assignment: QualificationAssignmentDocumentTopElem;
  DocDesc(): unknown;
};
