interface LikeTopElem extends XmlTopElem<LikeDocument> {
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_type?: XmlElem<string>;
  object_name?: XmlElem<string>;
  weight?: XmlElem<number>;
  create_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  name?(): any;
}

type LikeDocument = XmlDocument<LikeTopElem>;
