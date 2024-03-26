type ObjectResourceCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof lists.object_resource_types>;
  state_id: XmlElem<string, typeof common.object_resource_states>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
