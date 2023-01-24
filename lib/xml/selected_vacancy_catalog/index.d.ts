type SelectedVacancyCatalogDocumentTopElem = XmlTopElem & { Doc: SelectedVacancyCatalogDocument } & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  vacancy_id: XmlElem<number>;
  vacancy_name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SelectedVacancyCatalogDocument = XmlDocument & { TopElem: SelectedVacancyCatalogDocumentTopElem; };
