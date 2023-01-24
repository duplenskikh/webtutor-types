type EventCatalogDocumentTopElem = XmlTopElem & { Doc: EventCatalogDocument } & 
EventCatalogBase &
AdminAccessBase & {
  id: XmlElem<number>;
  is_model: XmlElem<boolean>;
  use_vclass: XmlElem<boolean>;
  vclass_setting_id: XmlElem<number>;
  compound_program_id: XmlElem<number>;
  education_program_id: XmlElem<number>;
  education_method_id: XmlElem<number>;
  create_compound_program_id: XmlElem<number>;
  place_id: XmlElem<number>;
  vclass_host: XmlElem<string>;
  record_exists: XmlElem<boolean>;
  show_record: XmlElem<boolean>;
  parent_event_id: XmlElem<number>;
  course_finished: XmlElem<number>;
  course_process: XmlElem<number>;
  course_started: XmlElem<number>;
  course_began: XmlElem<number>;
  test_finished: XmlElem<number>;
  test_process: XmlElem<number>;
  test_started: XmlElem<number>;
  test_began: XmlElem<number>;
  group_formed: XmlElem<boolean>;
  course_id: XmlElem<number>;
  training_plan_id: XmlElem<number>;
  is_public: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  cost: XmlElem<number>;
  cost_type: XmlElem<string>;
  budget_period_id: XmlElem<number>;
  distribute_cost_type: XmlElem<string>;
  duration_fact: XmlElem<number>;
  duration_days_fact: XmlElem<number>;
  mandatory_fill_response: XmlElem<boolean>;
  event_form: XmlElem<string>;
  subdivision_id: XmlElem<number>;
  org_id: XmlElem<number>;
  send_type: XmlElem<string>;
  send_persons_types: XmlElem<string>;
  group_educ_group_id: XmlElem<string>;
  webinar_system_id: XmlElem<number>;
  default_response_type_id: XmlElem<number>;
  tutor_main: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  notification_reminder_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type EventCatalogDocument = XmlDocument & { TopElem: EventCatalogDocumentTopElem; };
