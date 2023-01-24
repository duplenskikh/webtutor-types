type SubmissionTypeCatalogDocumentTopElem = XmlTopElem & { Doc: SubmissionTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  periodity_id: XmlElem<string>;
}

type SubmissionTypeCatalogDocument = XmlDocument & { TopElem: SubmissionTypeCatalogDocumentTopElem; };
