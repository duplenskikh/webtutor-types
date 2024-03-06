interface CalendarEventDocumentBlockParticipantParticipant {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  is_confirm: XmlElem<boolean>;
  not_participate: XmlElem<boolean>;
}

interface CalendarEventDocumentBlockParticipant {
  participants: XmlMultiElem<CalendarEventDocumentBlockParticipantParticipant>;
}

interface CalendarEventDocumentBlockTutorTutor {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface CalendarEventDocumentBlockTutor {
  tutors: XmlMultiElem<CalendarEventDocumentBlockTutorTutor>;
}

interface CalendarEventDocumentBlockSchedulerWeekDay {
  week_day_id: XmlElem<string, typeof common.week_day_types>;
}

interface CalendarEventDocumentBlockScheduler {
  scheduler_type_id: XmlElem<string, typeof common.scheduler_types>;
  week_type_id: XmlElem<string, typeof common.week_types>;
  week_days: XmlMultiElem<CalendarEventDocumentBlockSchedulerWeekDay>;
}

interface CalendarEventDocumentBlockNotificationNotificationReminder {
  id: XmlElem<string>;
  minutes: XmlElem<number>;
}

interface CalendarEventDocumentBlockNotification {
  notification_reminders: XmlMultiElem<CalendarEventDocumentBlockNotificationNotificationReminder>;
}

type CalendarEventDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ObjectTypeBase &
PersonFillingBase & {
  Doc: CalendarEventDocument;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  block_participant: XmlElem<CalendarEventDocumentBlockParticipant>;
  block_tutor: XmlElem<CalendarEventDocumentBlockTutor>;
  is_exception: XmlElem<boolean>;
  is_deleted: XmlElem<boolean>;
  instance_code: XmlElem<string>;
  parent_id: XmlElem<number, CalendarEventCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  plan_start_date: XmlElem<Date>;
  plan_end_date: XmlElem<Date>;
  start_time: XmlElem<string>;
  end_time: XmlElem<string>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  block_scheduler: XmlElem<CalendarEventDocumentBlockScheduler>;
  block_notification: XmlElem<CalendarEventDocumentBlockNotification>;
  state_id: XmlElem<string, typeof common.event_status_types>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
};

type CalendarEventDocument = XmlDocument & {
  TopElem: CalendarEventDocumentTopElem;
  calendar_event: CalendarEventDocumentTopElem;
  DocDesc(): unknown;
};
