type SelectedVacancyCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  vacancy_id: XmlElem<number, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
