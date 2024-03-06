interface ForumDocumentModerator extends PersonFillingBase {
  moderator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

type ForumDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
MsPersonSdBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
AdminAccessBase & {
  Doc: ForumDocument;
  create_date: XmlElem<Date>;
  permit_subscription: XmlElem<boolean>;
  closed: XmlElem<boolean>;
  allow_anonymous_message: XmlElem<boolean>;
  allow_create_closed_theme: XmlElem<boolean>;
  allow_user_delete: XmlElem<boolean>;
  allow_create_pinned_theme: XmlElem<boolean>;
  allow_rich_text_edit: XmlElem<boolean>;
  allow_edit: XmlElem<boolean>;
  disp_user_status: XmlElem<boolean>;
  disp_user_avatar: XmlElem<boolean>;
  disp_foto: XmlElem<boolean>;
  need_moder_approval: XmlElem<boolean>;
  can_attach_file: XmlElem<boolean>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  access: XmlElem<AccessDocBase>;
  moderators: XmlMultiElem<ForumDocumentModerator>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type ForumDocument = XmlDocument & {
  TopElem: ForumDocumentTopElem;
  forum: ForumDocumentTopElem;
  DocDesc(): unknown;
};
