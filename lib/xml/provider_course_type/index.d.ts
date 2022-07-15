interface ProviderCourseTypeTopElem extends XmlTopElem<ProviderCourseTypeDocument>, AdminAccessBase, WebVariablesBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  library_url?: XmlElem<string>;
  comment?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
}

type ProviderCourseTypeDocument = XmlDocument<ProviderCourseTypeTopElem>;
