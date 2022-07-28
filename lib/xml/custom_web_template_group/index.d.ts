interface CustomWebTemplateGroupDocumentTemplate extends WebVariablesBase {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  custom_web_template_id?: XmlElem<number>;
  statistic_rec_id?: XmlElem<number>;
  resource_id?: XmlElem<number>;
  parent_template_id?: XmlElem<string>;
  position?: XmlElem<number>;
  comment?: XmlElem<string>;
}

type CustomWebTemplateGroupDocumentTopElem = XmlTopElem & { Doc: CustomWebTemplateGroupDocument } & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  templates?: XmlMultiElem<CustomWebTemplateGroupDocumentTemplate>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
}

type CustomWebTemplateGroupDocument = XmlDocument & { TopElem: CustomWebTemplateGroupDocumentTopElem; };
