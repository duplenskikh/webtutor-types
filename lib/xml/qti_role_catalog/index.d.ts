type QtiRoleCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  parent_role_id: XmlElem<number>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  OnBuild(): void;
};
