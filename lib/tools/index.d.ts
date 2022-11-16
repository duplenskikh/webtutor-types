type ObjectAssemblyLibraryType = "Zip" | "Image" | "ImageUtils" |
"PdfGenerator" | "Pdf" | "Powerpoint" | "Excel" | "Word" |
"Crypto" | "CryptoStore" | "CryptoPro" | "FileUtils" | "WebUtils" |
"RegExp" | "DatexCore" | "UniBridgeSettings" | "HttpRequest" | "Authorization" |
"XHTTPMiddleware" | "XHTTPMiddlewareStatic" | "FaceRecognition" | "PKeyGenerator" |
"Code" | "RecordingClient" | "MediaPostStreamHandler" | "VideoNeuralHandler" |
"NeuralHandlerAssembly" | "VFSStatic";

declare namespace tools {
  /**
   * Назначение курса участникам указанного мероприятия.
   * @param eventId (обязательный) Тип: Целое число. ID мероприятия, для участников которого назначается курс.
   * @param courseId (обязательный) Тип: Целое число. ID курса, который необходимо назначить.
   * @param eventDocument (необязательный) Тип: Объект XmlDoc. Документ карточки мероприятия.
   * @param duration (необязательный) Тип: Целое число. Длительность курса в днях.
   * Определяет дату планируемого завершения.
   * @param startLearningDate (необязательный) Тип: Дата. Дата начала обучения.
   * Если данный аргумент задан, то обучение невозможно будет начать раньше указанной даты.
   * @param testLearningDate (необязательный) Тип: Дата. Контрольная дата завершения предыдущего обучения.
   * Если параметр задан, то при назначении курса, проверяется, существует ли в каталоге learnings курс,
   * завершенный после указанной даты. Если такой курс существует, то соответствующая запись из каталога
   * learnings возвращается как результат работы функции.
   * @returns Тип: Целое число. Количество назначенных курсов.
   */
  function activate_course_to_event(
    eventId: number,
    courseId: number,
    eventDocument?: EventDocument,
    duration?: number,
    startLearningDate?: Date,
    testLearningDate?: Date
  ): number;

  /**
   * @param personId Id сотрудника, которому назначается курс
   * @param courseId Id курса, который необходимо назначить
   * @param eventId Id мероприятия, участникам которого назначается курс
   * @param personDoc TopElem карточки сотрудника, которому назначается курс
   * @param educationPlanId Id плана обучения, в рамках которого назначен курс
   * @param duration Длительность курса в днях. Определяет дату планируемого завершения
   * @param startLearningDate Дата начала обучения. Если данный аргумент задан, то обучение невозможно будет начать раньше указанной даты
   * @param lastLearningDate Контрольная дата завершения предыдущего обучения.
   * Если параметр задан, то при назначении курса, проверяется,
   * существует ли в каталоге learnings курс, завершенный после указанной даты.
   * Если такой курс существует, то ID соответствующей записи из каталога
   * learnings возвращается как результат работы функции.
   * @param groupId Id группы, которой назначен курс
   * @param eid Код записи в каталоге active_learnings.
   * Если он указан, то при назначении курса,
   * когда производится проверка на уже существующий активный курс
   * данного сотрудника в каталоге active_learnings, проверяется также,
   * что у данной записи должен быть указанный в параметре код.
   * @param skipDismissed Аргумент, указывающий на необходимость пропускать уволенных
   * сотрудников (true – пропускать, false –не пропускать). По умолчанию true.
   * @returns Объект XMLDoc или Целое число.
   * Если курс назначен при выполнении функции,
   * то возвращается ссылка на вновь созданный документ обучения.
   * Если курс был назначен ранее, но не завершен, или завершен,
   * но не прошло еще время, указанное в атрибуте dtLastLearningDateParam,
   * то возвращается ID карточки ранее назначенного курса (из каталога active_learning).
   */
  function activate_course_to_person(
    personId: number | string,
    courseId?: number,
    eventId?: number,
    personDoc?: CollaboratorDocumentTopElem,
    educationPlanId?: number,
    duration?: number,
    startLearningDate?: Date,
    lastLearningDate?: Date,
    groupId?: number,
    eid?: any,
    skipDismissed?: boolean
  ): number | null | ActiveLearningDocument;

  /**
   * @param params Параметры назначения курса
   * @returns Объект XMLDoc или Целое число.
   * Если курс назначен при выполнении функции,
   * то возвращается ссылка на вновь созданный документ обучения.
   * Если курс был назначен ранее, но не завершен, или завершен,
   * но не прошло еще время, указанное в атрибуте dtLastLearningDateParam,
   * то возвращается ID карточки ранее назначенного курса (из каталога active_learning).
   */
  function activate_course_to_person(
    params: IActivateCourseToPersonParams
  ): number | null | ActiveLearningDocument;

  /**
   * Назначение сотруднику курсов, которые указаны в учебных программах (с типом "Электронный курс"),
   * перечисленных в наборе программ. Если в наборе учебных программ указаны учебные программы,
   * содержащие дистанционное обучение (курсы), то эти курсы будут назначены сотруднику.
   * @param personId - ID сотрудника, которому назначается набор учебных программ.
   * @param educationProgramId - ID набора учебных программ
   * @param collaboratorDocument - TopElem карточки сотрудника, которому назначается тест
   * @param educationProgramDocumentTopElem - TopElem карточки набора учебных программ
   * @returns Количество назначенных курсов в составе набора учебных программ
   */
  function activate_education_program_to_person(
    personId: number,
    educationProgramId: number,
    collaboratorDocumentTopElem: CollaboratorDocumentTopElem,
    educationProgramDocumentTopElem: EducationProgramDocumentTopElem
  ): number;

  /**
   * Назначение теста участникам указанного мероприятия.
   * @param eventId ID мероприятия, участникам которого назначается тест
   * @param assessmentId ID теста, который необходимо назначить
   * @param eventDocument Документ карточки мероприятия
   * @param duration Длительность теста в днях. Определяет дату планируемого завершения.
   * @param startLearningDate Дата начала обучения. Если данный аргумент задан,
   * то обучение невозможно будет начать раньше указанной даты.
   * @param lastLearningDate Контрольная дата завершения предыдущего обучения.
   * Если параметр задан, то при назначении теста проверяется, существует ли в каталоге test_learnings тест,
   * завершенный после указанной даты. Если такой тест существует, то ID соответствующей записи из
   * каталога test_learnings возвращается как результат работы функции.
   * @param actType Строка, указывающая, кому назначать тесты.
   * Возможные значения:
   * 'all' - Тесты назначаются всем участникам мероприятия (значение по умолчанию).
   * 'post' - Тесты назначаются участникам мероприятия, у которых проставлен флаг «Присутствовал на мероприятии».
   * @param skipDismissed Аргумент, указывающий на необходимость пропускать уволенных сотрудников
   * (true – пропускать, false – не пропускать). По умолчанию true.
   * @returns Количество назначенных тестов
   */
  function activate_test_to_event(
    eventId: number,
    assessmentId: number,
    eventDocument?: EventDocument,
    duration?: number,
    startLearningDate?: Date,
    lastLearningDate?: Date,
    actType?: string,
    skipDismissed?: boolean,
    bUseProctoring?: boolean,
    iProctorPreferID?: number,
    bActivateOnlyAssist?: boolean
  ): number;

  interface IActivateTestToPersonParams {
    /**
     * ID collaborator
     */
    personId: number;
    /**
     * ID test
     */
    assessmentId: number;
    /**
     * ID мероприятия
     */
    eventId?: number;
    /**
     * Дата последнего обучения
     */
    lastLearningDate?: number;
    /**
     * Не назначать уволенным
     */
    skipDismissed?: number;
    /**
     * Карточка сотрудника
     */
    collaboratorDocumentTopElem?: CollaboratorDocumentTopElem;
    /**
     * Не назначать повторно успешно прошедшим тестирование (с учетом даты последнего обучения)
     */
    missOnlySuccessLearning?: number;
    /**
     * Карточка мероприятия
     */
    eventDocumentTopElem?: EventDocumentTopElem;
    /**
     * Карточка теста
     */
    assessmentDocumentTopElem?: number;
    /**
     * Длительность в днях
     */
    duration?: number;
    /**
     * Дата начала тестирования
     */
    startLearningDate?: Date;
    /**
     * ID плана обучения
     */
    educationPlanId?: number;
    /**
     * Id группы
     */
    groupId?: number;
    /**
     * Признак самоактивации
     */
    selfEnrolled?: boolean;
    /**
     * Комментарий назначившего (записывается в карточку незаконченного/законченного теста)
     */
    comment?: string;
    /**
     * Использовать прокторинг
     */
    useProctoring: boolean;
  }

