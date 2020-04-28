import React from "react";
import Graph from "./Graph";
import InputForm from "./InputForm";
import Legend from "./Legend";

function TryIt() {
  return (
    <div>
      <p>
        This secion will contain the text area, the graph, and the legend of
        strings
      </p>
      <Graph />
      <InputForm />
      <Legend />
    </div>
  );
}

// three columns:

// 1).
//   text area to input string of text to check/add
//   button to add the string

// 2).
//  radar graph that displays text results layered

// 3).
//   legend that displays the different texts that have been entered
//   eacht text contains a delete option
//   a clear button at the bottom

export default TryIt;
