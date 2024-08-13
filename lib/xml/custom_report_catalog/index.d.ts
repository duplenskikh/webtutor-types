type CustomReportCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_name_type: XmlElem<string>;
  object_name: XmlElem<string | null>;
  connect_2_object: XmlElem<string | null>;
  block: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  subscription: XmlElem<boolean | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
