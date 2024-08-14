type LibraryPlayerDocumentTopElem = XmlTopElem & {
  Doc: LibraryPlayerDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  player_url: XmlElem<string | null>;
  /** Хранилище учебных записей */
  learning_storage_id: XmlElem<number | null, LearningStorageCatalogDocumentTopElem>;
  /** Учебная активность */
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  cmi5: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
};

type LibraryPlayerDocument = XmlDocument & {
  TopElem: LibraryPlayerDocumentTopElem;
  library_player: LibraryPlayerDocumentTopElem;
  DocDesc(): string;
};
