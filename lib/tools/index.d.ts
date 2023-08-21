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
   * @param {number} eventId - (обязательный) Тип: Целое число. ID мероприятия, для участников которого назначается курс.
   * @param {number} courseId - (обязательный) Тип: Целое число. ID курса, который необходимо назначить.
   * @param {EventDocument} eventDocument - (необязательный) Тип: Объект XmlDoc. Документ карточки мероприятия.
   * @param {number} duration - (необязательный) Тип: Целое число. Длительность курса в днях.
   * Определяет дату планируемого завершения.
   * @param {Date} startLearningDate - (необязательный) Тип: Дата. Дата начала обучения.
   * Если данный аргумент задан, то обучение невозможно будет начать раньше указанной даты.
   * @param {Date} testLearningDate - (необязательный) Тип: Дата. Контрольная дата завершения предыдущего обучения.
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
   * Назначение курса участникам указанного мероприятия.
   * @param {number} personId - Id сотрудника, которому назначается курс.
   * @param {number} courseId - Id курса, который необходимо назначить.
   * @param {number} eventId - Id мероприятия, участникам которого назначается курс.
   * @param {CollaboratorDocumentTopElem} personDoc - TopElem карточки сотрудника, которому назначается курс.
   * @param {number} educationPlanId - Id плана обучения, в рамках которого назначен курс.
   * @param {number} duration - Длительность курса в днях. Определяет дату планируемого завершения.
   * @param {Date} startLearningDate - Дата начала обучения. Если данный аргумент задан, то обучение невозможно будет начать раньше указанной даты.
   * @param {Date} lastLearningDate - Контрольная дата завершения предыдущего обучения.
   * Если параметр задан, то при назначении курса, проверяется,
   * существует ли в каталоге learnings курс, завершенный после указанной даты.
   * Если такой курс существует, то ID соответствующей записи из каталога
   * learnings возвращается как результат работы функции.
   * @param {number} groupId - Id группы, которой назначен курс.
   * @param {unknown} eid - Код записи в каталоге active_learnings.
   * Если он указан, то при назначении курса,
   * когда производится проверка на уже существующий активный курс
   * данного сотрудника в каталоге active_learnings, проверяется также,
   * что у данной записи должен быть указанный в параметре код.
   * @param {boolean} skipDismissed - Аргумент, указывающий на необходимость пропускать уволенных
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
    eid?: unknown,
    skipDismissed?: boolean
  ): XmlElem<number> | null | ActiveLearningDocument;

  /**
   * Назначение курса участникам указанного мероприятия.
   * @param {ActivateCourseToPersonObject} params - Параметры назначения курса.
   * @returns Объект XMLDoc или Целое число.
   * Если курс назначен при выполнении функции,
   * то возвращается ссылка на вновь созданный документ обучения.
   * Если курс был назначен ранее, но не завершен, или завершен,
   * но не прошло еще время, указанное в атрибуте dtLastLearningDateParam,
   * то возвращается ID карточки ранее назначенного курса (из каталога active_learning).
   */
  function activate_course_to_person(
    params: ActivateCourseToPersonObject
  ): XmlElem<number> | null | ActiveLearningDocument;

  /**
   * Назначение сотруднику курсов, которые указаны в учебных программах (с типом "Электронный курс"),
   * перечисленных в наборе программ. Если в наборе учебных программ указаны учебные программы,
   * содержащие дистанционное обучение (курсы), то эти курсы будут назначены сотруднику.
   * @param {number} personId - ID сотрудника, которому назначается набор учебных программ.
   * @param {number} educationProgramId - ID набора учебных программ.
   * @param {CollaboratorDocumentTopElem} collaboratorDocumentTopElem - TopElem карточки сотрудника, которому назначается тест.
   * @param {EducationProgramDocumentTopElem} educationProgramDocumentTopElem - TopElem карточки набора учебных программ.
   * @returns Количество назначенных курсов в составе набора учебных программ.
   */
  function activate_education_program_to_person(
    personId: number,
    educationProgramId: number,
    collaboratorDocumentTopElem: CollaboratorDocumentTopElem,
    educationProgramDocumentTopElem: EducationProgramDocumentTopElem
  ): number;

  /**
   * Назначение теста участникам указанного мероприятия.
   * @param {number} eventId - ID мероприятия, участникам которого назначается тест.
   * @param {number} assessmentId - ID теста, который необходимо назначить.
   * @param {EventDocument} eventDocument - Документ карточки мероприятия.
   * @param {number} duration - Длительность теста в днях. Определяет дату планируемого завершения.
   * @param {Date} startLearningDate - Дата начала обучения. Если данный аргумент задан,
   * то обучение невозможно будет начать раньше указанной даты.
   * @param {Date} lastLearningDate - Контрольная дата завершения предыдущего обучения.
   * Если параметр задан, то при назначении теста проверяется, существует ли в каталоге test_learnings тест,
   * завершенный после указанной даты. Если такой тест существует, то ID соответствующей записи из
   * каталога test_learnings возвращается как результат работы функции.
   * @param {string} actType - Строка, указывающая, кому назначать тесты.
   * Возможные значения:
   * 'all' - Тесты назначаются всем участникам мероприятия (значение по умолчанию).
   * 'post' - Тесты назначаются участникам мероприятия, у которых проставлен флаг «Присутствовал на мероприятии».
   * @param {boolean} skipDismissed - Аргумент, указывающий на необходимость пропускать уволенных сотрудников
   * (true – пропускать, false – не пропускать). По умолчанию true.
   * @param {boolean} bUseProctoring - Использовать прокторинг.
   * @param {number} iProctorPreferID - Id прокторинга.
   * @param {boolean} bActivateOnlyAssist - Активация мероприятий.
   * @returns Количество назначенных тестов.
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

  type ActivateTestToPersonParams = {
    /**
     * ID collaborator.
     */
    iPersonID: number;
    /**
     * ID test.
     */
    iAssessmentID: number;
    /**
     * ID мероприятия.
     */
    iEventID?: number;
    /**
     * Дата последнего обучения.
     */
    dtLastLearningDate?: number;
    /**
     * Не назначать уволенным.
     */
    bSkipDismissed?: number;
    /**
     * Карточка сотрудника.
     */
    teCollaborator?: CollaboratorDocumentTopElem;
    /**
     * Не назначать повторно успешно прошедшим тестирование (с учетом даты последнего обучения).
     */
    bMissOnlySuccessLearning?: number;
    /**
     * Карточка мероприятия.
     */
    teEvent?: EventDocumentTopElem;
    /**
     * Карточка теста.
     */
    teAssessment?: AssessmentDocumentTopElem;
    /**
     * Длительность в днях.
     */
    iDuration?: number;
    /**
     * Дата начала тестирования.
     */
    dtStartLearningDate?: Date;
    /**
     * ID плана обучения.
     */
    iEducationPlanID?: number;
    /**
     * Id группы.
     */
    iGroupID?: number;
    /**
     * Признак самоактивации.
     */
    bSelfEnrolled?: boolean;
    /**
     * Комментарий назначившего (записывается в карточку незаконченного/законченного теста).
     */
    sComment?: string;
    /**
     * Использовать прокторинг.
     */
    bUseProctoring?: boolean;

    iProctorPreferID?: number;
  };

  /**
   * Функция назначения теста пользователю.
   * @param {ActivateCourseToPersonObject} params - Объект JavaScript (Структура параметров).
   */
  function activate_test_to_person(
    params: ActivateTestToPersonParams
  ): XmlElem<number> | null | ActiveTestLearningDocument;

  /**
   * Функция назначения теста пользователю.
   * @param {number} personId - ID пользователя.
   * @param {number} assessmentId - ID курса.
   * @param {number} eventId - ID мероприятия.
   * @param {CollaboratorDocumentTopElem} personDoc - Документ пользователя.
   * @param {AssessmentDocumentTopElem} assessmentDocument - Документ теста.
   * @param {null} eventDocument - Документ мероприятия.
   * @param {number} duration - Продолжительность тестирования.
   * @param {Date} startLearningDate - Дата начала тестирования.
   * @param {Date} lastLearningDate - Дата окончания тестирования.
   * @param {number} groupId - ID группы.
   * @param {number} educationPlanId - ID плана обучения.
   * @param {boolean} skipDismissed - Аргумент, указывающий на необходимость пропускать уволенных сотрудников.
   * (true – пропускать, false – не пропускать). По умолчанию true.
   * @return {XmlElem<number>|null|XmlDocument} Объект XMLDoc или Целое число.
   * Если тест назначен при выполнении функции, то возвращается ссылка на вновь созданный документ обучения.
   * Если тест был назначен ранее, но не завершен, или завершен,
   * но не прошло еще время, указанное в атрибуте dtLastLearningDateParam,
   * то возвращается ID карточки ранее назначенного теста (из каталога active_test_learning).
   */
  function activate_test_to_person(
    personId: number,
    assessmentId: number | string,
    eventId: number | string | null | undefined,
    personDoc: CollaboratorDocumentTopElem | null | undefined | "",
    assessmentDocument: AssessmentDocumentTopElem | null | "",
    eventDocument?: null,
    duration?: number | string | null,
    startLearningDate?: Date | string,
    lastLearningDate?: Date | string,
    groupId?: number | string | null,
    educationPlanId?: number | string | null,
    skipDismissed?: boolean | null
  ): XmlElem<number> | null | ActiveTestLearningDocument;

  /**
   * Функция завершает указанный активный электронный курс и создает карточку завершенного электронного курса
   * (карточка незавершенного курса при этом удаляется).
   * @param {number} learningId - Id активного электронного курса, который необходимо завершить.
   * @param {ActiveLearningDocumentTopElem} activeLearningDocumentTopElem - TopElem активного электронного курса, который необходимо завершить.
   * @param {CourseDocumentTopElem} courseDocumentTopElem - TopElem электронного курса, который необходимо завершить.
   * @returns Id нового завершенного курса.
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
   * @param {number} learningId - Id активного теста, который необходимо завершить.
   * @param {ActiveTestLearningDocumentTopElem} activeTestLearningDocumentTopElem - TopElem активного теста, который необходимо завершить.
   * @param {AssessmentDocumentTopElem} assessmentDocumentTopElem - TopElem теста, который необходимо завершить.
   * @param {number} iPersonIDParam - Id сотрудника.
   * @param {boolean} bFinishTest - Флаг завершение теста.
   */
  function active_test_learning_finish(
    learningId: number,
    activeTestLearningDocumentTopElem?: ActiveTestLearningDocumentTopElem,
    assessmentDocumentTopElem?: AssessmentDocumentTopElem,
    iPersonIDParam?: number,
    bFinishTest?: unknown
  ): TestLearningDocument;

  /**
   * Функция завершает указанную попытку для теста и создает карточку завершенного теста.
   * @param {number} _learning_id - ID активного теста, попытку которого необходимо завершить.
   * @param {string} _learning_code - Код раздела теста, который нужно завершить.
   * @param {AssessmentDocument} _assessment_doc - `TopElem` теста, который необходимо завершить.
   * @param {boolean} _flag_create_learning - Возвращает значение, показывающее,
   * создавать или не создавать запись завершенного теста (`true` – создавать запись завершенного теста, `false` – не создавать запись).
   * @param {ActiveTestLearningDocument} docActiveLearning - Документ активного теста, который необходимо завершить.
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
   * @param {string} sLngUrlParam - Путь до XML-файла с константами.
   * @param {boolean} bDoObtainParam - Используется при вызове функции на сервере. Если значение аргумента равно `true`,
   * то существующие значения констант языка перезаписываются новыми из файла `sLngUrlParam`.
   * @returns Количество обновленных констант.
   * @example
   * ```
   * tools.add_lng(_url);
   * tools.add_lng( UrlAppendPath("x-local://custom/", temp_doc.lngs_url), true);
   * _num = TopElem.add_lng_items(_doc, true);
   * ```
   */
  function add_lng(sLngUrlParam: string, bDoObtainParam?: boolean): number;

  /**
   * Функция добавляет сотрудника в список оцениваемых в процедуре оценки. Планы и анкеты при этом не создаются.
   * @param {number} personId - ID сотрудника.
   * @param {number} assessmentAppraiseId - ID процедуры оценки, в которую нужно добавить сотрудника.
   * @param {CollaboratorDocument} personDocument - `TopElem` карточки сотрудника.
   * @param {AssessmentAppraiseDocument} assessmentAppraiseDocument - Документ процедуры оценки, в которую нужно добавить сотрудника.
   * @returns Изменённый и сохраненный документ процедуры оценки.
   *
   * @example
   * tools.add_person_to_assessment_appraise ( iPersonID, iObjectID, null, docObject );
   */
  function add_person_to_assessment_appraise(
    personId: number,
    assessmentAppraiseId: number,
    personDocument?: CollaboratorDocument,
    assessmentAppraiseDocument?: AssessmentAppraiseDocument
  ): AssessmentAppraiseDocument;

  /**
   * Добавляет участника в мероприятие.
   * @param {number} userId - ID сотрудника, добавляемого в мероприятие.
   * @param {number} eventId - ID мероприятия, в которое добавляется сотрудник.
   * @param {CollaboratorDocumentTopElem} userTopElem - `TopElem` сотрудника.
   * @param {EventDocument} eventDocument - Документ мероприятия.
   * @param {number} educationPlanId - ID плана обучения добавляемого сотрудника.
   * Если аргумент указан, то ссылка на план сохранится в результатах мероприятия сотрудника.
   * @param {number} requestPersonId - ID лица, подавшего заявку на добавление сотрудника в мероприятие.
   * Если аргумент указан, то ссылка на лицо, подавшее заявку, сохранится в результатах мероприятия сотрудника.
   * @param {number} requestId - ID заявки на включение сотрудника в состав участников мероприятия.
   * Если аргумент указан, то ссылка на заявку сохранится в результате мероприятия сотрудника.
   * @returns Документ мероприятия, к которому добавлялся сотрудник (если сотрудник ранее не был добавлен в данное мероприятие),
   * или `null` (если сотрудник ранее уже был добавлен).
   * @example
   * ```
   * docEvent = tools.add_person_to_event ( Int(sUserId), Int(sRoomId) );
   * tools.add_person_to_event ( _source.TopElem.person_id, _source.TopElem.object_id, null, docObject );
   * tools.add_person_to_event ( fldPersonElem.PrimaryKey, docEvent.DocID, null, docEvent, null, catRequest.PrimaryKey );
   * ```
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
   * @param {number} actionReportId - ID события базы, к которому нужно добавить строку.
   * @param {string} text - Строка, которую нужно добавить к событию базы.
   * @param {ActionReportDocument} actionReportDocument - Документ события базы, к которому нужно добавить строку.
   *
   * @returns Сохраненный документ события базы с добавленной строкой.
   *
   * @example
   * reportDoc = OpenNewDoc( 'x-local://wtv/wtv_action_report.xmd' );
   * _report_id = reportDoc.DocID;
   * tools.add_report( _report_id, 'Saving archive: OK.' );
   */
  function add_report(actionReportId: number, text?: string, actionReportDocument?: ActionReportDocument): ActionReportDocument;

  /**
   * Создает элемент очереди скриптов.
   * @param {string} sScriptParam - Код для выполнения.
   * @param {string} sCodeParam - Строка с кодом скрипта.
   * @param {boolean} bDeleteAutomaticallyParam - Флаг, определяющий, нужно ли автоматически удалять код из очереди
   * (`true` – код автоматически удаляется из очереди, `false` – не удаляется).
   * @param {number} iDelayParam - Задержка в секундах перед выполнением кода.
   * @param {Date} dStartDate - Дата старта агента.
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
   * @param {Date} DATE_VAL - Исходная дата, подлежащая изменению. Если дата не указана, то по умолчанию принимается текущая дата.
   * @param {number} DAYS - Количество дней, на которое нужно сдвинуть текущую дату. Если аргумент не указан, то по умолчанию принимается значение 0.
   * @param {number} HOURS - Количество часов, на которое нужно сдвинуть текущую дату. Если аргумент не указан, то по умолчанию принимается значение 0.
   * @param {number} MINUTES - Количество минут, на которое нужно сдвинуть текущую дату. Если аргумент не указан, то по умолчанию принимается значение 0.
   * @param {number} SECONDS - Количество секунд, на которое нужно сдвинуть текущую дату. Если аргумент не указан, то по умолчанию принимается значение 0.
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
   * @param {number} _to_obj_id - ID объекта, в который нужно скопировать параметры доступа.
   * @param {XmlTopElem} _to_obj_doc - TopElem объекта, в который нужно скопировать параметры доступа.
   * @param {number} _from_obj_id - ID объекта, из которого нужно скопировать параметры доступа.
   * @param {XmlTopElem} _from_obj_doc - TopElem объекта, из которого нужно скопировать параметры доступа.
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
   * @param {XmlTopElem} teObjectParam - `TopElem` объекта, к которому проверяется доступ.
   * @returns Возвращает значение, показывающее наличие или отсутствие доступа (`true` – доступ разрешен, `false` – доступ запрещен).
   *
   * @example
   * tools.admin_access_filling( TopElem );
   */
  function admin_access_filling(teObjectParam: XmlTopElem): boolean;

  /**
   * Представляет результаты теста в формате XML-структуры.
   * @param {XmlElem<unknown>} oSourceParam - Элемент для разбора теста, в котором содержится либо непустое поле `lesson_report`,
   * `objects` (массив с элементами) или `core_lesson`.
   * @param {string} sQtiPathParam - Путь до файла со структурой теста в формате qti.
   * @param {string} sQtiTextParam - Структура теста в формате qti.
   * @param {boolean} bNoSendCorrectAnswerParam - Не отправлять правильный ответ.
   *
   * @returns XML-структура, содержащая результаты тестирования.
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
    oSourceParam: XmlElem<unknown>,
    sQtiPathParam?: string,
    sQtiTextParam?: string,
    bNoSendCorrectAnswerParam?: boolean
  ): XmlDocument;

  /**
   * Преобразует массив в строку указанного формата (`json`, `xml`).
   * @param {unknown[]} _aArrayPARAM - Массив, который необходимо преобразовать.
   * @param {string} _sFormatPARAM - Формат возвращаемой строки. Возможны два значения: `json` и `xml`). По умолчанию имеет значение `xml`.
   * @param {string} _sNamePARAM - Название корневого (`root`) тега. Значение аргумента учитывается, если формируется строка в формате XML.
   * По умолчанию имеет значение `data` (корневой тег `<data></data>`).
   *
   * @returns Строка, сформированная из массива.
   *
   * @example
   * ```
   * tools.array_to_text(["one", "two", "three"], "json"); // ["value":"one", "value":"two", "value":"three"]
   * tools.array_to_text(["one", "two", "three"], "xml"); // <data><value>one</value></data><data><value>two</value></data><data><value>three</value></data>
   * tools.array_to_text(["one", "two", "three"], "xml", "d"); // <d><value>one</value></d><d><value>two</value></d><d><value>three</value></d>
   * ```
   */
  function array_to_text(_aArrayPARAM: unknown[], _sFormatPARAM?: string, _sNamePARAM?: string): string;


  const dotnet_host: DotnetCoreHost;

  function new_doc_by_name<T = XmlDocument>(documentName: string, isCatalog?: boolean): T;

  /**
   * Возвращает значение параметра, переданного в функцию, в зашифрованном виде.
   * Вид шифрования указывается в общих настройках (Формат хранения и проверки пароля): md5, sha1, sha1_base64.
   * @param {string} password - Строка для преобразования.
   * @param {boolean} flag - Флаг, показывающий, что получаемая в результате преобразования строка будет использоваться для проверки пароля (true). Это значит, что их строки будут удалены открывающаяся “(” и закрывающаяся “)” скобки для  md5, sha1, sha1_base64. В противном случае (false), будет возвращена строка в () в указанном в настройках формате md5, sha1, sha1_base64 или без скобок для формата Plain.
   * @returns String Возвращаемый результат – строка (string), преобразованная в соответствие с параметрами вызова.
   */
  function make_password(password: string, flag: boolean): string;

  /**
   * Запускает системный агент на выполнение.
   * @param {number} agentId - ID агента для запуска.
   * @param {number} objectId - ID объекта, над которым запускается агента (например, в списке).
   * @param {string} objectIdsStr - Необязательный – ID объектов разделенных «;», над которым запускается агента (например, в списке).
   * @param {Date} dateStart - Дата запуска агента, по умолчанию текущая дата.
   * @param {string} tenancyName - Необязательный – код экземпляра системы в multitenant системе, в котором нужно запустить агент.
   * @returns Возвращаемый результат – флаг да/нет (bool) успех или неуспех выполнения агента.
   */
  function start_agent(
    agentId: number,
    objectId?: number,
    objectIdsStr?: string,
    dateStart?: Date,
    tenancyName?: string
  ): unknown;

  /**
   * Функция открывает документ и возвращает его.
   * Если не смогла открыть, возвращает undefined.
   * @param {string|number} documentId - ID документа.
   * @returns {T|undefined} XML документ или undefined.
   */
  function open_doc<T = XmlDocument>(documentId: number): T | undefined;

  /**
   * Проверяет разрешение на доступ к указанному объекту для указанного пользователя.
   * Проверка идет по уровню доступа, роли доступа, группам доступа и условиям доступа,
   * если в карточке объекта есть соответствующие настройки.
   * @param {XmlTopElem} TopElem - TopElem объекта, доступ к которому нужно проверить.
   * @param {number} userId - ID сотрудника, для которого нужно проверить доступ.
   * @returns Тип: Булево. Возвращает значение, показывающее,
   * разрешен ли сотруднику доступ к объекту (true – доступ разрешен, false – доступ запрещен).
   */
  function check_access(TopElem: XmlTopElem, userId: number): boolean;

  /**
   * Оптимизированная функция выполнения длинных запросов.
   * Ее предпочтительнее использовать, кода нужно сделать, например запрос с иерархией.
   * И всегда использовать вместо CatalogHierSubset используя функцию IsHierChild.
   * @param {string} command - Cтрока для выполнения запроса.
   * Возвращаемый результат - результат выполнения запроса XQuery по оптимизированной строке sQueryParam.
   * @example
   * ```
   * docArray = tools.xquery( 'for $elem in documents where IsHierChild( $elem/id, ' + _main_doc.document_id + ' )
   * order by $elem/Hier() return $elem/id' );
   * xarrSubdivisions = tools.xquery( 'for $elem in subdivisions where IsHierChild( $elem/id, ' + iLastDepID + ' )
   * order by $elem/Hier() return $elem/id' );
   * ```
   */
  function xquery<T>(command: string): T[];

  export type ActivateCourseToPersonObject = {
    /**
     * Id Сотрудника.
     */
    iPersonID: number;
    /**
     * Id курса.
     */
    iCourseID: number;
    /**
     * Код записи в каталоге незаконченных электронных курсов active_learnings (необязательный),.
     */
    sEID?: string;
    /**
     * ID мероприятия (необязательный),.
     */
    iEventID?: number;
    /**
     * Карточка сотрудника (необязательный),.
     */
    teCollaborator?: CollaboratorDocumentTopElem;
    /**
     * Карточка курса (необязательный),.
     */
    teCourse?: CourseDocumentTopElem;
    /**
     * Длительность в днях (необязательный),.
     */
    iDuration?: number;
    /**
     * Дата последнего обучения (необязательный),.
     */
    dtLastLearningDate?: Date;
    /**
     * Дата начала прохождения курса (необязательный),.
     */
    dtStartLearningDate?: Date;
    /**
     * ID плана обучения (необязательный),.
     */
    iEducationPlanID?: number;
    /**
     * ID группы (необязательный),.
     */
    iGroupID?: number;
    /**
     * Возможность комментировать (необязательный),.
     */
    bCommenting?: boolean;
    /**
     * Ведение подробного лога (журнала) курса (необязательный).
     */
    bLogging?: boolean;
    /**
     * Не назначать уволенным (необязательный),.
     */
    bSkipDismissed?: boolean;
    /**
     * Не назначать повторно успешно прошедшим курс (с учетом даты последнего обучения) (необязательный),.
     */
    bMissOnlySuccessLearning?: boolean;
    /**
     * Карточка мероприятия (необязательный),.
     */
    teEvent?: EventDocumentTopElem;
    /**
     * Признак самоактивации (необязательный),.
     */
    bSelfEnrolled?: boolean;
    /**
     * Комментарий назначившего (записывается в карточку незаконченного/законченного курса) (необязательный),.
     */
    sComment?: string;
    /**
     * Использовать прокторинг (необязательный).
     */
    bUseProctoring?: boolean;
  };


  function get_server_protocol(): string;
  function encode_course_folder(sCodeParam: string): unknown;
  function decode_course_folder(sCodeParam: string): unknown;
  function load_course(fileUrl: unknown, sFileCharsetParam: unknown, docCourseParam: unknown): unknown;
  function copy_manifest_resources(fileUrl: unknown, baseUrl: unknown): unknown;
  function open_course_package_server(sUrlPARAM: unknown): unknown;
  function copy_url_temp_suffix(sDestUrlPARAM: unknown, sSourceUrlPARAM: unknown): unknown;
  function update_forum_entry(doc: unknown, iNewForumIDParam: unknown, iParentForumEntryIDParam: unknown): unknown;
  function update_document_comment_entry(doc: unknown, iNewPortalDocIDParam: unknown): unknown;
  function upload_data(iExchangeSeverIDParam: unknown, dtLimitParam: unknown, iExchangeObjectIDParam: unknown): unknown;
  function download_data(iExchangeSeverIDParam: unknown): unknown;
  function create_data_package(iExchangeSeverIDParam: unknown, _report_id: unknown, sPackIDParam: unknown, dtLimitParam: unknown, iExchangeObjectIDParam: unknown, sPrimaryKeyUserData: unknown): unknown;
  function get_exchange_date(_source: unknown, _last_date: unknown): unknown;
  function send_file_to_server(_subject: unknown, _body: unknown, _send_file: unknown, _server_id: unknown, _report_id: unknown): unknown;
  function post_file_to_server(_send_file: unknown, _server_id: unknown, _report_id: unknown): unknown;
  function date_str(_cur_date: unknown): unknown;
  function uni_process_package(sUrlPackageParam: unknown, fldFormParam: unknown): unknown;
  function process_package(_url: unknown, fldPackagesValidParam: unknown): unknown;
  function get_param_error_text(_param_form: unknown): unknown;
  function download_package_list(iExchangeSeverID: unknown): unknown;
  function download_package(iExchangeSeverID: unknown, iPackageID: unknown, sTempUrlParam: unknown, fldPackageValidParam: unknown): unknown;
  function package_process(_path: unknown, _type: unknown, _source: unknown, _report_id: unknown, _exchange_server_id: unknown, iDownloadPackageIDParam: unknown): unknown;
  function get_time_from_duration(duration: number): unknown;
  function get_time_from_seconds(_seconds: unknown): unknown;
  function delete_transaction(_transaction_id: unknown): unknown;
  function pay_new_transaction_by_object(iAccountObjectIDParam: unknown, sAccountCurrencyParam: unknown, rSumParam: unknown, sCommentParam: unknown, iObjectIDParam: unknown, iPersonIDParam: unknown, changeBalance: unknown): unknown;
  function pay_invoice(_invoice_id: unknown, _doc_invoice: unknown): unknown;
  function pay_courses(_org_id: unknown, _amount: unknown, _comment: unknown): unknown;
  function set_account(_org_id: unknown, _amount: unknown): unknown;
  function personal_pay(_org_id: unknown, _request_id: unknown): unknown;

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
   * открываемому автоматически при вызове функции по отправке уведомления, objDoc. ObjDoc- это TopElem документа.
   * Обращение ко второму параметру идет через objDocSecID, к документу, открываемому автоматически при
   * вызове функции по отправке уведомления objDocSec. ObjDocSec- это TopElem документа.
   * Если документ отрыт ранее, то для ускорения работы функции отправки уведомления, можно передать открытый
   * документ в функцию, что позволит избежать его повторного открытия. Для этого вместо tools.create_notification( code, id1, '', id2)
   * вызывается функция, куда передаются дополнительные параметры tools.create_notification( code, id1, '', id2, TopElem1,TopElem2 ).
   * @param {string} notificationIdentifier - Код типа уведомления, которое будет отправляться. Если параметр пустой ('') или равен '0', то в параметр
   * additionalParams необходимо передавать структуру, из которой будут заполняться типы получателей (recipients),
   * тип отправителя (sender_selector), тема сообщения (subject), тип текста в теле сообщения (body_type),
   * тело сообщения (body) и адрес отправителя (sender_email). Если oTypeParam - это реальный код типа уведомления,
   * то типы получателей (recipients), тип отправителя (sender_selector) и адрес отправителя (sender_email) будут
   * браться из указанного объекта. А тема сообщения (subject), тип текста в теле сообщения (body_type),
   * тело сообщения (body) из шаблона уведомления, прикрепленного к типу сообщения с указанным в параметре кодом.
   * Если в существующих в системе типах уведомления не найдено типа уведомления с указанным кодом,
   * то уведомление не формируется и функция возвратит значение false.
   * В определенных случаях в качестве данного аргумента вместо кода типа уведомления может быть указан ID открытого документа типа уведомления.
   * @param {string} objectId - ID первого объекта (обыкновенно, по данным первого документа формируется, в частности,
   * перечень сотрудников, которым нужно отправить сообщение. В теле уведомления (шаблоне уведомления) обращение
   * к этому параметру идет через objDoc (например, <%=objDoc.name%>) и objDocID.
   * @param {T} text - Аргумент, к которому можно обращаться в теле шаблона уведомления как к Text (<%=Text%>).
   * @param {number} secondObjectId - ID второго объекта, который прикрепляется к уведомлению.
   * В теле уведомления (шаблоне уведомления) обращение этому параметру идет через objDocSec (например, <%=objDocSec.name%>) и objDocSecID.
   * @param {XmlTopElem} objectTopElem - TopElem карточки первого объекта, определяемого аргументом objectId.
   * @param {XmlTopElem} secondObjectTopElem - TopElem карточки второго объекта, определяемого аргументом secondObjectId.
   * @param {ICreateNotificationAdditionalParams} additionalParams - Структура, позволяющая создать собственное (пользовательское) уведомление "на лету".
   * Из нее берутся данные о типах получателей (recipients), тип отправителя (sender_selector),
   * тема сообщения (subject), тип текста в теле сообщения (body_type), тело сообщения (body)
   * и адрес отправителя (sender_email).
   */
  function create_notification<T>(
    notificationIdentifier: number | string,
    objectId: number | string,
    text?: T,
    secondObjectId?: number,
    objectTopElem?: XmlTopElem,
    secondObjectTopElem?: XmlTopElem,
    additionalParams?: ICreateNotificationAdditionalParams
  ): boolean;

  function create_template_notification(sTypeParam: unknown, iObjectIDParam: unknown, sSubjectParam: unknown, sBodyParam: unknown, oObjectParam?: unknown, teSourceParam?: unknown, iObjectSecondIDParam?: unknown): unknown;
  function send_notification(iActiveNotificationIDParam: unknown): unknown;
  function save_certificate(_learning_id: unknown): unknown;
  function random_string(_digit_num: unknown, _dict?: unknown): unknown;
  function import_excel_persons(sParamsXml: unknown): unknown;
  function start_import_excel_persons(Ps: unknown): unknown;
  function get_sub_boss_by_person_id(_person_id: unknown, personDocument: CollaboratorDocument): unknown;
  function get_main_boss_by_person_id(_person_id: unknown): unknown;
  function get_web_str(sNameParam: unknown): unknown;
  function is_boss(iUserIDParam: unknown, iPersonIDParam: unknown): unknown;
  function is_user_boss(managerId: number, userId: number, _catalog_names?: unknown, vBossType?: unknown): unknown;
  function is_self_cur_user(iUserIDParam: unknown): unknown;
  function is_boss_by_subdivision_id(_sub_id: unknown): unknown;
  function is_by_position_id(_position_id: unknown): unknown;
  function is_by_group_id(groupId: number): unknown;
  function is_statement_date(iActivityIDParam: unknown, sValueParam: unknown, sUslParam: unknown): unknown;
  function object_filling(_type: unknown, _source: unknown, _object_id: unknown, _object_doc: unknown): unknown;
  function common_filling(type: string, sourceDoc: unknown, objectId: number, objectDoc?: XmlTopElem, customFlag?: boolean): void;
  function common_clear(_type: unknown, _source: unknown, _ps: unknown): unknown;
  function active_test_learning_finish_link(activeLearningID: unknown, learningID: unknown, teLearning: unknown, teAssessment: unknown): unknown;
  function core_decrypt(_core: unknown, _qti_path: unknown, _qti_text: unknown, _learning_doc: unknown): unknown;
  function get_annals_from_core(sSourceParam: unknown): unknown;
  function get_annals_text_from_annals(fldAnnalsParam: unknown): unknown;
  function get_qti_path(oSource: unknown, fldPartParam: unknown): unknown;
  function report_decrypt(_source: unknown, _qti_path: unknown, _qti_text: unknown): unknown;
  function fill_annals_timings(fldTarget: unknown, fldSource: unknown): unknown;
  function get_data_answers(fldDataItem: unknown): unknown;
  function get_item_points(fldQuestion: unknown): unknown;
  function fill_annals_text(fldAnnalsObjectsTarget: unknown, sQtiPathParam: unknown, sQtiTextParam: unknown, fldAnnalsObjectsSource: unknown, bNoSendCorrectAnswerParam: unknown): unknown;
  function get_annals_text(_annals: unknown, _qti_path: unknown, _qti_text: unknown, _learning_doc: unknown, oAnnalsTarget: unknown): unknown;
  function close_request(_request_id: unknown): unknown;
  function workflow_action_process(_source: unknown, _action_code: unknown, _workflow_id: unknown, _workflow_doc: unknown, _alterCurObjectID: unknown, dConditionProcess: unknown): unknown;
  function obtain_lists(_url: unknown, _list_name: unknown): unknown;
  function event_finish(eventId: number, eventDocument?: EventDocument): unknown;
  function event_start(eventId: number, eventDocument: EventDocument, oScreenParam: unknown): unknown;
  function get_object_form_url(sCatalogNameParam: unknown, bIsCatalogParam: unknown): unknown;
  function get_screen_form_url(sCatalogNameParam: unknown): unknown;
  function create_package(_pak_url: unknown, _report_id: unknown, _param_source: unknown, sPackIDParam: unknown): unknown;
  function create_list_package(sResultUrlParam: unknown, fldPackage: unknown): unknown;
  function get_doc_by_key<T = XmlDocument>(catalog: string, key: string, value: string | number): T | null;
  function obtain_doc_by_key(sObjectNameParam: unknown, oKeyParam: unknown, oKeyValueParam: unknown): unknown;
  function get_seconds_from_duration(duration: number): unknown;
  function assessment_filling_from_qti(_assessment_id: unknown, _source: unknown, _qti_text: unknown): unknown;
  function submit_subscriptions(_document_id: unknown, documentDoc: unknown, iPersonIDParam: unknown): unknown;
  function create_filter_xquery(_conditions: unknown, _cond: unknown, _elem_name: unknown): unknown;
  function create_filter_javascript(_conditions: unknown, _first_cond: unknown, _elem_name: unknown): unknown;
  function obtain_custom_templates(_url: unknown, _source: unknown): unknown;
  function obtain_access_roles(_url: unknown, _list: unknown): unknown;
  function import_course(_file: unknown): unknown;
  function process_skk(_inst_flag: unknown): unknown;
  function get_version(_type: unknown, bDateFlag: unknown): unknown;
  function get_custom_template(_catalog: string, _top_id?: unknown, _source?: unknown): unknown;
  function set_web_ban(_person_id: unknown, _status: unknown, _source: unknown, _check_admin: unknown): unknown;
  function disp_block_filling_by_source(_source: unknown, _disp_block: unknown, _disp_object_blocks: unknown, _source_id: unknown): unknown;
  function disp_block_filling(_source: unknown, _disp_block: unknown): unknown;
  function get_order_query(sOrderParam: unknown, sDirParam: unknown): unknown;
  function create_xquery(_catalog_name: unknown, _xquery_qual: unknown, _filter_xquery: unknown, _ft_filter: unknown, _order_str: unknown, _order_dir: unknown, _is_hier: unknown, _foreign_field: unknown, oColumnsParam: unknown): unknown;
  function request_processing(iRequestID: unknown, docRequest: unknown): unknown;
  function update_object_versions(docVersion: unknown, iVersionID: unknown, docObject: unknown, iPersonID: unknown, tePerson: unknown, sComment: unknown): unknown;
  function update_adding_objects(docObject: unknown, iObjectID: unknown): unknown;
  function request_rejecting(objectId: number, objectDocument: RequestDocument, personId?: number, isSave?: boolean): unknown;
  function del_person_from_event(_person_id: unknown, eventId: number, _doc_event?: unknown, _flag_save?: unknown): unknown;
  function encrypt_content(iCourseIDParam: unknown): unknown;
  function create_license(iLicenseId: unknown): unknown;
  function create_license_complete(sTempDirectoryUrl: unknown): unknown;
  function recovery_empty_lng_const(_lng_id: unknown, _source: unknown): unknown;
  function import_pwt_data_xml(_xml: unknown, _user_id: unknown, _report_id: unknown, _file_url: unknown, sUserAgentParam: unknown): unknown;
  function decript_pwt_data_str(_str: unknown): unknown;
  function update_course_parts_structure(_learning_id: unknown, _course_doc: unknown, _doc_learning: unknown): unknown;
  function get_direct_sub_person_ids(iUserId: unknown): unknown;
  function get_sub_person_ids_by_subdivision_id(_subdivision_id: unknown, sConditionsParam: unknown): unknown;
  function get_sub_persons_by_subdivision_id(_subdivision_id: unknown, sConditionsParam: unknown): unknown;
  function get_sub_person_ids_by_func_manager_id(_manager_id: unknown, _catalog_names: unknown, vBossType: unknown, iLimitParam: unknown, sSearchParam: unknown): unknown;
  function get_sub_persons_by_func_manager_id(iManagerIDParam: unknown, sCatalogNamesParam: unknown, vBossType: unknown): unknown;
  function get_all_subs_by_func_manager_id(_manager_id: unknown): unknown;
  function eval_code_page_url(_url: unknown, _doc_id: unknown, _rnd_id: unknown): unknown;
  function update_filter_conditions(_source_conditions: unknown, _catalog_name: unknown, _scheme_id: unknown, _set_flag: unknown): unknown;
  function check_cur_user_admin_access(teObjectParam: unknown, curUser: unknown, fldAccessCalalogParam: unknown): unknown;
  function build_condition_eval_str(_conditions: unknown, iWorkflowIDParam: unknown, teWorkflowParam: unknown): unknown;
  function update_document_persons(_obj_id: unknown, _obj_doc: unknown): unknown;
  function get_period_from_iso(_period: unknown): unknown;
  function get_notification_document(oDocumentParam: unknown): unknown;
  function get_cost_center_id_by_person_id(_person_id: unknown, personDocument: CollaboratorDocument): unknown;
  function get_cost_center_boss_by_person_id(_person_id: unknown, personDocument: CollaboratorDocument): unknown;
  function get_sub_boss_by_sub_id(_sub_id: unknown): unknown;
  function get_time(_str: unknown, _minite_flag: unknown, _second_flag: unknown): unknown;
  function enable_log_web_request(_flag: unknown): unknown;
  function get_field_title(_field: unknown, curLngWeb: unknown): unknown;
  function fill_field_names(FIELD_NAMES: unknown, FORM: unknown, ISCATALOG: unknown, EVALPATH: unknown, PRETITLE: unknown, CUSTOMFIELDSTYPEID: unknown): unknown;
  function DateFunc(SRC1: unknown, SRC2: unknown, EVALSTR: unknown, PARAM1: unknown, PARAM2: unknown, PARAM3: unknown): unknown;
  function get_report_storage_field(sDatatype: unknown): unknown;
  function build_report_remote(REPORT_ID: unknown, PS: unknown, docReportParam: unknown, sLngSHORT: unknown, bMetaOnly: unknown): unknown;
  function get_sub_hierarchy(NODE_ID: unknown, NODE_CATALOG: unknown, NODE_PARENT_FIELD: unknown): unknown;
  function process_print_form(oFormParam: unknown, iTopElemParam: unknown, bReturnFilename: unknown): unknown;
  function get_user_boss(OBJECT: unknown): unknown;
  function path_subs_filling(_path_subs: unknown, _person_id: unknown, personDocument: CollaboratorDocument): unknown;
  function str_time_from_mseconds(_mseconds: unknown): unknown;
  function person_list_staff_by_person_id(_personID: unknown, _personDoc: unknown, _depth: unknown, _top: unknown, _separator: unknown): unknown;
  function check_field_name(FIELD: unknown, IS_STRICT_BEGIN: unknown): unknown;
  function get_doc_type_xmds(iDocTypeIDParam: unknown, teDocTypeParam: unknown): unknown;
  function generate_doc_type_xmds(DOC_TOPELEM: unknown, DOC_ID: unknown): unknown;
  function register_doc_type(docDocTypePARAM: unknown, iDocIDParam: unknown): unknown;
  function create_certificate_to_event(_even_id: unknown, _type_id: unknown, _doc_event: unknown): unknown;
  function create_certificate_to_person(_person_id: unknown, _type_id: unknown, eventId: number, personDocument: CollaboratorDocument, _type_doc: unknown, eventDocument: EventDocument): unknown;
  function get_main_forum_entry_by_forum_entry_id(iForumEntryParam: unknown, teForumEntryParam: unknown): unknown;

  /**
   * Назначение квалификации.
   * @param {number} personId - Id сотрудника.
   * @param {number} eventId - Id мероприятия.
   * @param {number} qualificationId - Id квалификации.
   * @param {Date} assignmentDate - Дата присвоения квалификации.
   * @param {Date} expirationDate - Дата истечения квалификации.
   * @param {number[]} testLearnings - Массив законченных тестов сотрудника из параметра 1, которые будут записаны в карточку присвоения квалификации.
   * @param {number[]} learnings - Массив законченных электронных курсов сотрудника из параметра 1, которые будут записаны в карточку присвоения квалификации.
   * @param {number} sendMail - Числовое значение `0/1` – не отправлять/отправлять уведомление сотруднику о присвоении квалификации.
   * @param {number} inProcess - Числовое значение `0/1` – не присвоена/в процессе (`in_process`, если не передан, то по умолчанию = 0).
   * @param {boolean} assignTests - Булевое значение назначать/не назначать тесты сотруднику присвоенной квалификации, если она в статусе `В процессе`.
   * @param {boolean} assignCourses - Булевое значение назначать/не назначать курсы сотруднику присвоенной квалификации, если она в статусе `В процессе`.
   * @param {boolean} unconditionalAssignment - Булевое значение, если `false` и в статусе `В процессе` и не заданы или равны `[]` параметры `6` и `7` – будет проверять прохождение всех испытаний квалификации.
   * @param {QualificationAssignmentDocument} qualificationAssignmentDocument - Документ присвоенной квалификации, меняется статус квалификации в зависимости от параметра `9`.
   * @param {QualificationDocumentTopElem} qualificationDocumentTopElem - XmlTopElem квалификации.
   * @param {CollaboratorDocumentTopElem} collaboratorDocumentTopElem - XmlTopElem сотрудника, передается в параметрах функции при назначении теста/курса сотруднику.
   * @param {boolean} givePoint - Начислять баллы квалификации (вкладка `Бонус`), `true`, если присвоение происходит из контекстного меню интерфейса администратора.
   */
  function assign_qualification_to_person(
    personId: number,
    eventId: number | undefined | null,
    qualificationId: number,
    assignmentDate: Date | undefined | null,
    expirationDate: Date | undefined | null,
    testLearnings: number[] | undefined | null,
    learnings: number[] | undefined | null,
    sendMail: number,
    inProcess: number,
    assignTests: boolean,
    assignCourses: boolean,
    unconditionalAssignment: boolean,
    qualificationAssignmentDocument: QualificationAssignmentDocument | null,
    qualificationDocumentTopElem: QualificationDocumentTopElem | undefined | null,
    collaboratorDocumentTopElem: CollaboratorDocumentTopElem | null,
    givePoint: boolean
  ): null | QualificationAssignmentDocument;

  function assign_qualification_to_event(_even_id: unknown, _doc_event: unknown, _qualification_id: unknown, _date: unknown): unknown;
  function save_custom_ui_form(TEMPLATE: unknown): unknown;
  function get_custom_document_form(CATALOG_NAME: unknown): unknown;
  function get_custom_document_data_form_url(sCatalogNameParam: unknown): unknown;
  function knowledge_part_path_by_knowledge_part_id(_knowledge_partID: unknown, _knowledge_partDoc: unknown, _depth: unknown, _top: unknown, _separator: unknown): unknown;
  function get_func_manager_substitution(arrFuncManagerParam: unknown, oParams: unknown): unknown;
  function get_uni_user_bosses(objectParam: unknown, oParams: unknown): unknown;
  function get_uni_user_boss(objectParam: unknown, oParams: unknown): unknown;
  function workflow_escalation_process(_source: unknown, _escalation_code: unknown, _workflow_id: unknown, _workflow_doc: unknown, _alterCurObjectID: unknown): unknown;
  function get_user_comp_profiles(objectParam: unknown): unknown;
  function get_package_log(sUrlPackageParam: unknown, oParam: unknown): unknown;
  function package_log_filling(fldPackageTarget: unknown, fldSourceParam: unknown): unknown;
  function wvars_to_script(listWVarsPARAM: unknown, bWarily: unknown): unknown;
  function wvars_to_object(listWVarsPARAM: unknown): unknown;
  function copy_directory(sSourceDirPARAM: unknown, sDestDirPARAM: unknown): unknown;
  function send_event_notifications(eventId: number, _doc_event: unknown, send_type: unknown): unknown;
  function create_object_version(oDocParam: unknown): unknown;
  function get_mandatory_learnings(iPersonIDParam: unknown, iObjectIDParam: unknown, tePersonParam: unknown, teObjectParam: unknown): unknown;
  function get_relative_boss_types(objectParam: unknown, oPersonParam: unknown): unknown;
  function get_relative_operations(oManagerParam: unknown): unknown;
  function check_relative_operation(oManagerParam: unknown, oOperationParam: unknown): unknown;

  /**
   * Возвращает массив из каталожных записей типов функциональных руководителей (boss_types),
   * соответствующих указанному объекту и указанному пользователю.
   * Например, если выбран объект – определенное мероприятие – и пользователь – руководитель отдела,
   * который сам участвовали в данном мероприятии, то типы руководителя могут быть следующими:
   * «Участник мероприятия», «Руководитель участника мероприятия».
   * Если выбран объект – сотрудник отдела – и пользователь – руководитель отдела,
   * в котором работает указанный сотрудник, то типы руководителя могут быть следующими:
   * «Непосредственный руководитель», «Руководитель обучения» и т.д.
   * @param {number} iUserIDParam - (обязательный) Тип: Целое число. ID сотрудника, для которого нужно определить список типов функциональных руководителей.
   * @param {number} iObjectIDParam - (обязательный) Тип: Целое число. ID объекта, относительно которого нужно определить список типов функциональных руководителей.
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
  function get_object_relative_boss_types(iUserIDParam: number, iObjectIDParam: number): unknown;

  function get_relative_operations_by_boss_types(arrBossTypesParam: unknown, sCatalogNameParam?: unknown): unknown;
  function get_object_relative_operations(iUserIDParam: unknown, iObjectIDParam: unknown, sCatalogNameParam: unknown): unknown;
  function check_operation_rights(arrOperationsParam: unknown, teCurUserParam: unknown, sActionParam: unknown): unknown;
  function extend_object(oObjectRecipient: unknown, oObjectSource: unknown): unknown;
  function assign_elems(fldTarget: unknown, fldSourceParam: unknown, arrFieldNamesParam: unknown): unknown;
  function assign_elems_exclude(fldTarget: unknown, fldSourceParam: unknown, arrFieldNamesParam: unknown): unknown;
  function get_foreign_field(fldForeignFieldParam: unknown, sFieldParam: unknown, sErrTextParam: unknown): unknown;
  function get_user_by_login(Login: unknown, AuthType: unknown): unknown;
  function set_form_last_seved_data(sCatalogNameParam: unknown, bValueParam: unknown): unknown;
  function get_knowledge_parts_by_person_id(person_id: unknown): unknown;
  function get_experts_by_person_id(person_id: unknown): unknown;
  function get_object_name_field_value(oObjectParam: unknown): unknown;
  function copy_url(sDestDirPARAM: unknown, sSourceDirPARAM: unknown): unknown;
  function zip_extract(sourcePath: string, destinationPath: string): unknown;
  function zip_create(sArchivePathPARAM: unknown, sContentPathPARAM: unknown, sContentDirPathPARAM: unknown): unknown;
  function register_doc_types_catalog_by_serialized_str(sSerializedCatalogsToRegPARAM: unknown, bServerCheck: unknown): unknown;
  function register_doc_types_catalog(aCatalogsToRegPARAM: unknown, bServerCheck: unknown): unknown;
  function get_disp_name_value(oObjectParam: unknown): unknown;
  function read_selected_date(sSomeObjectPARAM: unknown): unknown;
  function get_sum_sid(sIdParam: unknown): unknown;
  function check_sum_sid(sIdParam: unknown, sSumParam: unknown): unknown;
  function recommend_library_material_to_person(iPersonIDParam: unknown, iMaterialIDParam: unknown, tePersonParam: unknown, teMaterialParam: unknown, bSendNotificationParam: unknown, iEducationPlanID: unknown): unknown;
  function opt_date(oDateParam: unknown, oDefaultParam: unknown): unknown;
  function beautify_file_size(bytes: number, addUnit?: boolean): string;
  function get_ft_value(sValueParam: unknown): unknown;
  function set_tenancy_by_host(sTenancyNameParam: unknown): unknown;
  function get_agent_command_queue_xml(iServerAgentIDParam: unknown, sElementIDParam: unknown, sElemsIDParam: unknown, dDateParam: unknown, sTenancyNameParam: unknown): unknown;
  function get_uid_cached_doc(sUIDParam: unknown, sUrlParam: unknown): unknown;
  function check_and_refresh_cached_docs(sUrlParam: unknown): unknown;
  function log(sTextParam: unknown, sMessageTypeParam: unknown, bShowAdditionalInfoParam: unknown): unknown;
  function get_sibscriber_subscriptions(iPersonIDParam: unknown, sMessageTypeParam: unknown, bShowAdditionalInfoParam: unknown): unknown;
  function file_url_exists(sFilePathParam: unknown): unknown;
  function file_url_exists_server(sFilePathParam: unknown): unknown;
  function load_url_text_server(sFilePathParam: unknown): unknown;
  function load_url_data_server(sFilePathParam: unknown, iSizeParam: unknown): unknown;
  function read_directory_server(sFilePathParam: unknown, bDirParam: unknown): unknown;
  function delete_directory_server(sDirParam: unknown): unknown;
  function zip_extract_server(sSourceUrlParam: unknown, sTargetUrlParam: unknown): unknown;
  function delete_trash_url_server(sUrlParam: unknown): unknown;
  function alert_server(sMessageParam: unknown): unknown;
  function log_event_server(sTypeParam: unknown, sTextParam: unknown): unknown;
  function replace_cached_doc_server(sUrlParam: unknown): unknown;
  function copy_url_server(sDestUrlParam: unknown, sSourceUrlParam: unknown): unknown;
  function url_file_size_server(sUrlParam: unknown): unknown;
  function put_url_text_server(sUrlParam: unknown, sTextParam: unknown): unknown;
  function load_share_url_server(sUrlParam: unknown): unknown;
  function get_hash_server(sTextParam: unknown, sTypeParam: unknown): unknown;
  function sync_catalog(catalogName: unknown): unknown;
  function update_commons_event_types(bUpdateServersParam: unknown, oTarget: unknown): unknown;
  function DigitalVerifyDoc(iDocIDParam: unknown): unknown;
  function DigitalVerify(strTextParam: unknown, strSignatureParam: unknown): unknown;
  function process_custom_packs(arrAddPacksParam: unknown): unknown;
  function check_resource_size(iFileSizeParam: unknown, iPersonIDParam: unknown,): unknown;
  function include_person_to_personnel_reserve_position(iPersonIdParam: unknown, teRequestParam: unknown, iCareerReserveTypeIdParam: unknown, iPositionIdParam: unknown, strStateParam: unknown, iPositionCommonIdParam: unknown, sIncludeDateParam: unknown): unknown;
  function extract_bfields_by_list(fldSPXML: unknown, sFieldList: unknown, bNoValidation: unknown): unknown;
  function get_opened_doc(teObjectParam: unknown): unknown;
  function set_project_participant_type(iProjectParticipantIDParam: unknown, docProjectParticipantParam: unknown, iBossTypeIDParam: unknown): unknown;
  function create_project_participant(iObjectIDParam: unknown, teObjectParam: unknown, iProjectIDParam: unknown): unknown;
  function set_profile_log(sIDParam: unknown, Request: unknown, sTypeParam: unknown): unknown;
  function clear_good_instance_status(oSourceGoodInstance: unknown): unknown;
  function get_form_upload_data(sIDParam: unknown): unknown;
  function set_field_to_form_upload_data(fldFormTarget: unknown, fldObjParam: unknown, oObjIDParam: unknown, bInvariableParam: unknown): unknown;
  function get_default_object_id(sCatalogNameParam: string, sTypeParam?: string, teObjectParam?: object): unknown;
  function get_notification_system(oParam: unknown): unknown;
  function call_notification_system_method(oParam: unknown, sMethodNameParam: unknown, oArrParam: unknown): unknown;
  function create_tenancy_entry(sHost: unknown,): unknown;
  function add_tenancy_host(sTenancyCode: unknown, sNewHost: unknown): unknown;
  function copy_tenancy(sSourceCode: unknown, sDestinationTenancyCode: unknown,): unknown;
  function delete_tenancy(sTenancyCode: unknown): unknown;
  function delete_tenancy_host(sTenancyCode: unknown, sHostToDelete: unknown): unknown;
  function delete_tenancy_object(oTenancy: unknown): unknown;
  function disable_tenancy(sTenancyCode: unknown): unknown;
  function enable_tenancy(sTenancyCode: unknown): unknown;
  function add_tenancy_storage(sTenancyHost: unknown, sAccountName: unknown, sAccountKey: unknown): unknown;
  function set_thread_tenancy(sTenancyNameParam: unknown): unknown;
  function is_disable_tenancy(sHostName: unknown): unknown;
  function set_event_type_id(ftTarget: unknown, sEventTypeParam: unknown): unknown;
  function wait_script_queue(iScriptIdParam: unknown, bDeleteScript: unknown): unknown;
  function open_course_version(iCourseIdParam: unknown, sBaseUrlParam: unknown): unknown;
  function evalReplace(strEvalParam: unknown): unknown;
  function get_xhttp_ini(sIniVarName: unknown): unknown;
  function resource_pic_envelope(sMode: unknown, vParam1: unknown, vParam2: unknown, vParam3: unknown, vParam4: unknown): unknown;
  function file_source_get_upload_file_url(iFileSourceIdParam: unknown, sFileNameParam: unknown): unknown;
  function file_source_upload_file(iFileSourceIdParam: unknown, sFileUrlParam: unknown, sTempFileUrlParam: unknown): unknown;
  function file_source_get_file_to_save_url(iFileSourceIdParam: unknown, iResourceIdParam: unknown, sUidPARAM: unknown): unknown;
  function file_source_get_files_list(iFileSourceIdParam: unknown): unknown;
  function file_source_download_file(iFileSourceIdParam: unknown, sUidPARAM: unknown, oRequestPARAM: unknown, oResponsePARAM: unknown): unknown;
  function file_source_get_file_url(iFileSourceIdParam: unknown, sUidPARAM: unknown): unknown;
  function call_webinar_system_method(iWebinarSystemIdParam: unknown, sMethodNameParam: unknown, oParams: unknown): unknown;
  function call_library_system_method(iLibrarySystemIdParam: unknown, sMethodNameParam: unknown, oParams: unknown): unknown;
  function calculate_statistic_rec(iStatisticRecId: unknown, iObjectIdParam: unknown, bIgnorePeriodSettingsParam: unknown, bCalculateCatalogsParam: unknown): unknown;
  function get_statistic_data(iStatisticRecId: unknown, iObjectIdParam: unknown, sPeriodTypeParam: unknown, dDateStartParam: unknown, dDateEndParam: unknown): unknown;
  function obtain_statistic_data(StatisticRec: unknown, iObjectIdParam: unknown, sPeriodTypeParam: unknown, dDateStartParam: unknown, dDateEndParam: unknown, bVirtual: unknown, bForceRedo: unknown): unknown;
  function assign_from_object(fldTarget: unknown, oSourceParam: unknown): unknown;
  function filling_learning_parts(TopElem: unknown): unknown;
  function parse_email_address(sAddressParam: unknown): unknown;
  function safe_execution(sCodeSaveExecutionParam: unknown, oEnvParam?: unknown): unknown;
  function get_content_access(iPersonID: unknown, tePerson: unknown): unknown;
  function update_content_access(idOrTE_UserPARAM: unknown, sCatalogPARAM: unknown, idOrTE_ObjectID: unknown, bCanEditPARAM: unknown, bCanDeletePARAM: unknown): unknown;
  function set_default_content(teContentPARAM: unknown, teSubjectPARAM: unknown): unknown;
  function set_upgrade_locked(bParam: unknown): unknown;

  /**
   * Возвращает объект библиотеки.
   * @param {ObjectAssemblyLibraryType} libraryName - Название библиотеки.
   */
  function get_object_assembly<T>(libraryName: ObjectAssemblyLibraryType): T;

  function create_committee_member(iObjectIDParam: unknown, teObjectParam: unknown, iPersonnelCommitteeIDParam: unknown, strCommitteeMemberTypeParam: unknown): unknown;
  function activate_poll_to_person(personId: unknown, oPollID: unknown, iPollProcedureID: unknown, iEducationPlanID: unknown): unknown;
  function delete_poll_result(oPollResultParam: unknown, tePollParam: unknown): unknown;
  function array_opt_find_by_key(arrParam: unknown, sKeyParam: unknown, oValueParam: unknown): unknown;
  function check_periodity(fldPeriodityParam: unknown, _cur_date: unknown, iSleepSecParam: unknown): unknown;
  function upload_begin(sUrlParam: unknown, iLenghtParam: unknown): unknown;
  function upload_range(sIDParam: unknown, iStartIndexParam: unknown, iFinishIndexParam: unknown, sDataParam: unknown): unknown;
  function upload_end(sIDParam: unknown): unknown;
  function is_simple_array_field(fldParam: unknown): unknown;
  function restore_doc(iObjectIDParam: unknown): unknown;
  function ValidateName(str: unknown, is_var: unknown): unknown;
  function check_event_fields(iEventID: unknown, docEvent: unknown, teEvent: unknown): unknown;
  function call_code_library_method(oLibraryParam: unknown, sMethodNameParam: unknown, arrParams: unknown): unknown;
  function get_code_library_error_message(oLibResParam: unknown, oEnvParam: unknown): unknown;
  function get_code_library_result_object(oLibResParam: unknown, oEnvParam: unknown): unknown;
  function amgr_cancel_agent(roleUID: unknown, threadID: unknown): unknown;
  function amgr_kill_role(nodeId: unknown, roleUID: unknown): unknown;
  function get_doc_desc(teObjectParam: unknown): unknown;
  function get_client_data(sLogin: unknown, sPassword: unknown): unknown;
  function get_webinar_conversation_participants(iWebinarSystemId: unknown): unknown;
  function add_object_to_package(docObject: unknown, iObjectID: unknown, Screen: unknown, fldPackage: unknown): unknown;

  /**
   * Преобразование данных (https://news.websoft.ru/_wt/wiki_base/6809298370262485009/base_wiki_article_type_id/6680054725638828770)
   * В данный раздел включены все функции библиотеки Tools, связанные с преобразованием данных, в алфавитном порядке, кроме устаревших.
   */

  /**
   * Преобразует строку вида `+7-903-508-20-45` или `+7(903)508-20-45` в строку `79035082045 5082045`. Функция используется для унификации поиска по телефонным номерам.
   * @param {string} strPhoneParam - Исходная строка для преобразования.
   * @returns Преобразованная строка или значение `null`, если произошла ошибка.
   *
   * @example
   * // returns 79035082045 5082045
   * tools.build_phone("+7-903-508-20-45");
   */
  function build_phone(strPhoneParam: string): string | null;

  /**
   * Заменяет в строке пробел, «(» , «)», «+» и «-» на пустую сроку, а символы «,» и «;» - на пробел.
   * @param {string} strPhoneParam - Исходная строка для преобразования.
   * @returns Преобразованная строка или значение `null`, если произошла ошибка.
   *
   * @example
   * // returns 79035082045
   * tools.build_simple_phone("+7-903-508-20-45");
   */
  function build_simple_phone(strPhoneParam: string): string | null;

  /**
   * Функция выявляет домен и логин почтового адреса из электронного сообщения в стандарте X.400 и возвращает строку вида login@domainтекст_письма.
   * @param {string} _x40_email - Строка электронного сообщения в стандарте X.400, из которого выделяется домен и логин электронного адреса.
   * @param {string} _end_mail - Строковое выражение, содержащее текст письма, который будет добавлен к login@domain.
   * @returns Строковое выражение вида login@domainтекст_письма.
   */
  function convert_email_from_x40(_x40_email: string, _end_mail: string): string;

  /**
   * Прообразовывает содержание строки для сохранения в теге <desc> ... </desc>. Предназначено для преобразования тегов и ссылок на файлы в описании.
   * @param {string} _desc - Строка для преобразования.
   * @param {string} _temp_dir - Строчное выражение пути до папки с файлами, указанными в теге.
   * @returns Преобразованная строка. Результат действия функции.
   */
  function desc_cleanup(_desc: string, _temp_dir?: string): string;

  /**
   * Преобразовывает html-файл, переданный в функцию, в файл в формате pdf и сохраняет его по указанному пути.
   * Примечание – Если указанный файл уже существует в файловой системе, то он перезаписывается без выдачи предупреждения.
   * Если файл открыт в другой программе, то выдается ошибка с прерыванием выполняемого кода: «Процесс не может получить доступ к файлу…,
   * так как этот файл используется другим процессом.».
   * @param {string} sHtmlText - Строка с html для преобразования.
   * @param {string} sResourcesDirPath - Путь до папки с ресурсами (изображения, стили и т.д.), которые используются в html. При отсутствии таких ресурсов указывается пустая строка ('').
   * @param {string} sOutFilePath - Путь до файла, в который будет сохранен полученный файл pdf.
   * @returns Возвращает значение `true`, если преобразование завершилось успешно, или `false` - в противном случае.
   *
   * @example
   * // returns true
   * tools.html_to_pdf(_str, "", UrlToFilePath(_filename));
   */
  function html_to_pdf(sHtmlText: string, sResourcesDirPath: string, sOutFilePath: string): boolean;

  /**
   * Преобразует массив или объект в строку указанного формата (json, xml).
   * @param {object | unknown[]} _aDataPARAM - Массив array или объект (object) для преобразования.
   * @param { string }[_sName=null] - Необязательный по умолчанию null. Если не null, то параметр указывает название тега (для XML) или свойства (json), в который будут заключены данные, полученные из _aDataPARAM.
   * @param { boolean } [_bObj=false] - Флаг true – преобразуется объект, false – преобразуется массив.
   * @param { string } [_sFormatPARAM=xml] - По умолчанию XML. Возможны два значения (json, xml). Задает формат возвращаемой строки.
   * @returns Строка, полученная из массива или объекта.
   *
   * @example
   * tools.merge_text_array(_aPairs, (_sFormatPARAM == "json" ? null: _sNamePARAM), false, _sFormatPARAM);
   */
  function merge_text_array(_aDataPARAM: Object | unknown[], _sName?: string, _bObj?: boolean, _sFormatPARAM?: string): string;

  /**
   * Сериализация объекта в строку/xml.
   * @param {T} arg - Объект для преобразования.
   * @param { string }[formatType=xml] - По умолчанию XML. Возможны два значения (json, xml). Задает формат возвращаемой строки.
   * @param { number } [maxDepth=0] - По умолчанию 0. Глубина дочерних свойств объекта, до которой можно спускаться. Должна быть не больше 5.
   * @param { stirng } [_sName=null] - Параметр указывает название тега (для XML), в который будут заключены данные, полученные из _vObjectPARAM. По умолчанию <value></value>.
   * @returns Строка, полученная из объекта.
   *
   * @example
   * tools.object_to_text(RESULT,'json')
   *
   * @example
   * tools.object_to_text(_vValue, _sFormatPARAM, iDepth + 1, _sName);
   */
  function object_to_text<T>(arg: T, formatType: string, maxDepth?: number, _sName?: string): string;

  /**
   * Возвращает сроку с тегами XML, полученную из файла путь до которого, передан в параметрах функции. Вызывает функцию tools.open_str_win_ini для разбора файла.
   * @param {string} sUrlParam - Строка с путем до файла.
   * @returns Строка с путем до файла.
   */
  function open_doc_win_ini(sUrlParam: string): string;

  /**
   * Возвращает сроку с тегами XML, полученную из строки, переданной в параметрах функции. Предполагается, что в функцию передается файл со значениями параметров, потому в результирующей строке будут представлены название параметра и его значение.
   * @param {string} sFileText - Строка для разбора.
   * @returns Строка с тегами XML.
   *
   * @example
   * tools.open_str_win_ini(LoadUrlText(sUrlParam));
   */
  function open_str_win_ini(sFileText: string): string;

  /**
   * Преобразует строку в объект. Например, строку в формате json в объект. Или строку, содержащую XML, в объект.
   * @param {string} value - Строка в формате json или строка, содержащая XML.
   * @returns Возвращаемый результат – полученный объекта (object).
   * @example
   * ```
   * tools.read_object(call_method("getSaveFileUrl", oParam, "json"));
   * tools.read_object(sResult);
   * ```
   */
  function read_object<T>(value: string): T;

  /**
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
   * @param {string} _str - Стока для преобразования.
   * @param {Date} _date - Дата, данные из которой берутся для замены символов в строке, по умолчанию текущая дата и время.
   *
   * @example
   * tools.replace_temlate_tags(_source.db_path);
   */
  function replace_temlate_tags(_str: string, _date?: Date): string;

  /**
   * Преобразует в строку числовой параметр функции. Если параметр отрицательный, то строка будет начинаться со знака «-».
   * @param {number} iNumberParam - Число для преобразования в строку.
   * @returns Строка.
   *
   * @example
   * tools.str_negative_number(TopElem.weight);
   */
  function str_negative_number(iNumberParam: number): string;
}
