type ViewCompetencesDocumentTopElem = XmlTopElem &
MsViewCatalogBase & {
  Doc: ViewCompetencesDocument;
};

type ViewCompetencesDocument = XmlDocument & {
  TopElem: ViewCompetencesDocumentTopElem;
  view_competences: ViewCompetencesDocumentTopElem;
  OnInit(): void;
};
