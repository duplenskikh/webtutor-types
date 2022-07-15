interface LibrarySectionAdministrator extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

interface LibrarySectionView extends DescBase {
  selector?: XmlElem<string>;
}

interface LibrarySectionTopElem extends XmlTopElem<LibrarySectionDocument>, ObjectCodeNameBase, AdminAccessBase, CustomElemsBase {
  parent_object_id?: XmlElem<number>;
  position?: XmlElem<number>;
  link?: XmlElem<string>;
  web_view?: XmlElem<string>;
  external_id?: XmlElem<string>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  administrators?: XmlMultiElem<LibrarySectionAdministrator>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<LibrarySectionView>;
}

type LibrarySectionDocument = XmlDocument<LibrarySectionTopElem>;
