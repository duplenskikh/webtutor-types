type LibraryPlayerDocumentTopElem = XmlTopElem & {
  Doc: LibraryPlayerDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  player_url: XmlElem<string | null>;
  learning_storage_id: XmlElem<number | null, LearningStorageCatalogDocumentTopElem>;
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  cmi5: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
};

type LibraryPlayerDocument = XmlDocument & {
  TopElem: LibraryPlayerDocumentTopElem;
  library_player: LibraryPlayerDocumentTopElem;
  DocDesc(): string;
};
