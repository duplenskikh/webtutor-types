import {arrayFunctionsNegativeTestNumberValue, arrayFunctionsNegativeTestStringValue, xmlDocumentForTesting} from "./mocks/arrayFunctions"

// THROWS Argument of type 'number' is not assignable to parameter of type 'string'.
ClipboardFormatAvailable(1);

// THROWS No overload matches this call.
ArrayCount(arrayFunctionsNegativeTestStringValue);

// THROWS No overload matches this call.
ArrayDirect(arrayFunctionsNegativeTestStringValue);

// THROWS No overload matches this call.
ArrayExtract(arrayFunctionsNegativeTestStringValue, "This");
// THROWS No overload matches this call.
ArrayExtract(arrayFunctionsNegativeTestNumberValue, "This.option1");

// THROWS No overload matches this call.
ArrayExtractKeys(arrayFunctionsNegativeTestStringValue, "This");
// THROWS No overload matches this call.
ArrayExtractKeys(arrayFunctionsNegativeTestNumberValue, "This.option1");
// THROWS No overload matches this call.
ArrayExtractKeys(xmlDocumentForTesting.TopElem.name, "This.name");

// THROWS No overload matches this call.
ArrayFind(arrayFunctionsNegativeTestStringValue, "This == 2");
// THROWS No overload matches this call.
ArrayFind(arrayFunctionsNegativeTestNumberValue, "This.option1 == 1");
// THROWS No overload matches this call.
ArrayFind(xmlDocumentForTesting.TopElem, "This.name == \"testValue\"");

// THROWS No overload matches this call.
ArrayFirstElem(arrayFunctionsNegativeTestStringValue);
// THROWS No overload matches this call.
ArrayFirstElem(arrayFunctionsNegativeTestNumberValue);
// THROWS No overload matches this call.
ArrayFirstElem(xmlDocumentForTesting.TopElem);

// THROWS No overload matches this call.
ArrayIntersect(arrayFunctionsNegativeTestStringValue, arrayFunctionsNegativeTestNumberValue);
// THROWS No overload matches this call.
ArrayIntersect(arrayFunctionsNegativeTestNumberValue, arrayFunctionsNegativeTestStringValue, "This.option1");
// THROWS No overload matches this call.
ArrayIntersect(xmlDocumentForTesting.TopElem.name, arrayFunctionsNegativeTestNumberValue, "This.name", "This.option1");

// THROWS No overload matches this call.
ArrayMax(arrayFunctionsNegativeTestStringValue, "This");
// THROWS No overload matches this call.
ArrayMax(arrayFunctionsNegativeTestNumberValue, "This.option1");
// THROWS No overload matches this call.
ArrayMax(xmlDocumentForTesting, "This.plan_date");

// THROWS No overload matches this call.
ArrayMerge(arrayFunctionsNegativeTestStringValue, "This", ";");
// THROWS No overload matches this call.
ArrayMerge(arrayFunctionsNegativeTestNumberValue, "This.option1", ";");
// THROWS No overload matches this call.
ArrayMerge(xmlDocumentForTesting.DocID, "This.plan_date", ";");

// THROWS No overload matches this call.
ArrayMin(arrayFunctionsNegativeTestStringValue, "This");
// THROWS No overload matches this call.
ArrayMin(arrayFunctionsNegativeTestNumberValue, "This.option1");
// THROWS No overload matches this call.
ArrayMin(xmlDocumentForTesting.TopElem.Doc, "This.plan_date");

// THROWS No overload matches this call.
ArrayOptFind(arrayFunctionsNegativeTestStringValue, "This < 1");
// THROWS No overload matches this call.
ArrayOptFind(arrayFunctionsNegativeTestNumberValue, "This.option1 > 2");
// THROWS No overload matches this call.
ArrayOptFind(xmlDocumentForTesting.TopElem, "This.name != \"testValue\"");

// THROWS No overload matches this call.
ArrayOptFindByKey(arrayFunctionsNegativeTestStringValue, 2);
// THROWS No overload matches this call.
ArrayOptFindByKey(arrayFunctionsNegativeTestNumberValue, 1, "option1");
// THROWS No overload matches this call.
ArrayOptFindByKey(xmlDocumentForTesting.TopElem, "testValue");

