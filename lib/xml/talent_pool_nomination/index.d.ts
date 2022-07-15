interface TalentPoolNominationView extends DescBase {
}

interface TalentPoolNominationTopElem extends XmlTopElem<TalentPoolNominationDocument>, ObjectCodeNameBase, FileListBase, CustomElemsBase, AdminAccessBase {
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<TalentPoolNominationView>;
}

type TalentPoolNominationDocument = XmlDocument<TalentPoolNominationTopElem>;
