interface EstaffEventDocumentObject {
  object_id: XmlElem<number | null>;
}

interface EstaffEventDocumentMember extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type EstaffEventDocumentTopElem = XmlTopElem &
MsPersonSdBase &
CatalogListBase &
WebVariablesBase &
DocumentPersonsBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: EstaffEventDocument;
  id: XmlElem<number | null>;
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string | null>;
  vacancy_code: XmlElem<string | null>;
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  code_event: XmlElem<string | null>;
  event_name: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  estaff_event_type_id: XmlElem<number | null, EstaffEventTypeCatalogDocumentTopElem>;
  estaff_event_type_name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  objects: XmlMultiElem<EstaffEventDocumentObject | null>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  linked_object_url: XmlElem<string | null>;
  event_status_id: XmlElem<string | null, typeof common.estaff_event_status_types>;
  estaff_event_eid: XmlElem<number | null>;
  members: XmlMultiElem<EstaffEventDocumentMember | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type EstaffEventDocument = XmlDocument & {
  TopElem: EstaffEventDocumentTopElem;
  estaff_event: EstaffEventDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
