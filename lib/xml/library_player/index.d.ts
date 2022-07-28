type LibraryPlayerDocumentTopElem = XmlTopElem & { Doc: LibraryPlayerDocument } & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  player_url?: XmlElem<string>;
  learning_storage_id?: XmlElem<number>;
  activity_id?: XmlElem<number>;
  cmi5?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
}

type LibraryPlayerDocument = XmlDocument & { TopElem: LibraryPlayerDocumentTopElem; };
