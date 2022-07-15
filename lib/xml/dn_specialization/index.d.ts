interface DnSpecializationViewFilter extends AuFtFilter {
}

interface DnSpecializationView extends DescBase {
  filter?: XmlElem<DnSpecializationViewFilter>;
}

interface DnSpecializationTopElem extends XmlTopElem<DnSpecializationDocument>, FileListBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  speciality_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<DnSpecializationView>;
}

type DnSpecializationDocument = XmlDocument<DnSpecializationTopElem>;
