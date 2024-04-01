interface DlgNotificationTemplateDocumentRecipient {
  recipient_type: XmlElem<string, typeof common.recipient_types>;
  func_manager_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  eval_str: XmlElem<string>;
  eval_ids_str: XmlElem<string>;
  notification_template_id: XmlElem<number, NotificationTemplateCatalogDocumentTopElem>;
}

interface DlgNotificationTemplateDocumentAttachment {
  name: XmlElem<string>;
  data: XmlElem<Binary>;
}

type DlgNotificationTemplateDocumentTopElem = XmlTopElem & {
  Doc: DlgNotificationTemplateDocument;
  subject: XmlElem<string>;
  body: XmlElem<string>;
  body_type: XmlElem<string>;
  notification_template_id: XmlElem<number, NotificationTemplateCatalogDocumentTopElem>;
  sender_selector: XmlElem<number>;
  sender_email: XmlElem<string>;
  can_close: XmlElem<boolean>;
  recipients: XmlMultiElem<DlgNotificationTemplateDocumentRecipient>;
  attachments: XmlMultiElem<DlgNotificationTemplateDocumentAttachment>;
  notification_system_id: XmlElem<number, NotificationSystemCatalogDocumentTopElem>;
};

type DlgNotificationTemplateDocument = XmlDocument & {
  TopElem: DlgNotificationTemplateDocumentTopElem;
  dlg_notification_template: DlgNotificationTemplateDocumentTopElem;
};
