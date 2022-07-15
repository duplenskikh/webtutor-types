interface BlogAuthor extends PersonFillingBase {
  person_id?: XmlElem<number>;
  is_full_moderator?: XmlElem<boolean>;
}

interface BlogView extends DescBase {
  author_sort_type?: XmlElem<string>;
}

interface BlogTopElem extends XmlTopElem<BlogDocument>, ObjectCodeNameBase, WebVariablesBase, PersonFillingBase, KnowledgePartsBase, AdminAccessBase, CustomElemsBase {
  create_date?: XmlElem<Date>;
  type?: XmlElem<string>;
  channel_provider_id?: XmlElem<number>;
  permit_subscription?: XmlElem<boolean>;
  allow_anonymous_comment?: XmlElem<boolean>;
  creator_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  object_type?: XmlElem<string>;
  object_name?: XmlElem<string>;
  num_message_in_list?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  authors?: XmlMultiElem<BlogAuthor>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<BlogView>;
  authors_num?(): any;
  creator_full_info?(): any;
}

type BlogDocument = XmlDocument<BlogTopElem>;
