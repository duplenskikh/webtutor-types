type LearningStorageDocumentTopElem = XmlTopElem & {
  Doc: LearningStorageDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  std_auth: XmlElem<boolean>;
  auth_eval: XmlElem<string | null>;
  auth_person_type: XmlElem<string>;
  auth_person_eval: XmlElem<string | null>;
  external_url: XmlElem<string | null>;
  login: XmlElem<string | null>;
  password: XmlElem<string | null>;
  create_activity: XmlElem<boolean>;
  use_extended_analytics: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  access: XmlElem<AccessDocBase | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type LearningStorageDocument = XmlDocument & {
  TopElem: LearningStorageDocumentTopElem;
  learning_storage: LearningStorageDocumentTopElem;
  DocDesc(): string;
};
