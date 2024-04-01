type DlgSelectObjToTrainingPlanDocumentTopElem = XmlTopElem & {
  Doc: DlgSelectObjToTrainingPlanDocument;
  obj: XmlElem<string>;
  create_new: XmlElem<boolean>;
};

type DlgSelectObjToTrainingPlanDocument = XmlDocument & {
  TopElem: DlgSelectObjToTrainingPlanDocumentTopElem;
  dlg_select_obj_to_training_plan: DlgSelectObjToTrainingPlanDocumentTopElem;
};
