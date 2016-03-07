angular.module('app', ['ngMaterial'])
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
            "id": 70,
            "name": "Flat Rental Agreement",
            "sections": [{
                "id": 187,
                "name": "O W N E R",
                "section_no": 1,
                "description": "",
                "questions": [{
                    "id": 967,
                    "response_type_id": 4,
                    "is_mandatory": true,
                    "body": "PLEASE SELECT THE OWNER'S SALUTATION",
                    "associated_text": "",
                    "placeholder": "OWNER_SALUTATION",
                    "options": [{
                        "id": 163,
                        "name": "Mr.",
                        "priority": null
                    }, {
                        "id": 164,
                        "name": "Ms.",
                        "priority": null
                    }, {
                        "id": 165,
                        "name": "Mrs.",
                        "priority": null
                    }, {
                        "id": 166,
                        "name": "Dr.",
                        "priority": null
                    }]
                }, {
                    "id": 968,
                    "response_type_id": 1,
                    "is_mandatory": true,
                    "body": "ENTER THE OWNER'S NAME",
                    "associated_text": "",
                    "placeholder": "OWNER_NAME",
                    "options": []
                }, {
                    "id": 969,
                    "response_type_id": 4,
                    "is_mandatory": true,
                    "body": "CHOOSE ONE OF THE RELATIONSHIPS",
                    "associated_text": "",
                    "placeholder": "OWNER_RELATION",
                    "options": [{
                        "id": 167,
                        "name": "S/o",
                        "priority": null
                    }, {
                        "id": 168,
                        "name": "D/o",
                        "priority": null
                    }]
                }, {
                    "id": 970,
                    "response_type_id": 1,
                    "is_mandatory": true,
                    "body": "OWNER'S FATHER'S NAME",
                    "associated_text": "",
                    "placeholder": "OWNER_RELATION_NAME",
                    "options": []
                }, {
                    "id": 971,
                    "response_type_id": 3,
                    "is_mandatory": true,
                    "body": "AGE OF THE OWNER",
                    "associated_text": "",
                    "placeholder": "OWNER_AGE",
                    "options": []
                }, {
                    "id": 972,
                    "response_type_id": 1,
                    "is_mandatory": true,
                    "body": "CURRENT ADDRESS OF THE OWNER",
                    "associated_text": "",
                    "placeholder": "OWNER_ADDRESS",
                    "options": []
                }]
            }, {
                "id": 188,
                "name": "T E N A N T",
                "section_no": 2,
                "description": "",
                "questions": [{
                    "id": 973,
                    "response_type_id": 4,
                    "is_mandatory": true,
                    "body": "PLEASE SELECT THE TENANT'S SALUTATION",
                    "associated_text": "",
                    "placeholder": "TENANT_SALUTATION",
                    "options": [{
                        "id": 169,
                        "name": "Mr.",
                        "priority": null
                    }, {
                        "id": 170,
                        "name": "Ms.",
                        "priority": null
                    }, {
                        "id": 171,
                        "name": "Mrs.",
                        "priority": null
                    }, {
                        "id": 172,
                        "name": "Dr.",
                        "priority": null
                    }]
                }, {
                    "id": 974,
                    "response_type_id": 1,
                    "is_mandatory": true,
                    "body": "ENTER THE TENANT'S NAME",
                    "associated_text": "",
                    "placeholder": "TENANT_NAME",
                    "options": []
                }, {
                    "id": 975,
                    "response_type_id": 4,
                    "is_mandatory": true,
                    "body": "CHOOSE ONE OF THE RELATIONSHIPS",
                    "associated_text": "",
                    "placeholder": "TENANT_RELATION",
                    "options": [{
                        "id": 173,
                        "name": "S/o",
                        "priority": null
                    }, {
                        "id": 174,
                        "name": "D/o",
                        "priority": null
                    }, {
                        "id": 175,
                        "name": "W/o",
                        "priority": null
                    }]
                }, {
                    "id": 976,
                    "response_type_id": 1,
                    "is_mandatory": true,
                    "body": "TENANT'S FATHER'S NAME",
                    "associated_text": "",
                    "placeholder": "TENANT_RELATION_NAME",
                    "options": []
                }, {
                    "id": 977,
                    "response_type_id": 3,
                    "is_mandatory": true,
                    "body": "AGE OF THE TENANT",
                    "associated_text": "Age of the  tenant must be 18 yrs or above",
                    "placeholder": "TENANT_AGE",
                    "options": []
                }, {
                    "id": 978,
                    "response_type_id": 1,
                    "is_mandatory": true,
                    "body": "CURRENT ADDRESS OF THE TENANT",
                    "associated_text": "Actual start date of the tenancy, it could be an old date too",
                    "placeholder": "TENANT_ADDRESS",
                    "options": []
                }]
            }, {
                "id": 189,
                "name": "R E N T",
                "section_no": 3,
                "description": "",
                "questions": [{
                    "id": 979,
                    "response_type_id": 3,
                    "is_mandatory": true,
                    "body": "ENTER THE RENT AMOUNT",
                    "associated_text": "",
                    "placeholder": "RENT_AMOUNT",
                    "options": []
                }, {
                    "id": 980,
                    "response_type_id": 3,
                    "is_mandatory": true,
                    "body": "ENTER THE ADVANCE AMOUNT PAID",
                    "associated_text": "",
                    "placeholder": "ADVANCE_AMOUNT",
                    "options": []
                }, {
                    "id": 981,
                    "response_type_id": 4,
                    "is_mandatory": false,
                    "body": "PLEASE CHOOSE A MODE OF PAYMENT FOR ADVANCE",
                    "associated_text": "",
                    "placeholder": "MODE_OF_PAYMENT",
                    "options": [{
                        "id": 176,
                        "name": "Cash",
                        "priority": null
                    }, {
                        "id": 177,
                        "name": "Cheque",
                        "priority": null
                    }, {
                        "id": 178,
                        "name": "Bank transfer",
                        "priority": null
                    }]
                }, {
                    "id": 982,
                    "response_type_id": 3,
                    "is_mandatory": true,
                    "body": "ENTER THE TENURE OF THE TENANCY",
                    "associated_text": "",
                    "placeholder": "RENT_PERIOD",
                    "options": []
                }, {
                    "id": 983,
                    "response_type_id": 2,
                    "is_mandatory": true,
                    "body": "PLEASE CHOOSE THE EFFECTIVE DATE OF TENANCY",
                    "associated_text": "",
                    "placeholder": "TENANCY_EFFECTIVE_DATE",
                    "options": []
                }, {
                    "id": 984,
                    "response_type_id": 3,
                    "is_mandatory": true,
                    "body": "PERCENTAGE OF RENT INCREASE AFTER THE TENANCY TENURE",
                    "associated_text": "",
                    "placeholder": "RENT_INCREASE_PERCENTAGE",
                    "options": []
                }, {
                    "id": 985,
                    "response_type_id": 2,
                    "is_mandatory": true,
                    "body": "WHAT IS THE MONTHLY RENT PAYABLE DATE",
                    "associated_text": "",
                    "placeholder": "RENT_DATE",
                    "options": []
                }, {
                    "id": 986,
                    "response_type_id": 3,
                    "is_mandatory": true,
                    "body": "ENTER THE NOTICE PERIOD FOR VACATING THE FLAT",
                    "associated_text": "In months",
                    "placeholder": "VACATION_NOTICE",
                    "options": []
                }, {
                    "id": 987,
                    "response_type_id": 2,
                    "is_mandatory": false,
                    "body": "DATE OF PREPARATION OF DOCUMENT",
                    "associated_text": "Preparation date can only be a future date",
                    "placeholder": "DATE_OF_PREPARATION",
                    "options": []
                }]
            }, {
                "id": 190,
                "name": "P R O P E R T Y",
                "section_no": 4,
                "description": "",
                "questions": [{
                    "id": 988,
                    "response_type_id": 1,
                    "is_mandatory": true,
                    "body": "RENTED FLAT ADDRESS IN FULL",
                    "associated_text": "Including flat no, apartment name etc.,",
                    "placeholder": "RENTED_FLAT_ADDRESS",
                    "options": []
                }, {
                    "id": 989,
                    "response_type_id": 3,
                    "is_mandatory": true,
                    "body": "NUMBER OF BEDROOMS IN THE FLAT",
                    "associated_text": "",
                    "placeholder": "NO_OF_BEDROOMS",
                    "options": []
                }, {
                    "id": 990,
                    "response_type_id": 3,
                    "is_mandatory": true,
                    "body": "NUMBER OF HALLS IN THE FLAT",
                    "associated_text": "",
                    "placeholder": "NO_OF_HALLS",
                    "options": []
                }, {
                    "id": 991,
                    "response_type_id": 3,
                    "is_mandatory": true,
                    "body": "NUMBER OF KITCHENS IN THE FLAT",
                    "associated_text": "",
                    "placeholder": "NO_OF_KITCHEN",
                    "options": []
                }, {
                    "id": 992,
                    "response_type_id": 3,
                    "is_mandatory": true,
                    "body": "NUMBER OF BATHROOMS IN THE FLAT",
                    "associated_text": "",
                    "placeholder": "NO_OF_BATHROOMS",
                    "options": []
                }, {
                    "id": 993,
                    "response_type_id": 3,
                    "is_mandatory": true,
                    "body": "NUMBER OF PARKING SPACE ALLOTED",
                    "associated_text": "",
                    "placeholder": "NO_OF_PARKING",
                    "options": []
                }, {
                    "id": 994,
                    "response_type_id": 1,
                    "is_mandatory": true,
                    "body": "PLEASE INPUT THE DETAILS OF ALL FITTINGS \u0026 FIXTURES IN THE FLAT",
                    "associated_text": "Tubelights, fans, cfl, chimney etc.,",
                    "placeholder": "LIST_OF_FITTINGS_AND_FIXTURES",
                    "options": []
                }, {
                    "id": 995,
                    "response_type_id": 1,
                    "is_mandatory": true,
                    "body": "PLACE OF DOCUMENT PREPARATION",
                    "associated_text": "Place where the document is executed",
                    "placeholder": "PLACE",
                    "options": []
                }]
            }],
            "response_types": [{
                "id": 1,
                "name": "Text",
                "regex": ""
            }, {
                "id": 2,
                "name": "Date",
                "regex": ""
            }, {
                "id": 3,
                "name": "Number",
                "regex": ""
            }, {
                "id": 4,
                "name": "Radio",
                "regex": ""
            }, {
                "id": 5,
                "name": "Radio button",
                "regex": ""
            }, {
                "id": 6,
                "name": "Image",
                "regex": ""
            }, {
                "id": 7,
                "name": "Option",
                "regex": ""
            }, {
                "id": 8,
                "name": "Amount",
                "regex": ""
            }]
        }
    };

    /*for getting an object for response types from json store
    * to reduce the repeated itration over the json store in template*/

    angular.forEach($scope.jsonStore.result.response_types, function(value){
        $scope.responseTypes[value.id] =value.name;
    });
});