  /**
   * Функция назначения теста пользователю
   * @param params Объект JavaScript (Структура параметров)
   */
  function activate_test_to_person(
    params: IActivateTestToPersonParams
  ): XmlElem<number> | null | ActiveTestLearningDocument;

  /**
   * Функция назначения теста пользователю
   * @param personId ID пользователя
   * @param assessmentId ID курса
   * @param eventId ID мероприятия
   * @param personDoc Документ пользователя
   * @param assessmentDocument Документ теста
   * @param eventDocument Документ мероприятия
   * @param duration Продолжительность тестирования
   * @param startLearningDate Дата начала тестирования
   * @param lastLearningDate Дата окончания тестирования
   * @param groupId ID группы
   * @param educationPlanId ID плана обучения
   * @param skipDismissed Аргумент, указывающий на необходимость пропускать уволенных сотрудников
   * (true – пропускать, false – не пропускать). По умолчанию true.
   * @return {XmlElem<number>|null|XmlDocument} Объект XMLDoc или Целое число.
   * Если тест назначен при выполнении функции, то возвращается ссылка на вновь созданный документ обучения.
   * Если тест был назначен ранее, но не завершен, или завершен,
   * но не прошло еще время, указанное в атрибуте dtLastLearningDateParam,
   * то возвращается ID карточки ранее назначенного теста (из каталога active_test_learning).
   */
  function activate_test_to_person(
    personId: number,
    assessmentId?: number,
    eventId?: number,
    personDoc?: CollaboratorDocumentTopElem,
    assessmentDocument?: AssessmentDocument,
    eventDocument?: EventDocument,
    duration?: number,
    startLearningDate?: Date,
    lastLearningDate?: Date,
    groupId?: number,
    educationPlanId?: number,
    skipDismissed?: boolean
  ): XmlElem<number> | null | ActiveTestLearningDocument;

  /**
   * Функция завершает указанный активный электронный курс и создает карточку завершенного электронного курса
   * (карточка незавершенного курса при этом удаляется).
   * @param learningId Id активного электронного курса, который необходимо завершить
   * @param activeLearningDocumentTopElem TopElem активного электронного курса, который необходимо завершить
   * @param courseDocumentTopElem TopElem электронного курса, который необходимо завершить
   * @returns Id нового завершенного курса
   */
  function active_learning_finish(
    learningId: number,
    activeLearningDocumentTopElem?: ActiveLearningDocumentTopElem,
    courseDocumentTopElem?: CourseDocumentTopElem
  ): number;

  /**
   * Функция завершает указанный активный тест и создает карточку завершенного теста
   * (карточка незавершенного теста при этом не удаляется, и тест остается в списке назначенных).
   * Если необходимо полное завершение, то карточку незавершенного теста нужно удалять дополнительно
   * (с помощью отдельного кода вне данной функции).
   * @param learningId Id активного теста, который необходимо завершить
   * @param activeTestLearningDocumentTopElem TopElem активного теста, который необходимо завершить
   * @param assessmentDocumentTopElem TopElem теста, который необходимо завершить
   * @param iPersonIDParam 
   * @param bFinishTest 
   */
  function active_test_learning_finish(
    learningId: number,
    activeTestLearningDocumentTopElem?: ActiveTestLearningDocumentTopElem,
    assessmentDocumentTopElem?: AssessmentDocumentTopElem,
    iPersonIDParam?: number,
    bFinishTest?: any
  ): TestLearningDocument;

  /** 
   * Функция завершает указанную попытку для теста и создает карточку завершенного теста.
   * @param _learning_id ID активного теста, попытку которого необходимо завершить.
   * @param _learning_code Код раздела теста, который нужно завершить.
   * @param _assessment_doc `TopElem` теста, который необходимо завершить.
   * @param _flag_create_learning Возвращает значение, показывающее, создавать или не создавать запись завершенного теста
   *                              (`true` – создавать запись завершенного теста, `false` – не создавать запись). 
   * @param docActiveLearning документ активного теста, который необходимо завершить.
   */
  function active_test_learning_finish_attempt(
    _learning_id: number,
    _learning_code?: string,
    _assessment_doc?: AssessmentDocument,
    _flag_create_learning?: boolean,
    docActiveLearning?: ActiveTestLearningDocument
  ): boolean;

  /**
   * Добавляет новый язык в список используемых в системе языков. Загрузка происходит из XML-файла с константами.
   * Используется в администраторе в общих настройках, для установки новых языков или обновления существующих.
   * @param sLngUrlParam Путь до XML-файла с константами.
   * @param bDoObtainParam Используется при вызове функции на сервере. Если значение аргумента равно `true`, то существующие
   *                       значения констант языка перезаписываются новыми из файла `sLngUrlParam`.
   * @returns Количество обновленных констант.
   * 
   * @example
   * tools.add_lng( _url );
     tools.add_lng( UrlAppendPath( 'x-local://custom/', temp_doc.lngs_url ), true );
     _num = TopElem.add_lng_items( _doc, true );
   */
  function add_lng(sLngUrlParam: string, bDoObtainParam?: boolean): number;

  /**
   * Функция добавляет сотрудника в список оцениваемых в процедуре оценки. Планы и анкеты при этом не создаются.
   * @param _person_id ID сотрудника. 
   * @param _assessment_appraise_id ID процедуры оценки, в которую нужно добавить сотрудника. 
   * @param personDocument `TopElem` карточки сотрудника. 
   * @param _doc_assessment_appraise Документ процедуры оценки, в которую нужно добавить сотрудника.
   * @returns Изменённый и сохраненный документ процедуры оценки.
   * 
   * @example
   * tools.add_person_to_assessment_appraise ( iPersonID, iObjectID, null, docObject );
   */
  function add_person_to_assessment_appraise(
    _person_id: number,
    _assessment_appraise_id: number,
    personDocument?: CollaboratorDocument,
    _doc_assessment_appraise?: AssessmentAppraiseDocument
  ): AssessmentAppraiseDocument;

  /**
   * Добавляет участника в мероприятие.
   * @param userId ID сотрудника, добавляемого в мероприятие.
   * @param eventId ID мероприятия, в которое добавляется сотрудник.
   * @param userTopElem `TopElem` сотрудника.
   * @param eventDocument Документ мероприятия.
   * @param educationPlanId ID плана обучения добавляемого сотрудника. Если аргумент указан, то ссылка на план сохранится
   *                        в результатах мероприятия сотрудника.
   * @param requestPersonId ID лица, подавшего заявку на добавление сотрудника в мероприятие. Если аргумент указан, то ссылка
   *                        на лицо, подавшее заявку, сохранится в результатах мероприятия сотрудника.
   * @param requestId ID заявки на включение сотрудника в состав участников мероприятия. Если аргумент указан, то ссылка на заявку
   *                  сохранится в результате мероприятия сотрудника.
   * @returns Документ мероприятия, к которому добавлялся сотрудник (если сотрудник ранее не был добавлен в данное мероприятие),
   *          или `null` (если сотрудник ранее уже был добавлен).
   * 
   * @example
   * docEvent = tools.add_person_to_event ( Int(sUserId), Int(sRoomId) );
   * tools.add_person_to_event ( _source.TopElem.person_id, _source.TopElem.object_id, null, docObject );
   * tools.add_person_to_event ( fldPersonElem.PrimaryKey, docEvent.DocID, null, docEvent, null, catRequest.PrimaryKey );
   */
  function add_person_to_event(
    userId: number,
    eventId: number,
    userTopElem?: CollaboratorDocumentTopElem,
    eventDocument?: EventDocument,
    educationPlanId?: number,
    requestPersonId?: number,
    requestId?: number
  ): EventDocument | null;

  /**
   * Добавляет строку к событию базы, определяемому `report_id` или документом `source_doc`.
   * @param iActionRepotrIDParam ID события базы, к которому нужно добавить строку.
   * @param sTextParam Строка, которую нужно добавить к событию базы.
   * @param docActionRepotrParam Документ события базы, к которому нужно добавить строку.
   * 
   * @returns Сохраненный документ события базы с добавленной строкой.
   * 
   * @example
   * reportDoc = OpenNewDoc( 'x-local://wtv/wtv_action_report.xmd' );
   * _report_id = reportDoc.DocID;
   * tools.add_report( _report_id, 'Saving archive: OK.' );
   */
  function add_report(iActionRepotrIDParam: number, sTextParam?: string, docActionRepotrParam?: ActionReportDocument): ActionReportDocument;

