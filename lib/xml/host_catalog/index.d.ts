type HostCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  hostname: XmlElem<string | null>;
  port: XmlElem<number | null>;
  host: XmlElem<string | null>;
  portal_auth_type: XmlElem<string>;
  allow_lds_auth: XmlElem<boolean>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
