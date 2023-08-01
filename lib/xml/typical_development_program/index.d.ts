interface TypicalDevelopmentProgramDocumentTaskCommissionPerson extends PersonFillingBase {
  person_id: XmlElem<number>;
}
interface TypicalDevelopmentProgramDocumentTask extends CustomElemsBase {
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
  commission_persons: XmlMultiElem<TypicalDevelopmentProgramDocumentTaskCommissionPerson>;
}

interface TypicalDevelopmentProgramDocumentTutorsBySubTutor extends PersonFillingBase {
  person_id: XmlElem<number>;
}
interface TypicalDevelopmentProgramDocumentTutorsBySub {
  subdivision_id: XmlElem<number>;
  subdivision_name: XmlElem<string>;
  flag_expanded: XmlElem<boolean>;
  tutors: XmlMultiElem<TypicalDevelopmentProgramDocumentTutorsBySubTutor>;
}

type TypicalDevelopmentProgramDocumentTopElem = XmlTopElem & { Doc: TypicalDevelopmentProgramDocument } &
ObjectCodeNameBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  status: XmlElem<string>;
  desc: XmlElem<string>;
  tasks: XmlMultiElem<TypicalDevelopmentProgramDocumentTask>;
  tutors_by_subs: XmlMultiElem<TypicalDevelopmentProgramDocumentTutorsBySub>;
  role_id: XmlMultiElem<number>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
};

type TypicalDevelopmentProgramDocument = XmlDocument & {
  TopElem: TypicalDevelopmentProgramDocumentTopElem;
};
