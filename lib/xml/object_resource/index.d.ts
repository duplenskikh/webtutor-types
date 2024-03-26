type ObjectResourceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ObjectResourceDocument;
  type: XmlElem<string, typeof lists.object_resource_types>;
  state_id: XmlElem<string, typeof common.object_resource_states>;
  count: XmlElem<number>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  small_desc: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ObjectResourceDocument = XmlDocument & {
  TopElem: ObjectResourceDocumentTopElem;
  object_resource: ObjectResourceDocumentTopElem;
  DocDesc(): string;
};
