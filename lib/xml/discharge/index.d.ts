interface ExportOdbcSourceBase {
  db_path: XmlElem<string | null>;
  db_server: XmlElem<string | null>;
  db_login: XmlElem<string | null>;
  db_password: XmlElem<string | null>;
  source_name: XmlElem<string | null>;
  source_type: XmlElem<string>;
  form: XmlElem<string | null>;
  delim: XmlElem<string>;
  encoding: XmlElem<string>;
  lotus_id_path: XmlElem<string | null>;
  lotus_undefined_name: XmlElem<string | null>;
  use_unibridge: XmlElem<boolean>;
  db_type: XmlElem<string, typeof common.discharge_db_types>;
}

interface DischargeDocumentTableField {
  object_field: XmlElem<string | null>;
  table_field: XmlElem<string | null>;
  type: XmlElem<string | null>;
  length: XmlElem<number | null>;
  is_primary_key: XmlElem<boolean>;
}

interface DischargeDocumentTableBind {
  fake_id: XmlElem<string | null>;
  current_field: XmlElem<string | null>;
  remote_field: XmlElem<string | null>;
  remote_form: XmlElem<string | null>;
  update_remote_doc: XmlElem<boolean>;
  search_field: XmlElem<string | null>;
  search_field_type: XmlElem<string | null>;
  equal_field: XmlElem<string | null>;
}

interface DischargeDocumentTable extends ExportOdbcSourceBase {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_active: XmlElem<boolean>;
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  table_name: XmlElem<string | null>;
  condition_text: XmlElem<string | null>;
  select_query: XmlElem<string | null>;
  prev_eval_text: XmlElem<string | null>;
  post_eval_text: XmlElem<string | null>;
  reg_eval_text: XmlElem<string | null>;
  use_catalog: XmlElem<boolean>;
  only_update_data: XmlElem<boolean>;
  miss_first_row: XmlElem<boolean>;
  fields: XmlMultiElem<DischargeDocumentTableField | null>;
  binds: XmlMultiElem<DischargeDocumentTableBind | null>;
}

type DischargeDocumentTopElem = XmlTopElem &
ExportOdbcSourceBase & {
  Doc: DischargeDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.discharge_types>;
  use_common_db: XmlElem<boolean>;
  use_common_form: XmlElem<boolean>;
  tables: XmlMultiElem<DischargeDocumentTable | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DischargeDocument = XmlDocument & {
  TopElem: DischargeDocumentTopElem;
  discharge: DischargeDocumentTopElem;
  DocDesc(): string;
};
