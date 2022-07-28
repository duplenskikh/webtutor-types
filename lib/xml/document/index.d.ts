type DocumentDocumentTopElem = XmlTopElem & { Doc: DocumentDocument } & 
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
  create_date: XmlElem<Date>;
  parent_document_id: XmlElem<number>;
  site_id: XmlElem<number>;
  catalog_list_desc(): unknown;
  text_area: XmlElem<string>;
  web_template_type: XmlElem<string>;
  custom_template_type: XmlElem<number>;
  templates_source: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  access_exists(): unknown;
  parent_object_type: XmlElem<string>;
  parent_object_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  set_template(): unknown;
  set_default_template(): unknown;
  update_template(): unknown;
}

type DocumentDocument = XmlDocument & { TopElem: DocumentDocumentTopElem; };
