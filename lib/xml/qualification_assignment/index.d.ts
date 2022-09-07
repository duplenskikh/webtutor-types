interface QualificationAssignmentDocumentLearning {
  learning_id: XmlElem<number>;
}

interface QualificationAssignmentDocumentTestLearning {
  test_learning_id: XmlElem<number>;
}

interface QualificationAssignmentDocumentEducationMethod {
  education_method_id: XmlElem<number>;
}

type QualificationAssignmentDocumentTopElem = XmlTopElem & { Doc: QualificationAssignmentDocument } & 
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  assignment_date: XmlElem<Date>;
  expiration_date: XmlElem<Date>;
  plan_end_date: XmlElem<Date>;
  reason: XmlElem<string>;
  status: XmlElem<string>;
  qualification_id: XmlElem<number>;
  person_id: XmlElem<number>;
  event_id: XmlElem<number>;
  learnings: XmlMultiElem<QualificationAssignmentDocumentLearning>;
  test_learnings: XmlMultiElem<QualificationAssignmentDocumentTestLearning>;
  education_methods: XmlMultiElem<QualificationAssignmentDocumentEducationMethod>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type QualificationAssignmentDocument = XmlDocument & { TopElem: QualificationAssignmentDocumentTopElem; };
