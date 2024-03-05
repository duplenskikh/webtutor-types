type PresentationCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  file_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  vclass_setting_id: XmlElem<number, VclassSettingCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  OnBuild(): unknown;
};
