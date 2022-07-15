interface DocumentCommentEntryView extends DescBase {
  last_parent_document_entry_id?: XmlElem<number>;
}

interface DocumentCommentEntryTopElem extends XmlTopElem<DocumentCommentEntryDocument>, AdminAccessBase, CustomElemsBase {
  name?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  deleted?: XmlElem<boolean>;
  how2show?: XmlElem<string>;
  user_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  portal_doc_id?: XmlElem<number>;
  parent_document_entry_id?: XmlElem<number>;
  text_area?: XmlElem<string>;
  last_create_date?: XmlElem<Date>;
  child_num?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<DocumentCommentEntryView>;
  author_info?(): any;
}

type DocumentCommentEntryDocument = XmlDocument<DocumentCommentEntryTopElem>;
