interface RatingDocumentObject {
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
}

type RatingDocumentTopElem = XmlTopElem & { Doc: RatingDocument } & 
  AdminAccessBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  object_type?: XmlElem<string>;
  date?: XmlElem<Date>;
  expert_person_id?: XmlElem<number>;
  status?: XmlElem<boolean>;
  objects?: XmlMultiElem<RatingDocumentObject>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type RatingDocument = XmlDocument & { TopElem: RatingDocumentTopElem; };