// THROWS No overload matches this call.
ArrayOptFindBySortedKey(arrayFunctionsNegativeTestStringValue, 2);
// THROWS No overload matches this call.
ArrayOptFindBySortedKey(arrayFunctionsNegativeTestNumberValue, 1, "option1");
// THROWS No overload matches this call.
ArrayOptFindBySortedKey(xmlDocumentForTesting, "testValue");

// THROWS No overload matches this call.
ArrayOptFirstElem(arrayFunctionsNegativeTestStringValue);
// THROWS No overload matches this call.
ArrayOptFirstElem(arrayFunctionsNegativeTestNumberValue, 1);
// THROWS No overload matches this call.
ArrayOptFirstElem(xmlDocumentForTesting.TopElem.person_id, "testValue");

// THROWS No overload matches this call.
ArrayOptMax(arrayFunctionsNegativeTestStringValue, "This");
// THROWS No overload matches this call.
ArrayOptMax(arrayFunctionsNegativeTestNumberValue, "This.option1");
// THROWS No overload matches this call.
ArrayOptMax(xmlDocumentForTesting.TopElem.person_id, "This.plan_date");

// THROWS No overload matches this call.
ArrayOptMin(arrayFunctionsNegativeTestStringValue, "This");
// THROWS No overload matches this call.
ArrayOptMin(arrayFunctionsNegativeTestNumberValue, "This.option1");
// THROWS No overload matches this call.
ArrayOptMin(xmlDocumentForTesting.TopElem.personnel_reserve_id, "This.plan_date");

// THROWS No overload matches this call.
ArrayRange(arrayFunctionsNegativeTestStringValue, 1, 3);
// THROWS No overload matches this call.
ArrayRange(arrayFunctionsNegativeTestNumberValue, 0, 10);
// THROWS No overload matches this call.
ArrayRange(xmlDocumentForTesting.TopElem, 3, 5);

// THROWS No overload matches this call.
ArraySelect(arrayFunctionsNegativeTestStringValue, "This < 1");
// THROWS No overload matches this call.
ArraySelect(arrayFunctionsNegativeTestNumberValue, "This.option1 > 2");
// THROWS No overload matches this call.
ArraySelect(xmlDocumentForTesting.TopElem, "This.name != \"testValue\"");

// THROWS No overload matches this call.
ArraySelectAll(arrayFunctionsNegativeTestStringValue);
// THROWS No overload matches this call.
ArraySelectAll(arrayFunctionsNegativeTestNumberValue);
// THROWS No overload matches this call.
ArraySelectAll(xmlDocumentForTesting);

// THROWS No overload matches this call.
ArraySelectByKey(arrayFunctionsNegativeTestStringValue, 1, "This");
// THROWS No overload matches this call.
ArraySelectByKey(arrayFunctionsNegativeTestNumberValue, 1, "option1");
// THROWS No overload matches this call.
ArraySelectByKey(xmlDocumentForTesting.TopElem.name, "testValue", "name");

// THROWS No overload matches this call.
ArraySelectBySortedKey(arrayFunctionsNegativeTestStringValue, 1, "a");
// THROWS No overload matches this call.
ArraySelectBySortedKey(arrayFunctionsNegativeTestNumberValue, 2, "option1");
// THROWS No overload matches this call.
ArraySelectBySortedKey(xmlDocumentForTesting.TopElem.Name, "testValue", "name");

// THROWS No overload matches this call.
ArraySelectDistinct(arrayFunctionsNegativeTestStringValue, "1");
// THROWS No overload matches this call.
ArraySelectDistinct(arrayFunctionsNegativeTestNumberValue, "testValue");
ArraySelectDistinct(xmlDocumentForTesting.TopElem.comment.ForeignArray, "testValue");

// THROWS No overload matches this call.
ArraySort(arrayFunctionsNegativeTestStringValue, "This", "-");
// THROWS No overload matches this call.
ArraySort(arrayFunctionsNegativeTestNumberValue, "option1", "-");
ArraySort(xmlDocumentForTesting.TopElem.person_id.ForeignElem, "name", "+");

// THROWS No overload matches this call.
ArraySum(arrayFunctionsNegativeTestStringValue, "This");
// THROWS No overload matches this call.
ArraySum(arrayFunctionsNegativeTestNumberValue, "option1");
// THROWS No overload matches this call.
ArraySum(xmlDocumentForTesting.TopElem.person_id, "id");
