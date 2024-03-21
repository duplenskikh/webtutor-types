type RecruitmentSystemDocumentTopElem = XmlTopElem &
AdminAccessBase &
WebVariablesBase & {
  Doc: RecruitmentSystemDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  library_url: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  get_setting(settingName: string): unknown;
  get_settings(): unknown;
};

type RecruitmentSystemDocument = XmlDocument & {
  TopElem: RecruitmentSystemDocumentTopElem;
  recruitment_system: RecruitmentSystemDocumentTopElem;
  DocDesc(): unknown;
};
