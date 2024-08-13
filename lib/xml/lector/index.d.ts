type LectorDocumentTopElem = XmlTopElem &
PersonBase &
PassportDataBase &
CustomElemsBase &
AdminAccessBase &
PathSubsBase & {
  Doc: LectorDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  type: XmlElem<string, typeof common.lector_types>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_position_name: XmlElem<string | null>;
  person_subdivision_name: XmlElem<string | null>;
  allow_publication: XmlElem<boolean>;
  is_dismiss: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  lector_fullname(): unknown;
  role_id: XmlMultiElemObject<number | null>;
};

type LectorDocument = XmlDocument & {
  TopElem: LectorDocumentTopElem;
  lector: LectorDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
