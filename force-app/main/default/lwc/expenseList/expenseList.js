import { LightningElement, track, api } from "lwc";
import getAllExpense from "@salesforce/apex/expenseSelector.getAllExpense";
import { deleteRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

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

export default class ExpenseList extends LightningElement {
  @track columns = [
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
      label: "Pay Mode",
      fieldName: "Payment_Mode__c",
      type: "text"
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

  @api showModel = false;
  @api isView = false;
  @api isNew = false;
  @api isEdit = false;
  @api recordId;
  @api action;
  @api selectedExpense;

  @track error;
  @track data = [];
  @track showTable = false; //Used to render table after we get the data from apex controller
  @track recordsToDisplay = []; //Records to be displayed on the page
  @track rowNumberOffset = 0; //Row number

  // @wire(getAllExpense)
  // wGetAllExpense({
  //     error,
  //     data
  // }) {
  //     if (data) {
  //         let recs = [];
  //         for (let i = 0; i < data.length; i++) {
  //             let rec = {};
  //             rec.rowNumber = '' + (i + 1);
  //             rec.recLink = '/' + data[i].Id;
  //             rec = Object.assign(rec, data[i]);
  //             recs.push(rec);
  //         }
  //         this.data = recs;
  //         this.showTable = true;
  //     } else {
  //         this.error = error;
  //     }
  // }

  connectedCallback() {
    this.getExpenseList();
  }

  getExpenseList() {
    getAllExpense()
      .then((result) => {
        if (result) {
          let recs = [];
          for (let i = 0; i < result.length; i++) {
            let rec = {};
            rec.rowNumber = "" + (i + 1);
            rec.recLink = "/" + result[i].Id;
            rec = Object.assign(rec, result[i]);
            recs.push(rec);
          }
          this.data = recs;
          this.showTable = true;
        }
      })
      .catch((error) => {
        this.error = error;
      });
  }

  //Capture the event fired from the paginator component
  handlePaginatorChange(event) {
    this.recordsToDisplay = event.detail;
    if (
      Array.isArray(this.recordsToDisplay) &&
      this.recordsToDisplay.length > 0
    ) {
      this.rowNumberOffset = this.recordsToDisplay[0].rowNumber - 1;
    } else {
      this.rowNumberOffset = 0;
    }
  }

  handleRowAction(event) {
    this.isView = false;
    this.isEdit = false;
    this.showModel = false;
    const actionName = event.detail.action.name;
    const row = event.detail.row;
    this.recordId = row.Id;
    this.selectedExpense = row.Name;

    this.action = actionName;
    switch (actionName) {
      case "view":
        this.isView = true;
        break;
      case "edit":
        this.isEdit = true;
        break;
      case "delete":
        this.showModel = true;
        break;
      default:
    }
  }

  handleCloseModel(event) {
    let result = event.detail;
    if (result == "Yes") {
      this.deleteExpenseRecord(event);
    }
    this.showModel = false;
    console.log("Close Model Log = " + result);
  }

  createNew(event) {
    this.isNew = true;
    this.recordId = null;
  }

  hideComponect(event) {
    if (this.isNew) {
      this.isNew = false;
    } else if (this.isView) {
      this.isView = false;
    }
    if (this.isEdit) {
      this.isEdit = false;
    }
  }

  deleteExpenseRecord(event) {
    deleteRecord(this.recordId)
      .then(() => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Success",
            message: "Record Is  Deleted",
            variant: "success"
          })
        );
      })
      .catch((error) => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Error While Deleting record",
            message: error.message,
            variant: "error"
          })
        );
      });
  }
}