  /**
   * Создает элемент очереди скриптов.
   * @param sScriptParam Код для выполнения.
   * @param sCodeParam Строка с кодом скрипта.
   * @param bDeleteAutomaticallyParam Флаг, определяющий, нужно ли автоматически удалять код из очереди
   *                                  (`true` – код автоматически удаляется из очереди, `false` – не удаляется).
   * @param iDelayParam Задержка в секундах перед выполнением кода.
   * @param dStartDate Дата старта агента
   * 
   * @returns ID созданного объекта.
   * 
   * @example
   * iScriptId = tools.add_script_to_queue(sRegistrationScript,"mgr", true, 5);
   * tools.add_script_to_queue(
   *   'tools_chat.write_message( ' + XQueryLiteral( sTextMessage ) + ', ' + iObjectID + ' )',
   *   'send_message',
   *   true,
   *   0
   * );
   * tools.add_script_to_queue(
   *   'tools_chat.change_participants_conversation( ' + iConversationID + ', null, ' + XQueryLiteral( sAction ) + ' )',
   *   'change_participants_conversation',
   *   true,
   *   0
   * );
   */
  function add_script_to_queue(
    sScriptParam: string,
    sCodeParam: string,
    bDeleteAutomaticallyParam: boolean,
    iDelayParam: number,
    dStartDate?: Date
  ): number;

  /**
   * Сдвигает указанную дату на количество секунд, заданное параметрами функции. Можно передать дни, часы, минуты и секунды для сдвига даты.
   * Дни, часы, минуты будут пересчитаны в секунды.
   * @param DATE_VAL Исходная дата, подлежащая изменению. Если дата не указана, то по умолчанию принимается текущая дата. 
   * @param DAYS Количество дней, на которое нужно сдвинуть текущую дату. Если аргумент не указан, то по умолчанию принимается значение 0.
   * @param HOURS Количество часов, на которое нужно сдвинуть текущую дату. Если аргумент не указан, то по умолчанию принимается значение 0.
   * @param MINUTES Количество минут, на которое нужно сдвинуть текущую дату. Если аргумент не указан, то по умолчанию принимается значение 0.
   * @param SECONDS Количество секунд, на которое нужно сдвинуть текущую дату. Если аргумент не указан, то по умолчанию принимается значение 0.
   * 
   * @returns Измененная дата, полученная сдвигом исходной даты на указанное количество дней, часов, минут и секунд.
   * 
   * @example
   * newDate = tools.AdjustDate (null, 1); // сдвиг текущей даты на 1 сутки
   * newDate1 = tools.AdjustDate (null, -1); // сдвиг текущей даты на 1 сутки назад
   */
  function AdjustDate(DATE_VAL?: Date, DAYS?: number, HOURS?: number, MINUTES?: number, SECONDS?: number): Date;

  /**
   * Копирует параметры доступа к объекту в другой объект.
   * @param _to_obj_id ID объекта, в который нужно скопировать параметры доступа.
   * @param _to_obj_doc TopElem объекта, в который нужно скопировать параметры доступа.
   * @param _from_obj_id ID объекта, из которого нужно скопировать параметры доступа.
   * @param _from_obj_doc TopElem объекта, из которого нужно скопировать параметры доступа.
   * 
   * @example
   * tools.admin_access_copying('', docEventResult.TopElem, '', topElem);
   * tools.admin_access_copying( null, requestDoc.TopElem, curObjectID, curObject );
   */
  function admin_access_copying(
    _to_obj_id: number | undefined | null,
    _to_obj_doc: XmlTopElem | undefined | null,
    _from_obj_id: number | undefined | null,
    _from_obj_doc: XmlTopElem | undefined | null
  ): void;

  /**
   * Проверяет доступ к объекту на основе настроек в разделе Отображение каталогов (блок Безопасность) для текущего пользователя в Webtutor Administrator.
   * @param teObjectParam `TopElem` объекта, к которому проверяется доступ.
   * 
   * @returns Возвращает значение, показывающее наличие или отсутствие доступа (`true` – доступ разрешен, `false` – доступ запрещен).
   * 
   * @example
   * tools.admin_access_filling( TopElem );
   */
  function admin_access_filling(teObjectParam: XmlTopElem): boolean;

  /**
   * Представляет результаты теста в формате XML-структуры.
   * @param oSourceParam Элемент для разбора теста, в котором содержится либо непустое поле `lesson_report`, `objects` (массив с элементами)
   *                     или `core_lesson`.
   * @param sQtiPathParam Путь до файла со структурой теста в формате qti.
   * @param sQtiTextParam Структура теста в формате qti.
   * @param bNoSendCorrectAnswerParam Не отправлять правильный ответ.
   * 
   * @returns XML-структура, содержащая результаты тестирования
   * 
   * @example
   * tools.annals_decrypt( Ps );
   * TopElem.annals_variant = tools.annals_decrypt( oSource, sQtiPath );
   * 
   * for ( _learning in _learning_array ) {
   *   learningDoc = OpenDoc( UrlFromDocID( _learning.id ) ).TopElem;
   *   assessmentDoc = OpenDoc( UrlFromDocID( _learning.assessment_id ) ).TopElem;
   *  fldAnnals = tools.annals_decrypt( learningDoc, tools.get_qti_path( assessmentDoc ) );
   * }
   */
  function annals_decrypt(
    oSourceParam: XmlElem<any>,
    sQtiPathParam?: string,
    sQtiTextParam?:  string,
    bNoSendCorrectAnswerParam?: boolean
  ): XmlDocument;

  /**
   * Преобразует массив в строку указанного формата (`json`, `xml`).
   * @param _aArrayPARAM Массив, который необходимо преобразовать.
   * @param _sFormatPARAM Формат возвращаемой строки. Возможны два значения: `json` и `xml`). По умолчанию имеет значение `xml`.
   * @param _sNamePARAM Название корневого (`root`) тега. Значение аргумента учитывается, если формируется строка в формате XML.
   *                    По умолчанию имеет значение `data` (корневой тег `<data></data>`).
   * 
   * @returns Строка, сформированная из массива.
   * 
   * @example
   * tools.array_to_text(["one", "two", "three"], "json");
   * // returns ["value":"one", "value":"two", "value":"three"]
   * 
   * tools.array_to_text(["one", "two", "three"], "xml");
   * // returns <data><value>one</value></data><data><value>two</value></data><data><value>three</value></data>
   * 
   * tools.array_to_text(["one", "two", "three"], "xml", "d");
   * // returns <d><value>one</value></d><d><value>two</value></d><d><value>three</value></d>
   */
  function array_to_text(_aArrayPARAM: any[], _sFormatPARAM?: string, _sNamePARAM?: string): string;
   

  const dotnet_host: DotnetCoreHost;

  function new_doc_by_name<T = XmlDocument>(documentName: string, isCatalog?: boolean): T;

  /**
   * Возвращает значение параметра, переданного в функцию, в зашифрованном виде.
   * Вид шифрования указывается в общих настройках (Формат хранения и проверки пароля): md5, sha1, sha1_base64.
   * @param {string} password строка для преобразования.
   * @param {boolean} flag флаг, показывающий, что получаемая в результате преобразования строка будет использоваться для проверки пароля (true). Это значит, что их строки будут удалены открывающаяся “(” и закрывающаяся “)” скобки для  md5, sha1, sha1_base64. В противном случае (false), будет возвращена строка в () в указанном в настройках формате md5, sha1, sha1_base64 или без скобок для формата Plain.
   * @returns string Возвращаемый результат – строка (string), преобразованная в соответствие с параметрами вызова.
   */
  function make_password(password: string, flag: boolean): string;

  /**
   * Запускает системный агент на выполнение.
   * @param agentId (int) – ID агента для запуска.
   * @param objectId (int) необязательный – ID объекта, над которым запускается агента (например, в списке).
   * @param objectIdsStr(string) необязательный – ID объектов разделенных «;»,
   * над которым запускается агента (например, в списке).
   * @param dateStart (data) необязательный – дата запуска агента, по умолчанию текущая дата.
   * @param tenancyName(string) необязательный – код экземпляра системы в multitenant системе,
   * в котором нужно запустить агент.
   * @returns Возвращаемый результат – флаг да/нет (bool) успех или неуспех выполнения агента.
   */
  function start_agent(
    agentId: number,
    objectId?: number,
    objectIdsStr?: string,
    dateStart?: Date,
    tenancyName?: string
  ): any;

  /**
   * Функция открывает документ и возвращает его.
   * Если не смогла открыть, возвращает undefined
   * @param {string|number} documentId ID документа
   * @returns {T|undefined} XML документ или undefined
   */
  function open_doc<T = XmlDocument>(documentId: number): T | undefined;

  /**
   * Проверяет разрешение на доступ к указанному объекту для указанного пользователя.
   * Проверка идет по уровню доступа, роли доступа, группам доступа и условиям доступа,
   * если в карточке объекта есть соответствующие настройки.
   * @param TopElem TopElem объекта, доступ к которому нужно проверить
   * @param userId ID сотрудника, для которого нужно проверить доступ
   * @returns Тип: Булево. Возвращает значение, показывающее,
   * разрешен ли сотруднику доступ к объекту (true – доступ разрешен, false – доступ запрещен).
   */
  function check_access(TopElem: XmlTopElem, userId: number): boolean;

