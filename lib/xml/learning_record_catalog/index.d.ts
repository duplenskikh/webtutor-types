type LearningRecordCatalogDocumentTopElem = XmlTopElem & { Doc: LearningRecordCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  event_id: XmlElem<number>;
  proctoring_object_type: XmlElem<string>;
  proctoring_object_id: XmlElem<number>;
  proctoring_object_name: XmlElem<string>;
  proctoring_system_id: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  create_date: XmlElem<Date>;
  state_id: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  is_finish_record: XmlElem<boolean>;
  num_failed_checked_foto: XmlElem<number>;
  check_foto_state_id: XmlElem<string>;
  download_materials: XmlElem<boolean>;
  active_session_id: XmlElem<string>;
  active_session_finish_date: XmlElem<Date>;
  proctors_id: XmlMultiElem<number>;
  archive_proctors_id: XmlMultiElem<number>;
  is_prefer_proctor: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type LearningRecordCatalogDocument = XmlDocument & { TopElem: LearningRecordCatalogDocumentTopElem; };
