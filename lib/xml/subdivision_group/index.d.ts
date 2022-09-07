interface SubdivisionGroupDocumentSubdivision {
  subdivision_id: XmlElem<number>;
  subdivision_name: XmlElem<string>;
}

type SubdivisionGroupDocumentTopElem = XmlTopElem & { Doc: SubdivisionGroupDocument } & 
ObjectCodeNameBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
RequirementsBase &
ViewConditionsBase & {
  is_dynamic: XmlElem<boolean>;
  subdivisions: XmlMultiElem<SubdivisionGroupDocumentSubdivision>;
  kpi_profile_id: XmlElem<number>;
  bonus_profile_id: XmlElem<number>;
  schedule_type_id: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  desc: XmlElem<string>;
  dynamic_select_subdivision(clearList?: boolean): void;
  dynamic_select_person(clearList: boolean): void;
  start_action?(): unknown;
}

type SubdivisionGroupDocument = XmlDocument & {
  TopElem: SubdivisionGroupDocumentTopElem;
};
