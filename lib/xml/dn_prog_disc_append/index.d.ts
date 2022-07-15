interface DnProgDiscAppendViewFilter extends AuFtFilter {
}

interface DnProgDiscAppendView {
  filter?: XmlElem<DnProgDiscAppendViewFilter>;
}

interface DnProgDiscAppendTopElem extends XmlTopElem<DnProgDiscAppendDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  program_discipline_id?: XmlElem<number>;
  academ_year_id?: XmlElem<number>;
  special_id?: XmlElem<number>;
  specialization_id?: XmlElem<number>;
  educat_form_id?: XmlElem<string>;
  qualification_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<DnProgDiscAppendView>;
}

type DnProgDiscAppendDocument = XmlDocument<DnProgDiscAppendTopElem>;
