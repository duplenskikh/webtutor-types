interface IWTTypicalDevelopmentProgramTaskCommissionPerson extends IWTPersonFillingBase {
  person_id: XmlElem<number>;
}

interface IWTTypicalDevelopmentProgramTask extends IWTCustomElemsBase {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  due_date: XmlElem<number>;
  start_edit_days: XmlElem<number>;
  parent_task_id: XmlElem<string>;
  duration_days: XmlElem<number>;
  desc: XmlElem<string>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  auto_appoint_learning: XmlElem<boolean>;
  type_document: XmlElem<string>;
  link_document: XmlElem<string>;
  forbid_task_portal_edit: XmlElem<boolean>;
  commission_persons?: XmlMultiElem<IWTTypicalDevelopmentProgramTaskCommissionPerson>;
}

interface IWTTypicalDevelopmentProgramTutorsBySubTutor extends IWTPersonFillingBase {
  person_id: XmlElem<number>;
}

interface IWTTypicalDevelopmentProgramTutorsBySub {
  subdivision_id: XmlElem<Number>;
  subdivision_name: XmlElem<string>;
  flag_expanded: XmlElem<boolean>;
  tutors: XmlMultiElem<IWTTypicalDevelopmentProgramTutorsBySubTutor>;
}

interface TypicalDevelopmentProgramTopElem extends XmlTopElem<TypicalDevelopmentProgramDocument>,
  IWTObjectCodeNameBase,
  IWTAdminAccessBase,
  IWTFileListBase,
  IWTCustomElemsBase
{
  status: XmlElem<string>;
  desc: XmlElem<string>;
  tasks: XmlMultiElem<IWTTypicalDevelopmentProgramTask>;
  tutors_by_subs: XmlMultiElem<IWTTypicalDevelopmentProgramTutorsBySub>;
  role_id: XmlMultiElem<number>;
  doc_info: XmlElem<IWTDocInfoBase>;
  comment: XmlElem<string>;
}

type TypicalDevelopmentProgramDocument = XmlDocument<TypicalDevelopmentProgramTopElem>;
