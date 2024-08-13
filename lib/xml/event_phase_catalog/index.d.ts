type EventPhaseCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type_id: XmlElem<string | null, typeof common.event_types>;
  status_id: XmlElem<string | null, typeof common.event_status_types>;
  is_public: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  object_resource_id: XmlElem<number | null, ObjectResourceCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
