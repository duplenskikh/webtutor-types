type EventLectorCatalogDocumentTopElem = XmlTopElem &
EventCatalogBase & {
  id: XmlElem<number | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  is_model: XmlElem<boolean>;
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.lector_types>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  lector_fullname: XmlElem<string | null>;
  hours: XmlElem<number | null>;
  is_tutor: XmlElem<boolean | null>;
  is_collaborator: XmlElem<boolean | null>;
  is_preparation: XmlElem<boolean | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