  /**
   * Оптимизированная функция выполнения длинных запросов.
   * Ее предпочтительнее использовать, кода нужно сделать, например запрос с иерархией.
   * И всегда использовать вместо CatalogHierSubset используя функцию IsHierChild.
   * sQueryParam (string) –  строка для выполнения запроса.
   * Возвращаемый результат - результат выполнения запроса XQuery по оптимизированной строке sQueryParam.
   * @example docArray = tools.xquery( 'for $elem in documents where IsHierChild( $elem/id, ' + _main_doc.document_id + ' )
   * order by $elem/Hier() return $elem/id' );
   * xarrSubdivisions = tools.xquery( 'for $elem in subdivisions where IsHierChild( $elem/id, ' + iLastDepID + ' )
   * order by $elem/Hier() return $elem/id' );
   * @param string
   */
  function xquery<T = any>(string: string): T[];

  interface IActivateCourseToPersonParams {
    /**
     * Id Сотрудника
     */
    iPersonID: number
    /**
     * Id курса
     */
    iCourseID: number
    /**
     * Код записи в каталоге незаконченных электронных курсов active_learnings (необязательный),
     */
    sEID?: number
    /**
     * ID мероприятия (необязательный),
     */
    iEventID?: number
    /**
     * Карточка сотрудника (необязательный),
     */
    teCollaborator?: number
    /**
     * Карточка курса (необязательный),
     */
    teCourse?: number
    /**
     * Длительность в днях (необязательный),
     */
    iDuration?: number
    /**
     * Дата последнего обучения (необязательный),
     */
    dtLastLearningDate?: number
    /**
     * Дата начала прохождения курса (необязательный),
     */
    dtStartLearningDate?: number
    /**
     * ID плана обучения (необязательный),
     */
    iEducationPlanID?: number
    /**
     * ID группы (необязательный),
     */
    iGroupID?: number
    /**
     * Возможность комментировать (необязательный),
     */
    bCommenting?: number
    /**
     * Ведение подробного лога (журнала) курса (необязательный)
     */
    bLogging?: number
    /**
     * Не назначать уволенным (необязательный),
     */
    bSkipDismissed?: number
    /**
     * Не назначать повторно успешно прошедшим курс (с учетом даты последнего обучения) (необязательный),
     */
    bMissOnlySuccessLearning?: number
    /**
     * Карточка мероприятия (необязательный),
     */
    teEvent?: number
    /**
     * Признак самоактивации (необязательный),
     */
    bSelfEnrolled?: number
    /**
     * Комментарий назначившего (записывается в карточку незаконченного/законченного курса) (необязательный),
     */
    sComment?: number
    /**
     * Использовать прокторинг (необязательный)
     */
    bUseProctoring?: number
  }


  function get_server_protocol(): string;
  function encode_course_folder(sCodeParam: string): any;
  function decode_course_folder(sCodeParam: string): any;
  function load_course(fileUrl: any, sFileCharsetParam: any, docCourseParam: any): any;
  function copy_manifest_resources(fileUrl: any, baseUrl: any): any;
  function open_course_package_server(sUrlPARAM: any): any;
  function copy_url_temp_suffix(sDestUrlPARAM: any, sSourceUrlPARAM: any): any;
  function update_forum_entry(doc: any, iNewForumIDParam: any, iParentForumEntryIDParam: any): any;
  function update_document_comment_entry(doc: any, iNewPortalDocIDParam: any): any;
  function upload_data(iExchangeSeverIDParam: any, dtLimitParam: any, iExchangeObjectIDParam: any): any;
  function download_data(iExchangeSeverIDParam: any): any;
  function create_data_package(iExchangeSeverIDParam: any, _report_id: any, sPackIDParam: any, dtLimitParam: any, iExchangeObjectIDParam: any, sPrimaryKeyUserData: any): any;
  function get_exchange_date(_source: any, _last_date: any): any;
  function send_file_to_server(_subject: any, _body: any, _send_file: any, _server_id: any, _report_id: any): any;
  function post_file_to_server(_send_file: any, _server_id: any, _report_id: any): any;
  function date_str(_cur_date: any): any;
  function uni_process_package(sUrlPackageParam: any, fldFormParam: any): any;
  function process_package(_url: any, fldPackagesValidParam: any): any;
  function get_param_error_text(_param_form: any): any;
  function download_package_list(iExchangeSeverID: any): any;
  function download_package(iExchangeSeverID: any, iPackageID: any, sTempUrlParam: any, fldPackageValidParam: any): any;
  function package_process(_path: any, _type: any, _source: any, _report_id: any, _exchange_server_id: any, iDownloadPackageIDParam: any): any;
  function get_time_from_duration(duration: number): any;
  function get_time_from_seconds(_seconds: any): any;
  function delete_transaction(_transaction_id: any): any;
  function pay_new_transaction_by_object(iAccountObjectIDParam: any, sAccountCurrencyParam: any, rSumParam: any, sCommentParam: any, iObjectIDParam: any, iPersonIDParam: any, changeBalance: any): any;
  function pay_invoice(_invoice_id: any, _doc_invoice: any): any;
  function pay_courses(_org_id: any, _amount: any, _comment: any): any;
  function set_account(_org_id: any, _amount: any): any;
  function personal_pay(_org_id: any, _request_id: any): any;

  interface ICreateNotificationAdditionalParams {
    recipients: string[];
    sender_selector: string;
    subject: string;
    body_type: string;
    body: string;
    sender_email: string;
  }
  /**
   * Создает новое неотправленное уведомление.
   * В теле уведомления (шаблоне уведомления) обращение к первому параметру идет через objDocID, к документу,
   * открываемому автоматически при вызове функции по отправке уведомления, objDoc. objDoc- это TopElem документа.
   * Обращение ко второму параметру идет через objDocSecID, к документу, открываемому автоматически при
   * вызове функции по отправке уведомления objDocSec. objDocSec- это TopElem документа.
   * Если документ отрыт ранее, то для ускорения работы функции отправки уведомления, можно передать открытый
   * документ в функцию, что позволит избежать его повторного открытия. Для этого вместо tools.create_notification( code, id1, '', id2)
   * вызывается функция, куда передаются дополнительные параметры tools.create_notification( code, id1, '', id2, TopElem1,TopElem2 ).
   * @param notificationIdentifier Код типа уведомления, которое будет отправляться. Если параметр пустой ('') или равен '0', то в параметр
   * additionalParams необходимо передавать структуру, из которой будут заполняться типы получателей (recipients),
   * тип отправителя (sender_selector), тема сообщения (subject), тип текста в теле сообщения (body_type),
   * тело сообщения (body) и адрес отправителя (sender_email). Если oTypeParam - это реальный код типа уведомления,
   * то типы получателей (recipients), тип отправителя (sender_selector) и адрес отправителя (sender_email) будут
   * браться из указанного объекта. А тема сообщения (subject), тип текста в теле сообщения (body_type),
   * тело сообщения (body) из шаблона уведомления, прикрепленного к типу сообщения с указанным в параметре кодом.
   * Если в существующих в системе типах уведомления не найдено типа уведомления с указанным кодом,
   * то уведомление не формируется и функция возвратит значение false.
   * В определенных случаях в качестве данного аргумента вместо кода типа уведомления может быть указан ID открытого документа типа уведомления.
   * @param objectId ID первого объекта (обыкновенно, по данным первого документа формируется, в частности,
   * перечень сотрудников, которым нужно отправить сообщение. В теле уведомления (шаблоне уведомления) обращение
   * к этому параметру идет через objDoc (например, <%=objDoc.name%>) и objDocID.
   * @param text Аргумент, к которому можно обращаться в теле шаблона уведомления как к Text (<%=Text%>).
   * @param secondObjectId ID второго объекта, который прикрепляется к уведомлению.
   * В теле уведомления (шаблоне уведомления) обращение этому параметру идет через objDocSec (например, <%=objDocSec.name%>) и objDocSecID.
   * @param objectTopElem TopElem карточки первого объекта, определяемого аргументом objectId.
   * @param secondObjectTopElem TopElem карточки второго объекта, определяемого аргументом secondObjectId.
   * @param additionalParams Структура, позволяющая создать собственное (пользовательское) уведомление "на лету".
   * Из нее берутся данные о типах получателей (recipients), тип отправителя (sender_selector),
   * тема сообщения (subject), тип текста в теле сообщения (body_type), тело сообщения (body)
   * и адрес отправителя (sender_email)
   */
  function create_notification(
    notificationIdentifier: number | string,
    objectId: number | string,
    text?: any,
    secondObjectId?: number,
    objectTopElem?: XmlTopElem,
    secondObjectTopElem?: XmlTopElem,
    additionalParams?: ICreateNotificationAdditionalParams
  ): boolean;

