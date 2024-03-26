interface CollaboratorAccessDocumentPersonObjectProfile {
  person_object_profile_id: XmlElem<number, PersonObjectProfileCatalogDocumentTopElem>;
}

type CollaboratorAccesCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  login: XmlElem<string>;
  password: XmlElem<string>;
  person_object_profiles: XmlMultiElem<CollaboratorAccessDocumentPersonObjectProfile>;
  change_password: XmlElem<boolean>;
  access: XmlElem<AccessBase>;
};
