type ProctoringSystemDocumentTopElem = XmlTopElem &
MsParametersBase &
AdminAccessBase &
WebVariablesBase & {
  Doc: ProctoringSystemDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  library_url: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  get_setting(sSettingNameParam: string, teProctorObject: unknown): unknown;
  get_settings(): unknown;
};

type ProctoringSystemDocument = XmlDocument & {
  TopElem: ProctoringSystemDocumentTopElem;
};
