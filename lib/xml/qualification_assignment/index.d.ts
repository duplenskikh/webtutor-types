interface QualificationAssignmentLearning {
  learning_id?: XmlElem<number>;
}

interface QualificationAssignmentTestLearning {
  test_learning_id?: XmlElem<number>;
}

interface QualificationAssignmentEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface QualificationAssignmentView extends DescBase {
  never_saved?: XmlElem<boolean>;
}

interface QualificationAssignmentTopElem extends XmlTopElem<QualificationAssignmentDocument>, PersonFillingBase, FileListBase, AdminAccessBase, CustomElemsBase {
  assignment_date?: XmlElem<Date>;
  expiration_date?: XmlElem<Date>;
  plan_end_date?: XmlElem<Date>;
  reason?: XmlElem<string>;
  status?: XmlElem<string>;
  qualification_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  event_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  learnings?: XmlMultiElem<QualificationAssignmentLearning>;
  test_learnings?: XmlMultiElem<QualificationAssignmentTestLearning>;
  education_methods?: XmlMultiElem<QualificationAssignmentEducationMethod>;
  view?: XmlElem<QualificationAssignmentView>;
}

type QualificationAssignmentDocument = XmlDocument<QualificationAssignmentTopElem>;
