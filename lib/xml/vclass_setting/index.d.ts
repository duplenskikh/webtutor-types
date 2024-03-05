interface VclassSettingDocumentProgramCompletedParentProgram {
  program_id: XmlElem<number>;
}

interface VclassSettingDocumentProgram {
  id: XmlElem<number>;
  name: XmlElem<string>;
  parent_progpam_id: XmlElem<number>;
  duration: XmlElem<number>;
  person_num: XmlElem<number>;
  type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  object_code: XmlElem<string>;
  catalog_name: XmlElem<string, typeof common.learning_catalogs>;
  delay_days: XmlElem<number>;
  days: XmlElem<number>;
  weight: XmlElem<number>;
  start_type: XmlElem<string>;
  required: XmlElem<boolean>;
  comment: XmlElem<string>;
  completed_parent_programs: XmlMultiElem<VclassSettingDocumentProgramCompletedParentProgram>;
}

type VclassSettingDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: VclassSettingDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  conversation_id: XmlElem<number, ConversationCatalogDocumentTopElem>;
  programs: XmlMultiElem<VclassSettingDocumentProgram>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type VclassSettingDocument = XmlDocument & {
  TopElem: VclassSettingDocumentTopElem;
};
