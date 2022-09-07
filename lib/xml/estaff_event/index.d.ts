interface EstaffEventDocumentObject {
  object_id: XmlElem<number>;
}

interface EstaffEventDocumentMember extends PersonFillingBase {
  collaborator_id: XmlElem<number>;
}

type EstaffEventDocumentTopElem = XmlTopElem & { Doc: EstaffEventDocument } & 
CatalogListBase &
WebVariablesBase &
DocumentPersonsBase &
CustomElemsBase &
AdminAccessBase & {
  vacancy_id: XmlElem<number>;
  vacancy_name: XmlElem<string>;
  vacancy_code: XmlElem<string>;
  request_id: XmlElem<number>;
  code_event: XmlElem<string>;
  event_name: XmlElem<string>;
  start_date: XmlElem<Date>;
  estaff_event_type_id: XmlElem<number>;
  estaff_event_type_name: XmlElem<string>;
  desc: XmlElem<string>;
  object_type: XmlElem<string>;
  objects: XmlMultiElem<EstaffEventDocumentObject>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  linked_object_url: XmlElem<string>;
  event_status_id: XmlElem<string>;
  estaff_event_eid: XmlElem<number>;
  members: XmlMultiElem<EstaffEventDocumentMember>;
  doc_info: XmlElem<DocInfoBase>;
}

type EstaffEventDocument = XmlDocument & {
  TopElem: EstaffEventDocumentTopElem;
};
