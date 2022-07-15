interface BlogEntryTopElem extends XmlTopElem<BlogEntryDocument>, PersonFillingBase, FileListBase, KnowledgePartsBase, KnowledgePartsBaseOld, AdminAccessBase, GameBonusBase, CustomElemsBase {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  date_modified?: XmlElem<Date>;
  allow_comment?: XmlElem<boolean>;
  blocked?: XmlElem<boolean>;
  text_area?: XmlElem<string>;
  labels?: XmlElem<string>;
  person_id?: XmlElem<number>;
  blog_id?: XmlElem<number>;
  feed_item_id?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_type?: XmlElem<string>;
  object_name?: XmlElem<string>;
  comment_num?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type BlogEntryDocument = XmlDocument<BlogEntryTopElem>;
