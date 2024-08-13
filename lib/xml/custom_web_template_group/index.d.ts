interface CustomWebTemplateGroupDocumentTemplate extends WebVariablesBase {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  statistic_rec_id: XmlElem<number | null, StatisticRecCatalogDocumentTopElem>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  parent_template_id: XmlElem<string | null>;
  position: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

type CustomWebTemplateGroupDocumentTopElem = XmlTopElem & {
  Doc: CustomWebTemplateGroupDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  templates: XmlMultiElem<CustomWebTemplateGroupDocumentTemplate | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type CustomWebTemplateGroupDocument = XmlDocument & {
  TopElem: CustomWebTemplateGroupDocumentTopElem;
  custom_web_template_group: CustomWebTemplateGroupDocumentTopElem;
  DocDesc(): string;
};
