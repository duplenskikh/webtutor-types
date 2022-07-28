interface DnAuditoriumDocumentObjectResource {
  object_resource_id?: XmlElem<number>;
}

type DnAuditoriumDocumentTopElem = XmlTopElem & { Doc: DnAuditoriumDocument } & 
  AdminAccessBase &
  CustomElemsBase & {
  code?: XmlElem<string>;
  number_places?: XmlElem<string>;
  place_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  object_resources?: XmlMultiElem<DnAuditoriumDocumentObjectResource>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type DnAuditoriumDocument = XmlDocument & { TopElem: DnAuditoriumDocumentTopElem; };
