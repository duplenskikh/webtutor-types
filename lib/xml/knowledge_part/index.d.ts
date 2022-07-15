interface KnowledgePartLevel extends MsConfirmationBase {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  desc?: XmlElem<string>;
  expertise_level?: XmlElem<boolean>;
  confirmation_type?: XmlElem<string>;
}

interface KnowledgePartTempDoc {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  object_type?: XmlElem<string>;
  object_type_name?: XmlElem<string>;
}

interface KnowledgePartView extends DescBase {
  selector?: XmlElem<string>;
  catalog_type?: XmlElem<string>;
  sel_all_objects?: XmlElem<boolean>;
}

interface KnowledgePartTopElem extends XmlTopElem<KnowledgePartDocument>, MsConfirmationBase, CatalogListBase, FileListBase, CustomElemsBase, KnowledgePartsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  parent_object_id?: XmlElem<number>;
  knowledge_classifier_id?: XmlElem<number>;
  confirmation_type?: XmlElem<string>;
  text_area?: XmlElem<string>;
  require_acknowledgement?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  knowledge_part_type_id?: XmlElem<number>;
  levels?: XmlMultiElem<KnowledgePartLevel>;
  temp_docs?: XmlMultiElem<KnowledgePartTempDoc>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<KnowledgePartView>;
}

type KnowledgePartDocument = XmlDocument<KnowledgePartTopElem>;
