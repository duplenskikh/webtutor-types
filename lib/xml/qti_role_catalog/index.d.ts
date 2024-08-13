type QtiRoleCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  parent_role_id: XmlElem<number | null>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  OnBuild(): void;
};
