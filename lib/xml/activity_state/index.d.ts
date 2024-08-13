interface ActivityStateDocumentRequest {
  content_type: XmlElem<string | null>;
  json_str: XmlElem<string | null>;
  agent_json_str: XmlElem<string | null>;
  agent: XmlElem<ActorBase | null>;
}

type ActivityStateDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: ActivityStateDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  activity_code: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  registration: XmlElem<string | null>;
  request: XmlElem<ActivityStateDocumentRequest | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ActivityStateDocument = XmlDocument & {
  TopElem: ActivityStateDocumentTopElem;
  activity_state: ActivityStateDocumentTopElem;
  DocDesc(): string;
};
