type LearningStorageDocumentTopElem = XmlTopElem & { Doc: LearningStorageDocument } & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  std_auth?: XmlElem<boolean>;
  auth_eval?: XmlElem<string>;
  auth_person_type?: XmlElem<string>;
  auth_person_eval?: XmlElem<string>;
  external_url?: XmlElem<string>;
  login?: XmlElem<string>;
  password?: XmlElem<string>;
  create_activity?: XmlElem<boolean>;
  use_extended_analytics?: XmlElem<boolean>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  access?: XmlElem<AccessDocBase>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type LearningStorageDocument = XmlDocument & { TopElem: LearningStorageDocumentTopElem; };
