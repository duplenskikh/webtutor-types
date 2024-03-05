type DischargeDocumentTopElem = XmlTopElem & {
  Doc: DischargeDocument;
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
};

type DischargeDocument = XmlDocument & {
  TopElem: DischargeDocumentTopElem;
};
