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
  get_setting(settingName: string, proctorObjectTopElem: unknown): string;
  get_settings(): Object;
};

type ProctoringSystemDocument = XmlDocument & {
  TopElem: ProctoringSystemDocumentTopElem;
  proctoring_system: ProctoringSystemDocumentTopElem;
  DocDesc(): string;
};