  function create_template_notification(sTypeParam: any, iObjectIDParam: any, sSubjectParam: any, sBodyParam: any, oObjectParam?: any, teSourceParam?: any, iObjectSecondIDParam?: any): any;
  function send_notification(iActiveNotificationIDParam: any): any;
  function save_certificate(_learning_id: any): any;
  function random_string(_digit_num: any, _dict?: any): any;
  function import_excel_persons(sParamsXml: any): any;
  function start_import_excel_persons(Ps: any): any;
  function get_sub_boss_by_person_id(_person_id: any, personDocument: CollaboratorDocument): any;
  function get_main_boss_by_person_id(_person_id: any): any;
  function get_web_str(sNameParam: any): any;
  function is_boss(iUserIDParam: any, iPersonIDParam: any): any;
  function is_user_boss(managerId: number, userId: number, _catalog_names?: any, vBossType?: any): any;
  function is_self_cur_user(iUserIDParam: any): any;
  function is_boss_by_subdivision_id(_sub_id: any): any;
  function is_by_position_id(_position_id: any): any;
  function is_by_group_id(groupId: number): any;
  function is_statement_date(iActivityIDParam: any, sValueParam: any, sUslParam: any): any;
  function object_filling(_type: any, _source: any, _object_id: any, _object_doc: any): any;
  function common_filling(type: string, sourceDoc: any, objectId: number, objectDoc?: XmlTopElem, customFlag?: boolean): void;
  function common_clear(_type: any, _source: any, _ps: any): any;
  function active_test_learning_finish_link(activeLearningID: any, learningID: any, teLearning: any, teAssessment: any): any;
  function core_decrypt(_core: any, _qti_path: any, _qti_text: any, _learning_doc: any): any;
  function get_annals_from_core(sSourceParam: any): any;
  function get_annals_text_from_annals(fldAnnalsParam: any): any;
  function get_qti_path(oSource: any, fldPartParam: any): any;
  function report_decrypt(_source: any, _qti_path: any, _qti_text: any): any;
  function fill_annals_timings(fldTarget: any, fldSource: any): any;
  function get_data_answers(fldDataItem: any): any;
  function get_item_points(fldQuestion: any): any;
  function fill_annals_text(fldAnnalsObjectsTarget: any, sQtiPathParam: any, sQtiTextParam: any, fldAnnalsObjectsSource: any, bNoSendCorrectAnswerParam: any): any;
  function get_annals_text(_annals: any, _qti_path: any, _qti_text: any, _learning_doc: any, oAnnalsTarget: any): any;
  function close_request(_request_id: any): any;
  function workflow_action_process(_source: any, _action_code: any, _workflow_id: any, _workflow_doc: any, _alterCurObjectID: any, dConditionProcess: any): any;
  function obtain_lists(_url: any, _list_name: any): any;
  function event_finish(eventId: number, eventDocument?: EventDocument): any;
  function event_start(eventId: number, eventDocument: EventDocument, oScreenParam: any): any;
  function get_object_form_url(sCatalogNameParam: any, bIsCatalogParam: any): any;
  function get_screen_form_url(sCatalogNameParam: any): any;
  function create_package(_pak_url: any, _report_id: any, _param_source: any, sPackIDParam: any): any;
  function create_list_package(sResultUrlParam: any, fldPackage: any): any;
  function get_doc_by_key<T = XmlDocument>(catalog: string, key: string, value: string | number): T | null;
  function obtain_doc_by_key(sObjectNameParam: any, oKeyParam: any, oKeyValueParam: any): any;
  function get_seconds_from_duration(duration: number): any;
  function assessment_filling_from_qti(_assessment_id: any, _source: any, _qti_text: any): any;
  function submit_subscriptions(_document_id: any, documentDoc: any, iPersonIDParam: any): any;
  function create_filter_xquery(_conditions: any, _cond: any, _elem_name: any): any;
  function create_filter_javascript(_conditions: any, _first_cond: any, _elem_name: any): any;
  function obtain_custom_templates(_url: any, _source: any): any;
  function obtain_access_roles(_url: any, _list: any): any;
  function import_course(_file: any): any;
  function process_skk(_inst_flag: any): any;
  function get_version(_type: any, bDateFlag: any): any;
  function get_custom_template(_catalog: string, _top_id?: any, _source?: any): any;
  function set_web_ban(_person_id: any, _status: any, _source: any, _check_admin: any): any;
  function disp_block_filling_by_source(_source: any, _disp_block: any, _disp_object_blocks: any, _source_id: any): any;
  function disp_block_filling(_source: any, _disp_block: any): any;
  function get_order_query(sOrderParam: any, sDirParam: any): any;
  function create_xquery(_catalog_name: any, _xquery_qual: any, _filter_xquery: any, _ft_filter: any, _order_str: any, _order_dir: any, _is_hier: any, _foreign_field: any, oColumnsParam: any): any;
  function request_processing(iRequestID: any, docRequest: any): any;
  function update_object_versions(docVersion: any, iVersionID: any, docObject: any, iPersonID: any, tePerson: any, sComment: any): any;
  function update_adding_objects(docObject: any, iObjectID: any): any;
  function request_rejecting(iRequestID: any, docRequest: any, iPersonID: any, dSaveParam: any): any;
  function del_person_from_event(_person_id: any, eventId: number, _doc_event?: any, _flag_save?: any): any;
  function encrypt_content(iCourseIDParam: any): any;
  function create_license(iLicenseId: any): any;
  function create_license_complete(sTempDirectoryUrl: any): any;
  function recovery_empty_lng_const(_lng_id: any, _source: any): any;
  function import_pwt_data_xml(_xml: any, _user_id: any, _report_id: any, _file_url: any, sUserAgentParam: any): any;
  function decript_pwt_data_str(_str: any): any;
  function update_course_parts_structure(_learning_id: any, _course_doc: any, _doc_learning: any): any;
  function get_direct_sub_person_ids(iUserId: any): any;
  function get_sub_person_ids_by_subdivision_id(_subdivision_id: any, sConditionsParam: any): any;
  function get_sub_persons_by_subdivision_id(_subdivision_id: any, sConditionsParam: any): any;
  function get_sub_person_ids_by_func_manager_id(_manager_id: any, _catalog_names: any, vBossType: any, iLimitParam: any, sSearchParam: any): any;
  function get_sub_persons_by_func_manager_id(iManagerIDParam: any, sCatalogNamesParam: any, vBossType: any): any;
  function get_all_subs_by_func_manager_id(_manager_id: any): any;
  function eval_code_page_url(_url: any, _doc_id: any, _rnd_id: any): any;
  function update_filter_conditions(_source_conditions: any, _catalog_name: any, _scheme_id: any, _set_flag: any): any;
  function check_cur_user_admin_access(teObjectParam: any, curUser: any, fldAccessCalalogParam: any): any;
  function build_condition_eval_str(_conditions: any, iWorkflowIDParam: any, teWorkflowParam: any): any;
  function update_document_persons(_obj_id: any, _obj_doc: any): any;
  function get_period_from_iso(_period: any): any;
  function get_notification_document(oDocumentParam: any): any;
  function get_cost_center_id_by_person_id(_person_id: any, personDocument: CollaboratorDocument): any;
  function get_cost_center_boss_by_person_id(_person_id: any, personDocument: CollaboratorDocument): any;
  function get_sub_boss_by_sub_id(_sub_id: any): any;
  function get_time(_str: any, _minite_flag: any, _second_flag: any): any;
  function enable_log_web_request(_flag: any): any;
  function get_field_title(_field: any, curLngWeb: any): any;
  function fill_field_names(FIELD_NAMES: any, FORM: any, ISCATALOG: any, EVALPATH: any, PRETITLE: any, CUSTOMFIELDSTYPEID: any): any;
  function DateFunc(SRC1: any, SRC2: any, EVALSTR: any, PARAM1: any, PARAM2: any, PARAM3: any): any;
  function get_report_storage_field(sDatatype: any): any;
  function build_report_remote(REPORT_ID: any, PS: any, docReportParam: any, sLngSHORT: any, bMetaOnly: any): any;
  function get_sub_hierarchy(NODE_ID: any, NODE_CATALOG: any, NODE_PARENT_FIELD: any): any;
  function process_print_form(oFormParam: any, iTopElemParam: any, bReturnFilename: any): any;
  function get_user_boss(OBJECT: any): any;
  function path_subs_filling(_path_subs: any, _person_id: any, personDocument: CollaboratorDocument): any;
  function str_time_from_mseconds(_mseconds: any): any;
  function person_list_staff_by_person_id(_personID: any, _personDoc: any, _depth: any, _top: any, _separator: any): any;
  function check_field_name(FIELD: any, IS_STRICT_BEGIN: any): any;
  function get_doc_type_xmds(iDocTypeIDParam: any, teDocTypeParam: any): any;
  function generate_doc_type_xmds(DOC_TOPELEM: any, DOC_ID: any): any;
  function register_doc_type(docDocTypePARAM: any, iDocIDParam: any): any;
  function create_certificate_to_event(_even_id: any, _type_id: any, _doc_event: any): any;
  function create_certificate_to_person(_person_id: any, _type_id: any, eventId: number, personDocument: CollaboratorDocument, _type_doc: any, eventDocument: EventDocument): any;
  function get_main_forum_entry_by_forum_entry_id(iForumEntryParam: any, teForumEntryParam: any): any;

