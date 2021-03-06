angular.module('app', [])
.controller('flipboardControl', function ($scope) {
    /* $scope.model for view model.

    * var viewModel = this ;
    * can be used in place of $scope with controller as syntax.
    * */
    $scope.model = {};
    $scope.responseTypes={};

    $scope.jsonStore = {
        "status": "OK",
        "message": "success",
        "result": {
            "id": 1,
            "name": "Notice Of Assignment By Assignee",
            "sections": [
                {
                    "id": 1,
                    "name": "Primary Details",
                    "section_no": 1,
                    "description": "",
                    "questions": [
                        {
                            "id": 1,
                            "response_type_id": 1,
                            "is_mandatory": true,
                            "body": "Name of the Debtor",
                            "associated_text": "Debtor's name",
                            "placeholder": "DEBTOR_NAME",
                            "options": []
                        },
                        {
                            "id": 2,
                            "response_type_id": 2,
                            "is_mandatory": true,
                            "body": "Date of execution",
                            "associated_text": "Date of execution",
                            "placeholder": "DATE",
                            "options": []
                        },
                        {
                            "id": 3,
                            "response_type_id": 1,
                            "is_mandatory": true,
                            "body": "Name of the Assignee",
                            "associated_text": "Assignee's name",
                            "placeholder": "ASSIGNEE_NAME",
                            "options": []
                        },
                        {
                            "id": 4,
                            "response_type_id": 1,
                            "is_mandatory": true,
                            "body": "Address of the Assignee",
                            "associated_text": "Assignee's address",
                            "placeholder": "ASSIGNEE_ADDRESS",
                            "options": []
                        },
                        {
                            "id": 5,
                            "response_type_id": 2,
                            "is_mandatory": true,
                            "body": "Date of the issuance of the instrument",
                            "associated_text": "Issuance date of instrument",
                            "placeholder": "DATE_INSTRUMENT_ISSUANCE",
                            "options": []
                        },
                        {
                            "id": 6,
                            "response_type_id": 1,
                            "is_mandatory": true,
                            "body": "Creditor Assignor's name",
                            "associated_text": "Name of creditor assignor",
                            "placeholder": "CREDITOR_ASSIGNOR_NAME",
                            "options": []
                        },
                        {
                            "id": 7,
                            "response_type_id": 1,
                            "is_mandatory": true,
                            "body": "Creditor Assignor's address",
                            "associated_text": "Address of the creditor's assignor",
                            "placeholder": "ADDRESS_CREDITOR_ASSIGNOR",
                            "options": []
                        },
                        {
                            "id": 8,
                            "response_type_id": 3,
                            "is_mandatory": true,
                            "body": "Executed amount",
                            "associated_text": "Executed amount",
                            "placeholder": "AMOUNT",
                            "options": []
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Secondary Details",
                    "section_no": 2,
                    "description": "",
                    "questions": [
                        {
                            "id": 9,
                            "response_type_id": 2,
                            "is_mandatory": true,
                            "body": "Execution date",
                            "associated_text": "Date of execution",
                            "placeholder": "EXECUTION_DATE",
                            "options": []
                        },
                        {
                            "id": 10,
                            "response_type_id": 1,
                            "is_mandatory": true,
                            "body": "Creditor assignor's name",
                            "associated_text": "Name of creditor assignor",
                            "placeholder": "CREDITOR_ASSIGNOR",
                            "options": []
                        },
                        {
                            "id": 11,
                            "response_type_id": 3,
                            "is_mandatory": true,
                            "body": "Amount due to be paid",
                            "associated_text": "Amount due",
                            "placeholder": "AMOUNT_DUE",
                            "options": []
                        },
                        {
                            "id": 12,
                            "response_type_id": 3,
                            "is_mandatory": true,
                            "body": "Amount lent by the Creditor's Assignor",
                            "associated_text": "Amount lent by the creditor's assignor",
                            "placeholder": "AMOUNT_LENT_CREDITOR_ASSIGNOR",
                            "options": []
                        },
                        {
                            "id": 13,
                            "response_type_id": 3,
                            "is_mandatory": true,
                            "body": "Amount inclusive of interest",
                            "associated_text": "Interest",
                            "placeholder": "AMOUNT_WITH_INTEREST",
                            "options": []
                        },
                        {
                            "id": 14,
                            "response_type_id": 2,
                            "is_mandatory": true,
                            "body": "Assignment Date",
                            "associated_text": "Date of assignment",
                            "placeholder": "ASSIGNMENT_DATE",
                            "options": []
                        }
                    ]
                }
            ],
            "response_types": [
                {
                    "id": 1,
                    "name": "Text",
                    "regex": ""
                },
                {
                    "id": 2,
                    "name": "Date",
                    "regex": ""
                },
                {
                    "id": 3,
                    "name": "Number",
                    "regex": ""
                },
                {
                    "id": 4,
                    "name": "Radio",
                    "regex": ""
                },
                {
                    "id": 5,
                    "name": "Radio button",
                    "regex": ""
                },
                {
                    "id": 6,
                    "name": "Image",
                    "regex": ""
                },
                {
                    "id": 7,
                    "name": "Option",
                    "regex": ""
                }
            ]
        }
    };

    /*for getting an object for response types from json store
    * to reduce the repeated itration over the json store in template*/

    angular.forEach($scope.jsonStore.result.response_types, function(value){
        $scope.responseTypes[value.id] =value.name;
    });
});