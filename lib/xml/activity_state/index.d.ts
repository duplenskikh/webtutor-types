interface ActivityStateDocumentRequest {
  content_type: XmlElem<string>;
  json_str: XmlElem<string>;
  agent_json_str: XmlElem<string>;
  agent: XmlElem<ActorBase>;
}

type ActivityStateDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: ActivityStateDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  activity_id: XmlElem<number>;
  activity_code: XmlElem<string>;
  person_id: XmlElem<number>;
  registration: XmlElem<string>;
  request: XmlElem<ActivityStateDocumentRequest>;
  doc_info: XmlElem<DocInfoBase>;
}

type ActivityStateDocument = XmlDocument & {
  TopElem: ActivityStateDocumentTopElem;
};
