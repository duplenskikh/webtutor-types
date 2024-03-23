interface DocumentDocumentAttributes extends DocumentAttributesBase {
  is_menu: XmlElem<boolean>;
  is_main_item: XmlElem<boolean>;
  is_news: XmlElem<boolean>;
  left_disp_childs: XmlElem<boolean>;
  no_disp_childs: XmlElem<boolean>;
}

type DocumentDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CatalogListBase &
FileListBase &
WebVariablesBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
GameBonusBase &
DocumentPersonsBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: DocumentDocument;
  create_date: XmlElem<Date>;
  parent_document_id: XmlElem<number, DocumentCatalogDocumentTopElem>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  catalog_list_desc(): unknown;
  text_area: XmlElem<string>;
  attributes: XmlElem<DocumentDocumentAttributes>;
  web_template_type: XmlElem<string, typeof common.web_template_types>;
  custom_template_type: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  templates_source: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  access_exists(): unknown;
  parent_object_type: XmlElem<string, typeof common.exchange_object_types>;
  parent_object_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  set_template(templateType: string): unknown;
  set_default_template(): unknown;
  update_template(): unknown;
};

type DocumentDocument = XmlDocument & {
  TopElem: DocumentDocumentTopElem;
  document: DocumentDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
