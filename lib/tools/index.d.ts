declare namespace tools {
  /**
   * Назначение курса участникам указанного мероприятия.
   * @param {number} eventId - Id мероприятия, для участников которого назначается курс.
   * @param {number} courseId - Id курса, который необходимо назначить.
   * @param {EventDocument} eventDocument - Документ карточки мероприятия.
   * @param {number} duration - Длительность курса в днях. Определяет дату планируемого завершения.
   * @param {Date} startLearningDate - Дата начала обучения. Если данный аргумент задан,
   * то обучение невозможно будет начать раньше указанной даты.
   * @param {Date} testLearningDate - Контрольная дата завершения предыдущего обучения.
   * Если параметр задан, то при назначении курса, проверяется,
   * существует ли в каталоге learnings курс, завершенный после указанной даты.
   * Если такой курс существует, то соответствующая запись из каталога
   * learnings возвращается как результат работы функции.
   * @returns {number} Количество назначенных курсов.
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
   * @param {Date} startLearningDate - Дата начала обучения. Если данный аргумент задан,
   * то обучение невозможно будет начать раньше указанной даты.
   * @param {Date} lastLearningDate - Контрольная дата завершения предыдущего обучения.
   * Если параметр задан, то при назначении курса, проверяется,
   * существует ли в каталоге learnings курс, завершенный после указанной даты.
   * Если такой курс существует, то Id соответствующей записи из каталога
   * learnings возвращается как результат работы функции.
   * @param {number} groupId - Id группы, которой назначен курс.
   * @param {unknown} eid - Код записи в каталоге active_learnings.
   * Если он указан, то при назначении курса,
   * когда производится проверка на уже существующий активный курс
   * данного сотрудника в каталоге active_learnings, проверяется также,
   * что у данной записи должен быть указанный в параметре код.
   * @param {boolean} skipDismissed - Аргумент, указывающий на необходимость пропускать уволенных
   * сотрудников (true – пропускать, false –не пропускать). По умолчанию true.
   * @returns {XmlElem<number> | null | ActiveLearningDocument}.
   * Если курс назначен при выполнении функции,
   * то возвращается ссылка на вновь созданный документ обучения.
   * Если курс был назначен ранее, но не завершен, или завершен,
   * но не прошло еще время, указанное в атрибуте dtLastLearningDateParam,
   * то возвращается Id карточки ранее назначенного курса (из каталога active_learning).
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
   * @returns {XmlElem<number> | null | ActiveLearningDocument}.
   * Если курс назначен при выполнении функции,
   * то возвращается ссылка на вновь созданный документ обучения.
   * Если курс был назначен ранее, но не завершен, или завершен,
   * но не прошло еще время, указанное в атрибуте dtLastLearningDateParam,
   * то возвращается Id карточки ранее назначенного курса (из каталога active_learning).
   */
  function activate_course_to_person(
    params: ActivateCourseToPersonObject
  ): XmlElem<number> | null | ActiveLearningDocument;

  /**
   * Назначение сотруднику курсов, которые указаны в учебных программах (с типом "Электронный курс"),
   * перечисленных в наборе программ. Если в наборе учебных программ указаны учебные программы,
   * содержащие дистанционное обучение (курсы), то эти курсы будут назначены сотруднику.
   * @param {number} personId - Id сотрудника, которому назначается набор учебных программ.
   * @param {number} educationProgramId - Id набора учебных программ.
   * @param {CollaboratorDocumentTopElem} collaboratorDocumentTopElem - TopElem карточки сотрудника,
   * которому назначается тест.
   * @param {EducationProgramDocumentTopElem} educationProgramDocumentTopElem - TopElem карточки набора
   * учебных программ.
   * @returns {number} Количество назначенных курсов в составе набора учебных программ.
   */
  function activate_education_program_to_person(
    personId: number,
    educationProgramId: number,
    collaboratorDocumentTopElem: CollaboratorDocumentTopElem,
    educationProgramDocumentTopElem: EducationProgramDocumentTopElem
  ): number;

  /**
   * Назначение теста участникам указанного мероприятия.
   * @param {number} eventId - Id мероприятия, участникам которого назначается тест.
   * @param {number} assessmentId - Id теста, который необходимо назначить.
   * @param {EventDocument} eventDocument - Документ карточки мероприятия.
   * @param {number} duration - Длительность теста в днях. Определяет дату планируемого завершения.
   * @param {Date} startLearningDate - Дата начала обучения. Если данный аргумент задан,
   * то обучение невозможно будет начать раньше указанной даты.
   * @param {Date} lastLearningDate - Контрольная дата завершения предыдущего обучения.
   * Если параметр задан, то при назначении теста проверяется, существует ли в каталоге test_learnings тест,
   * завершенный после указанной даты. Если такой тест существует, то Id соответствующей записи из
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
   * @returns {number} Количество назначенных тестов.
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
     * Id collaborator.
     */
    iPersonID: number;
    /**
     * Id test.
     */
    iAssessmentID: number;
    /**
     * Id мероприятия.
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
     * Id плана обучения.
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
   * @returns {XmlElem<number>|null|XmlDocument} Объект XMLDoc или Целое число.
   * Если тест назначен при выполнении функции, то возвращается ссылка на вновь созданный документ обучения.
   * Если тест был назначен ранее, но не завершен, или завершен,
   * но не прошло еще время, указанное в атрибуте dtLastLearningDateParam,
   * то возвращается Id карточки ранее назначенного теста (из каталога active_test_learning).
   */
  function activate_test_to_person(
    params: ActivateTestToPersonParams
  ): XmlElem<number> | null | ActiveTestLearningDocument;

  /**
   * Функция назначения теста пользователю.
   * @param {number} personId - Id пользователя.
   * @param {number} assessmentId - Id курса.
   * @param {number} eventId - Id мероприятия.
   * @param {CollaboratorDocumentTopElem} personDoc - Документ пользователя.
   * @param {AssessmentDocumentTopElem} assessmentDocument - Документ теста.
   * @param {null} eventDocument - Документ мероприятия.
   * @param {number} duration - Продолжительность тестирования.
   * @param {Date} startLearningDate - Дата начала тестирования.
   * @param {Date} lastLearningDate - Дата окончания тестирования.
   * @param {number} groupId - Id группы.
   * @param {number} educationPlanId - Id плана обучения.
   * @param {boolean} skipDismissed - Аргумент, указывающий на необходимость пропускать уволенных сотрудников.
   * (true – пропускать, false – не пропускать). По умолчанию true.
   * @returns {XmlElem<number>|null|XmlDocument} Объект XMLDoc или Целое число.
   * Если тест назначен при выполнении функции, то возвращается ссылка на вновь созданный документ обучения.
   * Если тест был назначен ранее, но не завершен, или завершен,
   * но не прошло еще время, указанное в атрибуте dtLastLearningDateParam,
   * то возвращается Id карточки ранее назначенного теста (из каталога active_test_learning).
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
   * @param {ActiveLearningDocumentTopElem} activeLearningDocumentTopElem - TopElem активного электронного курса,
   * который необходимо завершить.
   * @param {CourseDocumentTopElem} courseDocumentTopElem - TopElem электронного курса, который необходимо завершить.
   * @returns {number} Id нового завершенного курса.
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
   * @param {ActiveTestLearningDocumentTopElem} activeTestLearningDocumentTopElem - TopElem активного теста,
   * который необходимо завершить.
   * @param {AssessmentDocumentTopElem} assessmentDocumentTopElem - TopElem теста, который необходимо завершить.
   * @param {number} iPersonIDParam - Id сотрудника.
   * @param {boolean} bFinishTest - Флаг завершение теста.
   * @returns {TestLearningDocument} Документ завершенного теста.
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
   * @param {number} _learning_id - Id активного теста, попытку которого необходимо завершить.
   * @param {string} _learning_code - Код раздела теста, который нужно завершить.
   * @param {AssessmentDocument} _assessment_doc - `TopElem` теста, который необходимо завершить.
   * @param {boolean} _flag_create_learning - Возвращает значение, показывающее,
   * создавать или не создавать запись завершенного теста:
   * - `true` – создавать запись завершенного теста;
   * - `false` – не создавать запись.
   * @param {ActiveTestLearningDocument} docActiveLearning - Документ активного теста, который необходимо завершить.
   * @returns {boolean} Результат выполнения функции.
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
   * @returns {number} Количество обновленных констант.
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
   * @param {number} personId - Id сотрудника.
   * @param {number} assessmentAppraiseId - Id процедуры оценки, в которую нужно добавить сотрудника.
   * @param {CollaboratorDocument} personDocument - `TopElem` карточки сотрудника.
   * @param {AssessmentAppraiseDocument} assessmentAppraiseDocument - Документ процедуры оценки,
   * в которую нужно добавить сотрудника.
   * @returns {AssessmentAppraiseDocument} Измененный и сохраненный документ процедуры оценки.
   * @example
   * ```
   * tools.add_person_to_assessment_appraise ( iPersonID, iObjectID, null, docObject );
   * ```
   */
  function add_person_to_assessment_appraise(
    personId: number,
    assessmentAppraiseId: number,
    personDocument?: CollaboratorDocument,
    assessmentAppraiseDocument?: AssessmentAppraiseDocument
  ): AssessmentAppraiseDocument;

  /**
   * Добавляет участника в мероприятие.
   * @param {number} userId - Id сотрудника, добавляемого в мероприятие.
   * @param {number} eventId - Id мероприятия, в которое добавляется сотрудник.
   * @param {CollaboratorDocumentTopElem} userTopElem - `TopElem` сотрудника.
   * @param {EventDocument} eventDocument - Документ мероприятия.
   * @param {number} educationPlanId - Id плана обучения добавляемого сотрудника.
   * Если аргумент указан, то ссылка на план сохранится в результатах мероприятия сотрудника.
   * @param {number} requestPersonId - Id лица, подавшего заявку на добавление сотрудника в мероприятие.
   * Если аргумент указан, то ссылка на лицо, подавшее заявку, сохранится в результатах мероприятия сотрудника.
   * @param {number} requestId - Id заявки на включение сотрудника в состав участников мероприятия.
   * Если аргумент указан, то ссылка на заявку сохранится в результате мероприятия сотрудника.
   * @returns {EventDocument|null} Документ мероприятия, к которому добавлялся сотрудник
   * (если сотрудник ранее не был добавлен в данное мероприятие),
   * или `null` (если сотрудник ранее уже был добавлен).
   * @example
   * ```
   * docEvent = tools.add_person_to_event ( Int(sUserId), Int(sRoomId) );
   * tools.add_person_to_event(_source.TopElem.person_id, _source.TopElem.object_id, null, docObject);
   * tools.add_person_to_event(fldPersonElem.PrimaryKey, docEvent.DocID, null, docEvent, null, catRequest.PrimaryKey);
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
   * @param {number} actionReportId - Id события базы, к которому нужно добавить строку.
   * @param {string} text - Строка, которую нужно добавить к событию базы.
   * @param {ActionReportDocument} actionReportDocument - Документ события базы, к которому нужно добавить строку.
   * @returns {ActionReportDocument} Сохраненный документ события базы с добавленной строкой.
   * @example
   * ```
   * var reportDocument = OpenNewDoc("x-local://wtv/wtv_action_report.xmd");
   * var reportId = reportDocument.DocID;
   * tools.add_report(reportId, "Saving archive: OK.");
   * ```
   */
  function add_report(
    actionReportId: number,
    text?: string, actionReportDocument?: ActionReportDocument
  ): ActionReportDocument;

  /**
   * Создает элемент очереди скриптов.
   * @param {string} sScriptParam - Код для выполнения.
   * @param {string} sCodeParam - Строка с кодом скрипта.
   * @param {boolean} bDeleteAutomaticallyParam - Флаг, определяющий, нужно ли автоматически удалять код из очереди:
   * - `true` – код автоматически удаляется из очереди;
   * - `false` – не удаляется.
   * @param {number} iDelayParam - Задержка в секундах перед выполнением кода.
   * @param {Date} dStartDate - Дата старта агента.
   * @returns {number} Id созданного объекта.
   * @example
   * ```
   * var scriptId = tools.add_script_to_queue(sRegistrationScript,"mgr", true, 5);
   * tools.add_script_to_queue(
   *   "tools_chat.write_message(" + XQueryLiteral(sTextMessage) + ", " + iObjectID + ")",
   *   "send_message",
   *   true,
   *   0
   * );
   * tools.add_script_to_queue(
   *   "tools_chat.change_participants_conversation(" + iConversationID + ", null, " + XQueryLiteral(sAction) + ")",
   *   "change_participants_conversation",
   *   true,
   *   0
   * );
   * ```
   */
  function add_script_to_queue(
    sScriptParam: string,
    sCodeParam: string,
    bDeleteAutomaticallyParam: boolean,
    iDelayParam: number,
    dStartDate?: Date
  ): number;

  /**
   * Сдвигает указанную дату на количество секунд, заданное параметрами функции.
   * Можно передать дни, часы, минуты и секунды для сдвига даты.
   * Дни, часы, минуты будут пересчитаны в секунды.
   * @param {Date} [DATE_VAL=Date()] - Исходная дата, подлежащая изменению.
   * @param {number} [DAYS=0] - Количество дней, на которое нужно сдвинуть текущую дату.
   * @param {number} [HOURS=0] - Количество часов, на которое нужно сдвинуть текущую дату.
   * @param {number} [MINUTES=0] - Количество минут, на которое нужно сдвинуть текущую дату.
   * @param {number} [SECONDS=0] - Количество секунд, на которое нужно сдвинуть текущую дату.
   * @returns {Date} Измененная дата, полученная сдвигом исходной даты на указанное
   * количество дней, часов, минут и секунд.
   * @example
   * ```
   * newDate = tools.AdjustDate(null, 1); // сдвиг текущей даты на 1 сутки
   * newDate1 = tools.AdjustDate(null, -1); // сдвиг текущей даты на 1 сутки назад
   * ```
   */
  function AdjustDate(DATE_VAL?: Date, DAYS?: number, HOURS?: number, MINUTES?: number, SECONDS?: number): Date;

  /**
   * Копирует параметры доступа к объекту в другой объект.
   * @param {number} _to_obj_id - Id объекта, в который нужно скопировать параметры доступа.
   * @param {XmlTopElem} _to_obj_doc - TopElem объекта, в который нужно скопировать параметры доступа.
   * @param {number} _from_obj_id - Id объекта, из которого нужно скопировать параметры доступа.
   * @param {XmlTopElem} _from_obj_doc - TopElem объекта, из которого нужно скопировать параметры доступа.
   * @example
   * ```
   * tools.admin_access_copying("", docEventResult.TopElem, "", topElem);
   * tools.admin_access_copying( null, requestDoc.TopElem, curObjectID, curObject );
   * ```
   */
  function admin_access_copying(
    _to_obj_id: number | undefined | null,
    _to_obj_doc: XmlTopElem | undefined | null,
    _from_obj_id: number | undefined | null,
    _from_obj_doc: XmlTopElem | undefined | null
  ): void;

  /**
   * Проверяет доступ к объекту на основе настроек в разделе
   * Отображение каталогов (блок Безопасность) для текущего пользователя в Webtutor Administrator.
   * @param {XmlTopElem} teObjectParam - `TopElem` объекта, к которому проверяется доступ.
   * @returns {boolean} Возвращает значение, показывающее наличие или отсутствие доступа:
   * - `true` – доступ разрешен;
   * - `false` – доступ запрещен.
   * @example
   * ```
   * tools.admin_access_filling(TopElem);
   * ``
   */
  function admin_access_filling(teObjectParam: XmlTopElem): boolean;

  /**
   * Представляет результаты теста в формате XML-структуры.
   * @param {XmlElem<unknown>} oSourceParam - Элемент для разбора теста,
   * в котором содержится либо непустое поле `lesson_report`, `objects` (массив с элементами) или `core_lesson`.
   * @param {string} sQtiPathParam - Путь до файла со структурой теста в формате qti.
   * @param {string} sQtiTextParam - Структура теста в формате qti.
   * @param {boolean} bNoSendCorrectAnswerParam - Не отправлять правильный ответ.
   * @returns {XmlDocument} XML-структура, содержащая результаты тестирования.
   * @example
   * ```
   * tools.annals_decrypt( Ps );
   * TopElem.annals_variant = tools.annals_decrypt( oSource, sQtiPath );
   *
   * for ( _learning in _learning_array ) {
   *   learningDoc = OpenDoc( UrlFromDocID( _learning.id ) ).TopElem;
   *   assessmentDoc = OpenDoc( UrlFromDocID( _learning.assessment_id ) ).TopElem;
   *  fldAnnals = tools.annals_decrypt( learningDoc, tools.get_qti_path( assessmentDoc ) );
   * }
   * ```
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
   * @param {string} [format="xml"] - Формат возвращаемой строки. Возможны два значения: `json` и `xml`).
   * @param {string} [rootName="data"] - Название корневого (`root`) тега.
   * Значение аргумента учитывается, если формируется строка в формате XML.
   * По умолчанию имеет значение `data` (корневой тег `<data></data>`).
   * @returns {string} Строка, сформированная из массива.
   * @example
   * ```
   * tools.array_to_text(["one", "two", "three"], "json");
   * // ["value":"one", "value":"two", "value":"three"]
   *
   * tools.array_to_text(["one", "two", "three"], "xml");
   * // <data><value>one</value></data><data><value>two</value></data><data><value>three</value></data>
   *
   * tools.array_to_text(["one", "two", "three"], "xml", "d");
   * // <d><value>one</value></d><d><value>two</value></d><d><value>three</value></d>
   * ```
   */
  function array_to_text(_aArrayPARAM: unknown[], format?: string, rootName?: string): string;

  const dotnet_host: DotnetCoreHost;

  /**
   * Создает новый объект в указанном каталоге.
   * @param {string} documentName - Название каталога. Обычно указывается без s на конце.
   * @param {boolean} [isCatalog] - Флаг указывающий, что создается новая запись в каталоге (true),
   * или создается новый объект (false). Обычно передается false.
   * @returns {T} Документ объекта.
   */
  function new_doc_by_name<T = XmlDocument>(documentName: string, isCatalog?: boolean): T;

  /**
   * Возвращает значение параметра, переданного в функцию, в зашифрованном виде.
   * Вид шифрования указывается в общих настройках (Формат хранения и проверки пароля): md5, sha1, sha1_base64.
   * @param {string} password - Строка для преобразования.
   * @param {boolean} flag - Флаг, показывающий, что получаемая в результате преобразования
   * строка будет использоваться для проверки пароля (true).
   * Это значит, что их строки будут удалены открывающаяся "(" и закрывающаяся “)" скобки для
   * md5, sha1, sha1_base64. В противном случае (false),
   * будет возвращена строка в () в указанном в настройках формате md5, sha1, sha1_base64
   * или без скобок для формата Plain.
   * @returns {string} Возвращаемый результат – строка (string), преобразованная в соответствие с параметрами вызова.
   */
  function make_password(password: string, flag: boolean): string;

  /**
   * Запускает системный агент на выполнение.
   * @param {number} agentId - Id агента для запуска.
   * @param {number} [objectId] - Id объекта, над которым запускается агента (например, в списке).
   * @param {string} [objectIdsStr] - Id объектов разделенных «;», над которым запускается агента (например, в списке).
   * @param {Date} [dateStart] - Дата запуска агента, по умолчанию текущая дата.
   * @param {string} [tenancyName] - Код экземпляра системы в multitenant системе, в котором нужно запустить агент.
   * @returns {boolean} Успех или неуспех выполнения агента.
   */
  function start_agent(
    agentId: number,
    objectId?: number,
    objectIdsStr?: string,
    dateStart?: Date,
    tenancyName?: string
  ): boolean;

  /**
   * Функция открывает документ и возвращает его.
   * Если не смогла открыть, возвращает undefined.
   * @param {string|number} documentId - Id документа.
   * @returns {T|undefined} XML документ или undefined.
   */
  function open_doc<T = XmlDocument>(documentId: number): T | undefined;

  /**
   * Проверяет разрешение на доступ к указанному объекту для указанного пользователя.
   * Проверка идет по уровню доступа, роли доступа, группам доступа и условиям доступа,
   * если в карточке объекта есть соответствующие настройки.
   * @param {XmlTopElem} TopElem - TopElem объекта, доступ к которому нужно проверить.
   * @param {number} userId - Id сотрудника, для которого нужно проверить доступ.
   * @returns {boolean} Возвращает значение, показывающее,
   * разрешен ли сотруднику доступ к объекту (true – доступ разрешен, false – доступ запрещен).
   */
  function check_access(TopElem: XmlTopElem, userId: number): boolean;

  /**
   * Оптимизированная функция выполнения длинных запросов.
   * Ее предпочтительнее использовать, кода нужно сделать, например запрос с иерархией.
   * И всегда использовать вместо CatalogHierSubset используя функцию IsHierChild.
   * @param {string} command - Cтрока для выполнения запроса.
   * @returns {T[]} Результат выполнения запроса XQuery по оптимизированной строке sQueryParam.
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
     * Id мероприятия (необязательный),.
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
     * Id плана обучения (необязательный),.
     */
    iEducationPlanID?: number;
    /**
     * Id группы (необязательный),.
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

  /**
   * Возвращает схему URL.
   * @returns {string} Схема.
   * @example
   * ```
   * UrlSchema("http://docs.datex.ru/"); // http
   * ```
   */
  function get_server_protocol(): "file" | "http" | "https" | "mailto" | "ftp" | "x-local";

  function encode_course_folder(sCodeParam: string): unknown;
  function decode_course_folder(sCodeParam: string): unknown;

  /**
   * Загрузка курса из архива в базу. Курс создается если его нет или обновляется существующий.
   * @param {string} fileUrl - Адрес до файла (архива) с курсом.
   * @param {string} [charset="utf-8"] - Кодировка.
   * @param {CourseDocument} [courseDocument] - Документ курса.
   * @returns {CourseDocument|never} Документ курса или ошибка.
   */
  function load_course(
    fileUrl: string,
    charset?: string,
    courseDocument?: CourseDocument
  ): CourseDocument | never;

  /**
   * Копирует ресурсы из списка, указанного в файле manifest, в папку получателя.
   * @param {string} fileUrl - Путь или URL до файла manifest.
   * @param {string} baseUrl - Путь или URL до папки получателя относительно папки wt/web.
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно (копирование выполнено),
   * или false - в противном случае (копирование не выполнено).
   */
  function copy_manifest_resources(fileUrl: string, baseUrl: string): boolean;

  function open_course_package_server(sUrlPARAM: unknown): unknown;
  function copy_url_temp_suffix(sDestUrlPARAM: unknown, sSourceUrlPARAM: unknown): unknown;

  /**
   * Обновляет данные о количестве дочерних элементов в родительском форуме.
   * Если задан forumId, то дочерним записям форума с iParentForumEntryIDParam,
   * проставляется новое значение форума.
   * @param {ForumDocument} [forumDocument] - Необязательный, если задан parentForumId – Doc записи форума,
   * родителя которого нужно обновить.
   * @param {number} [forumId] - Необязательный – Id форума, к которому нужно привязать элементы.
   * @param {number} [parentForumId] - Необязательный, если задан doc – Id родительской записи форума.
   * @returns {number} Целое число (int), количество дочерних элементов вниз по иерархии
   * в документе определяемом parentForumId.
   * @example
   * ```
   * tools.update_forum_entry(null, null, iParentForumEntryID);
   * tools.update_forum_entry(TopElem.Doc, TopElem.forum_id);
   * ```
   */
  function update_forum_entry(
    forumDocument?: ForumDocument,
    forumId?: number,
    parentForumId?: number
  ): number;

  /**
   * Обновляет данные о количестве дочерних элементов в родительском комментарии к разделу портала.
   * Если задан iNewPortalDocIDParam, то дочерним записям проставляется новое значение документа портала,
   * к которому они привязаны.
   * @param {DocumentDocument} documentDocument - Doc документ записи комментария к разделу портала,
   * родителя которого нужно обновить.
   * @param {number} [documentId] - Id раздела портала к которому нужно привязать дочерние комментарии.
   * @returns {number} Целое число (int), количество дочерних элементов вниз по иерархии в определяемом doc.
   */
  function update_document_comment_entry(documentDocument: DocumentDocument, documentId?: number): number;

  /**
   * Загрузка данных на сервер обмена данными.
   * @param {number} serverId - Id сервера обмена данными, на который нужно отправить данные.
   * @param {Date} [date] - Дата, начиная с которой нужно грузить данные.
   * @param {string} type - Описание типа отправки.
   * @returns {string} Строка с ошибкой или пустая строка в случае успеха.
   * @example
   * ```
   * var date = tools.get_exchange_date(serverDoc.TopElem.upload, serverDoc.TopElem.last_upload_date);
   * tools.upload_data(serverId, date, "quick");
   * tools.upload_data(serverId, "", "full");
   * ```
   */
  function upload_data(serverId: number, date: Date, type: string): string;

  /**
   * Информация об успехе выполнения функции или об ошибке.
   * Результирующий объект oRes имеет три свойства:
   * - код oRes.error;
   * - URL файла данных oRes.data_file_url;
   * - и сведения об ошибке oRes.error_text.
   */
  interface DownloadDataResponse {
    error: number;
    data_file_url: string;
    error_text: string;
  }

  /**
   * Получение данных с сервера обмена данными.
   * @param {number} serverId - Id сервера обмена данными, с которого необходимо получить данные.
   * @returns {DownloadDataResponse} - В случае успеха выполнения функции возвращаются значения oRes.error = 0
   * и пустая строка в поле oRes.error_text.
   * В случае возникновения ошибки возвращаются значения oRes.error = 500 и сведения об ошибке в поле oRes.error_text.
   */
  function download_data(serverId: number): DownloadDataResponse;

  /**
   * Создание пакета данных для отправки на сервер обмена данными.
   * @param {number} serverId - Id сервера обмена данными, для которого формируется пакет.
   * @param {number} reportId - Id документа событий базы, в который будут записываться отчет.
   * @param {string} packageId - Строковое выражение Id загружаемого пакета.
   * @param {Date} [date] - Дата, начиная с которой нужно загружать данные.
   * @returns {string} Строковое выражение, содержащее путь до сформированного пакета.
   * @example
   * ```
   * var filename = tools.create_data_package(serverId, reportId, packageId, "");
   * var packageUrl = tools.create_data_package(serverId, reportId, packageId, date, serverId);
   * var filename = ServerEval("tools.create_data_package(" + serverId + "," + reportId + "," + packageId + ",\"\")");
   * ```
   */
  function create_data_package(
    serverId: number,
    reportId: number,
    packageId: string,
    date: Date
  ): string;

  /**
   * Возвращает последнюю дату обмена данными (отправки или получения) для указанного сервера обмена данными.
   * @param {ExchangeServerDocumentTopElem} source - Xml элемент, в котором храниться дата (download, upload).
   * @param {Date} lastDate - Дата последней отправки.
   * @returns {Date} Дата обмена данными.
   * @example
   * ```
   * _exa2wx5nutv7 = tools.get_exchange_date(curServerDoc.download, curServerDoc.last_download_date);
   * _exa2wx5nutv7 = tools.get_exchange_date(curServerDoc.upload, curServerDoc.last_upload_date);
   * ```
   */
  function get_exchange_date(source: ExchangeServerDocumentTopElem, lastDate: Date): Date;

  /**
   * Отправляет файл на указанный сервер обмена данными.
   * Отправление идет как письмо по протоколу Smtp.
   * Поэтому возможно указать тему и тело сообщения.
   * @param {string} subject - Строка с темой отправляемого сообщения.
   * @param {string} body - Строка с телом отправляемого сообщения.
   * @param {string} sendFile - Строка с адресом до отправляемого файла.
   * @param {number} serverId - Id сервера обмена данными, для которого формируется пакет.
   * @param {number} reportId - Id документа событий базы, в который будут записываться отчет.
   * @returns {string} - Строка с адресом до сформированного пакета.
   * @example
   * ```
   * var subject = "data [" + serverDocument.code.Value + "]" + (type == "full" ? " - full" : "");
   * tools.send_file_to_server(subject, "Id: " + packageId, fileName, serverId, reportId);
   * ```
   */
  function send_file_to_server(
    subject: string,
    body: string,
    sendFile: string,
    serverId: number,
    reportId: number
  ): string;


  function post_file_to_server(_send_file: unknown, _server_id: unknown, _report_id: unknown): unknown;
  function date_str(_cur_date: unknown): unknown;
  function uni_process_package(sUrlPackageParam: unknown, fldFormParam: unknown): unknown;
  function process_package(_url: unknown, fldPackagesValidParam: unknown): unknown;
  function get_param_error_text(_param_form: unknown): unknown;

  /**
   * Загружает указанные пакеты с сервера обмена данными.
   * @param {number} exchangeServerId - ID сервера обмена данными, с которого загружаются пакеты.
   * Если ID сервера обмена данными не указан, считается, что сервер локальный.
   * @param {number} [packageId] - ID пакета, который нужно загрузить.
   * @param {string} [filePath] - Путь до файла с пакетом.
   * @returns {DownloadDataResponse} Результирующий объект oRes имеет три свойства:
   * - код oRes.error;
   * - URL файла данных oRes.data_file_url;
   * - и сведения об ошибке oRes.error_text.
   */
  function download_package_list(exchangeServerId: number, packageId?: number, filePath?: string): DownloadDataResponse;

  function download_package(
    exchangeServerId: number,
    packageId: number,
    filePath: string,
    fldPackageValidParam: unknown
  ): DownloadDataResponse;

  /**
   * Обрабатывает пакет с данными и загружает содержимое в базу данных.
   * @param {string} path - Путь до файла с пакетом.
   * @param {string} type - Тип загрузки.
   * Возможные значения:
   * objects и std_objects – загружает объекты в базу;
   * std_objects применяется для загрузки стандартных объектов из первоначальной установки;
   * code_update – выгружает файлы из архива в папку wtv сервера WebTutor;
   * web – выгружает файлы из архива в папку wt/web сервера WebTutor.
   * @param {XmlDocument} source - Источник данных о типах загружаемых объектов, и других параметров загрузки объектов.
   * @param {number} reportId - Id документа событий базы, в который будут записываться отчет.
   * @param {number} exchangeServerId - Id сервера обмена данным, из которого берутся параметры
   * для фильтрации данных из пакета.
   * @param {number} downloadPackageId - Id пакета, из которого нужно загрузить данные.
   * @returns {boolean} Успешная или не успешная загрузка данных (bool).
   * В случае типа объектов objects и std_objects.
   * Возвращается форма открытого документа пакета.
   * @example
   * ```
   * var packageProcessResult = tools.package_process(Ps.local_file_url, Ps.type, Ps.Doc.DocID);
   * common_variables.len_flag = packageProcessResult !== null;
   * ```
   */
  function package_process(
    path: string,
    type: string,
    source: XmlDocument,
    reportId: number,
    exchangeServerId: number,
    downloadPackageId: number
  ): unknown;

  /**
   * Возвращает время (часы, минуты и секунды) из строки с разделителем T,
   * например, вида "2015-06-02T07:51:44".
   * Используется для разбора результатов теста.
   * Проверка формата исходного аргумента не производится.
   * @param {string} duration - Строковое выражение даты в формате "2015-06-02T07:51:44".
   * @returns {string} Строковое выражение времени (часы, минуты и секунды) в формате "07:51:44",
   * если переданы дата и время, или выражение, находящееся после символа T, если передана строка с таким разделителем.
   * @example
   * ```
   * duration = "2015-06-02T07:51:44";
   * time = tools.get_time_from_duration(duration); // 07:41:44
   * ```
   */
  function get_time_from_duration(duration: string): string;

  /**
   * Возвращаете время (часы, минуты и секунды) в виде «часы H минуты M секунды S»,
   * полученное из количества секунд. Используется для разбора результатов теста.
   * @param {string} seconds - Количество секунд, которые нужно преобразовать в часы, минуты и секунды.
   * @returns {string} Строковое значение, содержащее значение времени в формате «часы H минуты M секунды S» в строке,
   * или пустая строка, если входной параметр (аргумент) не удалось преобразовать в число.
   * @example
   * ```
   * seconds = 86399;
   * time = tools.get_time_from_seconds(seconds); // 23H59M59S
   * ```
   */
  function get_time_from_seconds(seconds: string): string;

  /**
   * Отменяет транзакцию. Используется в модуле геймификация.
   * @param {number} transactionId - Id транзакции, которую нужно отменить.
   * @returns {number} Id транзакции, отменяющей указанную транзакцию.
   * @example
   * ```
   * tools.delete_transaction(Ps.Doc.DocID);
   * ```
   */
  function delete_transaction(transactionId: number): number;

  /**
   * Создает транзакцию по списанию указной суммы в указанной валюте с указанного счета.
   * Используется в модуле геймификация.
   * Совершает оплату по выбранному объекту.
   * @param {number} acountId - Id объекта, к которому прикреплен счет, с которого будет происходить списание.
   * @param {string} accountCurrency - Строка валюты счета, содержащая Id валюты из списка валют в системе.
   * @param {number} sum - Сумма.
   * @param {string} comment - Комментарий к транзакции.
   * @param {number} objectId - Id объекта по которому происходит транзакция.
   * @returns {TransactionDocument} Документ созданной новой транзакции.
   * @example
   * ```
   * tools.pay_new_transaction_by_object(
   *   personID,
   *   fldBonusElem.currency_type_id,
   *   fldBonusElem.sum,
   *   "Bonus by qualification \"" + teQualification.name + "\".",
   *   qualificationID
   * );
   * ```
   */
  function pay_new_transaction_by_object(
    acountId: number,
    accountCurrency: string,
    sum: number,
    comment: string,
    objectId: number
  ): TransactionDocument;

  /**
   * Создает транзакцию зачислению суммы из указанной оплаты на счет.
   * @param {number} invoiceId - Id документа Оплат.
   * @param {InvoiceDocumentTopElem} [invoiceDocumentTopElem] - TopElem карточки оплаты.
   * @returns {InvoiceDocument | null} Документ оплаты или null.
   * ```
   * var document = tools.pay_invoice(Ps.Doc.DocID, Ps.Doc);
   * ```
   */
  function pay_invoice(invoiceId: number, invoiceDocumentTopElem: InvoiceDocumentTopElem): InvoiceDocument | null;

  /**
   * Создает транзакцию по списанию указной суммы со счета указанной организации.
   * @param {number} orgId - Id организации.
   * @param {number} amount - Сумма списания.
   * @param {string} [comment] - Комментарий к транзакции.
   * @returns {number|null} Id транзакции или null.
   * @example
   * ```
   * tools.pay_courses(personDoc.org_id, courseDoc.price, "");
   * ```
   */
  function pay_courses(orgId: number, amount: number, comment?: string): number | null;

  /**
   * Создает документ об оплате (invoice).
   * @param {number} orgId - Id организации.
   * @param {number} amount - Сумма списания.
   * @returns {number} Id оплаты.
   * @example
   * ```
   * var invoiceId = tools.set_account(orgId, Real(sum));
   * ```
   */
  function set_account(orgId: number, amount: number): number;

  /**
   * Создает документ об оплате (invoice) для курса из заявки.
   * @param {number} orgId - Id организации.
   * @param {number} requestId - Id заявки сотрудника на курс по которой происходит списание.
   * @returns {number} Id оплаты.
   * @example
   * ```
   * var invoiceId = tools.personal_pay(orgId, requstId);
   * ```
   */
  function personal_pay(orgId: number, requestId: number): number;

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
   * документ в функцию, что позволит избежать его повторного открытия.
   * Для этого вместо tools.create_notification( code, id1, '', id2)
   * вызывается функция, куда передаются дополнительные параметры
   * tools.create_notification(code, id1, '', id2, TopElem1,TopElem2).
   * @param {string} notificationIdentifier - Код типа уведомления, которое будет отправляться.
   * Если параметр пустой ('') или равен '0', то в параметр
   * additionalParams необходимо передавать структуру, из которой будут заполняться типы получателей (recipients),
   * тип отправителя (sender_selector), тема сообщения (subject), тип текста в теле сообщения (body_type),
   * тело сообщения (body) и адрес отправителя (sender_email). Если oTypeParam - это реальный код типа уведомления,
   * то типы получателей (recipients), тип отправителя (sender_selector) и адрес отправителя (sender_email) будут
   * браться из указанного объекта. А тема сообщения (subject), тип текста в теле сообщения (body_type),
   * тело сообщения (body) из шаблона уведомления, прикрепленного к типу сообщения с указанным в параметре кодом.
   * Если в существующих в системе типах уведомления не найдено типа уведомления с указанным кодом,
   * то уведомление не формируется и функция возвратит значение false.
   * В определенных случаях в качестве данного аргумента вместо кода типа уведомления
   * может быть указан Id открытого документа типа уведомления.
   * @param {string} objectId - Id первого объекта (обыкновенно, по данным первого документа формируется, в частности,
   * перечень сотрудников, которым нужно отправить сообщение. В теле уведомления (шаблоне уведомления) обращение
   * к этому параметру идет через objDoc (например, <%=objDoc.name%>) и objDocID.
   * @param {T} text - Аргумент, к которому можно обращаться в теле шаблона уведомления как к Text (<%=Text%>).
   * @param {number} secondObjectId - Id второго объекта, который прикрепляется к уведомлению.
   * В теле уведомления (шаблоне уведомления) обращение этому параметру
   * идет через objDocSec (например, <%=objDocSec.name%>) и objDocSecID.
   * @param {XmlTopElem} objectTopElem - TopElem карточки первого объекта, определяемого аргументом objectId.
   * @param {XmlTopElem} secondObjectTopElem - TopElem карточки второго объекта,
   * определяемого аргументом secondObjectId.
   * @param {ICreateNotificationAdditionalParams} additionalParams - Структура, позволяющая создать собственное
   * (пользовательское) уведомление "на лету".
   * Из нее берутся данные о типах получателей (recipients), тип отправителя (sender_selector),
   * тема сообщения (subject), тип текста в теле сообщения (body_type), тело сообщения (body)
   * и адрес отправителя (sender_email).
   * @returns {boolean} Результат отправки уведомления.
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

  /**
   * Отправляет письмо с параметрами, заданными в аргументах.
   * Если первый параметр равен '0' или пустому значению, то производится отправка по адресам,
   * заданным в структуре recipients объекта teSourceParam.
   * Если первый параметр – это код или идентификатор реального типа уведомления,
   * то в список адресатов будут добавлены адреса, вычисленные по правилам этого объекта (типа уведомления).
   * Тема (subject) и тело (body) письма будут взяты из аргументов, переданных в функцию,
   * а не из параметров шаблона уведомления.
   * @param {string} type - Код типа уведомления, которое будет связано с формируемым шаблоном уведомления.
   * @param {number} objectId - Id первого прикрепленного документа,
   * относительного которого будет идти поиск получателей.
   * В шаблоне уведомления обращение к этому параметру идет через objDocID.
   * @param {string} [subject] - Строка, в которой содержится тема сообщения.
   * @param {string} [body] - Строка, в которой содержится тело сообщения.
   * @param {XmlTopElem} [topElem] - TopElem карточки первого объекта, определяемого аргументом <iObjectIDParam>.
   * @param {XmlDocument} [teSourceParam] - Структура, из которой будут заполняться:
   * - типы получателей (recipients);
   * - тип отправителя (sender_selector);
   * - тип текста в теле сообщения (body_type);
   * - адрес отправителя (sender_email).
   * @param {number} [objectSecondId] - Id документа, который передается,
   * как второй прикрепленный к уведомлению документ.
   * В шаблоне уведомления обращение этому параметру идет через objDocSecID.
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно, или false - в противном случае.
   * @example
   * ```
   * tools.create_template_notification(
   *   0,
   *   _person_id,
   *   dlgDoc.TopElem.subject,
   *   dlgDoc.TopElem.body,
   *   null,
   *   dlgDoc.TopElem,
   *   iSecondID
   * );
   * ```
   */
  function create_template_notification(
    type: string,
    objectId: number,
    subject?: string,
    body?: string,
    topElem?: XmlTopElem,
    teSourceParam?: XmlDocument,
    objectSecondId?: number
  ): unknown;

  /**
   * Отправляет созданное с помощью функции tools.create_notification неотправленное уведомление.
   * @param {number} activeNotificationId - Id неотправленного уведомления, которое должно быть отправлено.
   * @returns {boolean} Флаг успешной или не успешной отправки уведомления.
   * @example
   * ```
   * tools.send_notification(catActiveNotificationElem.id);
   * ```
   */
  function send_notification(activeNotificationId: number): boolean;

  /**
   * Формирует форму сертификата из стандартного шаблона templates/certificate_template.html
   * на основе завершенного курса.
   * Используется в карточке завершенного курса.
   * @param {number} learningId - Id завершенного курса, для которого формируется сертификат.
   * @returns {string} Сформированный Html сертификат.
   * @example
   * ```
   * text = tools.save_certificate(id);
   * ```
   */
  function save_certificate(learningId: number): string;

  /**
   * Возвращает строку символов указанной длины, сформированную случайным образом.
   * @param {number} length - Количество символов в указанной строке. Длина возвращаемой строки.
   * @param {string} [dictionary] - Набор символов, из которого формируется строка
   * (кроме букв и цифр набор может содержать также специальные символы '!@#$%^&*_+-=?').
   * Для удобства использования набор не должен содержать символы 'o', 'O', '0', 'l', 'I'.
   * Если параметр не указан (опущен или представлен в виде пустой строки),
   * то символы берутся из набора 'qwertyuiopasdfghjklzxcvbnm1234567890'.
   * @returns {string} Cформированное строковое значение.
   * @example
   * ```
   * // строка из 12 случайных символов
   * password = tools.random_string(12);
   * // строка из 10 случайных символов (с применением строчных букв и специальных символов)
   * password = tools.random_string(10, "QWERTYUPASDFGHJKLZXCVBNMqwertyuipasdfghjkzxcvbnm123456789!@#$%^&*_+-=?");
   * docPerson.TopElem.password = tools.random_string(Ps.password_digits_num);
   * ```
   */
  function random_string(length: number, dictionary?: string): string;

  /**
   * Загрузка данных по сотрудникам из XML-структуры.
   * Используется для импорта сотрудников.
   * Документ XML с данными для загрузки должен быть сформирован
   * предварительно и соответствовать определенным правилам.
   * @param {XmlDocument} xmlDocument - Документ XML с данными для загрузки.
   * @returns {number} Id документа события базы с отчетом о загрузке.
   * @example
   * ```
   * var docId = tools.import_excel_persons(xmlDocument);
   * var xml = CodeLiteral(fldTE.GetXml({ "tabs": false }));
   * var importExcelPersonActionReportId = OptInt(tools.import_excel_persons(xml), null);
   * local_settings.temp.import_excel_person_action_report_id = importExcelPersonActionReportId;
   * ```
   */
  function import_excel_persons(xmlDocument: XmlDocument): number;

  /**
   * Используется для проверки заполнения схемы импорта перед импортом сотрудников в интерфейсе администратора.
   * @param {XmlTopElem} topElem - TopElem Xml документа с настройками для загрузки.
   * @returns {string} Возвращаемый результат – строка с ошибкой или пустая строка в случае успеха.
   */
  function start_import_excel_persons(topElem: XmlTopElem): string;

  function get_sub_boss_by_person_id(_person_id: unknown, personDocument: CollaboratorDocument): unknown;

  /**
   * Возвращает непосредственных руководителей организации указанного сотрудника.
   * @param {number} personId - Id сотрудника для организации, которого производится поиск руководителей.
   * @returns {number[]} Массив с Id сотрудников, являющихся непосредственными руководителями организации
   * указанного сотрудника.
   */
  function get_main_boss_by_person_id(personId: number): number[];

  function get_web_str(sNameParam: unknown): unknown;

  /**
   * Проверяет, является ли указанный сотрудник (первый аргумент функции) непосредственным руководителем сотрудника,
   * который указан в качестве второго аргумента функции.
   * @param {number} userId - Id сотрудника, для которого нужно осуществить проверку,
   * является ли он руководителем сотрудника, заданного во втором аргументе.
   * Если первый аргумент не указан, то проверка производится относительно текущего пользователя
   * (Id текущего авторизованного на портале пользователя равно curUserID),
   * если этот пользователь определен в окружении, в котором вызывается функция.
   * @param {number} personId - Id сотрудника, для которого нужно осуществить проверку,
   * является ли он подчиненным сотрудника, заданного в первом аргументе.
   * Если второй аргумент не указан, то проверка производится относительно поля curObject.person_id,
   * если curObject определен в окружении, в котором вызывается функция.
   * @returns {boolean} Возвращает значение true, если первый сотрудник является
   * непосредственным руководителем второго, или false - в противном случае.
   * @example
   * ```
   * // Пусть в системе имеется сотрудники Жирова Антонина Васильевна и Васильева Людмила Петровна
   * // Находим программно этих сотрудников с помощью функции tools.get_doc_by_key
   * oCollab1 = tools.get_doc_by_key("collaborator", "fullname", "Жирова Антонина Васильевна");
   *
   * // на экран выводится информация об отобранном сотруднике
   * alert("Найден сотрудник " + oCollab1.TopElem.fullname + " с идентификационным номером " + oCollab1.DocID);
   *
   * oCollab2 = tools.get_doc_by_key("collaborator", "fullname", "Васильева Людмила Петровна");
   * // на экран выводится информация об отобранном сотрудник
   * alert("Найден сотрудник " + oCollab2.TopElem.fullname + " с идентификационным номером " + oCollab2.DocID);
   *
   * // Жирова А.В. является заведующей отделом, в котором работает Васильева Л.П.
   * // Проверяем, является ли Жирова А.В. начальником Васильевой Л.П.?
   * bIs_Boss = tools.is_boss(oCollab1.DocID, oCollab2.DocID);
   * alert(bIs_Boss); // ответ - верно
   * ```
   */
  function is_boss(userId: number, personId: number): boolean;

  /**
   * Используется для работы в документообороте по процедуре оценки и по заявкам.
   * Проверяет, является ли указанный сотрудник тем, от чьего имени подана заявка
   * или на кого создана форма оценки (где он оцениваемый).
   * @param {number} userId - Id сотрудника, для которого нужно осуществить проверку.
   * Если параметр не указан, то проверка происходит относительно текущего пользователя (curUserID),
   * если он определен в окружении, в котором вызывается функция.
   * @returns {boolean} Результат проверки.
   * @example
   * ```
   * tools.is_self_cur_user()
   * ```
   */
  function is_self_cur_user(userId?: number): boolean;

  /**
   * Возвращаемый результат – флаг да, если первый сотрудник, является руководителем второго сотрудника.
   * Или нет, если проверка не удалась или первый сотрудник, не является
   * непосредственным руководителем второго сотрудника.
   * @param {number} managerId - Id сотрудника, для которого нужно осуществить проверку.
   * То есть проверяется, является ли он непосредственным руководителем,
   * указанного типа, сотрудника, который указан в качестве второго параметра функции.
   * @param {number} userId - Id сотрудника руководитель, для которого проверяется.
   * @param {string} [catalogNames] - Native – поиск только непосредственного руководителя по должности.
   * Not_native руководитель любого типа группы, сотрудника, подразделения, организации.
   * @param {boolean} [bossType] - True поиск только непосредственного руководителя.
   * False поиск только функционального руководителя без признака непосредственный.
   * Если передать Id нужного типа руководителя, то будет проверятся руководитель указанного типа.
   * @param {number} [limit] - Ограничение на количество выбираемых результатов.
   * @param {string} [searchParam] - Условие фильтрации where xquery или по object_name.
   * @returns {boolean|null} Результат проверки.
   */
  function is_user_boss(
    managerId: number,
    userId: number,
    catalogNames?: "not_native"
    | "native"
    | "collaborator"
    | "group"
    | "org"
    | "position"
    | "subdivision"
    | ""
    | null
    | undefined,
    bossType?: boolean | number,
    limit?: number | "",
    searchParam?: string | null
  ): boolean | null;

  /**
   * Используется для работы в документообороте по заявкам в процедуре оценки.
   * Проверяет, является ли текущий пользователь непосредственным руководителем указанного подразделения.
   * Проверка производится относительно текущего пользователя
   * (Id текущего авторизованного на портале пользователя равно curUserID),
   * если он определен в окружении, в котором вызывается функция.
   * @param {number} subdivisionId - Id подразделения, для которого производится проверка.
   * @returns {boolean} Возвращает значение true, если функция выполнена успешно, или false - в противном случае.
   * @example
   * ```
   * Пример 1:
   * // Пусть в системе имеется подразделение «IT отдел»
   * // Находим программно подразделение «IT отдел» с помощью функции tools.get_doc_by_key
   * oSub = tools.get_doc_by_key('subdivision', 'name', 'IT отдел' );
   * // на экран выводится информация об отобранном подразделении
   * alert('Найдено подразделение ' + oSub.TopElem.name + ' с идентификационным номером ' + oSub.DocID );
   *
   * // Пусть в системе имеется заведующая отделом Жирова Антонина Васильевна
   * oCollab1 = tools.get_doc_by_key('collaborator', 'fullname', 'Жирова Антонина Васильевна' );
   * // на экран выводится информация об отобранном сотруднике
   * alert('Найден сотрудник ' + oCollab1.TopElem.fullname + ' с идентификационным номером ' + oCollab1.DocID );
   *
   * // указание текущего пользователя для корректного выполнения данного примера
   * // (на практике обычно текущий пользователь определен в окружении)
   * curUserID = oCollab1.DocID;
   *
   * // Проверяем, является ли Жирова А.В. начальником указанного подразделения?
   * bRez = tools.is_boss_by_subdivision_id(oSub.DocID );
   * alert (bRez); // ответ - верно
   *
   * // Пусть в системе имеется сотрудник Васильева Людмила Петровна
   * oCollab2 = tools.get_doc_by_key('collaborator', 'fullname', 'Васильева Людмила Петровна' );
   * // на экран выводится информация об отобранном сотруднике
   * alert('Найден сотрудник ' + oCollab2.TopElem.fullname + ' с идентификационным номером ' + oCollab2.DocID );
   *
   * // указание текущего пользователя для корректного выполнения данного примера
   * (на практике обычно текущий пользователь определен в окружении)
   * curUserID = oCollab2.DocID;
   *
   * // Проверяем, является ли Васильева Л.П. начальником указанного подразделения?
   * bRez2 = tools.is_boss_by_subdivision_id ( oSub.DocID );
   * alert (bRez2); // ответ - неверно
   *
   * Пример 2:
   * _eval_str = _eval_str + 'tools.is_boss_by_subdivision_id(' + _condition.cur_parent_object_id + ')';
   * ```
   */
  function is_boss_by_subdivision_id(subdivisionId: number): boolean;

  /**
   * Используется для работы в документообороте по заявкам в процедуре оценки.
   * Проверяет, входит ли текущий пользователь в указанную группу.
   * Проверка производится относительно текущего пользователя
   * (Id текущего авторизованного на портале пользователя равно curUserID),
   * если этот пользователь определен в окружении, в котором вызывается функция.
   * @param {number} groupId - Id должности для которой происходит проверка.
   * @returns {boolean} Возвращает значение true, если текущий пользователь входит в указанную группу,
   * или false - в противном случае.
   * @example
   * ```
   * // Пусть в системе имеется группа «Динамическая группа»
   * // Находим программно данную группу с помощью функции tools.get_doc_by_key
   * // атрибуты групп хранятся в каталоге group; ищем группу по названию
   * oGroup = tools.get_doc_by_key ( 'group', 'name', 'Динамическая группа' );
   * // на экран выводится информация об отобранной группе
   * alert ( 'Найдена группа ' + oGroup.TopElem.name + ' с идентификационным номером ' + oGroup.DocID );
   * // Пусть в системе имеется сотрудник Калинин Михаил Михайлович,
   * // который входит в состав группы «Динамическая группа»
   * oCollab1 = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Калинин Михаил Михайлович' );
   * // на экран выводится информация об отобранном сотруднике
   * alert ( 'Найден сотрудник ' + oCollab1.TopElem.fullname + ' с идентификационным номером ' + oCollab1.DocID );
   * // указание текущего пользователя для корректного выполнения данного примера
   * // (на практике обычно текущий пользователь определен в окружении на портале)
   * curUserID = oCollab1.DocID;
   * // Проверяем, входит ли Калинин М.М. в состав указанной группы?
   * bRez = tools.is_by_group_id ( oGroup.DocID );
   * alert (bRez); // ответ - верно
   * ```
   */
  function is_by_group_id(groupId: number): boolean;

  /**
   * Используется для работы в документообороте по заявкам в процедуре оценки.
   * Проверяет, занимает ли текущий пользователь указанную должность.
   * Проверка производится относительно текущего пользователя
   * (Id текущего авторизованного на портале пользователя равно curUserID),
   * если этот пользователь определен в окружении, в котором вызывается функция.
   * @param {number} positionId - Id должности для которой происходит проверка.
   * @returns {boolean} Возвращает значение true, если текущий пользователь занимает указанную должность,
   * или false - в противном случае.
   * @example
   * ```
   * // Пусть в системе имеется должность Ведущий специалист
   * // Находим программно должность Ведущий специалист с помощью функции tools.get_doc_by_key
   * oPos = tools.get_doc_by_key ( 'position', 'name', 'Ведущий специалист' ); // ищем должность по названию
   * // на экран выводится информация об отобранной должности
   * alert ( 'Найдена должность ' + oPos.TopElem.name + ' с идентификационным номером ' + oPos.DocID );
   * // Пусть в системе имеется сотрудник Васильева Людмила Петровна, которая работает в должности «Ведущий специалист»
   * oCollab1 = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Васильева Людмила Петровна' );
   * // на экран выводится информация об отобранном сотруднике
   * alert ( 'Найден сотрудник ' + oCollab1.TopElem.fullname + ' с идентификационным номером ' + oCollab1.DocID );
   * // указание текущего пользователя для корректного выполнения данного примера
   * // (на практике обычно текущий пользователь определен в окружении на портале)
   * curUserID = oCollab1.DocID;
   * // Проверяем, занимает ли Васильева Л.П. указанную должность
   * bRez = tools.is_by_position_id ( oPos.DocID );
   * alert (bRez); // ответ - верно
   * ```
   */
  function is_by_position_id(positionId: number): boolean;

  function is_statement_date(iActivityIDParam: unknown, sValueParam: unknown, sUslParam: unknown): unknown;

  /**
   * Функция заполняет поля в приемнике данных на основе значений из объекта источника данных:
   * workflow_id,
   * object_name,
   * object_code,
   * object_start_date
   * Источник данных это TopElem документа источника данных.
   * Приемником может быть элемент любого уровня в xml структуре содержащий нужные поля.
   * @param {unknown} type - Строка, содержащая название типа источника объекта.
   * @param {XmlTopElem} source - Приемник данных.
   * @param {number} objectId - Id документа источника данных.
   * @param {XmlTopElem} objectDocument - TopElem источника данных.
   * @returns {boolean} True если при заполнении не произошло ошибок, False если заполнение произошло с ошибкой.
   * Если в приемнике данных не было полей для заполнения или в источнике данных не было необходимых данных,
   * функция вернет да (true).
   * @example
   * ```
   * tools.object_filling("event", curProgram, docEvent.DocID, docEvent.TopElem);
   * tools.object_filling(docRequest.TopElem.type, docRequest.TopElem, Int(program_id));
   * ```
   */
  function object_filling(
    type: unknown,
    source: XmlTopElem,
    objectId: number,
    objectDocument: XmlTopElem | null | ""
  ): boolean;

  /**
   * Функция заполняет некоторые поля (дополнительную информацию) в карточке
   * объекта-приемника данных на основе значений из объекта-источника данных.
   * В качестве источника данных используется TopElem соответствующего документа.
   * Приемником может быть элемент любого уровня в xml-структуре, содержащий нужные поля.
   * В зависимости от типа источника заполняются разные поля в приемнике.
   * Примечание - Функция  не предназначена для копирования однотипных объектов.
   * Она может быть использована для заполнения некоторого набора стандартных полей объекта
   * одного типа в зависимости от полей объекта другого типа,
   * а основе которого создан первый объект
   * (например, для заполнения дополнительной информации объекта
   * Незаконченный электронный курс из полей объекта Электронный курс).
   * Для типа источника subdivision заполняется поле subdivision_name.
   * Для типа источника event заполняются поля:
   * - event_name;
   * - event_start_date;
   * - event_result_type_id (если в мероприятии задан default_event_result_type_id).
   * Для типа источника course заполняются поля course_name, course_code, duration, no_encoding_core_lesson.
   * Для типа источника assessment заполняются поля assessment_name, assessment_code, duration, attempts_num.
   * Для типа источника request_type заполняются поля request_type_id, type, workflow_id, is_group.
   * Для типа источника response_type заполняются поля response_type_id, type.
   * Для типа источника education_method заполняются поля:
   * - duration_plan;
   * - duration_fact;
   * - duration_days_plan;
   * - duration_days_fact;
   * - max_person_num;
   * - name;
   * - default_response_type_id;
   * - mandatory_fill_response;
   * - cost;
   * - currency;
   * - cost_type;
   * - education_org_id;
   * - event_form;
   * - lectors (массив);
   * - prev_testing.assessments (массив);
   * - post_testing (массив);
   * - expense_items (массив).
   * Для типа источника education_org заполняется поле education_org_name.
   * Для типа источника collaborator заполняются поля:
   * - person_fullname;
   * - collaborator_fullname;
   * - person_name;
   * - person_position_name;
   * - position_name;
   * - person_org_name;
   * - person_instance_id;
   * - person_current_state;
   * - person_code.
   * Для типа источника item заполняются поля title, question_text, type_id, question_points.
   * Для типа источника submission_type заполняется поле submission_type_name.
   * Для типа источника activity заполняются поля activity_code, activity_name.
   * Для типа источника verb заполняются поля verb_code, verb_name.
   * Для типа источника object заполняются поля object_type, object_name, object_code, object_start_date.
   * Для типа источника tag заполняется поле tag_name.
   * @param {string} type - Строка, содержащая название типа источника объекта.
   * @param {XmlTopElem} topElem - TopElem документа-приемника данных (документа, которому передаются данные).
   * @param {number} objectId - Id документа-источника данных.
   * @param {XmlTopEleme} [xmlTopElem] - TopElem документа-источника данных.
   * @param {boolean} [customFlag] - Если значение данного атрибута равно true и значение атрибута type равно 'event',
   * то в интерфейс администратора выводится сообщение о количестве преподавателей в мероприятии.
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно
   * и при заполнении не было выявлено ошибок,
   * или false - если заполнение произошло с ошибкой.
   * Если в приемнике данных не было полей для заполнения или в источнике данных не было необходимых данных,
   * функция вернет значение true.
   * @example
   * ```
   * Пример 1:
   * oActiveLearning_receiver = OpenNewDoc ('x-local://wtv/wtv_active_learning.xmd');
   * oCollab_source = tools.get_doc_by_key ( 'collaborator', 'fullname', 'Вилкова Ольга Николаевна' );
   * // на экран выводится информация об отобранном сотруднике-источнике
   * alert ('Найден сотрудник ' + oCollab_source.TopElem.name + ' с идентификационным номером ' + oCollab_source.DocID);
   * oActiveLearning_receiver.TopElem.person_id = oCollab_source.DocID; // заполнение основной информации о сотруднике
   * // заполнение дополнительной информации о сотруднике
   * tools.common_filling( 'collaborator', oActiveLearning_receiver.TopElem, oCollab_source.DocID );
   * oCourse_source = tools.get_doc_by_key ( 'course', 'name', 'Эффективное совещание' );
   * // на экран выводится информация об отобранном курсе-источнике
   * alert ( 'Найден курс ' + oCourse_source.TopElem.name + ' с идентификационным номером ' + oCourse_source.DocID );
   * oActiveLearning_receiver.TopElem.course_id = oCourse_source.DocID; // заполнение основной информации о курсе
   * // заполнение дополнительной информации о курсе
   * tools.common_filling( 'course', oActiveLearning_receiver.TopElem, oCourse_source.DocID );
   * oActiveLearning_receiver.BindToDb(); // связывание нового сформированного объекта с базой данных
   * oActiveLearning_receiver.Save(); // сохранение нового объекта в информационной базе
   * Пример 2:
   * tools.common_filling( 'request_type', doc.TopElem, _request_type_first_elem.PrimaryKey );
   * tools.common_filling( 'education_method', doc.TopElem, TopElem.Doc.DocID, TopElem );
   * ```
   */
  function common_filling(
    type: "subdivision"
    | "org"
    | "position"
    | "event"
    | "course"
    | "assessment"
    | "request_type"
    | "task_type"
    | "presence_state"
    | "project"
    | "response_type"
    | "education_method"
    | "education_org"
    | "collaborator"
    | "item"
    | "submission_type"
    | "activity"
    | "object"
    | "tag"
    | "object_data_type"
    | "custom_web_template",
    topElem: XmlTopElem,
    objectId: number,
    xmlTopElem?: XmlTopElem,
    customFlag?: boolean
  ): boolean;

  /**
   * Функция очищает поля в приемнике данных на основе указанного типа объекта источника данных.
   * Приемником может быть элемент любого уровня в xml-структуре содержащий нужные поля.
   * В зависимости от типа источника очищаются разные поля в приемнике.
   * Для источника типа event очищаются поля event_name, event_start_date.
   * Для источника типа education_org очищается поле education_org_name.
   * Для источника типа course очищаются поля course_name, course_code.
   * Для источника типа assessment очищаются поля assessment_name, assessment_code.
   * Для источника типа request_type очищаются поля request_type_id, type, workflow_id, is_group.
   * Для источника типа response_type очищаются поля response_type_id, type.
   * Для источника типа collaborator очищаются поля:
   * - person_fullname;
   * - collaborator_fullname;
   * - person_name;
   * - person_position_name;
   * - position_name;
   * - person_org_name;
   * - person_instance_id;
   * - person_current_state;
   * - person_code.
   * Для источника типа object очищаются поля object_type, object_name, object_code, object_start_date.
   * @param {string} type - Строка, содержащая название типа источника объекта.
   * @param {XmlTopElem} source - Приемник данных.
   * @param {MsPersonSdInnerBase} xmlElemWithSdNode - Элемент XML, имеющий дочерний элемент sd
   * (если атрибут ps указан, то его дочерний элемент sd очищается).
   * @param {unknown} doc - Неиспользуемый параметр.
   * @returns {boolean} Возвращает значение true, если операция завершилась успешно, или false - в противном случае.
   * @example
   * ```
   * tools.common_clear ( _cur_catalog_name, TopElem, Ps );
   * tools.common_clear ( 'collaborator', Child(0).Parent, person_id );
   * ```
   */
  function common_clear(
    type: "subdivision"
    | "org"
    | "position"
    | "event"
    | "education_org"
    | "course"
    | "assessment"
    | "request_type"
    | "task_type"
    | "response_type"
    | "collaborator"
    | "object"
    | "education_type",
    source: XmlTopElem,
    xmlElemWithSdNode?: MsPersonSdInnerBase,
    doc?: unknown
  ): boolean;

  function active_test_learning_finish_link(
    activeLearningID: number,
    learningID: number,
    teLearning: TestLearningDocumentTopElem,
    teAssessment: AssessmentDocumentTopElem
  ): unknown;

  function core_decrypt(_core: unknown, _qti_path: unknown, _qti_text: unknown, _learning_doc: unknown): unknown;

  /**
   * Представляет результаты завершенного теста в XML-формате.
   * @param {string} testResults - Результаты завершенного теста для дешифровки.
   * @returns {string} Строковое выражение XML-структуры, содержащей результаты тестирования в теге annals.
   * @example
   * ```
   * tod = StrSimpleDecrypt ( _core );
   * tod = Trim ( tod );
   * annals = tools.get_annals_from_core ( tod );
   * sReport = tools.get_annals_from_core ( Trim ( StrSimpleDecrypt ( oSourceParam.core_lesson ) ));
   * ```
   */
  function get_annals_from_core(testResults: string): string;

  function get_annals_text_from_annals(fldAnnalsParam: unknown): unknown;
  function get_qti_path(oSource: unknown, fldPartParam: unknown): unknown;
  function report_decrypt(_source: unknown, _qti_path: unknown, _qti_text: unknown): unknown;
  function fill_annals_timings(fldTarget: unknown, fldSource: unknown): unknown;
  function get_data_answers(fldDataItem: unknown): unknown;
  function get_item_points(fldQuestion: unknown): unknown;
  function fill_annals_text(
    fldAnnalsObjectsTarget: unknown,
    sQtiPathParam: unknown,
    sQtiTextParam: unknown,
    fldAnnalsObjectsSource: unknown,
    bNoSendCorrectAnswerParam: unknown
  ): unknown;
  function get_annals_text(
    _annals: unknown, _qti_path: unknown, _qti_text: unknown, _learning_doc: unknown, oAnnalsTarget: unknown): unknown;
  function close_request(_request_id: unknown): unknown;
  function workflow_action_process(
    _source: unknown,
    _action_code: unknown,
    _workflow_id: unknown,
    _workflow_doc: unknown,
    _alterCurObjectID: unknown,
    dConditionProcess: unknown
  ): unknown;
  function obtain_lists(_url: unknown, _list_name: unknown): unknown;
  function event_finish(eventId: number, eventDocument?: EventDocument): unknown;
  function event_start(eventId: number, eventDocument: EventDocument, oScreenParam: unknown): unknown;
  function get_object_form_url(sCatalogNameParam: unknown, bIsCatalogParam: unknown): unknown;
  function get_screen_form_url(sCatalogNameParam: unknown): unknown;
  function create_package(
    _pak_url: unknown,
    _report_id: unknown,
    _param_source: unknown,
    sPackIDParam: unknown
  ): unknown;
  function create_list_package(sResultUrlParam: unknown, fldPackage: unknown): unknown;
  function get_doc_by_key<T = XmlDocument>(catalog: string, key: string, value: string | number): T | null;
  function obtain_doc_by_key(sObjectNameParam: unknown, oKeyParam: unknown, oKeyValueParam: unknown): unknown;
  function get_seconds_from_duration(duration: number): unknown;

  /**
   * Заполняет карточку теста и создает вопросы к нему на основе qti-описания теста.
   * @param {number} assessmentId - Id теста.
   * @param {AssessmentDocumentTopElem} assessmentDocumentTopElem - TopElem теста.
   * @param {string} qti - Структура теста в формате qti.
   */
  function assessment_filling_from_qti(
    assessmentId: number,
    assessmentDocumentTopElem: AssessmentDocumentTopElem,
    qti: string
  ): void;

  function submit_subscriptions(_document_id: unknown, documentDoc: unknown, iPersonIDParam: unknown): unknown;
  function create_filter_xquery(_conditions: unknown, _cond: unknown, _elem_name: unknown): unknown;
  function create_filter_javascript(_conditions: unknown, _first_cond: unknown, _elem_name: unknown): unknown;

  /**
   * Обновляет значения ролей в системе на основе списка, указанного в параметрах.
   * @param {string} url - Путь до файла с структурой списка (List) из которого будут загружаться данные.
   * @param {XmlTopElem} source - List для обновления.
   * @returns {number} Количество обновленных элементов списка.
   * @example
   * ```
   * count = tools.obtain_custom_templates(UrlAppendPath("x-local://custom/", temp_doc.custom_templates_url));
   * ```
   */
  function obtain_custom_templates(url: unknown, source: unknown): unknown;

  function obtain_access_roles(_url: unknown, _list: unknown): unknown;

  /**
   * Импортирует курс в систему из указанного файла.
   * Файл должен быть сформирован предварительно и соответствовать определенным стандартам (например, SCORM 2004).
   * @param {string} filepath - Путь до файла.
   * @returns {boolean} Результат true в любом случае.
   */
  function import_course(filepath: string): boolean;

  function process_skk(_inst_flag: unknown): unknown;

  /**
   * Возвращает версию и дату модификации из файла history.
   * Поиск файла history может происходить в разных местоположениях в зависимости от параметров функции.
   * @param {string} type - Строка, указывающая, какой именно файл history
   * нужно открыть для получения версии и даты модификации.
   * По умолчанию - 'wtv'.
   * Допустимые значения:
   * - wtv – данные из файла history.xml, находящегося в папке wtv.
   * - qti – данные из файла history.xml, находящегося в папке qti.
   * - assessment – данные из файла history_ass.xml, находящегося в папке wtv.
   * - last – данные из файла history.xml, находящегося в папке last.
   * @returns {string} Строка вида 'номер версии (дата модификации версии)'.
   * @example
   * ```
   * tools.get_version("last");
   * ```
   */
  function get_version(type: "wtv" | "qti" | "assessment" | "last"): string;

  /**
   * Функция возвращает набор заполненных настраиваемых полей для данного каталога и данного документа.
   * Если указан только первый параметр, функция вернет список полей без значений.
   * @param {string} catalog - Строка с названием каталога без ‘s’ на конце.
   * @param {number} [topId] - Id документа, для которого нужно вернуть набор полей.
   * @param {XmlTopElem} source - TopElem документа, для которого нужно вернуть набор полей.
   * @returns {XmlElem<CustomElemsBase>} Объект с набором заполненных настраиваемых полей
   * для данного каталога и данного документа.
   * @example
   * ```
   * fldCustomTemplate = tools.get_custom_template("collaborator", null, null);
   * // возвращает строку, содержащую отформатированные данные массива XML-элементов
   * str = ExportElemsToStr(fldCustomTemplate);
   * fldCustomElems = tools.get_custom_template("request_type", filRequestType.id);
   * custom_fields = tools.get_custom_template("development_plan", Int(curObjectID), curPA).fields;
   * arrSheets = tools.get_custom_template(TopElem.Name, TopElem.Doc.DocID, TopElem).sheets;
   * ```
   */
  function get_custom_template(catalog: string, topId?: number, source?: XmlTopElem): XmlElem<CustomElemsBase>;

  /**
   * Функция меняет статус указанного сотрудника у поля «Временно запрещен доступ на портал».
   * Функция отправляет уведомления сотруднику об изменении доступа.
   * @param {number} personId - Id сотрудника для установки значения поля «Временно запрещен доступ на портал».
   * @param {boolean} banStatus - Доступ запрещен (true), доступ разрешен (false).
   * @param {CollaboratorDocument} [personDocument] - Document документа, для которого поменять значение в поле.
   * @param {boolean} changeOnlyForAdmin - Если значение параметра (true),
   * менять значение можно только у сотрудников не являющихся администраторами.
   * @returns {boolean} Флаг да/нет (bool) успех или неуспех смены статуса доступа на портал.
   */
  function set_web_ban(
    personId: number,
    banStatus: boolean,
    personDocument?: CollaboratorDocument,
    changeOnlyForAdmin?: boolean
  ): boolean;

  /**
   * Заполняет данные для отображения списка объектов в блоке в разделах администратора по указанным источникам.
   * Используется для отображения настраиваемых отчетов, настраиваемых типов документов,
   * типов заявок и типов отзывов в нужных разделах администратора WebTutor.
   * @param {XmlTopElem} source - TopElem объекта, который нужно отобразить в блоке.
   * @param {MSDispBlockBase} dispBlock - XML-структура.
   * Если в качестве атрибута disp_block передать пустую XML-структуру (<disp_block> </disp_block>),
   * то список объектов будет удален из описания соответствующего раздела.
   * @param {IAccessBlockType} dispObjectBlocks - Существующие блоки (источники) для отображения.
   * @param {number} sourceId - Id объекта, который нужно отобразить в блоке.
   * @returns {void} Возвращаемое значение отсутствует.
   */
  function disp_block_filling_by_source(
    source: XmlTopElem,
    dispBlock: MSDispBlockBase,
    dispObjectBlocks: IAccessBlockType,
    sourceId: number
  ): void;

  /**
   * Заполняет данные для отображения списка объектов в блоке в разделах администратора.
   * Используется для отображения настраиваемых отчетов, настраиваемых типов документов,
   * типов заявок и типов отзывов в нужных разделах администратора WebTutor с использованием функции
   * {@link disp_block_filling_by_source}.
   * @param {XmlTopElem} source - TopElem объекта, который нужно отобразить в блоке.
   * @param {MSDispBlockBase} dispBlock - XML-структура.
   * Если в качестве атрибута disp_block передать пустую XML-структуру (<disp_block> </disp_block>),
   * то список объектов будет удален из описания соответствующего раздела.
   * @returns {void} Возвращаемое значение отсутствует.
   */
  function disp_block_filling(source: XmlTopElem, dispBlock: MSDispBlockBase): void;

  function get_order_query(sOrderParam: unknown, sDirParam: unknown): unknown;
  function create_xquery(
    _catalog_name: unknown,
    _xquery_qual: unknown,
    _filter_xquery: unknown,
    _ft_filter: unknown,
    _order_str: unknown,
    _order_dir: unknown,
    _is_hier: unknown,
    _foreign_field: unknown,
    oColumnsParam: unknown
  ): unknown;
  function request_processing(iRequestID: unknown, docRequest: unknown): unknown;
  function update_object_versions(
    docVersion: unknown,
    iVersionID: unknown,
    docObject: unknown,
    iPersonID: unknown,
    tePerson: unknown,
    sComment: unknown
  ): unknown;
  function update_adding_objects(docObject: unknown, iObjectID: unknown): unknown;
  function request_rejecting(
    objectId: number,
    objectDocument: RequestDocument,
    personId?: number,
    isSave?: boolean
  ): unknown;
  function del_person_from_event(
    _person_id: unknown,
    eventId: number,
    _doc_event?: unknown,
    _flag_save?: unknown): unknown;
  function encrypt_content(iCourseIDParam: unknown): unknown;
  function create_license(iLicenseId: unknown): unknown;
  function create_license_complete(sTempDirectoryUrl: unknown): unknown;
  function recovery_empty_lng_const(_lng_id: unknown, _source: unknown): unknown;
  function import_pwt_data_xml(
    _xml: unknown,
    _user_id: unknown,
    _report_id: unknown,
    _file_url: unknown,
    sUserAgentParam: unknown
  ): unknown;
  function decript_pwt_data_str(_str: unknown): unknown;
  function update_course_parts_structure(_learning_id: unknown, _course_doc: unknown, _doc_learning: unknown): unknown;
  function get_direct_sub_person_ids(iUserId: unknown): unknown;
  function get_sub_person_ids_by_subdivision_id(_subdivision_id: unknown, sConditionsParam: unknown): unknown;
  function get_sub_persons_by_subdivision_id(_subdivision_id: unknown, sConditionsParam: unknown): unknown;

  /**
   * Возвращает массив Id подчиненных сотрудников (как непосредственных, так и подчиненных подчиненных)
   * указанного сотрудника.
   * @param {number} managerId - Id сотрудника, для которого производится поиск подчиненных.
   * @param {string | null} catalogNames - Можно передать любой набор из следующих каталогов
   * (collaborator, group, org, position, subdivision), разделенных запятой;
   * native – поиск подчиненных только непосредственного руководителя по должности;
   * not_native – поиск подчиненных руководителя любого типа: группы, сотрудника, подразделения, организации.
   * Тогда поиск будет происходить только среди объектов указанных каталогов.
   * @param {boolean | number } bossType - Тип руководителя.
   * Допустимые значения:
   * - true – поиск только непосредственного руководителя;
   * - false - поиск только функционального руководителя без признака Непосредственный.
   * - Id типа руководителя. Если передать Id нужного типа руководителя,
   * то будет осуществлен поиск подчиненных сотрудников только для руководителей указанного типа.
   * @param {number} limit - Максимальное количество подчиненных для поиска.
   * Указывается в случае, когда массив подчиненных руководителя высокого уровня является очень большим
   * и процесс поиска может быть достаточно долгим.
   * Если будет найдено больше записей, чем указанно, то будет возвращено только указанное количество,
   * а процесс поиска будет остановлен.
   * @param {string} fullnameContains - Символы, которые должны содержать ФИО подчиненных сотрудников.
   * @returns {number[]} Массив Id подчиненных сотрудников.
   * @example
   * ```
   * var curSubPersonIDsByManagerIDSearch = tools.get_sub_person_ids_by_func_manager_id(
   *  curUserID,
   *   null,
   *   null,
   *   null,
   *   search_fullname
   * );
   * ```
   */
  function get_sub_person_ids_by_func_manager_id(
    managerId: number,
    catalogNames?: string | null,
    bossType?: boolean | number | null,
    limit?: number | null,
    fullnameContains?: string
  ): number[];

  function get_sub_persons_by_func_manager_id(
    iManagerIDParam: unknown,
    sCatalogNamesParam: unknown,
    vBossType: unknown
  ): unknown;
  function get_all_subs_by_func_manager_id(_manager_id: unknown): unknown;
  function eval_code_page_url(_url: unknown, _doc_id: unknown, _rnd_id: unknown): unknown;
  function update_filter_conditions(
    _source_conditions: unknown,
    _catalog_name: unknown,
    _scheme_id: unknown,
    _set_flag: unknown
  ): unknown;
  function check_cur_user_admin_access(
    teObjectParam: unknown,
    curUser: unknown,
    fldAccessCalalogParam: unknown
  ): unknown;

  /**
   * Используется в Webtutor Administrator в форме редактирования условий документооборота.
   * Формирует строку на основе стандартных значений, доступных в выпадающем списке условий документооборота.
   * Эта строка в дальнейшем выполняется в функции eval для определения
   * видимости/редактирования объектов документооборота.
   * @param {ConditionBase} conditions - Структура, содержащая условия документооборота..
   * @param {number} workflowId - Id документооборота. Применяется, если используется условие с типом проверки
   * определенного поля в документообороте (type ='if_workflow_field_value')
   * или если не передан параметр <teWorkflowParam>.
   * @param {WorkflowDocumentTopElem} workflowDocumentTopElem - TopElem документооборота.
   * Применяется, если используется условие с типом проверки определенного поля в документообороте
   * (type='if_workflow_field_value').
   * @returns {string} Значение списка.
   */
  function build_condition_eval_str(
    conditions: ConditionBase,
    workflowId?: number,
    workflowDocumentTopElem?: WorkflowDocumentTopElem
  ): string;

  function update_document_persons(_obj_id: unknown, _obj_doc: unknown): unknown;
  function get_period_from_iso(_period: unknown): unknown;
  function get_notification_document(oDocumentParam: unknown): unknown;
  function get_cost_center_id_by_person_id(_person_id: unknown, personDocument: CollaboratorDocument): unknown;
  function get_cost_center_boss_by_person_id(_person_id: unknown, personDocument: CollaboratorDocument): unknown;
  function get_sub_boss_by_sub_id(_sub_id: unknown): unknown;
  function get_time(_str: unknown, _minite_flag: unknown, _second_flag: unknown): unknown;
  function enable_log_web_request(_flag: unknown): unknown;
  function get_field_title(_field: unknown, curLngWeb: unknown): unknown;
  function fill_field_names(
    FIELD_NAMES: unknown,
    FORM: unknown,
    ISCATALOG: unknown,
    EVALPATH: unknown,
    PRETITLE: unknown,
    CUSTOMFIELDSTYPEID: unknown
  ): unknown;
  function DateFunc(
    SRC1: unknown,
    SRC2: unknown,
    EVALSTR: unknown,
    PARAM1: unknown,
    PARAM2: unknown,
    PARAM3: unknown
  ): unknown;
  function get_report_storage_field(sDatatype: unknown): unknown;

  /**
   * Запускает построение настраиваемого отчета.
   * @param {number} reportId - Id отчета для построения.
   * @param {ActionReportDocumentTopElem} [actionReportDocumentTopElem] - Документ карточки отчета,
   * если она открыта в интерфейсе Webtutor Administrator.
   * Данные (последние изменения) будут браться из этого документа.
   * @param {ActionReportDocument} [actionReportDocument] - Документ отчета.
   * @param {string} [lngShort] - Неизвестный параметр.
   * @param {boolean} [metaOnly] - Неизвестный параметр.
   * @returns {TaskInfoBase|null} Документ сохраненного настраиваемого отчета.
   * @example
   * ```
   * tools.build_report_remote ( null, null, docCustomReport );
   * ServerEval('tools.build_report_remote ( ' + _cur_custom_report_id + ')' );
   * if (tools.build_report_remote(iCustomReportID, teCustomReport, null) != null) {
   *   vReportResult = teCustomReport.get_report_data(iCustomReportID, curPersonID);
   * } else {
   *   alert("custom_report.html: invalid custom_report_id [" +iCustomReportID+ "] PS.Name=" + Ps.Name);
   * }
   * ```
   */
  function build_report_remote(
    reportId: number,
    actionReportDocumentTopElem?: ActionReportDocumentTopElem,
    actionReportDocument?: ActionReportDocument,
    lngShort?: string,
    metaOnly?: boolean
  ): TaskInfoBase | null;

  function get_sub_hierarchy(NODE_ID: unknown, NODE_CATALOG: unknown, NODE_PARENT_FIELD: unknown): unknown;
  function process_print_form(oFormParam: unknown, iTopElemParam: unknown, bReturnFilename: unknown): unknown;
  function get_user_boss(OBJECT: unknown): unknown;
  function path_subs_filling(_path_subs: unknown, _person_id: unknown, personDocument: CollaboratorDocument): unknown;
  function str_time_from_mseconds(_mseconds: unknown): unknown;
  function person_list_staff_by_person_id(
    _personID: unknown,
    _personDoc: unknown,
    _depth: unknown,
    _top: unknown,
    _separator: unknown
  ): unknown;
  function check_field_name(FIELD: unknown, IS_STRICT_BEGIN: unknown): unknown;
  function get_doc_type_xmds(iDocTypeIDParam: unknown, teDocTypeParam: unknown): unknown;
  function generate_doc_type_xmds(DOC_TOPELEM: unknown, DOC_ID: unknown): unknown;
  function register_doc_type(docDocTypePARAM: unknown, iDocIDParam: unknown): unknown;
  function create_certificate_to_event(_even_id: unknown, _type_id: unknown, _doc_event: unknown): unknown;
  function create_certificate_to_person(
    _person_id: unknown,
    _type_id: unknown,
    eventId: number,
    personDocument: CollaboratorDocument,
    _type_doc: unknown,
    eventDocument: EventDocument
  ): unknown;
  function get_main_forum_entry_by_forum_entry_id(iForumEntryParam: unknown, teForumEntryParam: unknown): unknown;

  /**
   * Назначение квалификации.
   * @param {number} personId - Id сотрудника.
   * @param {number} eventId - Id мероприятия.
   * @param {number} qualificationId - Id квалификации.
   * @param {Date} assignmentDate - Дата присвоения квалификации.
   * @param {Date} expirationDate - Дата истечения квалификации.
   * @param {number[]} testLearnings - Массив законченных тестов сотрудника из параметра 1,
   * которые будут записаны в карточку присвоения квалификации.
   * @param {number[]} learnings - Массив законченных электронных курсов сотрудника из параметра 1,
   * которые будут записаны в карточку присвоения квалификации.
   * @param {number} sendMail - Числовое значение `0/1` – не отправлять/отправлять уведомление
   * сотруднику о присвоении квалификации.
   * @param {number} inProcess - Числовое значение `0/1` – не присвоена/в процессе
   * (`in_process`, если не передан, то по умолчанию = 0).
   * @param {boolean} assignTests - Булевое значение назначать/не назначать тесты сотруднику
   * присвоенной квалификации, если она в статусе `В процессе`.
   * @param {boolean} assignCourses - Булевое значение назначать/не назначать курсы
   * сотруднику присвоенной квалификации, если она в статусе `В процессе`.
   * @param {boolean} unconditionalAssignment - Булевое значение, если `false` и в статусе
   * `В процессе` и не заданы или равны `[]` параметры `6` и `7` – будет проверять
   * прохождение всех испытаний квалификации.
   * @param {QualificationAssignmentDocument} qualificationAssignmentDocument - Документ присвоенной
   * квалификации, меняется статус квалификации в зависимости от параметра `9`.
   * @param {QualificationDocumentTopElem} qualificationDocumentTopElem - XmlTopElem квалификации.
   * @param {CollaboratorDocumentTopElem} collaboratorDocumentTopElem - XmlTopElem сотрудника,
   * передается в параметрах функции при назначении теста/курса сотруднику.
   * @param {boolean} givePoint - Начислять баллы квалификации (вкладка `Бонус`), `true`,
   * если присвоение происходит из контекстного меню интерфейса администратора.
   * @returns {QualificationAssignmentDocument|null} Документ квалификации или null.
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
  ): QualificationAssignmentDocument | null;

  /**
   * Создает объект присвоенной квалификации для всех участников указанного мероприятия.
   * @param {number} eventId - Id мероприятия.
   * @param {EventDocumentTopElem} eventDocumentTopElem - Документ мероприятия.
   * @param {number} qualificationId - Id квалификации.
   * @param {Date} date - Дата присвоения квалификации.
   * @returns {number} Количество созданных присвоенных квалификаций.
   */
  function assign_qualification_to_event(
    eventId: number,
    eventDocumentTopElem: EventDocumentTopElem,
    qualificationId: number,
    date: Date
  ): number;

  function save_custom_ui_form(TEMPLATE: unknown): unknown;
  function get_custom_document_form(CATALOG_NAME: unknown): unknown;
  function get_custom_document_data_form_url(sCatalogNameParam: unknown): unknown;
  function knowledge_part_path_by_knowledge_part_id(
    _knowledge_partID: unknown,
    _knowledge_partDoc: unknown,
    _depth: unknown,
    _top: unknown,
    _separator: unknown
  ): unknown;
  function get_func_manager_substitution(arrFuncManagerParam: unknown, oParams: unknown): unknown;
  function get_uni_user_bosses(objectParam: unknown, oParams: unknown): unknown;
  function get_uni_user_boss(objectParam: unknown, oParams: unknown): unknown;
  function workflow_escalation_process(
    _source: unknown,
    _escalation_code: unknown,
    _workflow_id: unknown,
    _workflow_doc: unknown,
    _alterCurObjectID: unknown
  ): unknown;
  function get_user_comp_profiles(objectParam: unknown): unknown;
  function get_package_log(sUrlPackageParam: unknown, oParam: unknown): unknown;
  function package_log_filling(fldPackageTarget: unknown, fldSourceParam: unknown): unknown;
  function wvars_to_script(listWVarsPARAM: unknown, bWarily: unknown): unknown;
  function wvars_to_object(listWVarsPARAM: unknown): unknown;
  function copy_directory(sSourceDirPARAM: unknown, sDestDirPARAM: unknown): unknown;
  function send_event_notifications(eventId: number, _doc_event: unknown, send_type: unknown): unknown;
  function create_object_version(oDocParam: unknown): unknown;
  function get_mandatory_learnings(
    iPersonIDParam: unknown,
    iObjectIDParam: unknown,
    tePersonParam: unknown,
    teObjectParam: unknown
  ): unknown;
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
   * @param {number} iUserIDParam - Id сотрудника, для которого нужно определить список
   * типов функциональных руководителей.
   * @param {number} iObjectIDParam - Id объекта, относительно которого нужно определить список типов
   * функциональных руководителей.
   * Доступные типы объектов, Id которых может быть указан в данном аргументе:
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
   * @returns {any[]} Массив из каталожных записей типов функциональных руководителей (boss_types),
   * соответствующих указанному объекту и указанному пользователю.
   */
  function get_object_relative_boss_types(iUserIDParam: number, iObjectIDParam: number): unknown;

  function get_relative_operations_by_boss_types(arrBossTypesParam: unknown, sCatalogNameParam?: unknown): unknown;
  function get_object_relative_operations(
    iUserIDParam: unknown,
    iObjectIDParam: unknown,
    sCatalogNameParam: unknown
  ): unknown;
  function check_operation_rights(arrOperationsParam: unknown, teCurUserParam: unknown, sActionParam: unknown): unknown;
  function extend_object(oObjectRecipient: unknown, oObjectSource: unknown): unknown;

  /**
   * Заполняет свойства объекта-получателя из соответствующих свойств объекта-источника.
   * Заполняются только те свойства, названия которых указаны в переданном в функцию массиве.
   * @param {XmlTopElem} fldTarget - Объект-получатель.
   * @param {XmlTopElem} fldSourceParam - Объект-источник.
   * @param {string[]} arrFieldNamesParam - Массив строк с названиями полей для заполнения.
   */
  function assign_elems(fldTarget: XmlTopElem, fldSourceParam: XmlTopElem, arrFieldNamesParam: string[]): void;

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
  function register_doc_types_catalog_by_serialized_str(
    sSerializedCatalogsToRegPARAM: unknown,
    bServerCheck: unknown
  ): unknown;
  function register_doc_types_catalog(aCatalogsToRegPARAM: unknown, bServerCheck: unknown): unknown;
  function get_disp_name_value(oObjectParam: unknown): unknown;
  function read_selected_date(sSomeObjectPARAM: unknown): unknown;
  function get_sum_sid(sIdParam: unknown): unknown;
  function check_sum_sid(sIdParam: unknown, sSumParam: unknown): unknown;
  function recommend_library_material_to_person(
    iPersonIDParam: unknown,
    iMaterialIDParam: unknown,
    tePersonParam: unknown,
    teMaterialParam: unknown,
    bSendNotificationParam: unknown,
    iEducationPlanID: unknown
  ): unknown;
  function opt_date(oDateParam: unknown, oDefaultParam: unknown): unknown;

  /**
   * Возвращает строку с размером файла в соответствующих единицах измерения
   * с учетом размерности (байтах, килобайтах, мегабайтах и т.д.).
   * @param {number} bytes - Размер файла в байтах.
   * @param {boolean} [addUnit=true] - Необходимость указания единиц измерения размера файла
   * (true – указывать единицы измерения, false – не указывать).
   * @returns {string} Размер файла.
   */
  function beautify_file_size(bytes: number, addUnit?: boolean): string;

  /**
   * Возвращает строку для использования в запросах для поиска по full text индексу.
   * Строка параметр функция преобразуется в строку в зависимости от настроек базы.
   * @param {string} value - Строка для преобразования.
   * @returns {string} - Строка для использования в запросах для поиска по full text индексу.
   * @example
   * ```
   * tools.get_ft_value(value);
   * ```
   */
  function get_ft_value(value: string): string;

  function set_tenancy_by_host(sTenancyNameParam: unknown): unknown;

  /**
   * Создает строку XML для помещения агента с указанным id в очередь на выполнение.
   * Получается строка следующего вида:
   * ```
   * <queue_command>
   *   <type>run_agent</type>
   *   <agent_id TYPE="integer">0x4F71ACFB4EF22716</agent_id>
   *   <element_id/><elems_id_str/>
   *    <dDateParam>30.05.2115 16:44:07</dDateParam>
   *   <tenancy_name>dbo</tenancy_name>
   * </queue_command>
   * ```
   * Примечание – Проверка наличия агента с указанным id в системе не производится.
   * @param {number} agentId - Id агента. Значение данного аргумента не проверяется.
   * @param {number} [sElementIDParam] - Id объекта, над которым запускается агента (например, в списке).
   * Значение данного аргумента не проверяется.
   * При отсутствии данного аргумента указывается пустая строка ('').
   * @param {string} [elems] - Id объектов, разделенных символом «точка с запятой» (;),
   * над которыми запускается агент (например, в списке).
   * Значение данного аргумента не проверяется.
   * При отсутствии данного аргумента указывается пустая строка ('').
   * @param {Date} [date] - Дата запуска агента, по умолчанию текущая дата.
   * Значение данного аргумента не проверяется. При отсутствии данного аргумента указывается значение null.
   * @param {string} [tenancyName] - Код экземпляра системы (tenant) в multitenant системе,
   * в котором нужно запустить агент.
   * Значение данного аргумента не проверяется.
   * При отсутствии данного аргумента указывается пустая строка ('').
   * @returns {string} Строка XML для помещения агента в очередь на выполнение. Результат действия функции.
   * @example
   * ```
   * tools.get_agent_command_queue_xml(5724546796725872406, "", "", null, "");
   * tools.get_agent_command_queue_xml(5724546796725872406, 5724546796725872406, "", Date(), "dbo");
   * ```
   */
  function get_agent_command_queue_xml(
    agentId: number,
    sElementIDParam?: number,
    elems?: string,
    date?: Date,
    tenancyName?: string
  ): unknown;
  function get_uid_cached_doc(sUIDParam: unknown, sUrlParam: unknown): unknown;
  function check_and_refresh_cached_docs(sUrlParam: unknown): unknown;
  function log(sTextParam: unknown, sMessageTypeParam: unknown, bShowAdditionalInfoParam: unknown): unknown;
  function get_sibscriber_subscriptions(
    iPersonIDParam: unknown,
    sMessageTypeParam: unknown,
    bShowAdditionalInfoParam: unknown
  ): unknown;
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
  function include_person_to_personnel_reserve_position(
    iPersonIdParam: unknown,
    teRequestParam: unknown,
    iCareerReserveTypeIdParam: unknown,
    iPositionIdParam: unknown,
    strStateParam: unknown,
    iPositionCommonIdParam: unknown,
    sIncludeDateParam: unknown
  ): unknown;
  function extract_bfields_by_list(fldSPXML: unknown, sFieldList: unknown, bNoValidation: unknown): unknown;
  function get_opened_doc(teObjectParam: unknown): unknown;
  function set_project_participant_type(
    iProjectParticipantIDParam: unknown,
    docProjectParticipantParam: unknown,
    iBossTypeIDParam: unknown
  ): unknown;
  function create_project_participant(
    iObjectIDParam: unknown,
    teObjectParam: unknown,
    iProjectIDParam: unknown
  ): unknown;
  function set_profile_log(sIDParam: unknown, Request: unknown, sTypeParam: unknown): unknown;
  function clear_good_instance_status(oSourceGoodInstance: unknown): unknown;
  function get_form_upload_data(sIDParam: unknown): unknown;
  function set_field_to_form_upload_data(
    fldFormTarget: unknown,
    fldObjParam: unknown,
    oObjIDParam: unknown,
    bInvariableParam: unknown
  ): unknown;
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
  function resource_pic_envelope(
    sMode: unknown,
    vParam1: unknown,
    vParam2: unknown,
    vParam3: unknown,
    vParam4: unknown
  ): unknown;
  function file_source_get_upload_file_url(
    iFileSourceIdParam: unknown,
    sFileNameParam: unknown
  ): unknown;
  function file_source_upload_file(
    iFileSourceIdParam: unknown,
    sFileUrlParam: unknown,
    sTempFileUrlParam: unknown
  ): unknown;
  function file_source_get_file_to_save_url(
    iFileSourceIdParam: unknown,
    iResourceIdParam: unknown,
    sUidPARAM: unknown
  ): unknown;
  function file_source_get_files_list(
    iFileSourceIdParam: unknown
  ): unknown;
  function file_source_download_file(
    iFileSourceIdParam: unknown,
    sUidPARAM: unknown,
    oRequestPARAM: unknown,
    oResponsePARAM: unknown
  ): unknown;
  function file_source_get_file_url(
    iFileSourceIdParam: unknown,
    sUidPARAM: unknown
  ): unknown;
  function call_webinar_system_method(
    iWebinarSystemIdParam: unknown,
    sMethodNameParam: unknown,
    oParams: unknown
  ): unknown;
  function call_library_system_method(
    iLibrarySystemIdParam: unknown,
    sMethodNameParam: unknown,
    oParams: unknown
  ): unknown;
  function calculate_statistic_rec(
    iStatisticRecId: unknown,
    iObjectIdParam: unknown,
    bIgnorePeriodSettingsParam: unknown,
    bCalculateCatalogsParam: unknown
  ): unknown;
  function get_statistic_data(
    iStatisticRecId: unknown,
    iObjectIdParam: unknown,
    sPeriodTypeParam: unknown,
    dDateStartParam: unknown,
    dDateEndParam: unknown
  ): unknown;
  function obtain_statistic_data(
    StatisticRec: unknown,
    iObjectIdParam: unknown,
    sPeriodTypeParam: unknown,
    dDateStartParam: unknown,
    dDateEndParam: unknown,
    bVirtual: unknown,
    bForceRedo: unknown
  ): unknown;

  function assign_from_object(fldTarget: unknown, oSourceParam: unknown): unknown;
  function filling_learning_parts(TopElem: unknown): unknown;
  function parse_email_address(sAddressParam: unknown): unknown;
  function safe_execution(sCodeSaveExecutionParam: unknown, oEnvParam?: unknown): unknown;
  function get_content_access(iPersonID: unknown, tePerson: unknown): unknown;
  function update_content_access(
    idOrTE_UserPARAM: unknown,
    sCatalogPARAM: unknown,
    idOrTE_ObjectID: unknown,
    bCanEditPARAM: boolean,
    bCanDeletePARAM: boolean
  ): unknown;
  function set_default_content(teContentPARAM: unknown, teSubjectPARAM: unknown): unknown;
  function set_upgrade_locked(bParam: unknown): unknown;

  /**
   * Возвращает объект библиотеки.
   * @param {T} libraryName - Название библиотеки.
   * @returns {WebsoftDlls[T]} Класс работы с библиотекой.
   */
  function get_object_assembly<
    T extends keyof Websoft.Interfaces
  >(libraryName: T): T extends keyof Websoft.Interfaces ? Websoft.Interfaces[T] : T;

  function create_committee_member(
    iObjectIDParam: unknown,
    teObjectParam: unknown,
    iPersonnelCommitteeIDParam: unknown,
    strCommitteeMemberTypeParam: unknown
  ): unknown;
  function activate_poll_to_person(
    personId: unknown,
    oPollID: unknown,
    iPollProcedureID: unknown,
    iEducationPlanID: unknown
  ): unknown;
  function delete_poll_result(oPollResultParam: unknown, tePollParam: unknown): unknown;
  function array_opt_find_by_key(arrParam: unknown, sKeyParam: unknown, oValueParam: unknown): unknown;
  function check_periodity(fldPeriodityParam: unknown, _cur_date: unknown, iSleepSecParam: unknown): unknown;
  function upload_begin(sUrlParam: unknown, iLenghtParam: unknown): unknown;
  function upload_range(
    sIDParam: unknown,
    iStartIndexParam: unknown,
    iFinishIndexParam: unknown,
    sDataParam: unknown
  ): unknown;
  function upload_end(sIDParam: unknown): unknown;
  function is_simple_array_field(fldParam: unknown): unknown;
  function restore_doc(iObjectIDParam: unknown): unknown;
  function ValidateName(str: unknown, is_var: unknown): unknown;
  function check_event_fields(iEventID: unknown, docEvent: unknown, teEvent: unknown): unknown;

  /**
   * Вызов метода из библиотеки программного кода. После выполнения загрузки библиотека кэшируется.
   * Примечание - По существу, данная функция получает объект библиотеки по его имени и вызывает
   * (при помощи функции CallObjectMethod) определенный метод из указанной библиотеки с заданными параметрами.
   * Внимание! При выполнении функции tools.call_code_library_method имеется возможность
   * использования кода C#, записанного в карточке библиотеки.
   * Для карточек, в которых записан код JavaScript, данная возможность заблокирована.
   * В последнем случае имеется возможность использовать код, записанный в прикрепленном файле JavaScript.
   * @param {string} library - Код библиотеки программного кода, в которой описан вызываемый метод.
   * @param {string} method - Название вызываемого метода.
   * @param {T} arrParams - Строка в формате json, задающая значения массива параметров вызываемого метода.
   * Параметры перечисляются через запятую, и весь набор параметров заключается в квадратные скобки.
   * @returns {K} Результат выполнения метода <sMethodNameParam>, определяемый типом указанного метода.
   * @example
   * ```
   * // вызов метода получения иерархического списка этапов и задач программы развития карьеры
   * // GetCareerReserveHierStageTaskByID из библиотеки программного кода libTalentPool (Библиотека развития карьеры)
   * var oRes = tools.call_code_library_method(
   *   "libTalentPool",
   *   "GetCareerReserveHierStageTaskByID",
   *   [
   *     OptInt(iCareerReserveID, curObjectID)
   *   ]
   * )
   * ```
   */
  function call_code_library_method<T, K>(library: string, method: string, arrParams: T): K;

  function get_code_library_error_message(oLibResParam: unknown, oEnvParam: unknown): unknown;
  function get_code_library_result_object(oLibResParam: unknown, oEnvParam: unknown): unknown;
  function amgr_cancel_agent(roleUID: unknown, threadID: unknown): unknown;
  function amgr_kill_role(nodeId: unknown, roleUID: unknown): unknown;
  function get_doc_desc(teObjectParam: unknown): unknown;
  function get_client_data(sLogin: unknown, sPassword: unknown): unknown;
  function get_webinar_conversation_participants(iWebinarSystemId: unknown): unknown;
  function add_object_to_package(docObject: unknown, iObjectID: unknown, Screen: unknown, fldPackage: unknown): unknown;

  /**
   * Преобразование данных
   * (https://news.websoft.ru/_wt/wiki_base/6809298370262485009/base_wiki_article_type_id/6680054725638828770)
   * В данный раздел включены все функции библиотеки Tools, связанные с преобразованием данных,
   * в алфавитном порядке, кроме устаревших.
   */

  /**
   * Преобразует строку вида `+7-903-508-20-45` или `+7(903)508-20-45` в строку `79035082045 5082045`.
   * Функция используется для унификации поиска по телефонным номерам.
   * @param {string} strPhoneParam - Исходная строка для преобразования.
   * @returns {string | null} Преобразованная строка или значение `null`, если произошла ошибка.
   * @example
   * ```
   * sPhoneUnif1 = tools.build_phone("+7-903-508-20-45"); // 79035082045
   * sPhoneUnif2 = tools.build_phone("+7(903)508-20-45"); // 79035082045
   * sPhoneUnif3 = tools.build_phone("+7(903)508-2045"); // 5082045
   * ```
   */
  function build_phone(strPhoneParam: string): string | null;

  /**
   * Заменяет в строке пробел, «(» , «)», «+» и «-» на пустую сроку, а символы «,» и «;» - на пробел.
   * @param {string} strPhoneParam - Исходная строка для преобразования.
   * @returns {string|null} Преобразованная строка или значение `null`, если произошла ошибка.
   * @example
   * ```
   * sPhoneUnif1 = tools.build_simple_phone('+7-903-508-20-45');
   * sPhoneUnif2 = tools.build_simple_phone('+7(903)508-20-45');
   * sPhoneUnif3 = tools.build_simple_phone('+7(903)508-2045');
   * sPhoneUnif4 = tools.build_simple_phone('+7(903)508-2045; +7(903)508-2046; +7(903)508-2047');
   * ```
   */
  function build_simple_phone(strPhoneParam: string): string | null;

  /**
   * Функция выявляет домен и логин почтового адреса из электронного сообщения в стандарте X.400
   * и возвращает строку вида login@domainтекст_письма.
   * @param {string} _x40_email - Строка электронного сообщения в стандарте X.400,
   * из которого выделяется домен и логин электронного адреса.
   * @param {string} _end_mail - Строковое выражение, содержащее текст письма, который будет добавлен к login@domain.
   * @returns {string} Строковое выражение вида login@domain текст_письма.
   */
  function convert_email_from_x40(_x40_email: string, _end_mail: string): string;

  /**
   * Прообразовывает содержание строки для сохранения в теге <desc> ... </desc>.
   * Предназначено для преобразования тегов и ссылок на файлы в описании.
   * @param {string} _desc - Строка для преобразования.
   * @param {string} _temp_dir - Строчное выражение пути до папки с файлами, указанными в теге.
   * @returns {string} Преобразованная строка. Результат действия функции.
   */
  function desc_cleanup(_desc: string, _temp_dir?: string): string;

  /**
   * Преобразовывает html-файл, переданный в функцию, в файл в формате pdf и сохраняет его по указанному пути.
   * Примечание – Если указанный файл уже существует в файловой системе,
   * то он перезаписывается без выдачи предупреждения.
   * Если файл открыт в другой программе, то выдается ошибка с прерыванием выполняемого кода:
   * «Процесс не может получить доступ к файлу…,
   * так как этот файл используется другим процессом.».
   * @param {string} sHtmlText - Строка с html для преобразования.
   * @param {string} sResourcesDirPath - Путь до папки с ресурсами (изображения, стили и т.д.),
   * которые используются в html. При отсутствии таких ресурсов указывается пустая строка ('').
   * @param {string} sOutFilePath - Путь до файла, в который будет сохранен полученный файл pdf.
   * @returns {boolean} Возвращает значение `true`, если преобразование завершилось успешно,
   * или `false` - в противном случае.
   * @example
   * // returns true
   * tools.html_to_pdf(_str, "", UrlToFilePath(_filename));
   */
  function html_to_pdf(sHtmlText: string, sResourcesDirPath: string, sOutFilePath: string): boolean;

  /**
   * Преобразует массив или объект в строку указанного формата (json, xml).
   * @param {object | unknown[]} _aDataPARAM - Массив array или объект (object) для преобразования.
   * @param { string }[_sName=null] - Необязательный по умолчанию null.
   * Если не null, то параметр указывает название тега (для XML) или свойства (json),
   * в который будут заключены данные, полученные из _aDataPARAM.
   * @param { boolean } [_bObj=false] - Флаг true – преобразуется объект, false – преобразуется массив.
   * @param { string } [_sFormatPARAM=xml] - По умолчанию XML. Возможны два значения (json, xml).
   * Задает формат возвращаемой строки.
   * @returns {string} Строка, полученная из массива или объекта.
   * @example
   * tools.merge_text_array(_aPairs, (_sFormatPARAM == "json" ? null: _sNamePARAM), false, _sFormatPARAM);
   */
  function merge_text_array(
    _aDataPARAM: Object | unknown[],
    _sName?: string,
    _bObj?: boolean,
    _sFormatPARAM?: string
  ): string;

  /**
   * Сериализация объекта в строку/xml.
   * @param {T} arg - Объект для преобразования.
   * @param { string }[formatType=xml] - По умолчанию XML. Возможны два значения (json, xml).
   * Задает формат возвращаемой строки.
   * @param { number } [maxDepth=0] - По умолчанию 0. Глубина дочерних свойств объекта,
   * до которой можно спускаться. Должна быть не больше 5.
   * @param { stirng } [_sName=null] - Параметр указывает название тега (для XML),
   * в который будут заключены данные, полученные из _vObjectPARAM. По умолчанию <value></value>.
   * @returns {string} Строка, полученная из объекта.
   * @example
   * ```
   * tools.object_to_text(RESULT,'json')
   * tools.object_to_text(_vValue, _sFormatPARAM, iDepth + 1, _sName);
   * ```
   */
  function object_to_text<T>(arg: T, formatType: string, maxDepth?: number, _sName?: string): string;

  /**
   * Возвращает сроку с тегами XML, полученную из файла путь до которого, передан в параметрах функции.
   * Вызывает функцию tools.open_str_win_ini для разбора файла.
   * @param {string} sUrlParam - Строка с путем до файла.
   * @returns {string} Строка с путем до файла.
   */
  function open_doc_win_ini(sUrlParam: string): string;

  /**
   * Возвращает сроку с тегами XML, полученную из строки, переданной в параметрах функции.
   * Предполагается, что в функцию передается файл со значениями параметров,
   * потому в результирующей строке будут представлены название параметра и его значение.
   * @param {string} sFileText - Строка для разбора.
   * @returns {string} Строка с тегами XML.
   * @example
   * tools.open_str_win_ini(LoadUrlText(sUrlParam));
   */
  function open_str_win_ini(sFileText: string): string;

  /**
   * Преобразует строку в объект. Например, строку в формате json в объект. Или строку, содержащую XML, в объект.
   * @param {string} value - Строка в формате json или строка, содержащая XML.
   * @returns {T} Возвращаемый результат – полученный объекта (object).
   * @example
   * ```
   * tools.read_object(call_method("getSaveFileUrl", oParam, "json"));
   * tools.read_object(sResult);
   * ```
   */
  function read_object<T>(value: string): T;

  /**
   * Используется в процессе выгрузке/загрузки данных в WebTutor при интеграции с другими системами.
   * Заменяет в строке символы определенные символы в [].
   * [yyyy] меняется на 4 символа года из даты.
   * [yy] меняется на 2 последних символа года из даты.
   * [mm] и [m] меняется на месяц из даты.
   * [dd] и [d] меняется на день из даты.
   * [hh] и [h] меняется на часы из даты.
   * [mimi] и [mi] меняется на минуты из даты.
   * [ss] и [s] меняется на секунды из даты.
   * [AppDirectoryPath] меняется на функцию {@link AppDirectoryPath}().
   * @param {string} str - Стока для преобразования.
   * @param {Date} date - Дата, данные из которой берутся для замены символов в строке,
   * по умолчанию текущая дата и время.
   * @returns {string} Результирующая строка.
   * @example
   * ```
   * tools.replace_temlate_tags(_source.db_path);
   * ```
   */
  function replace_temlate_tags(str: string, date?: Date): string;

  /**
   * Преобразует в строку числовой параметр функции.
   * Если параметр отрицательный, то строка будет начинаться со знака «-».
   * @param {number} number - Число для преобразования в строку.
   * @returns {string} Строка.
   * @example
   * ```
   * tools.str_negative_number(TopElem.weight);
   * ```
   */
  function str_negative_number(number: number): string;
}