  /**
   * 
   * @param personId id сотрудника
   * @param eventId id мероприятия
   * @param qualificationId id квалификации
   * @param assignmentDate дата присвоения квалификации
   * @param expirationDate дата истечения квалификации
   * @param testLearnings
   * ```
   * массив законченных тестов сотрудника из параметра 1,
   * которые будут записаны в карточку присвоения квалификации
   * ```
   * @param learnings
   * ```
   * массив законченных электронных курсов сотрудника из параметра 1,
   * которые будут записаны в карточку присвоения квалификации
   * ```
   * @param sendMail
   * ```
   * числовое значение `0/1` – не отправлять/отправлять
   * уведомление сотруднику о присвоении квалификации
   * ```
   * @param inProcess
   * ```
   * числовое значение `0/1` – не присвоена/в процессе
   * (`in_process`, если не передан, то по умолчанию = 0)
   * ```
   * @param assignTests
   * ```
   * булевое значение назначать/не назначать тесты сотруднику
   * присвоенной квалификации, если она в статусе `В процессе`
   * ```
   * @param assignCourses
   * ```
   * булевое значение назначать/не назначать курсы сотруднику
   * присвоенной квалификации, если она в статусе `В процессе`
   * ```
   * @param unconditionalAssignment
   * ```
   * булевое значение, если `false` и в статусе `В процессе` и
   * не заданы или равны `[]` параметры `6` и `7` –
   * будет проверять прохождение всех испытаний квалификации
   * ```
   * @param qualificationAssignmentDocument
   * ```
   * документ присвоенной квалификации,
   * меняется статус квалификации в зависимости от параметра `9`
   * ```
   * @param qualificationDocument
   * ```
   * {@link XmlTopElem} квалификации, если задан,
   * то в коде не будет вызываться {@link OpenDoc}
   * карточки квалификации, что ускорит работу функции
   * ```
   * @param collaboratorDocumentTopElem
   * ```
   * {@link XmlTopElem} сотрудника, передается в параметрах
   * функции при назначении теста/курса сотруднику
   * ```
   * @param givePoint
   * ```
   * начислять баллы квалификации (вкладка `Бонус`), `true`,
   * если присвоение происходит из контекстного меню
   * интерфейса администратора
   * ```
   */
  function assign_qualification_to_person(
    personId: number,
    eventId: number | undefined | null,
    qualificationId: number,
    assignmentDate: Date | undefined | null,
    expirationDate: Date | undefined | null,
    testLearnings: number[] | undefined | null,
    learnings: number[] | undefined | null,
    sendMail: 0 | 1,
    inProcess: 0 | 1,
    assignTests: boolean,
    assignCourses: boolean,
    unconditionalAssignment: boolean,
    qualificationAssignmentDocument: QualificationAssignmentDocument | null,
    qualificationDocument: QualificationDocument | undefined | null,
    collaboratorDocumentTopElem: CollaboratorDocumentTopElem | null,
    givePoint: boolean
  ): null | QualificationAssignmentDocument;

  function assign_qualification_to_event(_even_id: any, _doc_event: any, _qualification_id: any, _date: any): any;
  function save_custom_ui_form(TEMPLATE: any): any;
  function get_custom_document_form(CATALOG_NAME: any): any;
  function get_custom_document_data_form_url(sCatalogNameParam: any): any;
  function knowledge_part_path_by_knowledge_part_id(_knowledge_partID: any, _knowledge_partDoc: any, _depth: any, _top: any, _separator: any): any;
  function get_func_manager_substitution(arrFuncManagerParam: any, oParams: any): any;
  function get_uni_user_bosses(objectParam: any, oParams: any): any;
  function get_uni_user_boss(objectParam: any, oParams: any): any;
  function workflow_escalation_process(_source: any, _escalation_code: any, _workflow_id: any, _workflow_doc: any, _alterCurObjectID: any): any;
  function get_user_comp_profiles(objectParam: any): any;
  function get_package_log(sUrlPackageParam: any, oParam: any): any;
  function package_log_filling(fldPackageTarget: any, fldSourceParam: any): any;
  function wvars_to_script(listWVarsPARAM: any, bWarily: any): any;
  function wvars_to_object(listWVarsPARAM: any): any;
  function copy_directory(sSourceDirPARAM: any, sDestDirPARAM: any): any;
  function send_event_notifications(eventId: number, _doc_event: any, send_type: any): any;
  function create_object_version(oDocParam: any): any;
  function get_mandatory_learnings(iPersonIDParam: any, iObjectIDParam: any, tePersonParam: any, teObjectParam: any): any;
  function get_relative_boss_types(objectParam: any, oPersonParam: any): any;
  function get_relative_operations(oManagerParam: any): any;
  function check_relative_operation(oManagerParam: any, oOperationParam: any): any;

  /**
   * Возвращает массив из каталожных записей типов функциональных руководителей (boss_types),
   * соответствующих указанному объекту и указанному пользователю.
   * Например, если выбран объект – определенное мероприятие – и пользователь – руководитель отдела,
   * который сам участвовали в данном мероприятии, то типы руководителя могут быть следующими:
   * «Участник мероприятия», «Руководитель участника мероприятия».
   * Если выбран объект – сотрудник отдела – и пользователь – руководитель отдела,
   * в котором работает указанный сотрудник, то типы руководителя могут быть следующими:
   * «Непосредственный руководитель», «Руководитель обучения» и т.д.
   * @param iUserIDParam (обязательный) Тип: Целое число. ID сотрудника, для которого нужно определить список типов функциональных руководителей.
   * @param iObjectIDParam (обязательный) Тип: Целое число. ID объекта, относительно которого нужно определить список типов функциональных руководителей.
   * Доступные типы объектов, ID которых может быть указан в данном аргументе:
   * - career_reserve (развитие карьеры);
   * - career_reserve_type (тип кадрового резерва);
   * - collaborator (сотрудник);
   * - education_plan (план обучения);
   * - event (мероприятие);
   * - group (группа);
   * - key_position (ключевая должность);
   * - org (организация);
   * - personnel_reserve (кадровый резерв);
   * - project (проект);
   * - project_participant (участник проекта);
   * - recommendation (рекомендация на вакансию);
   * - recruitment_plan (план подбора);
   * - subdivision (подразделение);
   * - successor (преемник);
   * - task (задача);
   * - vacancy_response (отклик на вакансию).
   * @returns {any[]} Массив из каталожных записей типов функциональных руководителей (boss_types), соответствующих указанному объекту и указанному пользователю.
   */
  function get_object_relative_boss_types(iUserIDParam: number, iObjectIDParam: number): any;

