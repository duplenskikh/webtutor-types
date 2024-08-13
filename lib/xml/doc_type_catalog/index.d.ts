type DocTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  category: XmlElem<string | null>;
  object_name: XmlElem<string | null>;
  disp_name: XmlElem<string | null>;
  is_crave_for_reboot: XmlElem<boolean | null>;
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  custom_admin_template_id: XmlElem<number | null, CustomAdminTemplateCatalogDocumentTopElem>;
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
