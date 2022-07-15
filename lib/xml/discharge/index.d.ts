interface DischargeTableField {
  object_field?: XmlElem<string>;
  table_field?: XmlElem<string>;
  type?: XmlElem<string>;
  length?: XmlElem<number>;
  is_primary_key?: XmlElem<boolean>;
}

interface DischargeTableFieldName {
  name?: XmlElem<string>;
}

interface DischargeTableCustomFieldName {
  name?: XmlElem<string>;
  work_name?: XmlElem<string>;
}

interface DischargeTableBind {
  fake_id?: XmlElem<string>;
  current_field?: XmlElem<string>;
  remote_field?: XmlElem<string>;
  remote_form?: XmlElem<string>;
  update_remote_doc?: XmlElem<boolean>;
  search_field?: XmlElem<string>;
  search_field_type?: XmlElem<string>;
  equal_field?: XmlElem<string>;
}

interface DischargeTable extends ExportOdbcSourceBase {
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
  fields_text?: XmlElem<string>;
  custom_fields_text?: XmlElem<string>;
  has_custom?: XmlElem<boolean>;
  disp_binds?: XmlElem<boolean>;
  fields?: XmlMultiElem<DischargeTableField>;
  field_names?: XmlMultiElem<DischargeTableFieldName>;
  custom_field_names?: XmlMultiElem<DischargeTableCustomFieldName>;
  binds?: XmlMultiElem<DischargeTableBind>;
}

interface DischargeView {
  check_formula?(): any;
}

interface DischargeTopElem extends XmlTopElem<DischargeDocument>, ExportOdbcSourceBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  use_common_db?: XmlElem<boolean>;
  use_common_form?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  tables?: XmlMultiElem<DischargeTable>;
  view?: XmlElem<DischargeView>;
}

type DischargeDocument = XmlDocument<DischargeTopElem>;
