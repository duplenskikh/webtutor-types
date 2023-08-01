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
  parent_document_id: XmlElem<number>;
  site_id: XmlElem<number>;
  catalog_list_desc(): string;
  desc: XmlElem<string>;
  text_area: XmlElem<string>;
  attributes: XmlElem<DocumentDocumentAttributes>;
  web_template_type: XmlElem<string>;
  custom_template_type: XmlElem<number>;
  templates_source: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  access_exists(): boolean;
  parent_object_type: XmlElem<string>;
  parent_object_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  set_template(templateType?: string): void;
  set_default_template(): boolean;
  update_template(): boolean;
};

type DocumentDocument = XmlDocument & {
  TopElem: DocumentDocumentTopElem;
};
