declare namespace tools_chat {
  function write_message(sTextMessage: string, iObjectID: number, teObject: unknown, iSenderID: number, teSender: unknown, arrFiles: unknown, arrCatalogs: unknown, sMessageID: number, oMessageData: unknown, sMessageType: string, arrMessageRecipients: unknown): unknown;
  function get_recipients(iObjectID: number, teObject: unknown): unknown;
  function set_status_participant_in_conversation(iConversationID: number, aParticipantStates: unknown, teConversation: unknown): unknown;
  function change_participants_conversation(iConversationID: number, docConversation: Date, sAction: string, iParticipantID: number, arrParticipants: unknown, iChatbotID: number, iConversationTypeID: number, docParticipantObject: Date): unknown;
  function get_data_conversation(iConversationID: number, iPersonID: number, teConversation: unknown, feConversation: unknown): unknown;
  function get_conversations(iPersonID: number, sStatus: string, sQueryQual: string, dLastDate: Date, bSelectOnlyNewMessage: boolean, Session: Session, iCurrentConversationID: number, sObjectTypes: string, bShowPublic: boolean, bUpdateState: boolean): unknown;
  function get_conversation_messages(iConversationID: number, iPersonID: number, Session: Session, teConversation: unknown, tePerson: unknown, iPageNum: number, iPageSize: number, bCheckUnreadMessage: boolean, xarrBlockMessages: unknown, dLastMessageDate: Date, bSelectOnlyUnreadMessage: boolean): unknown;
  function get_operations_conversation(iConversationID: number, iPersonID: number, teConversation: unknown, tePerson: unknown, teConversationType: unknown): unknown;
  function create_resource(oFileData: unknown, iPersonID: number, bUnauthorize: boolean, tePerson: unknown): unknown;
  function alerd(sText: string, bDebug: boolean): unknown;
  function add_message(iChatID: number, sMessage: string, iSenderID: number, teChat: unknown, iStageID: number, iPrevStageID: number, teChatBot: unknown, oAnswer: unknown, iConversationID: number, bWriteMessage: boolean): unknown;
  function create_chat_chatbot(catChatBotType: unknown, oMessage: unknown, teChatBot: unknown, iPersonID: number, iConversationID: number): unknown;
  function send_to_stage(sChatBotCode: string, curChatID: number, iStageID: number, curChatDoc: unknown, iPrevStageID: number, teChatBot: unknown, bReWriteLastMessage: boolean, iConversationID: number, oRequest: unknown): unknown;
  function chatbot_request_processing(Request: unknown, RequestBody: unknown, RequestQueryString: unknown, RequestForm: unknown, bWriteMessage: boolean, curUserID: number, iConversationID: number): unknown;
  function get_aiml_data(iCustomChatBotTemplateID: number, bIsForcibly: boolean, iCurChatID: number, curChat: unknown, teCustomChatBotTemplate: unknown): unknown;
  function conversation_api(Request: unknown, Response: unknown, isWebSocket: number, Session: Session, sAction: string): unknown;
  function add_chatbot_to_conversation(iConversationID: number, iChatbotID: number, iChatbotTypeID: number): unknown;
  function del_chatbot_from_conversation(iConversationID: number, iChatbotID: number): unknown;
}
