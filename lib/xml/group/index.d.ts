interface GroupDocumentCollaborator extends PersonForeignBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname(): unknown;
  position_id: XmlMultiElemObject<number | null, PositionCatalogDocumentTopElem>;
  /** Должности */
  position_position_names(): unknown;
  desc: XmlElem<string | null>;
}

interface GroupDocumentKpiProfile {
  /** Профиль KPI */
  id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  /** Обязательный */
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
  /** Показывать подробную информациюна портале */
  show_detailed: XmlElem<boolean | null>;
  /** Является динамической */
  is_dynamic: XmlElem<boolean>;
  /** Является учебной */
  is_educ: XmlElem<boolean>;
  /** Скрытая группа */
  is_hidden: XmlElem<boolean>;
  /** Возможно оставлять сообщения на ленту */
  allow_social_post: XmlElem<boolean>;
  /** По должности */
  is_position: XmlElem<boolean>;
  /** Сотрудники */
  collaborators: XmlMultiElem<GroupDocumentCollaborator | null>;
  person_num(): number;
  /** Форум */
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  kpi_profiles: XmlMultiElem<GroupDocumentKpiProfile | null>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  schedule_type_id: XmlElem<number | null, ScheduleTypeCatalogDocumentTopElem>;
  /** Тип вступления */
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  /** Тип заявки по умолчанию */
  default_request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  dynamic_select_person(clearList: unknown): unknown;
  start_action(itemName: unknown): number;
  activateCourseToPersons(input: unknown): unknown;
  add_collaborator(personId: number, docPerson: unknown): unknown;
  remove_collaborator(personId: number): unknown;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type GroupDocument = XmlDocument & {
  TopElem: GroupDocumentTopElem;
  group: GroupDocumentTopElem;
  OnInit(): void;
  OnSave(): void;
  DocDesc(): string;
};
