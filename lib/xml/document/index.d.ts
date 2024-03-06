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
  attributes: XmlElem<DocumentAttributesBase>;
  web_template_type: XmlElem<string, typeof common.web_template_types>;
  custom_template_type: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  templates_source: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  access_exists(): unknown;
  parent_object_type: XmlElem<string, typeof common.exchange_object_types>;
  parent_object_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  set_template(sTemplateTypeParam: string): unknown;
  set_default_template(): unknown;
  update_template(): unknown;
};

type DocumentDocument = XmlDocument & {
  TopElem: DocumentDocumentTopElem;
  document: DocumentDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
