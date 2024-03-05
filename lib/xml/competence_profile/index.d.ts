interface CompetenceProfileDocumentRoleWeight {
  role_code: XmlElem<string, AccessRoleCatalogDocumentTopElem>;
  weight: XmlElem<number>;
}

type CompetenceProfileDocumentTopElem = XmlTopElem & {
  Doc: CompetenceProfileDocument;
  role_weights: XmlMultiElem<CompetenceProfileDocumentRoleWeight>;
};

type CompetenceProfileDocument = XmlDocument & {
  TopElem: CompetenceProfileDocumentTopElem;
};
