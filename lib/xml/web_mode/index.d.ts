interface WebModeDocumentTemplateLink extends ViewConditionsBase {
  id: XmlElem<string>;
  type: XmlElem<string>;
  source_template_id: XmlElem<number>;
  target_template_id: XmlElem<number>;
}

interface WebModeDocumentStatisticRec extends WebVariablesBase {
  statistic_rec_id: XmlElem<number>;
}

type WebModeDocumentTopElem = XmlTopElem & { Doc: WebModeDocument } & 
  ObjectTypeBase &
  FuncManagersBase &
  WebVariablesBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_default: XmlElem<boolean>;
  catalog_name: XmlElem<string>;
  placeholder_template_id: XmlElem<number>;
  web_design_id: XmlElem<number>;
  site_id: XmlElem<number>;
  access: XmlElem<AccessDocBase>;
  template_links: XmlMultiElem<WebModeDocumentTemplateLink>;
  statistic_recs: XmlMultiElem<WebModeDocumentStatisticRec>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string>;
  postloading: XmlElem<boolean>;
  loading_instruction: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  use_lpapi(): unknown;
  role_id: XmlMultiElem<number>;
}

type WebModeDocument = XmlDocument & { TopElem: WebModeDocumentTopElem; };
