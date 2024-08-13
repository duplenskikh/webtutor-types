type ObjectResourceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ObjectResourceDocument;
  type: XmlElem<string | null, typeof lists.object_resource_types>;
  state_id: XmlElem<string | null, typeof common.object_resource_states>;
  count: XmlElem<number | null>;
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  small_desc: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ObjectResourceDocument = XmlDocument & {
  TopElem: ObjectResourceDocumentTopElem;
  object_resource: ObjectResourceDocumentTopElem;
  DocDesc(): string;
};
