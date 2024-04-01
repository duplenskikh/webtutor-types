type ViewAdminAccessCatalogsDocumentTopElem = XmlTopElem & {
  Doc: ViewAdminAccessCatalogsDocument;
  object_name: XmlElem<string, typeof common.exchange_object_types>;
  object_array: XmlElem<unknown>;
};

type ViewAdminAccessCatalogsDocument = XmlDocument & {
  TopElem: ViewAdminAccessCatalogsDocumentTopElem;
  view_admin_access_catalogs: ViewAdminAccessCatalogsDocumentTopElem;
  OnInit(): void;
};
