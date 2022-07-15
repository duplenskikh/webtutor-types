interface WorkScheduleView extends DescBase {
}

interface WorkScheduleTopElem extends XmlTopElem<WorkScheduleDocument>, ObjectCodeNameBase, FileListBase, AdminAccessBase, CustomElemsBase {
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<WorkScheduleView>;
}

type WorkScheduleDocument = XmlDocument<WorkScheduleTopElem>;
