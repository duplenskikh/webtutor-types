type LibrarySystemDocumentTopElem = XmlTopElem &
MsParametersBase &
AdminAccessBase &
WebVariablesBase & {
  Doc: LibrarySystemDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  library_url: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  get_setting(settingName: string): string;
  get_settings(): Object;
};

type LibrarySystemDocument = XmlDocument & {
  TopElem: LibrarySystemDocumentTopElem;
  library_system: LibrarySystemDocumentTopElem;
  DocDesc(): string;
};
