interface DocTypeSheet {
  id?: XmlElem<string>;
  title?: XmlElem<string>;
}

interface DocTypeFieldSubFieldEntriesEntry {
  value?: XmlElem<string>;
}

interface DocTypeFieldSubFieldEntries {
  entry?: XmlElem<DocTypeFieldSubFieldEntriesEntry>;
}

interface DocTypeFieldSubField {
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  catalog?: XmlElem<string>;
  set_value_action?: XmlElem<string>;
  flag_extended?: XmlElem<boolean>;
  is_readonly?: XmlElem<boolean>;
  xquery_qual?: XmlElem<string>;
  entries?: XmlElem<DocTypeFieldSubFieldEntries>;
}

interface DocTypeFieldControlElement {
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  action?: XmlElem<string>;
}

interface DocTypeFieldEntriesEntry {
  value?: XmlElem<string>;
}

interface DocTypeFieldEntries {
  entry?: XmlElem<DocTypeFieldEntriesEntry>;
}

interface DocTypeField {
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  catalog?: XmlElem<string>;
  set_value_action?: XmlElem<string>;
  sheet_id?: XmlElem<string>;
  flag_extended?: XmlElem<boolean>;
  indexed?: XmlElem<boolean>;
  in_catalog?: XmlElem<boolean>;
  hide_level?: XmlElem<number>;
  is_multiple?: XmlElem<boolean>;
  is_readonly?: XmlElem<boolean>;
  translatable?: XmlElem<boolean>;
  xquery_qual?: XmlElem<string>;
  sub_fields?: XmlMultiElem<DocTypeFieldSubField>;
  control_elements?: XmlMultiElem<DocTypeFieldControlElement>;
  entries?: XmlElem<DocTypeFieldEntries>;
}

interface DocTypeView extends DescBase {
  is_edit_mode?: XmlElem<boolean>;
  dummy_buff?: XmlElem<number>;
}

interface DocTypeTopElem extends XmlTopElem<DocTypeDocument>, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  category?: XmlElem<string>;
  object_name?: XmlElem<string>;
  is_hier?: XmlElem<boolean>;
  is_crave_for_reboot?: XmlElem<boolean>;
  custom_web_template_id?: XmlElem<number>;
  custom_admin_template_id?: XmlElem<number>;
  disp_name?: XmlElem<string>;
  before_init_action?: XmlElem<string>;
  before_save_action?: XmlElem<string>;
  log?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
  sheets?: XmlMultiElem<DocTypeSheet>;
  fields?: XmlMultiElem<DocTypeField>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<DocTypeView>;
}

type DocTypeDocument = XmlDocument<DocTypeTopElem>;
