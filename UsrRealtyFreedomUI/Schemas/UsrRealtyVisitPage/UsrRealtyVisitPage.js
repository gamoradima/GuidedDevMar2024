define("UsrRealtyVisitPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_wkqm20p",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRealtyVisitFreedomUIDS_UsrVisitDateTime_h2djmgz",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitFreedomUIDS_UsrVisitDateTime_h2djmgz"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_f9131ov",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitFreedomUIDS_UsrPotentialCustomer_zkqpdmn",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitFreedomUIDS_UsrPotentialCustomer_zkqpdmn",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_dsxdk11",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_dsxdk11_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_f9131ov",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_t33ya68",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealtyVisitFreedomUIDS_UsrComment_n4ub9i3",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitFreedomUIDS_UsrComment_n4ub9i3"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrRealtyVisitFreedomUIDS_UsrVisitDateTime_h2djmgz": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrVisitDateTime"
						}
					},
					"UsrRealtyVisitFreedomUIDS_UsrPotentialCustomer_zkqpdmn": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrPotentialCustomer"
						}
					},
					"UsrRealtyVisitFreedomUIDS_UsrComment_n4ub9i3": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrRealtyVisitFreedomUIDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealtyVisitFreedomUI"
							}
						}
					},
					"primaryDataSourceName": "UsrRealtyVisitFreedomUIDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});