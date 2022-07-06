interface IWTLearningTaskTopElem extends ObjectCodeNameBase, IWTFileListBase {
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  yourself_start?: XmlElem<boolean>;
  desc?: XmlElem<string>;
  experts?: XmlMultiElem<IWTLearningTaskExpert>;
}

type IWTLearningTaskDocument = XmlDocument<IWTLearningTaskTopElem>;
