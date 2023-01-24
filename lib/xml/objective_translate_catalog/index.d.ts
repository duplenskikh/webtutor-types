type ObjectiveTranslateCatalogDocumentTopElem = XmlTopElem & { Doc: ObjectiveTranslateCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  assessment_appraise_id: XmlElem<number>;
  translator_person_id: XmlElem<number>;
  translator_person_fullname: XmlElem<string>;
  translator_objective_id: XmlElem<string>;
  translator_objective_name: XmlElem<string>;
  translator_pa_id: XmlElem<number>;
  recipient_person_id: XmlElem<number>;
  recipient_objective_id: XmlElem<string>;
  recipient_objective_name: XmlElem<string>;
  recipient_pa_id: XmlElem<number>;
  recipient_person_fullname: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ObjectiveTranslateCatalogDocument = XmlDocument & { TopElem: ObjectiveTranslateCatalogDocumentTopElem; };
