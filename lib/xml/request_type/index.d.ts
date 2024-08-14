interface RequestTypeDocumentCreateCode {
  code: XmlElem<string | null>;
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
}

type RequestTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WebVariablesBase & {
  Doc: RequestTypeDocument;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_query_qual: XmlElem<string | null>;
  /** По умолчанию заявка групповая */
  is_group: XmlElem<boolean>;
  /** Заявка может быть групповой */
  is_can_be_group: XmlElem<boolean>;
  /** Подающий заявку может добавить себя */
  is_can_be_add_youself: XmlElem<boolean>;
  /** Не показывать поле обоснование */
  hide_portal_comment: XmlElem<boolean>;
  /** Запретить отклонять заявку ее автору */
  forbid_rejection: XmlElem<boolean>;
  /** Запретить автору заявки создавать копию */
  forbid_copy: XmlElem<boolean>;
  /** Подавать заявку может только руководитель */
  boss_only: XmlElem<boolean>;
  show_all: XmlElem<boolean>;
  ignore_black_list: XmlElem<boolean | null>;
  /** Документооборот по умолчанию */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Сообщение при подаче заявки */
  create_message: XmlElem<string | null>;
  /** Использовать стандартную обработку для данного типа объекта */
  use_standart_processing: XmlElem<boolean>;
  create_code: XmlElem<RequestTypeDocumentCreateCode | null>;
  /** Программный код, выполняемый при обработке заявки данного типа */
  processing_code: XmlElem<string | null>;
  processing_code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Программный код, выполняемый при отмене заявки данного типа */
  reject_processing_code: XmlElem<string | null>;
  reject_processing_code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Шаблон документа заявки */
  request_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  /** Адрес перехода после подачи */
  reject_redirect_url: XmlElem<string | null>;
  /** Удаленное действие */
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type RequestTypeDocument = XmlDocument & {
  TopElem: RequestTypeDocumentTopElem;
  request_type: RequestTypeDocumentTopElem;
  DocDesc(): string;
};
