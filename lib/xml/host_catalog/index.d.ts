type HostCatalogDocumentTopElem = XmlTopElem & { Doc: HostCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  hostname: XmlElem<string>;
  port: XmlElem<number>;
  host: XmlElem<string>;
  portal_auth_type: XmlElem<string>;
  allow_lds_auth: XmlElem<boolean>;
  site_id: XmlElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type HostCatalogDocument = XmlDocument & { TopElem: HostCatalogDocumentTopElem; };
