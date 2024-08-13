type ObjectResourceCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof lists.object_resource_types>;
  state_id: XmlElem<string | null, typeof common.object_resource_states>;
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
