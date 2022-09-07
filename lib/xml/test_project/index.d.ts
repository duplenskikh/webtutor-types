interface TestProjectDocumentExpert extends PersonFillingBase {
  person_id: XmlElem<number>;
  item_count: XmlElem<number>;
}

interface TestProjectDocumentGroupPerson extends PersonFillingBase {
  person_id: XmlElem<number>;
  is_master: XmlElem<boolean>;
}
interface TestProjectDocumentGroup {
  id: XmlElem<string>;
  name: XmlElem<string>;
  persons: XmlMultiElem<TestProjectDocumentGroupPerson>;
}

interface TestProjectDocumentPurpose {
  id: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<string>;
  weight: XmlElem<number>;
  item_count: XmlElem<number>;
  _expanded: XmlElem<boolean>;
}

interface TestProjectDocumentItem {
  id: XmlElem<number>;
  title: XmlElem<string>;
  question_text: XmlElem<string>;
  type_id: XmlElem<string>;
  question_points: XmlElem<number>;
  create_date: XmlElem<Date>;
  status: XmlElem<string>;
  quota_correct: XmlElem<number>;
  quota_approved: XmlElem<number>;
  quota_rejected: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  purpose_id: XmlElem<string>;
}

interface TestProjectDocumentItemComment {
  id?(): string;
  person_id: XmlElem<number>;
  person_fullname?(): unknown;
  item_id: XmlElem<number>;
  quota_correct: XmlElem<number>;
  status: XmlElem<string>;
  comment: XmlElem<string>;
}

interface TestProjectDocumentVariant {
  id: XmlElem<string>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  status: XmlElem<string>;
  assessment_id: XmlElem<number>;
  group_id: XmlElem<string>;
  angof_avg: XmlElem<number>;
  max_score: XmlElem<number>;
}

type TestProjectDocumentTopElem = XmlTopElem & { Doc: TestProjectDocument } & 
CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  experts: XmlMultiElem<TestProjectDocumentExpert>;
  groups: XmlMultiElem<TestProjectDocumentGroup>;
  purposes: XmlMultiElem<TestProjectDocumentPurpose>;
  items: XmlMultiElem<TestProjectDocumentItem>;
  item_comments: XmlMultiElem<TestProjectDocumentItemComment>;
  variants: XmlMultiElem<TestProjectDocumentVariant>;
  default_quota_correct: XmlElem<number>;
  default_quota_approved: XmlElem<number>;
  default_quota_rejected: XmlElem<number>;
  variant_counter: XmlElem<number>;
  get_variant_counter?(): unknown;
  desc: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  get_angof_avg?(): unknown;
  pul_list_file?(): unknown;
  set_assessment_status?(): unknown;
}

type TestProjectDocument = XmlDocument & {
  TopElem: TestProjectDocumentTopElem;
};
