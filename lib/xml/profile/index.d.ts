type ProfileDocumentTopElem = XmlTopElem & { Doc: ProfileDocument } & 
  PersonFillingBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  create_date: XmlElem<Date>;
  activity_id: XmlElem<number>;
  activity_code: XmlElem<string>;
  person_id: XmlElem<number>;
  hash(): unknown;
  doc_info: XmlElem<DocInfoBase>;
}

type ProfileDocument = XmlDocument & { TopElem: ProfileDocumentTopElem; };
