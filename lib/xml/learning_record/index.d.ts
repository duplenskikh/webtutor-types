interface LearningRecordDocumentMediaRecord {
  id: XmlElem<string | null>;
  media_url: XmlElem<string | null>;
  stream_number: XmlElem<number | null>;
  type_id: XmlElem<string | null>;
}

interface LearningRecordDocumentLog {
  id: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  text: XmlElem<string | null>;
}

interface LearningRecordDocumentResultComment {
  id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  result_comment: XmlElem<string | null>;
  state_id: XmlElem<string | null, typeof common.learning_record_statuss>;
}

interface LearningRecordDocumentViolationInterval {
  start_time: XmlElem<string | null>;
  finish_time: XmlElem<string | null>;
}

interface LearningRecordDocumentViolation {
  id: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  type_id: XmlElem<string | null, typeof common.violation_types>;
  state_id: XmlElem<string | null, typeof common.violation_states>;
  stream_number: XmlElem<number | null>;
  media_id: XmlElem<number | null>;
  interval: XmlElem<LearningRecordDocumentViolationInterval | null>;
}

interface LearningRecordDocumentProctor {
  proctor_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  state_id: XmlElem<string | null, typeof common.proctor_states>;
  is_prefer: XmlElem<boolean>;
  last_activity_date: XmlElem<Date | null>;
}

interface LearningRecordDocumentSession {
  id: XmlElem<string | null>;
  state_id: XmlElem<string | null, typeof common.proctoring_session_states>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
}

type LearningRecordDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
MsParametersBase & {
  Doc: LearningRecordDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  proctoring_object_type: XmlElem<string, typeof common.exchange_object_types>;
  proctoring_object_id: XmlElem<number | null>;
  proctoring_object_name: XmlElem<string | null>;
  state_id: XmlElem<string | null, typeof common.learning_record_statuss>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  is_finish_record: XmlElem<boolean>;
  check_foto_state_id: XmlElem<string | null, typeof common.learning_record_statuss>;
  num_failed_checked_foto: XmlElem<number | null>;
  result_comment: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  proctoring_system_id: XmlElem<number | null, ProctoringSystemCatalogDocumentTopElem>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  download_materials: XmlElem<boolean>;
  record_num: XmlElem<number | null>;
  start_record_date: XmlElem<Date | null>;
  media_records: XmlMultiElem<LearningRecordDocumentMediaRecord | null>;
  logs: XmlMultiElem<LearningRecordDocumentLog | null>;
  result_comments: XmlMultiElem<LearningRecordDocumentResultComment | null>;
  violations: XmlMultiElem<LearningRecordDocumentViolation | null>;
  proctors: XmlMultiElem<LearningRecordDocumentProctor | null>;
  sessions: XmlMultiElem<LearningRecordDocumentSession | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  get_url_record(userTopElem: unknown, proctorId: number): unknown;
};

type LearningRecordDocument = XmlDocument & {
  TopElem: LearningRecordDocumentTopElem;
  learning_record: LearningRecordDocumentTopElem;
  DocDesc(): string;
  OnBeforeSave(): void;
};
