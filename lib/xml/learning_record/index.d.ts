interface LearningRecordDocumentMediaRecord {
  id: XmlElem<string>;
  media_url: XmlElem<string>;
  stream_number: XmlElem<number>;
  type_id: XmlElem<string>;
}

interface LearningRecordDocumentLog {
  id: XmlElem<string>;
  date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  text: XmlElem<string>;
}

interface LearningRecordDocumentResultComment {
  id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  result_comment: XmlElem<string>;
  state_id: XmlElem<string, typeof common.learning_record_statuss>;
}

interface LearningRecordDocumentViolationInterval {
  start_time: XmlElem<string>;
  finish_time: XmlElem<string>;
}

interface LearningRecordDocumentViolation {
  id: XmlElem<string>;
  comment: XmlElem<string>;
  date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  type_id: XmlElem<string, typeof common.violation_types>;
  state_id: XmlElem<string, typeof common.violation_states>;
  stream_number: XmlElem<number>;
  media_id: XmlElem<number>;
  interval: XmlElem<LearningRecordDocumentViolationInterval>;
}

interface LearningRecordDocumentProctor {
  proctor_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.proctor_states>;
  is_prefer: XmlElem<boolean>;
  last_activity_date: XmlElem<Date>;
}

interface LearningRecordDocumentSession {
  id: XmlElem<string>;
  state_id: XmlElem<string, typeof common.proctoring_session_states>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
}

type LearningRecordDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
MsParametersBase & {
  Doc: LearningRecordDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  proctoring_object_type: XmlElem<string, typeof common.exchange_object_types>;
  proctoring_object_id: XmlElem<number>;
  proctoring_object_name: XmlElem<string>;
  state_id: XmlElem<string, typeof common.learning_record_statuss>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  is_finish_record: XmlElem<boolean>;
  check_foto_state_id: XmlElem<string, typeof common.learning_record_statuss>;
  num_failed_checked_foto: XmlElem<number>;
  result_comment: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  proctoring_system_id: XmlElem<number, ProctoringSystemCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
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
  get_url_record(teUser: unknown, ProctorId: number): unknown;
};

type LearningRecordDocument = XmlDocument & {
  TopElem: LearningRecordDocumentTopElem;
  learning_record: LearningRecordDocumentTopElem;
  DocDesc(): unknown;
  OnBeforeSave(): unknown;
};
