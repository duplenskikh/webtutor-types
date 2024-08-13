interface CompetenceProfileFamilyDocumentCompetenceProfile {
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
}

type CompetenceProfileFamilyDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: CompetenceProfileFamilyDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  competence_profiles: XmlMultiElem<CompetenceProfileFamilyDocumentCompetenceProfile | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type CompetenceProfileFamilyDocument = XmlDocument & {
  TopElem: CompetenceProfileFamilyDocumentTopElem;
  competence_profile_family: CompetenceProfileFamilyDocumentTopElem;
  DocDesc(): string;
};