  function get_relative_operations_by_boss_types(arrBossTypesParam: any, sCatalogNameParam?: any): any;
  function get_object_relative_operations(iUserIDParam: any, iObjectIDParam: any, sCatalogNameParam: any): any;
  function check_operation_rights(arrOperationsParam: any, teCurUserParam: any, sActionParam: any): any;
  function extend_object(oObjectRecipient: any, oObjectSource: any): any;
  function assign_elems(fldTarget: any, fldSourceParam: any, arrFieldNamesParam: any): any;
  function assign_elems_exclude(fldTarget: any, fldSourceParam: any, arrFieldNamesParam: any): any;
  function get_foreign_field(fldForeignFieldParam: any, sFieldParam: any, sErrTextParam: any): any;
  function get_user_by_login(Login: any, AuthType: any): any;
  function set_form_last_seved_data(sCatalogNameParam: any, bValueParam: any): any;
  function get_knowledge_parts_by_person_id(person_id: any): any;
  function get_experts_by_person_id(person_id: any): any;
  function get_object_name_field_value(oObjectParam: any): any;
  function copy_url(sDestDirPARAM: any, sSourceDirPARAM: any): any;
  function zip_extract(sourcePath: string, destinationPath: string): any;
  function zip_create(sArchivePathPARAM: any, sContentPathPARAM: any, sContentDirPathPARAM: any): any;
  function register_doc_types_catalog_by_serialized_str(sSerializedCatalogsToRegPARAM: any, bServerCheck: any): any;
  function register_doc_types_catalog(aCatalogsToRegPARAM: any, bServerCheck: any): any;
  function get_disp_name_value(oObjectParam: any): any;
  function read_selected_date(sSomeObjectPARAM: any): any;
  function get_sum_sid(sIdParam: any): any;
  function check_sum_sid(sIdParam: any, sSumParam: any): any;
  function recommend_library_material_to_person(iPersonIDParam: any, iMaterialIDParam: any, tePersonParam: any, teMaterialParam: any, bSendNotificationParam: any, iEducationPlanID: any): any;
  function opt_date(oDateParam: any, oDefaultParam: any): any;
  function beautify_file_size(bytes: number, addUnit?: boolean): string;
  function get_ft_value(sValueParam: any): any;
  function set_tenancy_by_host(sTenancyNameParam: any): any;
  function get_agent_command_queue_xml(iServerAgentIDParam: any, sElementIDParam: any, sElemsIDParam: any, dDateParam: any, sTenancyNameParam: any): any;
  function get_uid_cached_doc(sUIDParam: any, sUrlParam: any): any;
  function check_and_refresh_cached_docs(sUrlParam: any): any;
  function log(sTextParam: any, sMessageTypeParam: any, bShowAdditionalInfoParam: any): any;
  function get_sibscriber_subscriptions(iPersonIDParam: any, sMessageTypeParam: any, bShowAdditionalInfoParam: any): any;
  function file_url_exists(sFilePathParam: any): any;
  function file_url_exists_server(sFilePathParam: any): any;
  function load_url_text_server(sFilePathParam: any): any;
  function load_url_data_server(sFilePathParam: any, iSizeParam: any): any;
  function read_directory_server(sFilePathParam: any, bDirParam: any): any;
  function delete_directory_server(sDirParam: any): any;
  function zip_extract_server(sSourceUrlParam: any, sTargetUrlParam: any): any;
  function delete_trash_url_server(sUrlParam: any): any;
  function alert_server(sMessageParam: any): any;
  function log_event_server(sTypeParam: any, sTextParam: any): any;
  function replace_cached_doc_server(sUrlParam: any): any;
  function copy_url_server(sDestUrlParam: any, sSourceUrlParam: any): any;
  function url_file_size_server(sUrlParam: any): any;
  function put_url_text_server(sUrlParam: any, sTextParam: any): any;
  function load_share_url_server(sUrlParam: any): any;
  function get_hash_server(sTextParam: any, sTypeParam: any): any;
  function sync_catalog(catalogName: any): any;
  function update_commons_event_types(bUpdateServersParam: any, oTarget: any): any;
  function DigitalVerifyDoc(iDocIDParam: any): any;
  function DigitalVerify(strTextParam: any, strSignatureParam: any): any;
  function process_custom_packs(arrAddPacksParam: any): any;
  function check_resource_size(iFileSizeParam: any, iPersonIDParam: any,): any;
  function include_person_to_personnel_reserve_position(iPersonIdParam: any, teRequestParam: any, iCareerReserveTypeIdParam: any, iPositionIdParam: any, strStateParam: any, iPositionCommonIdParam: any, sIncludeDateParam: any): any;
  function extract_bfields_by_list(fldSPXML: any, sFieldList: any, bNoValidation: any): any;
  function get_opened_doc(teObjectParam: any): any;
  function set_project_participant_type(iProjectParticipantIDParam: any, docProjectParticipantParam: any, iBossTypeIDParam: any): any;
  function create_project_participant(iObjectIDParam: any, teObjectParam: any, iProjectIDParam: any): any;
  function set_profile_log(sIDParam: any, Request: any, sTypeParam: any): any;
  function clear_good_instance_status(oSourceGoodInstance: any): any;
  function get_form_upload_data(sIDParam: any): any;
  function set_field_to_form_upload_data(fldFormTarget: any, fldObjParam: any, oObjIDParam: any, bInvariableParam: any): any;
  function get_default_object_id(sCatalogNameParam: string, sTypeParam?: string, teObjectParam?: object): any;
  function get_notification_system(oParam: any): any;
  function call_notification_system_method(oParam: any, sMethodNameParam: any, oArrParam: any): any;
  function create_tenancy_entry(sHost: any,): any;
  function add_tenancy_host(sTenancyCode: any, sNewHost: any): any;
  function copy_tenancy(sSourceCode: any, sDestinationTenancyCode: any,): any;
  function delete_tenancy(sTenancyCode: any): any;
  function delete_tenancy_host(sTenancyCode: any, sHostToDelete: any): any;
  function delete_tenancy_object(oTenancy: any): any;
  function disable_tenancy(sTenancyCode: any): any;
  function enable_tenancy(sTenancyCode: any): any;
  function add_tenancy_storage(sTenancyHost: any, sAccountName: any, sAccountKey: any): any;
  function set_thread_tenancy(sTenancyNameParam: any): any;
  function is_disable_tenancy(sHostName: any): any;
  function set_event_type_id(ftTarget: any, sEventTypeParam: any): any;
  function wait_script_queue(iScriptIdParam: any, bDeleteScript: any): any;
  function open_course_version(iCourseIdParam: any, sBaseUrlParam: any): any;
  function evalReplace(strEvalParam: any): any;
  function get_xhttp_ini(sIniVarName: any): any;
  function resource_pic_envelope(sMode: any, vParam1: any, vParam2: any, vParam3: any, vParam4: any): any;
  function file_source_get_upload_file_url(iFileSourceIdParam: any, sFileNameParam: any): any;
  function file_source_upload_file(iFileSourceIdParam: any, sFileUrlParam: any, sTempFileUrlParam: any): any;
  function file_source_get_file_to_save_url(iFileSourceIdParam: any, iResourceIdParam: any, sUidPARAM: any): any;
  function file_source_get_files_list(iFileSourceIdParam: any): any;
  function file_source_download_file(iFileSourceIdParam: any, sUidPARAM: any, oRequestPARAM: any, oResponsePARAM: any): any;
  function file_source_get_file_url(iFileSourceIdParam: any, sUidPARAM: any): any;
  function call_webinar_system_method(iWebinarSystemIdParam: any, sMethodNameParam: any, oParams: any): any;
  function call_library_system_method(iLibrarySystemIdParam: any, sMethodNameParam: any, oParams: any): any;
  function calculate_statistic_rec(iStatisticRecId: any, iObjectIdParam: any, bIgnorePeriodSettingsParam: any, bCalculateCatalogsParam: any): any;
  function get_statistic_data(iStatisticRecId: any, iObjectIdParam: any, sPeriodTypeParam: any, dDateStartParam: any, dDateEndParam: any): any;
  function obtain_statistic_data(StatisticRec: any, iObjectIdParam: any, sPeriodTypeParam: any, dDateStartParam: any, dDateEndParam: any, bVirtual: any, bForceRedo: any): any;
  function assign_from_object(fldTarget: any, oSourceParam: any): any;
  function filling_learning_parts(TopElem: any): any;
  function parse_email_address(sAddressParam: any): any;
  function safe_execution(sCodeSaveExecutionParam: any, oEnvParam?: any): any;
  function get_content_access(iPersonID: any, tePerson: any): any;
  function update_content_access(idOrTE_UserPARAM: any, sCatalogPARAM: any, idOrTE_ObjectID: any, bCanEditPARAM: any, bCanDeletePARAM: any): any;
  function set_default_content(teContentPARAM: any, teSubjectPARAM: any): any;
  function set_upgrade_locked(bParam: any): any;

  /**
   * 
   * @param libraryName название библиотеки
   */
  function get_object_assembly<T>(libraryName: ObjectAssemblyLibraryType): T;

