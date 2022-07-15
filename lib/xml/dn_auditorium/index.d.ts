interface DnAuditoriumObjectResource {
  object_resource_id?: XmlElem<number>;
}

interface DnAuditoriumViewFilter extends AuFtFilter {
}

interface DnAuditoriumView extends DescBase {
  filter?: XmlElem<DnAuditoriumViewFilter>;
}

interface DnAuditoriumTopElem extends XmlTopElem<DnAuditoriumDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  number_places?: XmlElem<string>;
  place_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  object_resources?: XmlMultiElem<DnAuditoriumObjectResource>;
  view?: XmlElem<DnAuditoriumView>;
}

type DnAuditoriumDocument = XmlDocument<DnAuditoriumTopElem>;
