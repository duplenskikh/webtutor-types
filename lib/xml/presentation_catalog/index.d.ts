type PresentationCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  vclass_setting_id: XmlElem<number | null, VclassSettingCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
