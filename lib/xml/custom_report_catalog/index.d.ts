type CustomReportCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_name_type: XmlElem<string>;
  object_name: XmlElem<string>;
  connect_2_object: XmlElem<string>;
  block: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  access_block_type: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  subscription: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
