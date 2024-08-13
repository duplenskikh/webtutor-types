type RecruitmentSystemDocumentTopElem = XmlTopElem &
AdminAccessBase &
WebVariablesBase & {
  Doc: RecruitmentSystemDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  library_url: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
  get_setting(settingName: string): string;
  get_settings(): Object;
};

type RecruitmentSystemDocument = XmlDocument & {
  TopElem: RecruitmentSystemDocumentTopElem;
  recruitment_system: RecruitmentSystemDocumentTopElem;
  DocDesc(): string;
};
