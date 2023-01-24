type WebModeCatalogDocumentTopElem = XmlTopElem & { Doc: WebModeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_default: XmlElem<boolean>;
  catalog_name: XmlElem<string>;
  placeholder_template_id: XmlElem<number>;
  web_design_id: XmlElem<number>;
  site_id: XmlElem<number>;
  use_fcache: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type WebModeCatalogDocument = XmlDocument & { TopElem: WebModeCatalogDocumentTopElem; };
