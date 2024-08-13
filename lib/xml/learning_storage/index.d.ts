type LearningStorageDocumentTopElem = XmlTopElem & {
  Doc: LearningStorageDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
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
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type LearningStorageDocument = XmlDocument & {
  TopElem: LearningStorageDocumentTopElem;
  learning_storage: LearningStorageDocumentTopElem;
  DocDesc(): string;
};
