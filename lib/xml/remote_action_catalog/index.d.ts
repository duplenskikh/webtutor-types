type RemoteActionCatalogDocumentTopElem = XmlTopElem & { Doc: RemoteActionCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  category: XmlElem<string>;
  catalog_name: XmlElem<string>;
  link_name: XmlElem<string>;
  show_in_list: XmlElem<boolean>;
  show_in_form: XmlElem<boolean>;
  url: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type RemoteActionCatalogDocument = XmlDocument & { TopElem: RemoteActionCatalogDocumentTopElem; };
