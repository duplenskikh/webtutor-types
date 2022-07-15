interface ReprimandView {
  selector?: XmlElem<string>;
}

interface ReprimandTopElem extends XmlTopElem<ReprimandDocument>, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  reprimand_type_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<ReprimandView>;
}

type ReprimandDocument = XmlDocument<ReprimandTopElem>;
