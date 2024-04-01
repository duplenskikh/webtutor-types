type ViewTasksDocumentTopElem = XmlTopElem & {
  Doc: ViewTasksDocument;
  tasks: XmlMultiElem<TaskInfoBase>;
  error: XmlElem<number>;
  status_action(list: unknown, status: string): unknown;
  close_action(taskId: string): unknown;
  timer_action(): unknown;
};

type ViewTasksDocument = XmlDocument & {
  TopElem: ViewTasksDocumentTopElem;
  view_tasks: ViewTasksDocumentTopElem;
};
