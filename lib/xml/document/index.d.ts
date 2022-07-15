interface DocumentAttributes extends DocumentAttributesBase {
  is_menu?: XmlElem<boolean>;
  is_main_item?: XmlElem<boolean>;
  is_news?: XmlElem<boolean>;
  left_disp_childs?: XmlElem<boolean>;
  no_disp_childs?: XmlElem<boolean>;
}

interface DocumentViewParentItem {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
}

interface DocumentView extends DescBase {
  custom_web_template_obj?: XmlElem<any>;
  notification_document_id?: XmlElem<number>;
  knowledge_classifier_id?: XmlElem<number>;
  knowledge_sort_type_id?: XmlElem<string>;
  parent_items?: XmlMultiElem<DocumentViewParentItem>;
  update_parent_items?(): any;
}

interface DocumentTopElem extends XmlTopElem<DocumentDocument>, ObjectCodeNameBase, CatalogListBase, FileListBase, WebVariablesBase, KnowledgePartsBase, KnowledgePartsBaseOld, GameBonusBase, DocumentPersonsBase, CustomElemsBase, AdminAccessBase {
  create_date?: XmlElem<Date>;
  parent_document_id?: XmlElem<number>;
  site_id?: XmlElem<number>;
  text_area?: XmlElem<string>;
  web_template_type?: XmlElem<string>;
  custom_template_type?: XmlElem<number>;
  templates_source?: XmlElem<string>;
  parent_object_type?: XmlElem<string>;
  parent_object_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  attributes?: XmlElem<DocumentAttributes>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<DocumentView>;
  catalog_list_desc?(): any;
  access_exists?(): any;
  set_template?(): any;
  set_default_template?(): any;
  update_template?(): any;
}

type DocumentDocument = XmlDocument<DocumentTopElem>;
