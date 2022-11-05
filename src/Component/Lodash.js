import React from "react";
let _ = require("lodash");

const Lodash = () => {
  const arrOne = [
    { 
      id: 20,
      name: "alex" 
    },
    { 
      id: 30, 
      name: "alina" 
    },
  ];
  const arrTwo = [
    { 
      id: 40, 
      name: "hello" 
    },
    { 
      id: 30, 
      name: "world" 
    },
  ];
  const differenceWith = _.differenceWith(arrOne, arrTwo, _.isEqual);
  const xorBy = _.xorBy(arrOne, arrTwo, "id");
  const advance_task_a = { differenceWith, xorBy };
  console.log(advance_task_a);

  const str = ["u", "ec"];
  const arr = [
    { 
      storageVal: "u", 
      table: ["E", "F"] 
    },
    { 
      storageVal: "data", 
      id: 3 
    },
    { 
      storageVal: "ec", 
      table: ["E"] 
    },
  ];

  const advance_task_b = _.map(
    _.filter(arr, (value1) =>
    _.find(str, (value2) => value2 === value1.storageVal)
    ),
    (data3) => data3.table
  );
  console.log(advance_task_b);

  const a = [["E"], ["F"]];
  const advance_task_c = _.flatten(a);
  console.log(advance_task_c);

  const t = [
    ["E", "F"],
    [["F"], ["G"]],
  ];
  const advance_task_d = _.flattenDeep(t);
  const advance_task_d_1 = _.union(advance_task_d);
  console.log(advance_task_d_1);
};

export default Lodash;
