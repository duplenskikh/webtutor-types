type ProctoringSystemDocumentTopElem = XmlTopElem &
MsParametersBase &
AdminAccessBase &
WebVariablesBase & {
  Doc: ProctoringSystemDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  library_url: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
  get_setting(settingName: string, proctorObjectTopElem: unknown): string;
  get_settings(): Object;
};

type ProctoringSystemDocument = XmlDocument & {
  TopElem: ProctoringSystemDocumentTopElem;
  proctoring_system: ProctoringSystemDocumentTopElem;
  DocDesc(): string;
};
