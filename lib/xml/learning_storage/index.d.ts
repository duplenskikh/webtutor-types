interface LearningStorageTopElem extends XmlTopElem<LearningStorageDocument> {
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
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type LearningStorageDocument = XmlDocument<LearningStorageTopElem>;
