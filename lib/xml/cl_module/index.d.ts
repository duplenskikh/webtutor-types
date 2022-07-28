interface ClModuleDocumentGuideLine {
  pos?: XmlElem<number>;
  is_vertical?: XmlElem<boolean>;
}

interface ClModuleDocumentSlide {
  id?: XmlElem<number>;
}

interface ClModuleDocumentTemplateSlide {
  id?: XmlElem<string>;
  guid?: XmlElem<string>;
  template_slide_xml?: XmlElem<string>;
}

type ClModuleDocumentTopElem = XmlTopElem & { Doc: ClModuleDocument } & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  cl_course_id?: XmlElem<number>;
  resource_url?: XmlElem<string>;
  is_template?: XmlElem<boolean>;
  category?: XmlElem<string>;
  category_label?: XmlElem<string>;
  format?: XmlElem<string>;
  rev?: XmlElem<number>;
  template?: XmlElem<string>;
  template_id?: XmlElem<number>;
  file?: XmlElem<string>;
  cx_settings?: XmlElem<string>;
  cx_groups?: XmlElem<string>;
  guide_lines?: XmlMultiElem<ClModuleDocumentGuideLine>;
  slides?: XmlMultiElem<ClModuleDocumentSlide>;
  template_slides?: XmlMultiElem<ClModuleDocumentTemplateSlide>;
  access?: XmlElem<AccessDocBase>;
  desc?: XmlElem<string>;
  stamp?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  module_href_get?(): unknown;
  export_2_scorm?(): unknown;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
}

type ClModuleDocument = XmlDocument & { TopElem: ClModuleDocumentTopElem; };
