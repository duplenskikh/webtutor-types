interface ActivityStateRequest {
  content_type?: XmlElem<string>;
  json_str?: XmlElem<string>;
  agent_json_str?: XmlElem<string>;
  agent?: XmlElem<ActorBase>;
}

interface ActivityStateTopElem extends XmlTopElem<ActivityStateDocument>, PersonFillingBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  activity_id?: XmlElem<number>;
  activity_code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  registration?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  request?: XmlElem<ActivityStateRequest>;
}

type ActivityStateDocument = XmlDocument<ActivityStateTopElem>;
