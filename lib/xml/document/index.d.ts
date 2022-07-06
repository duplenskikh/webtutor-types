interface IWTDocumentTopElem extends ObjectCodeNameBase,
  IWTCatalogListBase,
  IWTFileListBase,
  IWTWebVariablesBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTGameBonusBase,
  IWTCatalogListBase,
  IWTDocumentPersonsBase,
  IWTDocInfo {
  create_date?: XmlElem<Date>;
  parent_document_id?: XmlElem<number>;
  site_id?: XmlElem<number>;
  catalog_list_desc?: string;
  text_area?: XmlElem<string>;
  attributes?: IWTDocumentAttribute;
  web_template_type?: XmlElem<string>;
  custom_template_type?: XmlElem<number>;
  templates_source?: XmlElem<string>;
  parent_object_type?: XmlElem<string>;
  comment?: XmlElem<string>;
  set_template?(sTemplateTypeParam: string): void;
  set_default_template?(): boolean;
  update_template?(): boolean;
}

type IWTDocument = XmlDocument<IWTDocumentTopElem>;
