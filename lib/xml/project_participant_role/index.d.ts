interface ProjectParticipantRoleView extends DescBase {
}

interface ProjectParticipantRoleTopElem extends XmlTopElem<ProjectParticipantRoleDocument>, ObjectCodeNameBase, FileListBase, AdminAccessBase, KnowledgePartsBase {
  project_id?: XmlElem<number>;
  participant_num?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<ProjectParticipantRoleView>;
}

type ProjectParticipantRoleDocument = XmlDocument<ProjectParticipantRoleTopElem>;
