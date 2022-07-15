interface BlogEntryCommentView extends DescBase {
}

interface BlogEntryCommentTopElem extends XmlTopElem<BlogEntryCommentDocument>, FileListBase, CustomElemsBase {
  id?: XmlElem<number>;
  create_date?: XmlElem<Date>;
  blog_entry_id?: XmlElem<number>;
  object_type?: XmlElem<string>;
  object_name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
  like_id?: XmlElem<number>;
  message?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  type?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<BlogEntryCommentView>;
  creator_name?(): any;
}

type BlogEntryCommentDocument = XmlDocument<BlogEntryCommentTopElem>;
