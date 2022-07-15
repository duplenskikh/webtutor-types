interface EfficiencyEstimationView extends DescBase {
}

interface EfficiencyEstimationTopElem extends XmlTopElem<EfficiencyEstimationDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<EfficiencyEstimationView>;
}

type EfficiencyEstimationDocument = XmlDocument<EfficiencyEstimationTopElem>;
