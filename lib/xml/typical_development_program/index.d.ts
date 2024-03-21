interface TypicalDevelopmentProgramDocumentTaskCommissionPerson extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface TypicalDevelopmentProgramDocumentTask extends CustomElemsBase {
  id: XmlElem<string>;
  position: XmlElem<number>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.career_reserve_tasks_types>;
  due_date: XmlElem<number>;
  start_edit_days: XmlElem<number>;
  parent_task_id: XmlElem<string>;
  duration_days: XmlElem<number>;
  desc: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  auto_appoint_learning: XmlElem<boolean>;
  auto_appoint_task: XmlElem<boolean>;
  auto_appoint_appraise: XmlElem<boolean>;
  add_exist_appraise: XmlElem<boolean>;
  auto_appoint_poll: XmlElem<boolean>;
  type_document: XmlElem<string, typeof common.career_reserve_material_types>;
  link_document: XmlElem<string>;
  forbid_task_portal_edit: XmlElem<boolean>;
  commission_persons: XmlMultiElem<TypicalDevelopmentProgramDocumentTaskCommissionPerson>;
}

interface TypicalDevelopmentProgramDocumentTutorsBySubTutor extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface TypicalDevelopmentProgramDocumentTutorsBySub {
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string>;
  flag_expanded: XmlElem<boolean>;
  tutors: XmlMultiElem<TypicalDevelopmentProgramDocumentTutorsBySubTutor>;
}

type TypicalDevelopmentProgramDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  Doc: TypicalDevelopmentProgramDocument;
  status: XmlElem<string, typeof common.typical_development_program_statuss>;
  desc: XmlElem<string>;
  tasks: XmlMultiElem<TypicalDevelopmentProgramDocumentTask>;
  tutors_by_subs: XmlMultiElem<TypicalDevelopmentProgramDocumentTutorsBySub>;
  role_id: XmlMultiElemObject<number>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  calc_position(task: unknown): unknown;
  filling_empty_position_field(): unknown;
};

type TypicalDevelopmentProgramDocument = XmlDocument & {
  TopElem: TypicalDevelopmentProgramDocumentTopElem;
  typical_development_program: TypicalDevelopmentProgramDocumentTopElem;
  DocDesc(): unknown;
};
