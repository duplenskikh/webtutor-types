interface CompetenceProfileFamilyDocumentCompetenceProfile {
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
}

type CompetenceProfileFamilyDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: CompetenceProfileFamilyDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Семействa должностей */
  competence_profiles: XmlMultiElem<CompetenceProfileFamilyDocumentCompetenceProfile | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type CompetenceProfileFamilyDocument = XmlDocument & {
  TopElem: CompetenceProfileFamilyDocumentTopElem;
  competence_profile_family: CompetenceProfileFamilyDocumentTopElem;
  DocDesc(): string;
};
