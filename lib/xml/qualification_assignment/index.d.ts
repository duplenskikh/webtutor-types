interface IWTQualificationAssignmentTopElem extends PersonFillingBase,
  IWTFileListBase,
  IWTDocInfo,
  AdminAccessBase,
  IWTCustomElemsBase {
  assignment_date?: XmlElem<Date>;
  expiration_date?: XmlElem<Date>;
  plan_end_date?: XmlElem<Date>;
  reason?: XmlElem<string>;
  status?: XmlElem<string>;
  qualification_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  event_id?: XmlElem<number>;
  learnings?: XmlElem<IWTQualificationAssignmentLearning>;
  test_learnings?: XmlElem<IWTQualificationAssignmentTestLearning>;
  education_methods?: XmlElem<IWTQualificationAssignmentEducationMethod>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
}

type IWTQualificationAssignmentDocument = XmlDocument<IWTQualificationAssignmentTopElem>;
