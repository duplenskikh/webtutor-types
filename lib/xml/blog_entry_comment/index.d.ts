interface IWTBlogEntryCommentTopElem extends
  IWTFileListBase,
  IWTDocInfo,
  IWTCustomElemsBase {
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
  type?: XmlElem<string>;
  creator_name?(): string;
}

type IWTBlogEntryCommentDocument = IWTXmlDocument<IWTBlogEntryCommentTopElem>;
