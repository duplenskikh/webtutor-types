interface DischargeDocumentTableField {
  object_field?: XmlElem<string>;
  table_field?: XmlElem<string>;
  type?: XmlElem<string>;
  length?: XmlElem<number>;
  is_primary_key?: XmlElem<boolean>;
}

interface DischargeDocumentTableBind {
  fake_id?: XmlElem<string>;
  current_field?: XmlElem<string>;
  remote_field?: XmlElem<string>;
  remote_form?: XmlElem<string>;
  update_remote_doc?: XmlElem<boolean>;
  search_field?: XmlElem<string>;
  search_field_type?: XmlElem<string>;
  equal_field?: XmlElem<string>;
}
interface DischargeDocumentTable extends ExportOdbcSourceBase {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  is_active?: XmlElem<boolean>;
  object_name?: XmlElem<string>;
  table_name?: XmlElem<string>;
  condition_text?: XmlElem<string>;
  select_query?: XmlElem<string>;
  prev_eval_text?: XmlElem<string>;
  post_eval_text?: XmlElem<string>;
  reg_eval_text?: XmlElem<string>;
  use_catalog?: XmlElem<boolean>;
  only_update_data?: XmlElem<boolean>;
  miss_first_row?: XmlElem<boolean>;
  fields?: XmlMultiElem<DischargeDocumentTableField>;
  binds?: XmlMultiElem<DischargeDocumentTableBind>;
}

type DischargeDocumentTopElem = XmlTopElem & { Doc: DischargeDocument } & 
  ExportOdbcSourceBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  use_common_db?: XmlElem<boolean>;
  use_common_form?: XmlElem<boolean>;
  tables?: XmlMultiElem<DischargeDocumentTable>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type DischargeDocument = XmlDocument & { TopElem: DischargeDocumentTopElem; };
