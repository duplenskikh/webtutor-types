type DlgAdminAccessCatalogDocumentTopElem = XmlTopElem &
AdminAccessCatalogBase & {
  Doc: DlgAdminAccessCatalogDocument;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  social: XmlElem<SocialObjectAccessBase>;
  disp_filter_fields: XmlElem<boolean>;
};

type DlgAdminAccessCatalogDocument = XmlDocument & {
  TopElem: DlgAdminAccessCatalogDocumentTopElem;
  dlg_admin_access_catalog: DlgAdminAccessCatalogDocumentTopElem;
};
