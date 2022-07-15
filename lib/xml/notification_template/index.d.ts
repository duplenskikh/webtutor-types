interface NotificationTemplateMainObject extends FieldNamesBase {
  catalog_name?: XmlElem<string>;
  init_field_names?(): any;
}

interface NotificationTemplateView extends DescBase {
}

interface NotificationTemplateTopElem extends XmlTopElem<NotificationTemplateDocument>, CustomElemsBase, FileListBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  main_object?: XmlElem<NotificationTemplateMainObject>;
  view?: XmlElem<NotificationTemplateView>;
  add_text_to_edit?(): any;
}

type NotificationTemplateDocument = XmlDocument<NotificationTemplateTopElem>;
