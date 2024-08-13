type ProviderCourseTypeDocumentTopElem = XmlTopElem &
AdminAccessBase &
WebVariablesBase & {
  Doc: ProviderCourseTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  library_url: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ProviderCourseTypeDocument = XmlDocument & {
  TopElem: ProviderCourseTypeDocumentTopElem;
  provider_course_type: ProviderCourseTypeDocumentTopElem;
  DocDesc(): string;
};
