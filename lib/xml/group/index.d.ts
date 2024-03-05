interface GroupDocumentCollaborator extends PersonForeignBase {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname(): unknown;
  position_id: XmlMultiElemObject<number, PositionCatalogDocumentTopElem>;
  position_position_names(): unknown;
  desc: XmlElem<string>;
}

interface GroupDocumentKpiProfile {
  id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string, typeof common.perioditys>;
  obligatory: XmlElem<boolean>;
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
  is_position: XmlElem<boolean>;
  collaborators: XmlMultiElem<GroupDocumentCollaborator>;
  person_num(): unknown;
  forum_id: XmlElem<number, ForumCatalogDocumentTopElem>;
  kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<GroupDocumentKpiProfile>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  schedule_type_id: XmlElem<number, ScheduleTypeCatalogDocumentTopElem>;
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  default_request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  dynamic_select_person(_clear_list: unknown): unknown;
  start_action(_item_name: unknown): unknown;
  activateCourseToPersons(oInputParam: unknown): unknown;
  add_collaborator(iPersonIdParam: number, docPersonParam: Date): unknown;
  remove_collaborator(iPersonIdParam: number): unknown;
  role_id: XmlMultiElemObject<number>;
};

type GroupDocument = XmlDocument & {
  TopElem: GroupDocumentTopElem;
};
