interface CustomWebTemplateGroupDocumentTemplate extends WebVariablesBase {
  id: XmlElem<string>;
  name: XmlElem<string>;
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  statistic_rec_id: XmlElem<number, StatisticRecCatalogDocumentTopElem>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  parent_template_id: XmlElem<string>;
  position: XmlElem<number>;
  comment: XmlElem<string>;
}

type CustomWebTemplateGroupDocumentTopElem = XmlTopElem & {
  Doc: CustomWebTemplateGroupDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  templates: XmlMultiElem<CustomWebTemplateGroupDocumentTemplate>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type CustomWebTemplateGroupDocument = XmlDocument & {
  TopElem: CustomWebTemplateGroupDocumentTopElem;
  custom_web_template_group: CustomWebTemplateGroupDocumentTopElem;
  DocDesc(): string;
};
