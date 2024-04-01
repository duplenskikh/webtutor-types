type DlgCreateSiteDocumentTopElem = XmlTopElem & {
  Doc: DlgCreateSiteDocument;
  name: XmlElem<string>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  copy_override_web_template: XmlElem<boolean>;
  copy_document: XmlElem<boolean>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  new_site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  count_override_web_template: XmlElem<number>;
  count_document: XmlElem<number>;
};

type DlgCreateSiteDocument = XmlDocument & {
  TopElem: DlgCreateSiteDocumentTopElem;
  dlg_create_site: DlgCreateSiteDocumentTopElem;
};
