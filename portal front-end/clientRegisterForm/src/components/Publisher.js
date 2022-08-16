/*-Publisher.js-*/

// Provided from https://www.aaron-powell.com/posts/2020-12-10-dynamic-forms-with-react-hooks/

import "./../styles/generic.css";
import React from "react";
import Form from "./publisherForm";
import { formData } from "./publisherFormData";

/* This is data structure oriented, where you pass a fromData file as props that contains components that 
   simulate the page, these contain each option, field group and individual groups with their 
   corresponding ID and values that are parsed further in the .jsx files. */

export default function Publisher() {
  return (
    <div className="App" /*I'd like to change it to "Publisher" but this way the page remains centered*/>
      <Form formData={formData} />
    </div>
  );
}