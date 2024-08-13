type ComponentPackageCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  download_package_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  download_date: XmlElem<Date | null>;
  type_id: XmlElem<string | null, typeof common.access_block_types>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
  component_modification_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  OnBuild(): void;
};
