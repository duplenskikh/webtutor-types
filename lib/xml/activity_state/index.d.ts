type ActivityStateDocumentTopElem = XmlTopElem & { Doc: ActivityStateDocument } & 
PersonFillingBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  activity_id?: XmlElem<number>;
  activity_code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  registration?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type ActivityStateDocument = XmlDocument & { TopElem: ActivityStateDocumentTopElem; };
