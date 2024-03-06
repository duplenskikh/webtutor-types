type LectorDocumentTopElem = XmlTopElem &
PersonBase &
PassportDataBase &
CustomElemsBase &
AdminAccessBase &
PathSubsBase & {
  Doc: LectorDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  type: XmlElem<string, typeof common.lector_types>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  allow_publication: XmlElem<boolean>;
  is_dismiss: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  lector_fullname(): unknown;
  role_id: XmlMultiElemObject<number>;
};

type LectorDocument = XmlDocument & {
  TopElem: LectorDocumentTopElem;
  lector: LectorDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
