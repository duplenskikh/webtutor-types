type ActiveWebTemplateCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  access_level: XmlElem<number>;
  access_role: XmlElem<string, AccessRoleCatalogDocumentTopElem>;
  mode: XmlElem<string>;
  web_design_id: XmlElem<number, WebDesignCatalogDocumentTopElem>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  hash: XmlElem<string>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  OnBuild(): unknown;
};
