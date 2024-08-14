interface IntervalScheduleDocumentWorkflowMatching {
  id: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface IntervalScheduleDocumentCustomField {
  /** Название */
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface IntervalScheduleDocumentHistory {
  /** Состояние */
  status_id: XmlElem<string | null, typeof common.agreement_status_types>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
}

interface IntervalScheduleDocumentChange {
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
}

type IntervalScheduleDocumentTopElem = XmlTopElem &
PersonFillingBase &
WorkflowDataBase &
FileListBase &
CustomElemsBase & {
  Doc: IntervalScheduleDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  /** Состояние */
  status_id: XmlElem<string | null, typeof common.agreement_status_types>;
  workflow_type: XmlElem<string | null>;
  workflow_matchings: XmlMultiElem<IntervalScheduleDocumentWorkflowMatching | null>;
  /** Тип выборки условий видимости */
  workflow_matching_type: XmlElem<string | null>;
  custom_fields: XmlMultiElem<IntervalScheduleDocumentCustomField | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  history: XmlElem<IntervalScheduleDocumentHistory | null>;
  change: XmlElem<IntervalScheduleDocumentChange | null>;
};

type IntervalScheduleDocument = XmlDocument & {
  TopElem: IntervalScheduleDocumentTopElem;
  interval_schedule: IntervalScheduleDocumentTopElem;
  OnBeforeSave(): void;
};
