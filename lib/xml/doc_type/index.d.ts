interface IWTDocTypeSheet {
  id?: XmlElem<string>;
  title?: XmlElem<string>;
}

interface IWTDocTypeFieldEntry {
  value?: XmlElem<string>;
}

interface IWTDocTypeFieldSubFieldEntry {
  value?: XmlElem<string>;
}

interface IWTDocTypeFieldSubField {
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  catalog?: XmlElem<string>;
  set_value_action?: XmlElem<string>;
  flag_extended?: XmlElem<boolean>;
  is_readonly?: XmlElem<boolean>;
  xquery_qual?: XmlElem<string>;
  entries?: XmlMultiElem<IWTDocTypeFieldSubFieldEntry>;
}

interface IWTDocTypeFieldControlElement {
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  action?: XmlElem<string>;
}

interface IWTDocTypeField {
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  catalog?: XmlElem<string>;
  set_value_action?: XmlElem<string>;
  entries?: XmlMultiElem<IWTDocTypeFieldEntry>;
  sheet_id?: XmlElem<string>;
  flag_extended?: XmlElem<boolean>;
  indexed?: XmlElem<boolean>;
  in_catalog?: XmlElem<boolean>;
  hide_level?: XmlElem<number>;
  is_multiple?: XmlElem<boolean>;
  is_readonly?: XmlElem<boolean>;
  translatable?: XmlElem<boolean>;
  xquery_qual?: XmlElem<string>;
  sub_fields?: XmlMultiElem<IWTDocTypeFieldSubField>;
  control_elements?: XmlMultiElem<IWTDocTypeFieldControlElement>;
}

interface IWTDocTypeTopElem extends IWTCustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  category?: XmlElem<string>;
  object_name?: XmlElem<string>;
  sheets?: XmlMultiElem<IWTDocTypeSheet>;
  fields?: XmlMultiElem<IWTDocTypeField>;
  is_hier?: XmlElem<boolean>;
  is_crave_for_reboot?: XmlElem<boolean>;
  custom_web_template_id?: XmlElem<number>;
  custom_admin_template_id?: XmlElem<number>;
  disp_name?: XmlElem<string>;
  before_init_action?: XmlElem<string>;
  before_save_action?: XmlElem<string>;
  log?: XmlElem<string>;
  desc?: XmlElem<string>;
  access?: XmlElem<IWTAccessDocBase>;
  disp_block?: XmlElem<IWTMSDispBlockBase>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
}

type IWTDocTypeDocument = IWTXmlDocument<IWTDocTypeTopElem>;
