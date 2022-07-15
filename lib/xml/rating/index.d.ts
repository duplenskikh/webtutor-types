interface RatingObject {
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
}

interface RatingTopElem extends XmlTopElem<RatingDocument>, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  object_type?: XmlElem<string>;
  date?: XmlElem<Date>;
  expert_person_id?: XmlElem<number>;
  status?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  objects?: XmlMultiElem<RatingObject>;
}

type RatingDocument = XmlDocument<RatingTopElem>;
