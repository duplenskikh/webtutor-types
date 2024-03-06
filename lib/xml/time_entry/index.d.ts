type TimeEntryDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: TimeEntryDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  task_id: XmlElem<number, TaskCatalogDocumentTopElem>;
  task_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  duration: XmlElem<number>;
  description: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type TimeEntryDocument = XmlDocument & {
  TopElem: TimeEntryDocumentTopElem;
  time_entry: TimeEntryDocumentTopElem;
  DocDesc(): unknown;
};
