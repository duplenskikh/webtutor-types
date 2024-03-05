interface TrainingPlanDocumentEducationMethodParticipant extends PersonFillingBase {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface TrainingPlanDocumentEducationMethodEventParticipant extends PersonFillingBase {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface TrainingPlanDocumentEducationMethodEventWeek {
  id: XmlElem<number>;
  month_id: XmlElem<number>;
  events_num: XmlElem<number>;
  week_num: XmlElem<number>;
}

interface TrainingPlanDocumentEducationMethodEventGeneratedEvent {
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
}

interface TrainingPlanDocumentEducationMethodEvent {
  id: XmlElem<number>;
  name: XmlElem<string>;
  participants_num: XmlElem<number>;
  participants: XmlMultiElem<TrainingPlanDocumentEducationMethodEventParticipant>;
  max_capacity: XmlElem<number>;
  events_num: XmlElem<number>;
  distributed: XmlElem<number>;
  cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  weeks: XmlMultiElem<TrainingPlanDocumentEducationMethodEventWeek>;
  generated_events: XmlMultiElem<TrainingPlanDocumentEducationMethodEventGeneratedEvent>;
}

interface TrainingPlanDocumentEducationMethod {
  id: XmlElem<number>;
  name: XmlElem<string>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  participants_num: XmlElem<number>;
  participants: XmlMultiElem<TrainingPlanDocumentEducationMethodParticipant>;
  max_capacity: XmlElem<number>;
  events_num: XmlElem<number>;
  comment: XmlElem<string>;
  events: XmlMultiElem<TrainingPlanDocumentEducationMethodEvent>;
}

interface TrainingPlanDocumentGlobalMonth {
  id: XmlElem<number>;
  global_month_name: XmlElem<string>;
  global_month_num: XmlElem<number>;
  global_month_year: XmlElem<number>;
}

type TrainingPlanDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: TrainingPlanDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  education_methods: XmlMultiElem<TrainingPlanDocumentEducationMethod>;
  global_months: XmlMultiElem<TrainingPlanDocumentGlobalMonth>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type TrainingPlanDocument = XmlDocument & {
  TopElem: TrainingPlanDocumentTopElem;
};
