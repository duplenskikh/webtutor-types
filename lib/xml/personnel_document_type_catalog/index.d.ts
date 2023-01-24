type PersonnelDocumentTypeCatalogDocumentTopElem = XmlTopElem & { Doc: PersonnelDocumentTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  org_signature_types: XmlMultiElem<string>;
  person_signature_types: XmlMultiElem<string>;
  person_first_signature: XmlElem<boolean>;
  print_form_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type PersonnelDocumentTypeCatalogDocument = XmlDocument & { TopElem: PersonnelDocumentTypeCatalogDocumentTopElem; };
