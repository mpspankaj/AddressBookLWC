const actions = [
	{
	  label: "View",
	  name: "view"
	},
	{
	  label: "Edit",
	  name: "edit"
	},
	{
	  label: "Delete",
	  name: "delete"
	}
];

export const COLUMNS = [
    {
      label: "Date",
      fieldName: "Date__c",
      type: "date"
    },
    {
      label: "Name",
      fieldName: "Name",
      type: "text"
    },
    {
      label: "Group",
      fieldName: "Expense_Group__c",
      type: "text"
    },
    {
      label: "Amount",
      fieldName: "Amount__c",
      type: "currency"
    },
    {
      label: "Remark",
      fieldName: "Remark__c",
      type: "text"
    },
    {
      type: "action",
      typeAttributes: {
        rowActions: actions
      }
    }
  ];