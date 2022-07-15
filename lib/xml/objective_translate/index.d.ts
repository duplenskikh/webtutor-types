interface ObjectiveTranslateView {
  selector?: XmlElem<string>;
}

interface ObjectiveTranslateTopElem extends XmlTopElem<ObjectiveTranslateDocument> {
  code?: XmlElem<string>;
  assessment_appraise_id?: XmlElem<number>;
  translator_person_id?: XmlElem<number>;
  translator_person_fullname?: XmlElem<string>;
  translator_objective_id?: XmlElem<string>;
  translator_objective_name?: XmlElem<string>;
  translator_pa_id?: XmlElem<number>;
  recipient_person_id?: XmlElem<number>;
  recipient_person_fullname?: XmlElem<string>;
  recipient_objective_id?: XmlElem<string>;
  recipient_objective_name?: XmlElem<string>;
  recipient_pa_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<ObjectiveTranslateView>;
}

type ObjectiveTranslateDocument = XmlDocument<ObjectiveTranslateTopElem>;
