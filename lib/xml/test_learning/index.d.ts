
interface IWTTestLearningTopElem extends IWTAnnalsNumsBase, IWTAdminAccessBase, IWTDocInfo, IWTPersonFillingBase {
  id?: XmlElem<number>;
  assessment_id?: XmlElem<number>;
  assessment_name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_current_state?: XmlElem<string>;
  event_id?: XmlElem<number>;
  group_id?: XmlElem<number>;
  sections?: XmlMultiElem<IWTLearningSection>;
  start_usage_date?: XmlElem<Date>;
  start_learning_date?: XmlElem<Date>;
  last_usage_date?: XmlElem<Date>;
  max_end_date?: XmlElem<Date>;
  score?: XmlElem<number>;
  text_result?: XmlElem<string>;
  state_id?: XmlElem<number>;
  time?: XmlElem<number>;
  max_score?: XmlElem<number>;
  education_plan_id?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  active_test_learning_id?: XmlElem<number>;
  creation_date?: XmlElem<Date>;
  creation_user_id?: XmlElem<number>;
  modification_date?: XmlElem<Date>;
  modification_user_id?: XmlElem<number>;
  app_instance_id?: XmlElem<string>;
  use_proctoring?: XmlElem<boolean>;
}

type IWTTestLearningDocument = IWTXmlDocument<IWTTestLearningTopElem>;
