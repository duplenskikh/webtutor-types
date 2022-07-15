interface TrainingPlanEducationMethodParticipant extends PersonFillingBase {
  collaborator_id?: XmlElem<number>;
}

interface TrainingPlanEducationMethodEventParticipant extends PersonFillingBase {
  collaborator_id?: XmlElem<number>;
}

interface TrainingPlanEducationMethodEventWeek {
  id?: XmlElem<number>;
  month_id?: XmlElem<number>;
  events_num?: XmlElem<number>;
  week_num?: XmlElem<number>;
}

interface TrainingPlanEducationMethodEventGeneratedEvent {
  event_id?: XmlElem<number>;
}

interface TrainingPlanEducationMethodEvent {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  participants_num?: XmlElem<number>;
  max_capacity?: XmlElem<number>;
  events_num?: XmlElem<number>;
  distributed?: XmlElem<number>;
  cost_center_id?: XmlElem<number>;
  tab_selector_type?: XmlElem<string>;
  is_method?: XmlElem<boolean>;
  participants?: XmlMultiElem<TrainingPlanEducationMethodEventParticipant>;
  weeks?: XmlMultiElem<TrainingPlanEducationMethodEventWeek>;
  generated_events?: XmlMultiElem<TrainingPlanEducationMethodEventGeneratedEvent>;
}

interface TrainingPlanEducationMethod {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  education_method_id?: XmlElem<number>;
  participants_num?: XmlElem<number>;
  max_capacity?: XmlElem<number>;
  events_num?: XmlElem<number>;
  comment?: XmlElem<string>;
  tab_selector_type?: XmlElem<string>;
  is_method?: XmlElem<boolean>;
  participants?: XmlMultiElem<TrainingPlanEducationMethodParticipant>;
  events?: XmlMultiElem<TrainingPlanEducationMethodEvent>;
}

interface TrainingPlanGlobalMonth {
  id?: XmlElem<number>;
  global_month_name?: XmlElem<string>;
  global_month_num?: XmlElem<number>;
  global_month_year?: XmlElem<number>;
}

interface TrainingPlanView extends DescBase {
}

interface TrainingPlanTopElem extends XmlTopElem<TrainingPlanDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  budget_period_id?: XmlElem<number>;
  request_type_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  education_methods?: XmlMultiElem<TrainingPlanEducationMethod>;
  global_months?: XmlMultiElem<TrainingPlanGlobalMonth>;
  view?: XmlElem<TrainingPlanView>;
}

type TrainingPlanDocument = XmlDocument<TrainingPlanTopElem>;
