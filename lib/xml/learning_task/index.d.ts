interface LearningTaskDocumentExpert extends PersonFillingBase {
  id: XmlElem<string>;
  person_id: XmlElem<number>;
}

type LearningTaskDocumentTopElem = XmlTopElem & { Doc: LearningTaskDocument } & 
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase &
KnowledgePartsKpBase & {
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  yourself_start: XmlElem<boolean>;
  use_in_event: XmlElem<boolean>;
  duration: XmlElem<number>;
  experts: XmlMultiElem<LearningTaskDocumentExpert>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
}

type LearningTaskDocument = XmlDocument & { TopElem: LearningTaskDocumentTopElem; };
