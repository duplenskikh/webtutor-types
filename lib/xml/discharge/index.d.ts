interface ExportOdbcSourceBase {
  db_path: XmlElem<string>;
  db_server: XmlElem<string>;
  db_login: XmlElem<string>;
  db_password: XmlElem<string>;
  source_name: XmlElem<string>;
  source_type: XmlElem<string>;
  form: XmlElem<string>;
  delim: XmlElem<string>;
  encoding: XmlElem<string>;
  lotus_id_path: XmlElem<string>;
  lotus_undefined_name: XmlElem<string>;
  use_unibridge: XmlElem<boolean>;
  db_type: XmlElem<string, typeof common.discharge_db_types>;
}

interface DischargeDocumentTableField {
  object_field: XmlElem<string>;
  table_field: XmlElem<string>;
  type: XmlElem<string>;
  length: XmlElem<number>;
  is_primary_key: XmlElem<boolean>;
}

interface DischargeDocumentTableBind {
  fake_id: XmlElem<string>;
  current_field: XmlElem<string>;
  remote_field: XmlElem<string>;
  remote_form: XmlElem<string>;
  update_remote_doc: XmlElem<boolean>;
  search_field: XmlElem<string>;
  search_field_type: XmlElem<string>;
  equal_field: XmlElem<string>;
}

interface DischargeDocumentTable extends ExportOdbcSourceBase {
  id: XmlElem<string>;
  name: XmlElem<string>;
  is_active: XmlElem<boolean>;
  object_name: XmlElem<string, typeof common.exchange_object_types>;
  table_name: XmlElem<string>;
  condition_text: XmlElem<string>;
  select_query: XmlElem<string>;
  prev_eval_text: XmlElem<string>;
  post_eval_text: XmlElem<string>;
  reg_eval_text: XmlElem<string>;
  use_catalog: XmlElem<boolean>;
  only_update_data: XmlElem<boolean>;
  miss_first_row: XmlElem<boolean>;
  fields: XmlMultiElem<DischargeDocumentTableField>;
  binds: XmlMultiElem<DischargeDocumentTableBind>;
}

type DischargeDocumentTopElem = XmlTopElem &
ExportOdbcSourceBase & {
  Doc: DischargeDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.discharge_types>;
  use_common_db: XmlElem<boolean>;
  use_common_form: XmlElem<boolean>;
  tables: XmlMultiElem<DischargeDocumentTable>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DischargeDocument = XmlDocument & {
  TopElem: DischargeDocumentTopElem;
  discharge: DischargeDocumentTopElem;
  DocDesc(): string;
};
