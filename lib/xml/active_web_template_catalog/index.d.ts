type ActiveWebTemplateCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  access_level: XmlElem<number | null>;
  access_role: XmlElem<string | null, AccessRoleCatalogDocumentTopElem>;
  mode: XmlElem<string | null>;
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  hash: XmlElem<string | null>;
  creation_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
