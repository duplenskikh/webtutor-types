interface TypicalDevelopmentProgramTaskCommissionPerson extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

interface TypicalDevelopmentProgramTask extends CustomElemsBase {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  due_date?: XmlElem<number>;
  start_edit_days?: XmlElem<number>;
  parent_task_id?: XmlElem<string>;
  duration_days?: XmlElem<number>;
  desc?: XmlElem<string>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  auto_appoint_learning?: XmlElem<boolean>;
  type_document?: XmlElem<string>;
  link_document?: XmlElem<string>;
  forbid_task_portal_edit?: XmlElem<boolean>;
  commission_persons?: XmlMultiElem<TypicalDevelopmentProgramTaskCommissionPerson>;
}

interface TypicalDevelopmentProgramTutorsBySubTutor extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

interface TypicalDevelopmentProgramTutorsBySub {
  subdivision_id?: XmlElem<number>;
  subdivision_name?: XmlElem<string>;
  flag_expanded?: XmlElem<boolean>;
  tutors?: XmlMultiElem<TypicalDevelopmentProgramTutorsBySubTutor>;
}

interface TypicalDevelopmentProgramViewFilter extends AuFtFilter {
}

interface TypicalDevelopmentProgramView extends DescBase {
  part_index?: XmlElem<number>;
  filter?: XmlElem<AuFtFilter>;
  filter?: XmlElem<TypicalDevelopmentProgramViewFilter>;
}

interface TypicalDevelopmentProgramTopElem extends XmlTopElem<TypicalDevelopmentProgramDocument>, ObjectCodeNameBase, AdminAccessBase, FileListBase, CustomElemsBase {
  status?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
  tasks?: XmlMultiElem<TypicalDevelopmentProgramTask>;
  tutors_by_subs?: XmlMultiElem<TypicalDevelopmentProgramTutorsBySub>;
  view?: XmlElem<TypicalDevelopmentProgramView>;
}

type TypicalDevelopmentProgramDocument = XmlDocument<TypicalDevelopmentProgramTopElem>;
