interface ScheduleTypeDocumentScheduleDay {
  id: XmlElem<string | null, typeof common.day_types>;
  start_time: XmlElem<string | null>;
  finish_time: XmlElem<string | null>;
}

interface ScheduleTypeDocumentSchedule extends MsWeekScheduleBase {
  days: XmlMultiElem<ScheduleTypeDocumentScheduleDay | null>;
}

type ScheduleTypeDocumentTopElem = XmlTopElem & {
  Doc: ScheduleTypeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  is_shedule: XmlElem<boolean | null>;
  library_url: XmlElem<string | null>;
  schedule: XmlElem<ScheduleTypeDocumentSchedule | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ScheduleTypeDocument = XmlDocument & {
  TopElem: ScheduleTypeDocumentTopElem;
  schedule_type: ScheduleTypeDocumentTopElem;
};
