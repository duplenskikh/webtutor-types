interface GoodInstanceView extends DescBase {
}

interface GoodInstanceTopElem extends XmlTopElem<GoodInstanceDocument>, ObjectCodeNameBase, PersonFillingBase {
  status?: XmlElem<string>;
  good_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  reserved_date?: XmlElem<Date>;
  paid_date?: XmlElem<Date>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<GoodInstanceView>;
  clear_status?(): any;
}

type GoodInstanceDocument = XmlDocument<GoodInstanceTopElem>;
