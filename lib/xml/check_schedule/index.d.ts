type CheckScheduleDocumentTopElem = XmlTopElem &
AdminAccessBase &
WebVariablesBase & {
  Doc: CheckScheduleDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_enabled: XmlElem<boolean>;
  type_id: XmlElem<string, typeof common.check_schedule_types>;
  library_url: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type CheckScheduleDocument = XmlDocument & {
  TopElem: CheckScheduleDocumentTopElem;
  check_schedule: CheckScheduleDocumentTopElem;
  DocDesc(): string;
};
