interface ScheduleTypeDocumentMsWeekScheduleBase {

}

type ScheduleTypeDocumentTopElem = XmlTopElem & {
  Doc: ScheduleTypeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  is_shedule: XmlElem<boolean>;
  library_url: XmlElem<string>;
  schedule: XmlElem<ScheduleTypeDocumentMsWeekScheduleBase>;
  doc_info: XmlElem<DocInfoBase>;
};

type ScheduleTypeDocument = XmlDocument & {
  TopElem: ScheduleTypeDocumentTopElem;
  schedule_type: ScheduleTypeDocumentTopElem;

};
