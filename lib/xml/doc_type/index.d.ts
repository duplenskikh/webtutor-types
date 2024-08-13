interface DocTypeDocumentSheet {
  id: XmlElem<string | null>;
  title: XmlElem<string | null>;
}

interface DocTypeDocumentFieldEntry {
  value: XmlElem<string | null>;
}

interface DocTypeDocumentFieldSubFieldEntry {
  value: XmlElem<string | null>;
}

interface DocTypeDocumentFieldSubField {
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.template_field_types>;
  title: XmlElem<string | null>;
  catalog: XmlElem<string | null>;
  set_value_action: XmlElem<string | null>;
  flag_extended: XmlElem<boolean>;
  is_readonly: XmlElem<boolean>;
  xquery_qual: XmlElem<string | null>;
  entries: XmlMultiElem<DocTypeDocumentFieldSubFieldEntry | null>;
}

interface DocTypeDocumentFieldControlElement {
  type: XmlElem<string | null>;
  title: XmlElem<string | null>;
  action: XmlElem<string | null>;
}

interface DocTypeDocumentField {
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.template_field_types>;
  title: XmlElem<string | null>;
  catalog: XmlElem<string | null>;
  set_value_action: XmlElem<string | null>;
  entries: XmlMultiElem<DocTypeDocumentFieldEntry | null>;
  sheet_id: XmlElem<string | null>;
  flag_extended: XmlElem<boolean>;
  indexed: XmlElem<boolean>;
  in_catalog: XmlElem<boolean>;
  hide_level: XmlElem<number | null>;
  is_multiple: XmlElem<boolean>;
  is_readonly: XmlElem<boolean>;
  translatable: XmlElem<boolean>;
  xquery_qual: XmlElem<string | null>;
  sub_fields: XmlMultiElem<DocTypeDocumentFieldSubField | null>;
  control_elements: XmlMultiElem<DocTypeDocumentFieldControlElement | null>;
}

type DocTypeDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: DocTypeDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  category: XmlElem<string | null>;
  object_name: XmlElem<string>;
  sheets: XmlMultiElem<DocTypeDocumentSheet | null>;
  fields: XmlMultiElem<DocTypeDocumentField | null>;
  is_hier: XmlElem<boolean>;
  is_crave_for_reboot: XmlElem<boolean>;
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  custom_admin_template_id: XmlElem<number | null, CustomAdminTemplateCatalogDocumentTopElem>;
  disp_name: XmlElem<string | null>;
  before_init_action: XmlElem<string | null>;
  before_save_action: XmlElem<string | null>;
  log: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type DocTypeDocument = XmlDocument & {
  TopElem: DocTypeDocumentTopElem;
  doc_type: DocTypeDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
