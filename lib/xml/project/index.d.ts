interface ProjectDocumentParticipantTypeParticipantTypeObject {
  id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Обязательный */
  is_required: XmlElem<boolean>;
}

interface ProjectDocumentParticipantType {
  /** Тип руководителя */
  participant_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  /** Тип руководителя */
  participant_type_name: XmlElem<string | null>;
  participant_type_objects: XmlMultiElem<ProjectDocumentParticipantTypeParticipantTypeObject | null>;
}

interface ProjectDocumentParticipantRole {
  participant_role_id: XmlElem<number | null, ProjectParticipantRoleCatalogDocumentTopElem>;
}

interface ProjectDocumentFile extends FileBase {
  visibility: XmlElem<string>;
}

type ProjectDocumentTopElem = XmlTopElem &
CatalogListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ProjectDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Подразделение */
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  /** Группа */
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  /** Договор */
  contract_id: XmlElem<number | null, ContractCatalogDocumentTopElem>;
  /** Тип ресурса базы */
  resource_type_id: XmlElem<number | null, ResourceTypeCatalogDocumentTopElem>;
  /** Тип проекта */
  project_type_id: XmlElem<number | null, ProjectTypeCatalogDocumentTopElem>;
  /** Договор */
  sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  /** Документооборот по умолчанию */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Статус */
  status: XmlElem<string, typeof common.project_status_types>;
  /** Эталонный проект */
  is_model: XmlElem<boolean>;
  plan_labor_costs: XmlElem<number | null>;
  fact_labor_costs: XmlElem<number | null>;
  percent_complete: XmlElem<number | null>;
  team_selected: XmlElem<boolean>;
  allow_assessment: XmlElem<boolean>;
  text_result: XmlElem<string | null>;
  /** Тип вступления */
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  /** Тип заявки по умолчанию */
  default_request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  /** Планируемая дата начала */
  start_date_plan: XmlElem<Date | null>;
  /** Планируемая дата завершения */
  end_date_plan: XmlElem<Date | null>;
  /** Фактическая дата начала */
  start_date_fact: XmlElem<Date | null>;
  /** Фактическая дата завершения */
  end_date_fact: XmlElem<Date | null>;
  all_participant_view_task: XmlElem<boolean>;
  allow_assigning_tasks_to_all: XmlElem<boolean>;
  participant_types: XmlMultiElem<ProjectDocumentParticipantType | null>;
  participant_roles: XmlMultiElem<ProjectDocumentParticipantRole | null>;
  files: XmlMultiElem<ProjectDocumentFile | null>;
  AddFile(fileId: number): void;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  set_status(newStatus: string, sendNotifications: boolean, screen: unknown): void;
  create_project_participant(fldParticipant: unknown): unknown;
  start_action(type: string): number;
};

type ProjectDocument = XmlDocument & {
  TopElem: ProjectDocumentTopElem;
  project: ProjectDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
