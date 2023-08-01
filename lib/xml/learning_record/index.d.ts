interface LearningRecordDocumentMediaRecord {
  id: XmlElem<string>;
  media_url: XmlElem<string>;
  stream_number: XmlElem<number>;
  type_id: XmlElem<string>;
}

interface LearningRecordDocumentLog {
  id: XmlElem<string>;
  date: XmlElem<Date>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  text: XmlElem<string>;
}

interface LearningRecordDocumentResultComment {
  id: XmlElem<number>;
  comment: XmlElem<string>;
  result_comment: XmlElem<string>;
  state_id: XmlElem<string>;
}

interface LearningRecordDocumentViolation {
  id: XmlElem<string>;
  comment: XmlElem<string>;
  date: XmlElem<Date>;
  person_id: XmlElem<number>;
  type_id: XmlElem<string>;
  state_id: XmlElem<string>;
  stream_number: XmlElem<number>;
  media_id: XmlElem<number>;
}

interface LearningRecordDocumentProctor {
  proctor_id: XmlElem<number>;
  state_id: XmlElem<string>;
  is_prefer: XmlElem<boolean>;
  last_activity_date: XmlElem<Date>;
}

interface LearningRecordDocumentSession {
  id: XmlElem<string>;
  state_id: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
}

type LearningRecordDocumentTopElem = XmlTopElem & { Doc: LearningRecordDocument } & 
PersonFillingBase &
FileListBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  proctoring_object_type: XmlElem<string>;
  proctoring_object_id: XmlElem<number>;
  proctoring_object_name: XmlElem<string>;
  state_id: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  is_finish_record: XmlElem<boolean>;
  check_foto_state_id: XmlElem<string>;
  num_failed_checked_foto: XmlElem<number>;
  result_comment: XmlElem<string>;
  person_id: XmlElem<number>;
  proctoring_system_id: XmlElem<number>;
  event_id: XmlElem<number>;
  download_materials: XmlElem<boolean>;
  record_num: XmlElem<number>;
  start_record_date: XmlElem<Date>;
  media_records: XmlMultiElem<LearningRecordDocumentMediaRecord>;
  logs: XmlMultiElem<LearningRecordDocumentLog>;
  result_comments: XmlMultiElem<LearningRecordDocumentResultComment>;
  violations: XmlMultiElem<LearningRecordDocumentViolation>;
  proctors: XmlMultiElem<LearningRecordDocumentProctor>;
  sessions: XmlMultiElem<LearningRecordDocumentSession>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  get_url_record(): unknown;
};

type LearningRecordDocument = XmlDocument & {
  TopElem: LearningRecordDocumentTopElem;
};
