interface ScheduleTypeDocumentScheduleDay {
  id: XmlElem<string, typeof common.day_types>;
  start_time: XmlElem<string>;
  finish_time: XmlElem<string>;
}

interface ScheduleTypeDocumentSchedule extends MsWeekScheduleBase {
  days: XmlMultiElem<ScheduleTypeDocumentScheduleDay>;
}

type ScheduleTypeDocumentTopElem = XmlTopElem & {
  Doc: ScheduleTypeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  is_shedule: XmlElem<boolean>;
  library_url: XmlElem<string>;
  schedule: XmlElem<ScheduleTypeDocumentSchedule>;
  doc_info: XmlElem<DocInfoBase>;
};

type ScheduleTypeDocument = XmlDocument & {
  TopElem: ScheduleTypeDocumentTopElem;
  schedule_type: ScheduleTypeDocumentTopElem;
};
