interface ActivityStateRequest {
  content_type?: XmlElem<string>;
  json_str?: XmlElem<string>;
  agent_json_str?: XmlElem<string>;
  agent?: XmlElem<any>;
}

interface ActivityStateTopElem extends XmlTopElem<ActivityStateDocument>,
 IWTPersonFillingBase
{
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  activity_id?: XmlElem<number>;
  activity_code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  registration?: XmlElem<string>;
  request?: XmlElem<ActivityStateRequest>;
  doc_info?: XmlElem<IWTDocInfoBase>;
}

type ActivityStateDocument = XmlDocument<ActivityStateTopElem>;
