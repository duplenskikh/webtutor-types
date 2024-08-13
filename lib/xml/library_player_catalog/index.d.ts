type LibraryPlayerCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  learning_storage_id: XmlElem<number | null, LearningStorageCatalogDocumentTopElem>;
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  cmi5: XmlElem<boolean | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  OnBuild(): void;
};