  function create_committee_member(iObjectIDParam: any, teObjectParam: any, iPersonnelCommitteeIDParam: any, strCommitteeMemberTypeParam: any): any;
  function activate_poll_to_person(personId: any, oPollID: any, iPollProcedureID: any, iEducationPlanID: any): any;
  function delete_poll_result(oPollResultParam: any, tePollParam: any): any;
  function array_opt_find_by_key(arrParam: any, sKeyParam: any, oValueParam: any): any;
  function check_periodity(fldPeriodityParam: any, _cur_date: any, iSleepSecParam: any): any;
  function upload_begin(sUrlParam: any, iLenghtParam: any): any;
  function upload_range(sIDParam: any, iStartIndexParam: any, iFinishIndexParam: any, sDataParam: any): any;
  function upload_end(sIDParam: any): any;
  function is_simple_array_field(fldParam: any): any;
  function restore_doc(iObjectIDParam: any): any;
  function ValidateName(str: any, is_var: any): any;
  function check_event_fields(iEventID: any, docEvent: any, teEvent: any): any;
  function call_code_library_method(oLibraryParam: any, sMethodNameParam: any, arrParams: any): any;
  function get_code_library_error_message(oLibResParam: any, oEnvParam: any): any;
  function get_code_library_result_object(oLibResParam: any, oEnvParam: any): any;
  function amgr_cancel_agent(roleUID: any, threadID: any): any;
  function amgr_kill_role(nodeId: any, roleUID: any): any;
  function get_doc_desc(teObjectParam: any): any;
  function get_client_data(sLogin: any, sPassword: any): any;
  function get_webinar_conversation_participants(iWebinarSystemId: any): any;
  function add_object_to_package(docObject: any, iObjectID: any, Screen: any, fldPackage: any): any;

  /**
   * Преобразование данных (https://news.websoft.ru/_wt/wiki_base/6809298370262485009/base_wiki_article_type_id/6680054725638828770)
   * В данный раздел включены все функции библиотеки Tools, связанные с преобразованием данных, в алфавитном порядке, кроме устаревших.
   */

  /**
   * Преобразует строку вида `+7-903-508-20-45` или `+7(903)508-20-45` в строку `79035082045 5082045`. Функция используется для унификации поиска по телефонным номерам.
   * @param strPhoneParam Исходная строка для преобразования.
   * @returns Преобразованная строка или значение `null`, если произошла ошибка.
   * 
   * @example
   * // returns 79035082045 5082045
   * tools.build_phone("+7-903-508-20-45");
   */
  function build_phone(strPhoneParam: string): string | null;

  /** 
   * Заменяет в строке пробел, «(» , «)», «+» и «-» на пустую сроку, а символы «,» и «;» - на пробел.
   * @param strPhoneParam Исходная строка для преобразования.
   * @returns Преобразованная строка или значение `null`, если произошла ошибка.
   * 
   * @example
   * // returns 79035082045
   * tools.build_simple_phone("+7-903-508-20-45");
   */
  function build_simple_phone(strPhoneParam: string): string | null;

  /**
   * Функция выявляет домен и логин почтового адреса из электронного сообщения в стандарте X.400 и возвращает строку вида login@domainтекст_письма.
   * @param _x40_email Строка электронного сообщения в стандарте X.400, из которого выделяется домен и логин электронного адреса. 
   * @param _end_mail Строковое выражение, содержащее текст письма, который будет добавлен к login@domain. 
   * @returns Строковое выражение вида login@domainтекст_письма.
   */
  function convert_email_from_x40(_x40_email: string, _end_mail: string): string;

  /**
   * Прообразовывает содержание строки для сохранения в теге <desc> ... </desc>. Предназначено для преобразования тегов и ссылок на файлы в описании
   * @param _desc Строка для преобразования. 
   * @param _temp_dir Строчное выражение пути до папки с файлами, указанными в теге. 
   * @returns Преобразованная строка. Результат действия функции.
   */
  function desc_cleanup(_desc: string, _temp_dir?: string): string;

  /**
   * @summary Преобразовывает html-файл, переданный в функцию, в файл в формате pdf и сохраняет его по указанному пути.
   * @description Преобразовывает html-файл, переданный в функцию, в файл в формате pdf и сохраняет его по указанному пути.
   * Примечание – Если указанный файл уже существует в файловой системе, то он перезаписывается без выдачи предупреждения. 
   * Если файл открыт в другой программе, то выдается ошибка с прерыванием выполняемого кода: «Процесс не может получить доступ к файлу…,
   * так как этот файл используется другим процессом.»
   * @param sHtmlText Строка с html для преобразования.
   * @param sResourcesDirPath Путь до папки с ресурсами (изображения, стили и т.д.), которые используются в html. При отсутствии таких ресурсов указывается пустая строка ('').
   * @param sOutFilePath Путь до файла, в который будет сохранен полученный файл pdf.
   * @returns Возвращает значение `true`, если преобразование завершилось успешно, или `false` - в противном случае.
   * 
   * @example
   * // returns true
   * tools.html_to_pdf(_str, "", UrlToFilePath(_filename));
   */
  function html_to_pdf(sHtmlText: string, sResourcesDirPath: string, sOutFilePath: string): boolean;

  /**
   * Преобразует массив или объект в строку указанного формата (json, xml).
   * @param _aDataPARAM массив array или объект (object) для преобразования.
   * @param { string }[_sName=null] необязательный по умолчанию null. Если не null, то параметр указывает название тега (для XML) или свойства (json), в который будут заключены данные, полученные из _aDataPARAM.
   * @param { boolean } [_bObj=false] флаг true – преобразуется объект, false – преобразуется массив.
   * @param { string } [_sFormatPARAM=xml] по умолчанию XML. Возможны два значения (json, xml). Задает формат возвращаемой строки.
   * @returns строка, полученная из массива или объекта
   * 
   * @example
   * tools.merge_text_array(_aPairs, (_sFormatPARAM == "json" ? null: _sNamePARAM), false, _sFormatPARAM);
   */
  function merge_text_array(_aDataPARAM: Object | any[], _sName?: string, _bObj?: boolean, _sFormatPARAM?: string): string;

  /**
   * 
   * @param arg объект для преобразования.
   * @param { string }[formatType=xml] по умолчанию XML. Возможны два значения (json, xml). Задает формат возвращаемой строки.
   * @param { number } [maxDepth=0] по умолчанию 0. Глубина дочерних свойств объекта, до которой можно спускаться. Должна быть не больше 5.
   * @param { stirng } [_sName=null] Параметр указывает название тега (для XML), в который будут заключены данные, полученные из _vObjectPARAM. По умолчанию <value></value>.
   * @returns строка, полученная из объекта.
   * 
   * @example 
   * tools.object_to_text(RESULT,'json')
   * 
   * @example
   * tools.object_to_text(_vValue, _sFormatPARAM, iDepth + 1, _sName);
   */
  function object_to_text(arg: any, formatType: string, maxDepth?: number, _sName?: string): string;

  /**
   * Возвращает сроку с тегами XML, полученную из файла путь до которого, передан в параметрах функции. Вызывает функцию tools.open_str_win_ini для разбора файла.
   * @param sUrlParam строка с путем до файла.
   * @returns строка с путем до файла.
   */
  function open_doc_win_ini(sUrlParam: string): string;

  /**
   * Возвращает сроку с тегами XML, полученную из строки, переданной в параметрах функции. Предполагается, что в функцию передается файл со значениями параметров, потому в результирующей строке будут представлены название параметра и его значение
   * @param sFileText строка для разбора.
   * @returns строка с тегами XML.
   * 
   * @example
   * tools.open_str_win_ini(LoadUrlText(sUrlParam));
   */
  function open_str_win_ini(sFileText: string): string;

  /**
   * Преобразует строку в объект. Например, строку в формате json в объект. Или строку, содержащую XML, в объект.
   * @param string строка в формате json или строка, содержащая XML.
   * @returns Возвращаемый результат – полученный объекта (object).
   * 
   * @example
   * tools.read_object(call_method("getSaveFileUrl", oParam, "json"));
   * 
   * @example
   * tools.read_object(sResult);
   */
  function read_object<T = any>(value: any): T;

  /**
   * @summary Используется в процессе выгрузке/загрузки данных в WebTutor при интеграции с другими системами. Заменяет в строке символы определенные символы в [].
   * @description
   * Используется в процессе выгрузке/загрузки данных в WebTutor при интеграции с другими системами. Заменяет в строке символы определенные символы в [].
   * ```
   * [yyyy] меняется на 4 символа года из даты.
   * [yy] меняется на 2 последних символа года из даты.
   * [mm] и [m] меняется на месяц из даты.
   * [dd] и [d] меняется на день из даты.
   * [hh] и [h] меняется на часы из даты.
   * [mimi] и [mi] меняется на минуты из даты.
   * [ss] и [s] меняется на секунды из даты.
   * [AppDirectoryPath] меняется на функцию AppDirectoryPath().
   * ```
   * @param _str стока для преобразования.
   * @param _date дата, данные из которой берутся для замены символов в строке, по умолчанию текущая дата и время.
   * 
   * @example
   * tools.replace_temlate_tags(_source.db_path); 
   */
  function replace_temlate_tags(_str: string, _date?: Date): string;

  /**
   * Преобразует в строку числовой параметр функции. Если параметр отрицательный, то строка будет начинаться со знака «-».
   * @param iNumberParam число для преобразования в строку.
   * @returns строка
   * 
   * @example
   * tools.str_negative_number(TopElem.weight);
   */
  function str_negative_number(iNumberParam: number): string;
}
