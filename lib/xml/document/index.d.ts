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
  create_date: XmlElem<Date | null>;
  parent_document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  catalog_list_desc(): string;
  text_area: XmlElem<string | null>;
  attributes: XmlElem<DocumentDocumentAttributes | null>;
  web_template_type: XmlElem<string | null, typeof common.web_template_types>;
  custom_template_type: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  templates_source: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  access_exists(): boolean;
  parent_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  parent_object_id: XmlElem<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  set_template(templateType: string): void;
  set_default_template(): boolean;
  update_template(): unknown;
};

type DocumentDocument = XmlDocument & {
  TopElem: DocumentDocumentTopElem;
  document: DocumentDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
