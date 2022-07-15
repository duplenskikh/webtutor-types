interface LearningTaskExpert extends PersonFillingBase {
  id?: XmlElem<string>;
  person_id?: XmlElem<number>;
}

interface LearningTaskViewDuration {
  hour?: XmlElem<number>;
  minute?: XmlElem<number>;
  second?: XmlElem<number>;
}

interface LearningTaskView extends DescBase {
  duration?: XmlElem<LearningTaskViewDuration>;
}

interface LearningTaskTopElem extends XmlTopElem<LearningTaskDocument>, ObjectCodeNameBase, FileListBase, AdminAccessBase, CustomElemsBase, KnowledgePartsKpBase {
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  yourself_start?: XmlElem<boolean>;
  use_in_event?: XmlElem<boolean>;
  duration?: XmlElem<number>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  experts?: XmlMultiElem<LearningTaskExpert>;
  view?: XmlElem<LearningTaskView>;
}

type LearningTaskDocument = XmlDocument<LearningTaskTopElem>;
