interface LearningRecordMediaRecord {
  id?: XmlElem<string>;
  media_url?: XmlElem<string>;
  stream_number?: XmlElem<number>;
  type_id?: XmlElem<string>;
}

interface LearningRecordLog {
  id?: XmlElem<string>;
  date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  text?: XmlElem<string>;
}

interface LearningRecordResultComment {
  id?: XmlElem<number>;
  comment?: XmlElem<string>;
  result_comment?: XmlElem<string>;
  state_id?: XmlElem<string>;
}

interface LearningRecordViolationInterval {
  start_time?: XmlElem<string>;
  finish_time?: XmlElem<string>;
}

interface LearningRecordViolation {
  id?: XmlElem<string>;
  comment?: XmlElem<string>;
  date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  type_id?: XmlElem<string>;
  state_id?: XmlElem<string>;
  stream_number?: XmlElem<number>;
  media_id?: XmlElem<number>;
  interval?: XmlElem<LearningRecordViolationInterval>;
}

interface LearningRecordProctor {
  proctor_id?: XmlElem<number>;
  state_id?: XmlElem<string>;
  is_prefer?: XmlElem<boolean>;
  last_activity_date?: XmlElem<Date>;
}

interface LearningRecordSession {
  id?: XmlElem<string>;
  state_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
}

interface LearningRecordTopElem extends XmlTopElem<LearningRecordDocument>, PersonFillingBase, FileListBase, AdminAccessBase, MsParametersBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  proctoring_object_type?: XmlElem<string>;
  proctoring_object_id?: XmlElem<number>;
  proctoring_object_name?: XmlElem<string>;
  state_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  is_finish_record?: XmlElem<boolean>;
  check_foto_state_id?: XmlElem<string>;
  num_failed_checked_foto?: XmlElem<number>;
  result_comment?: XmlElem<string>;
  person_id?: XmlElem<number>;
  proctoring_system_id?: XmlElem<number>;
  event_id?: XmlElem<number>;
  download_materials?: XmlElem<boolean>;
  record_num?: XmlElem<number>;
  start_record_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  media_records?: XmlMultiElem<LearningRecordMediaRecord>;
  logs?: XmlMultiElem<LearningRecordLog>;
  result_comments?: XmlMultiElem<LearningRecordResultComment>;
  violations?: XmlMultiElem<LearningRecordViolation>;
  proctors?: XmlMultiElem<LearningRecordProctor>;
  sessions?: XmlMultiElem<LearningRecordSession>;
  get_url_record?(): any;
}

type LearningRecordDocument = XmlDocument<LearningRecordTopElem>;
