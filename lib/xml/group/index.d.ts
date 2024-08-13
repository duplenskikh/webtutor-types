interface GroupDocumentCollaborator extends PersonForeignBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname(): unknown;
  position_id: XmlMultiElemObject<number | null, PositionCatalogDocumentTopElem>;
  position_position_names(): unknown;
  desc: XmlElem<string | null>;
}

interface GroupDocumentKpiProfile {
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
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
  show_detailed: XmlElem<boolean | null>;
  is_dynamic: XmlElem<boolean>;
  is_educ: XmlElem<boolean>;
  is_hidden: XmlElem<boolean>;
  allow_social_post: XmlElem<boolean>;
  is_position: XmlElem<boolean>;
  collaborators: XmlMultiElem<GroupDocumentCollaborator | null>;
  person_num(): number;
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<GroupDocumentKpiProfile | null>;
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  default_request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  dynamic_select_person(clearList: unknown): unknown;
  start_action(itemName: unknown): number;
  activateCourseToPersons(input: unknown): unknown;
  add_collaborator(personId: number, docPerson: unknown): unknown;
  remove_collaborator(personId: number): unknown;
  role_id: XmlMultiElemObject<number | null>;
};

type GroupDocument = XmlDocument & {
  TopElem: GroupDocumentTopElem;
  group: GroupDocumentTopElem;
  OnInit(): void;
  OnSave(): void;
  DocDesc(): string;
};
