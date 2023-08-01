interface GroupDocumentCollaborator extends PersonForeignBase {
  collaborator_id: XmlElem<number>;
  collaborator_fullname(): unknown;
  desc: XmlElem<string>;
}

type GroupDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
EducGroupsBase &
FuncManagersBase &
CustomElemsBase &
DocumentPersonsBase &
RequirementsBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
ViewConditionsBase &
PersonObjectLinksBase & {
  Doc: GroupDocument;
  show_detailed: XmlElem<boolean>;
  is_dynamic: XmlElem<boolean>;
  is_educ: XmlElem<boolean>;
  is_hidden: XmlElem<boolean>;
  allow_social_post: XmlElem<boolean>;
  collaborators: XmlMultiElem<GroupDocumentCollaborator>;
  person_num(): unknown;
  forum_id: XmlElem<number>;
  kpi_profile_id: XmlElem<number>;
  bonus_profile_id: XmlElem<number>;
  schedule_type_id: XmlElem<number>;
  join_mode: XmlElem<string>;
  default_request_type_id: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  dynamic_select_person(clearList: boolean): void;
  start_action(): unknown;
  activateCourseToPersons(): unknown;
  add_collaborator(collaboratorId: number, collaboratorDocument?: CollaboratorDocument): GroupDocumentCollaborator;
  remove_collaborator(collaboratorId: number): boolean;
  role_id: XmlMultiElem<number>;
};

type GroupDocument = XmlDocument & {
  TopElem: GroupDocumentTopElem;
};
