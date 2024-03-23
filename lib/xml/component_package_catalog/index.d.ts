type ComponentPackageCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  download_package_file_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  download_date: XmlElem<Date>;
  type_id: XmlElem<string, typeof common.access_block_types>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  component_modification_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  OnBuild(): void;
};
