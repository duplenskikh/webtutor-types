type DocTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  category: XmlElem<string>;
  object_name: XmlElem<string>;
  disp_name: XmlElem<string>;
  is_crave_for_reboot: XmlElem<boolean>;
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  custom_admin_template_id: XmlElem<number, CustomAdminTemplateCatalogDocumentTopElem>;
  access_block_type: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
