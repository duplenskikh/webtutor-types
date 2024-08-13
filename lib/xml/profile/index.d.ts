interface ProfileDocumentRequestAgentAccount {
  homePage: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface ProfileDocumentRequestAgent {
  objectType: XmlElem<string | null>;
  name: XmlElem<string | null>;
  mbox: XmlElem<string | null>;
  mbox_sha1sum: XmlElem<string | null>;
  openid: XmlElem<string | null>;
  account: XmlElem<ProfileDocumentRequestAgentAccount | null>;
}

interface ProfileDocumentRequest {
  content_type: XmlElem<string | null>;
  json_str: XmlElem<string | null>;
  agent_json_str: XmlElem<string | null>;
  agent: XmlElem<ProfileDocumentRequestAgent | null>;
}

type ProfileDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: ProfileDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  activity_code: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  request: XmlElem<ProfileDocumentRequest | null>;
  hash(): string;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ProfileDocument = XmlDocument & {
  TopElem: ProfileDocumentTopElem;
  profile: ProfileDocumentTopElem;
  DocDesc(): string;
};
