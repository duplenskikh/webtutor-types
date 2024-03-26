type RemoteActionCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  category: XmlElem<string>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  link_name: XmlElem<string>;
  show_in_list: XmlElem<boolean>;
  show_in_form: XmlElem<boolean>;
  url: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
