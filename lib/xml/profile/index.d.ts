interface ProfileRequestAgentAccount {
  homePage?: XmlElem<string>;
  name?: XmlElem<string>;
}

interface ProfileRequestAgent {
  objectType?: XmlElem<string>;
  name?: XmlElem<string>;
  mbox?: XmlElem<string>;
  mbox_sha1sum?: XmlElem<string>;
  openid?: XmlElem<string>;
  account?: XmlElem<ProfileRequestAgentAccount>;
}

interface ProfileRequest {
  content_type?: XmlElem<string>;
  json_str?: XmlElem<string>;
  agent_json_str?: XmlElem<string>;
  agent?: XmlElem<ProfileRequestAgent>;
}

interface ProfileTopElem extends XmlTopElem<ProfileDocument>, PersonFillingBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  activity_id?: XmlElem<number>;
  activity_code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  request?: XmlElem<ProfileRequest>;
  hash?(): any;
}

type ProfileDocument = XmlDocument<ProfileTopElem>;
