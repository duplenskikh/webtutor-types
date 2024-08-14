type PresenceStateCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Состояние */
  state_id: XmlElem<string | null, typeof lists.person_states>;
  /** Состояние */
  state_name: XmlElem<string | null>;
  accessible: XmlElem<boolean>;
  is_absence: XmlElem<boolean>;
  /** Документооборот по умолчанию */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  can_cancel: XmlElem<boolean>;
  can_change: XmlElem<boolean>;
  cancel_workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  change_workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Позиция в списке */
  position: XmlElem<number | null>;
  style_css: XmlElem<string | null>;
  /** Весь день */
  all_day: XmlElem<boolean>;
  is_sub_work_time: XmlElem<boolean>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
