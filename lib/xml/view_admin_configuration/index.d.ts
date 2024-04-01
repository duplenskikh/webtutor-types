type ViewAdminConfigurationDocumentTopElem = XmlTopElem & {
  Doc: ViewAdminConfigurationDocument;
  admin_configuration_id: XmlElem<number, AdminConfigurationCatalogDocumentTopElem>;
  admin_configuration_obj: XmlElem<unknown>;
  disp_desc: XmlElem<boolean>;
};

type ViewAdminConfigurationDocument = XmlDocument & {
  TopElem: ViewAdminConfigurationDocumentTopElem;
  view_admin_configuration: ViewAdminConfigurationDocumentTopElem;
  OnInit(): void;
};
