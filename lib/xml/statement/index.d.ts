interface StatementDocumentVerb {
  id: XmlElem<string>;
  display: XmlElem<string>;
}

type StatementDocumentTopElem = XmlTopElem & {
  Doc: StatementDocument;
  actor: XmlElem<ActorBase>;
  verb: XmlElem<StatementDocumentVerb>;
};

type StatementDocument = XmlDocument & {
  TopElem: StatementDocumentTopElem;
};
