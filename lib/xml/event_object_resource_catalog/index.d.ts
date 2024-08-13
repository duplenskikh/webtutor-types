type EventObjectResourceCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type_id: XmlElem<string | null, typeof common.event_types>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  status_id: XmlElem<string | null, typeof common.event_status_types>;
  person_num: XmlElem<number | null>;
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  object_resource_id: XmlElem<number | null, ObjectResourceCatalogDocumentTopElem>;
  object_resource_name: XmlElem<string | null>;
  object_resource_type: XmlElem<string | null, typeof lists.object_resource_types>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
