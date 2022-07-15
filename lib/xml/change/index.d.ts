interface ChangeView extends DescBase {
}

interface ChangeTopElem extends XmlTopElem<ChangeDocument> {
  name?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_type?: XmlElem<string>;
  object_name?: XmlElem<string>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<ChangeView>;
}

type ChangeDocument = XmlDocument<ChangeTopElem>;
