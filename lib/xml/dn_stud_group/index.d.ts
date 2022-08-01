interface DnStudGroupDocumentSubfaculty {
  subfac_id?: XmlElem<number>;
}

type DnStudGroupDocumentTopElem = XmlTopElem & { Doc: DnStudGroupDocument } & 
AdminAccessBase &
CustomElemsBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  stream_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  academ_year_id?: XmlElem<number>;
  special_id?: XmlElem<number>;
  specialization_id?: XmlElem<number>;
  qualification_id?: XmlElem<number>;
  faculty?: XmlElem<number>;
  subfacultys?: XmlMultiElem<DnStudGroupDocumentSubfaculty>;
  group_size?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
}

type DnStudGroupDocument = XmlDocument & { TopElem: DnStudGroupDocumentTopElem; };
