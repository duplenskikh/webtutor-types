interface DocTypeDocumentSheet {
  id: XmlElem<string>;
  title: XmlElem<string>;
}

interface DocTypeDocumentFieldEntry {
  value: XmlElem<string>;
}

interface DocTypeDocumentFieldSubFieldEntry {
  value: XmlElem<string>;
}

interface DocTypeDocumentFieldSubField {
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.template_field_types>;
  title: XmlElem<string>;
  catalog: XmlElem<string>;
  set_value_action: XmlElem<string>;
  flag_extended: XmlElem<boolean>;
  is_readonly: XmlElem<boolean>;
  xquery_qual: XmlElem<string>;
  entries: XmlMultiElem<DocTypeDocumentFieldSubFieldEntry>;
}

interface DocTypeDocumentFieldControlElement {
  type: XmlElem<string>;
  title: XmlElem<string>;
  action: XmlElem<string>;
}

interface DocTypeDocumentField {
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.template_field_types>;
  title: XmlElem<string>;
  catalog: XmlElem<string>;
  set_value_action: XmlElem<string>;
  entries: XmlMultiElem<DocTypeDocumentFieldEntry>;
  sheet_id: XmlElem<string>;
  flag_extended: XmlElem<boolean>;
  indexed: XmlElem<boolean>;
  in_catalog: XmlElem<boolean>;
  hide_level: XmlElem<number>;
  is_multiple: XmlElem<boolean>;
  is_readonly: XmlElem<boolean>;
  translatable: XmlElem<boolean>;
  xquery_qual: XmlElem<string>;
  sub_fields: XmlMultiElem<DocTypeDocumentFieldSubField>;
  control_elements: XmlMultiElem<DocTypeDocumentFieldControlElement>;
}

type DocTypeDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: DocTypeDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  category: XmlElem<string>;
  object_name: XmlElem<string>;
  sheets: XmlMultiElem<DocTypeDocumentSheet>;
  fields: XmlMultiElem<DocTypeDocumentField>;
  is_hier: XmlElem<boolean>;
  is_crave_for_reboot: XmlElem<boolean>;
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  custom_admin_template_id: XmlElem<number, CustomAdminTemplateCatalogDocumentTopElem>;
  disp_name: XmlElem<string>;
  before_init_action: XmlElem<string>;
  before_save_action: XmlElem<string>;
  log: XmlElem<string>;
  desc: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  disp_block: XmlElem<MsDispBlockBase>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
};

type DocTypeDocument = XmlDocument & {
  TopElem: DocTypeDocumentTopElem;
};
