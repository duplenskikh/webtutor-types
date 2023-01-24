type RestrictingCollaboratorScheduleCatalogDocumentTopElem = XmlTopElem & { Doc: RestrictingCollaboratorScheduleCatalogDocument } & 
PersonFillingBase & {
  id: XmlElem<number>;
  person_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  restriction_type_id: XmlElem<number>;
  state_id: XmlElem<string>;
}

type RestrictingCollaboratorScheduleCatalogDocument = XmlDocument & { TopElem: RestrictingCollaboratorScheduleCatalogDocumentTopElem; };
