interface TypicalDevelopmentProgramDocumentTaskCommissionPerson extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface TypicalDevelopmentProgramDocumentTask extends CustomElemsBase {
  id: XmlElem<string | null>;
  position: XmlElem<number>;
  name: XmlElem<string | null>;
  type: XmlElem<string, typeof common.career_reserve_tasks_types>;
  due_date: XmlElem<number | null>;
  start_edit_days: XmlElem<number | null>;
  parent_task_id: XmlElem<string | null>;
  duration_days: XmlElem<number | null>;
  desc: XmlElem<string | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  auto_appoint_learning: XmlElem<boolean | null>;
  auto_appoint_task: XmlElem<boolean | null>;
  auto_appoint_appraise: XmlElem<boolean | null>;
  add_exist_appraise: XmlElem<boolean | null>;
  auto_appoint_poll: XmlElem<boolean | null>;
  type_document: XmlElem<string | null, typeof common.career_reserve_material_types>;
  link_document: XmlElem<string | null>;
  forbid_task_portal_edit: XmlElem<boolean>;
  commission_persons: XmlMultiElem<TypicalDevelopmentProgramDocumentTaskCommissionPerson | null>;
}

interface TypicalDevelopmentProgramDocumentTutorsBySubTutor extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface TypicalDevelopmentProgramDocumentTutorsBySub {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string | null>;
  flag_expanded: XmlElem<boolean>;
  tutors: XmlMultiElem<TypicalDevelopmentProgramDocumentTutorsBySubTutor | null>;
}

type TypicalDevelopmentProgramDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  Doc: TypicalDevelopmentProgramDocument;
  status: XmlElem<string | null, typeof common.typical_development_program_statuss>;
  desc: XmlElem<string | null>;
  tasks: XmlMultiElem<TypicalDevelopmentProgramDocumentTask | null>;
  tutors_by_subs: XmlMultiElem<TypicalDevelopmentProgramDocumentTutorsBySub | null>;
  role_id: XmlMultiElemObject<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  calc_position(task: unknown): void;
  filling_empty_position_field(): void;
};

type TypicalDevelopmentProgramDocument = XmlDocument & {
  TopElem: TypicalDevelopmentProgramDocumentTopElem;
  typical_development_program: TypicalDevelopmentProgramDocumentTopElem;
  DocDesc(): string;
};
