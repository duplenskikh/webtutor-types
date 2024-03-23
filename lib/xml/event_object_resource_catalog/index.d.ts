type EventObjectResourceCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type_id: XmlElem<string, typeof common.event_types>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  status_id: XmlElem<string, typeof common.event_status_types>;
  person_num: XmlElem<number>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  object_resource_id: XmlElem<number, ObjectResourceCatalogDocumentTopElem>;
  object_resource_name: XmlElem<string>;
  object_resource_type: XmlElem<string, typeof lists.object_resource_types>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
