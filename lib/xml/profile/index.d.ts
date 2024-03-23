interface ProfileDocumentRequestAgentAccount {
  homePage: XmlElem<string>;
  name: XmlElem<string>;
}

interface ProfileDocumentRequestAgent {
  objectType: XmlElem<string>;
  name: XmlElem<string>;
  mbox: XmlElem<string>;
  mbox_sha1sum: XmlElem<string>;
  openid: XmlElem<string>;
  account: XmlElem<ProfileDocumentRequestAgentAccount>;
}

interface ProfileDocumentRequest {
  content_type: XmlElem<string>;
  json_str: XmlElem<string>;
  agent_json_str: XmlElem<string>;
  agent: XmlElem<ProfileDocumentRequestAgent>;
}

type ProfileDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: ProfileDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  create_date: XmlElem<Date>;
  activity_id: XmlElem<number, ActivityCatalogDocumentTopElem>;
  activity_code: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  request: XmlElem<ProfileDocumentRequest>;
  hash(): string;
  doc_info: XmlElem<DocInfoBase>;
};

type ProfileDocument = XmlDocument & {
  TopElem: ProfileDocumentTopElem;
  profile: ProfileDocumentTopElem;
  DocDesc(): string;
};
