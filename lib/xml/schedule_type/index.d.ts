interface ScheduleTypeScheduleDay {
  id?: XmlElem<string>;
  start_time?: XmlElem<string>;
  finish_time?: XmlElem<string>;
}

interface ScheduleTypeSchedule {
  days?: XmlMultiElem<ScheduleTypeScheduleDay>;
}

interface ScheduleTypeTopElem extends XmlTopElem<ScheduleTypeDocument> {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  object_type?: XmlElem<string>;
  is_shedule?: XmlElem<boolean>;
  library_url?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  schedule?: XmlElem<ScheduleTypeSchedule>;
}

type ScheduleTypeDocument = XmlDocument<ScheduleTypeTopElem>;
