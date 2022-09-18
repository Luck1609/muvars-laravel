/* eslint-disable no-sequences */
import MaterialTable from "@material-table/core";

export default function MTableComponent(props) {
  return (
    <div>
      <MaterialTable
        {...props}
        options={{
          selection: props.selectable,
          showTextRowsSelected: props.showTextRowsSelected,
          actionsColumnIndex: -1,
          draggable: false,
        }}
        style={{
          padding: "10px 20px",
          boxShadow: "none",
        }}
      />
    </div>
  );
}
