type ProviderCourseTypeDocumentTopElem = XmlTopElem &
AdminAccessBase &
WebVariablesBase & {
  Doc: ProviderCourseTypeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  library_url: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ProviderCourseTypeDocument = XmlDocument & {
  TopElem: ProviderCourseTypeDocumentTopElem;
  provider_course_type: ProviderCourseTypeDocumentTopElem;
  DocDesc(): string;
};
