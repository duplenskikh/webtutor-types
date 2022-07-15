interface CustomWebTemplateGroupTemplate extends WebVariablesBase {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  custom_web_template_id?: XmlElem<number>;
  statistic_rec_id?: XmlElem<number>;
  resource_id?: XmlElem<number>;
  parent_template_id?: XmlElem<string>;
  position?: XmlElem<number>;
  hier_level?: XmlElem<number>;
  hier_expanded?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}

interface CustomWebTemplateGroupView {
  sel_template_id?: XmlElem<string>;
}

interface CustomWebTemplateGroupTopElem extends XmlTopElem<CustomWebTemplateGroupDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  templates?: XmlMultiElem<CustomWebTemplateGroupTemplate>;
  view?: XmlElem<CustomWebTemplateGroupView>;
}

type CustomWebTemplateGroupDocument = XmlDocument<CustomWebTemplateGroupTopElem>;
