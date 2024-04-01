interface DlgAccessTableForEventDocumentCollaboratorActiveProgram {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.education_method_types>;
  name: XmlElem<string>;
  object_id: XmlElem<number>;
}

interface DlgAccessTableForEventDocumentCollaborator {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  access_flag: XmlElem<boolean>;
  active_programs: XmlMultiElem<DlgAccessTableForEventDocumentCollaboratorActiveProgram>;
}

type DlgAccessTableForEventDocumentTopElem = XmlTopElem & {
  Doc: DlgAccessTableForEventDocument;
  program_id: XmlElem<string>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string>;
  compound_program_id: XmlElem<number, CompoundProgramCatalogDocumentTopElem>;
  compound_program_name: XmlElem<string>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  education_program_name: XmlElem<string>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  error_message: XmlElem<string>;
  collaborators: XmlMultiElem<DlgAccessTableForEventDocumentCollaborator>;
  check_access_users(): unknown;
};

type DlgAccessTableForEventDocument = XmlDocument & {
  TopElem: DlgAccessTableForEventDocumentTopElem;
  dlg_access_table_for_event: DlgAccessTableForEventDocumentTopElem;
};
