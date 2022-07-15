interface WebModeTemplateLink extends ViewConditionsBase {
  id?: XmlElem<string>;
  type?: XmlElem<string>;
  source_template_id?: XmlElem<number>;
  target_template_id?: XmlElem<number>;
}

interface WebModeStatisticRec extends WebVariablesBase {
  statistic_rec_id?: XmlElem<number>;
}

interface WebModeView {
  sel_statistic_recs_id?: XmlElem<string>;
}

interface WebModeTopElem extends XmlTopElem<WebModeDocument>, ObjectTypeBase, FuncManagersBase, WebVariablesBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_default?: XmlElem<boolean>;
  catalog_name?: XmlElem<string>;
  placeholder_template_id?: XmlElem<number>;
  web_design_id?: XmlElem<number>;
  site_id?: XmlElem<number>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  postloading?: XmlElem<boolean>;
  loading_instruction?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  template_links?: XmlMultiElem<WebModeTemplateLink>;
  statistic_recs?: XmlMultiElem<WebModeStatisticRec>;
  view?: XmlElem<WebModeView>;
  access?: XmlElem<AccessDocBase>;
  use_lpapi?(): any;
}

type WebModeDocument = XmlDocument<WebModeTopElem>;
