type CalendarEventCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ObjectTypeBase &
PersonFillingBase & {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  is_exception: XmlElem<boolean>;
  instance_code: XmlElem<string>;
  is_deleted: XmlElem<boolean>;
  parent_id: XmlElem<number, CalendarEventCatalogDocumentTopElem>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  plan_start_date: XmlElem<Date>;
  plan_end_date: XmlElem<Date>;
  participant_ids: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  tutor_ids: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  scheduler_week_days_ids: XmlMultiElemObject<string, typeof common.week_day_types>;
  start_time: XmlElem<string>;
  end_time: XmlElem<string>;
  scheduler_type_id: XmlElem<string, typeof common.scheduler_types>;
  week_type_id: XmlElem<string, typeof common.week_types>;
  confirm_participant_ids: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  not_participate_participant_ids: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  next_start_date: XmlElem<Date>;
  state_id: XmlElem<string, typeof common.event_status_types>;
  modification_date: XmlElem<Date>;
  notification_reminder_date: XmlElem<Date>;
  OnBuild(): void;
};
