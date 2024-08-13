interface VclassSettingDocumentProgramCompletedParentProgram {
  program_id: XmlElem<number | null>;
}

interface VclassSettingDocumentProgram {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  parent_progpam_id: XmlElem<number | null>;
  duration: XmlElem<number | null>;
  person_num: XmlElem<number | null>;
  type: XmlElem<string | null>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  object_code: XmlElem<string | null>;
  catalog_name: XmlElem<string | null, typeof common.learning_catalogs>;
  delay_days: XmlElem<number | null>;
  days: XmlElem<number | null>;
  weight: XmlElem<number | null>;
  start_type: XmlElem<string | null>;
  required: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  completed_parent_programs: XmlMultiElem<VclassSettingDocumentProgramCompletedParentProgram | null>;
}

type VclassSettingDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: VclassSettingDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  programs: XmlMultiElem<VclassSettingDocumentProgram | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type VclassSettingDocument = XmlDocument & {
  TopElem: VclassSettingDocumentTopElem;
  vclass_setting: VclassSettingDocumentTopElem;
  DocDesc(): string;
};
