interface TrainingPlanDocumentEducationMethodParticipant extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface TrainingPlanDocumentEducationMethodEventParticipant extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface TrainingPlanDocumentEducationMethodEventWeek {
  id: XmlElem<number | null>;
  month_id: XmlElem<number | null>;
  /** Количество мероприятий */
  events_num: XmlElem<number | null>;
  week_num: XmlElem<number | null>;
}

interface TrainingPlanDocumentEducationMethodEventGeneratedEvent {
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
}

interface TrainingPlanDocumentEducationMethodEvent {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  /** Количество участников */
  participants_num: XmlElem<number | null>;
  /** Сотрудники */
  participants: XmlMultiElem<TrainingPlanDocumentEducationMethodEventParticipant | null>;
  /** Максимальное количество */
  max_capacity: XmlElem<number | null>;
  /** Количество мероприятий */
  events_num: XmlElem<number | null>;
  /** Распределено */
  distributed: XmlElem<number | null>;
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  weeks: XmlMultiElem<TrainingPlanDocumentEducationMethodEventWeek | null>;
  generated_events: XmlMultiElem<TrainingPlanDocumentEducationMethodEventGeneratedEvent | null>;
}

interface TrainingPlanDocumentEducationMethod {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  /** Количество участников */
  participants_num: XmlElem<number | null>;
  /** Сотрудники */
  participants: XmlMultiElem<TrainingPlanDocumentEducationMethodParticipant | null>;
  /** Максимальное количество */
  max_capacity: XmlElem<number | null>;
  /** Количество мероприятий */
  events_num: XmlElem<number | null>;
  comment: XmlElem<string | null>;
  events: XmlMultiElem<TrainingPlanDocumentEducationMethodEvent | null>;
}

interface TrainingPlanDocumentGlobalMonth {
  id: XmlElem<number | null>;
  global_month_name: XmlElem<string | null>;
  global_month_num: XmlElem<number | null>;
  global_month_year: XmlElem<number | null>;
}

type TrainingPlanDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TrainingPlanDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Бюджетный период */
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  education_methods: XmlMultiElem<TrainingPlanDocumentEducationMethod | null>;
  global_months: XmlMultiElem<TrainingPlanDocumentGlobalMonth | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type TrainingPlanDocument = XmlDocument & {
  TopElem: TrainingPlanDocumentTopElem;
  training_plan: TrainingPlanDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};
