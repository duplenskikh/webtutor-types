type LibrarySystemDocumentTopElem = XmlTopElem &
MsParametersBase &
AdminAccessBase &
WebVariablesBase & {
  Doc: LibrarySystemDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  library_url: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
  get_setting(settingName: string): string;
  get_settings(): Object;
};

type LibrarySystemDocument = XmlDocument & {
  TopElem: LibrarySystemDocumentTopElem;
  library_system: LibrarySystemDocumentTopElem;
  DocDesc(): string;
};
