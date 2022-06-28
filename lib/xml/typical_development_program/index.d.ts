interface IWTTypicalDevelopmentProgramTask {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  due_date: XmlElem<number>;
  start_edit_days: XmlElem<number>;
  parent_task_id: XmlElem<string>;
  duration_days: XmlElem<number>;
  desc: XmlElem<string>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  auto_appoint_learning: XmlElem<boolean>;
  type_document: XmlElem<string>;
  link_document: XmlElem<string>;
  forbid_task_portal_edit: XmlElem<boolean>;
}

interface IWTTypicalDevelopmentProgramTopElem extends IWTDocInfo {
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  tasks?: XmlMultiElem<IWTTypicalDevelopmentProgramTask>;
}

type IWTTypicalDevelopmentProgramDocument = IWTXmlDocument<IWTTypicalDevelopmentProgramTopElem>;
