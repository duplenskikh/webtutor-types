interface DlgSelectFilesOptionDocumentFile {
  url: XmlElem<string>;
}

type DlgSelectFilesOptionDocumentTopElem = XmlTopElem &
SelectLearningOptionBase & {
  Doc: DlgSelectFilesOptionDocument;
  url: XmlElem<string>;
  allow_download: XmlElem<boolean>;
  allow_unauthorized_download: XmlElem<boolean>;
  allow_search: XmlElem<boolean>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  role_id: XmlElem<number>;
  multi_select: XmlElem<boolean>;
  apply_for_all: XmlElem<boolean>;
  files: XmlMultiElem<DlgSelectFilesOptionDocumentFile>;
};

type DlgSelectFilesOptionDocument = XmlDocument & {
  TopElem: DlgSelectFilesOptionDocumentTopElem;
  dlg_select_files_option: DlgSelectFilesOptionDocumentTopElem;
};
