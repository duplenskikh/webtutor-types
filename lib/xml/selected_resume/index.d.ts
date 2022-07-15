interface SelectedResumeView extends DescBase {
}

interface SelectedResumeTopElem extends XmlTopElem<SelectedResumeDocument>, PersonFillingBase, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  resume_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<SelectedResumeView>;
}

type SelectedResumeDocument = XmlDocument<SelectedResumeTopElem>;
