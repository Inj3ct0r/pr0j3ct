/*-publisherForm.jsx-*/

/*  This is a dynamic page with conditional fields that depends on the FormData.js file, 
    for simplicity's sake we are going to work with a single page so that we can finish
    before the project deadline, so there will be some functions that will have no use,
    such as the page checker.

    Another thing to clarify, we get the components value checking the ID of their field
    instead of their label, this is because we have 2 tables, event and promotions, that
    have the same label names, creating various conflicts during testing, so i left it 
    the way it was where you have to check the formData to see what is the ID of your
    desired field, and if you ever need to create a new one just copy the previous field
    component and search Uuid 4 generator for a new id, its a bit clunky and very misleading,
    but hey!, it works!

    The comments starting with lowercase are from the original author, the uppercase ones
    are mine
*/

import React, { useState, useEffect } from "react";
import FieldGroup from "./publisherFieldGroup";
import Field from "./publisherField";
import Option from "./publisherOption";

// checks if conditional field meets the required criteria to be displayed
const fieldMeetsCondition = (values) => (field) => {
  if (field.conditional && field.conditional.field) {
    const segments = field.conditional.field.split("_");
    const fieldId = segments[segments.length - 1];
    return values[fieldId] === field.conditional.value;
  }
  return true;
};

const Form = ({ formData }) => {

  // Post url
  const serverApiUrlPromo = 'http://localhost:3001/promotions/post'
  const serverApiUrlEvent = 'http://localhost:3001/events/post'

  // Hooks of every field, since Id usage may be misleading
  const [name, setName] = useState("")
  const [details, setDetails] = useState("")
  const [sponsor, setSponsor] = useState("")
  const [target, setTarget] = useState("")
  const [preference, setPreference] = useState("")
  const [duration, setDuration] = useState("")
  const created_date = Date().toLocaleString()
  const modified_date = created_date

  const status = "Pendiente" // Stantard status for new published stuff

  // state to track the current page ID of the form
  const [page, setPage] = useState(0);

  // state to track the current form data that will be displayed
  const [currentPageData, setCurrentPageData] = useState(formData[page]);

  // track the values of the form fields
  const [values, setValues] = useState({});

  /* This is the most crucial part, the formData is parsed and we catch the fist "page" component that we find,
    based on that we extract all the options, field groups and fields so they can be used later in the render */
  // this effect will run when the `page` changes
  useEffect(() => {
    const upcomingPageData = formData[page];
    setCurrentPageData(upcomingPageData);
    setValues((currentValues) => {
      const newValues = upcomingPageData.fields.reduce((obj, field) => {
        if (field.component === "field_group") {
          for (const subField of field.fields) {
            obj[subField._uid] = "";
          }
        } else {
          obj[field._uid] = "";
        }

        return obj;
      }, {});

      return Object.assign({}, newValues, currentValues);
    });
  }, [page, formData]);

  // callback provided to components to update the main list of form values
  const fieldChanged = (fieldId, value) => {
    // use a callback to find the field in the value list and update it
    setValues((currentValues) => {
      // Update object values, then update hooks
      currentValues[fieldId] = value;
      // If the option changes, clear input fields and hook values
      if(fieldId === "bd90f44a-d479-49ae-ad66-c2c475dca66b"){
        Object.keys(values).forEach(key => {
          // We skip the option ID because otherwise the page wont work with an empty option value
          if(key === "bd90f44a-d479-49ae-ad66-c2c475dca66b"){}
          else{currentValues[key] = "";}
        });
      }
      // Update hooks of promotion
      if(fieldId === "fd783c11-862a-4e20-90f9-5132c40623fb"){setName(value)}
      if(fieldId === "5bf4cc18-a918-46a9-afc7-748b8d836558"){setDetails(value)}
      if(fieldId === "887c7391-1139-45f2-9250-a71fffaffbe7"){setTarget(value)}
      if(fieldId === "75961f81-1651-4923-ac60-0bb916bb3915"){setPreference(value)}
      if(fieldId === "c3ac593c-7b49-465b-994c-806842057c7a"){setDuration(value)}
      // Update hooks of event
      if(fieldId === "5b9b79d2-32f2-42a1-b89f-203dfc0b6b98"){setName(value)}
      if(fieldId === "6eff3638-80a7-4427-b07b-4c1be1c6b186"){setDetails(value)}
      if(fieldId === "7f885969-f8ba-40b9-bf5d-0d57bc9c6a8d"){setSponsor(value)}
      if(fieldId === "a0fabdb9-d4c5-4e04-97b9-0c480f42ec68"){setPreference(value)}
      if(fieldId === "f61233e8-565e-43d0-9c14-7d7f220c6020"){setDuration(value)}

      // Return the updated values, because the hooks are only used in the POST function
      return currentValues;
    });

    // this just fakes that we've updated the `currentPageData` to force a re-render in React
    // Kinda kills the "React way" of working but sometimes we just need to re-render
    setCurrentPageData((currentPageData) => {
      return Object.assign({}, currentPageData);
    });
  };

  // If the formData has multiple 'page' components, we include buttons to navegate through pages
  const navigatePages = (direction) => () => {
    const findNextPage = (page) => {
      const upcomingPageData = formData[page];
      if (upcomingPageData.conditional && upcomingPageData.conditional.field) {
        // we're going to a conditional page, make sure it's the right one
        const segments = upcomingPageData.conditional.field.split("_");
        const fieldId = segments[segments.length - 1];

        const fieldToMatchValue = values[fieldId];

        if (fieldToMatchValue !== upcomingPageData.conditional.value) {
          // if we didn't find a match, try the next page
          return findNextPage(direction === "next" ? page + 1 : page - 1);
        }
      }
      // all tests for the page we want to go to pass, so go to it
      return page;
    };

    setPage(findNextPage(direction === "next" ? page + 1 : page - 1));
  };

  // Determine if the current page requires a next and previous button, important for extreme cases like the first and last page
  const nextPage = navigatePages("next");
  const prevPage = navigatePages("prev");

  // Send data to BBDD
  const onSubmit = async (e) => {
    // Prevents page from refreshing on submit (so we can refresh AFTER the BBDD receives the POST)
    e.preventDefault();
    // Print each id with its value
    for (const [key, value] of Object.entries(values)) {
      console.log(`${key}: ${value}`);
    }
    // This is the ID of the radio options, "one" is for promotion and "two" is for event
    if(values["bd90f44a-d479-49ae-ad66-c2c475dca66b"]==="one"){
      try {
          // Simulate a curl post, sending our data in a body with headers and transforming it into JSON format
          const body = {name,details,target,preference,duration,status,created_date,modified_date}
          // Send data to BBDD
          const response = await fetch(serverApiUrlPromo, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
          })
          // Check response, useful for error handling
          console.log(response)
          // Redirect user to the current page after submit
          window.location = "/publish"

          return response.json()
      } 
      catch (err) {console.error(err.message)}
    }
    if(values["bd90f44a-d479-49ae-ad66-c2c475dca66b"]==="two"){
      try {
          const body = {name,details,sponsor,preference,duration,status,created_date,modified_date}
          const response = await fetch(serverApiUrlEvent, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
          })
          console.log(response)
          window.location = "/publish"

          return response.json()
      } 
      catch (err) {console.error(err.message)}
    }
    // No option was selected, so no value for our field, also the alert is in Spanish and everything here is English, but you know, Chilean page 
    else{alert("Porfavor seleccione el tipo de publicación")}
  };

  return (
    // Render all components contained in the currentPageData
    <form onSubmit={onSubmit}>
      <h2>{currentPageData.label}</h2>
      {currentPageData.fields
        .filter(fieldMeetsCondition(values))
        .map((field) => {
          // Depending of the component they are rendered with their corresponding attributes
          switch (field.component) {
            case "field_group":
              return (
                <FieldGroup
                  key={field._uid}
                  field={field}
                  fieldChanged={fieldChanged}
                  values={values}
                />
              );
            case "options":
              return (
                <Option
                  key={field._uid}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field._uid]}
                />
              );
            // Should change the default to NULL or something, but since we only work with 3 components its okay to put a field i guess
            default:
              return (
                <Field
                  key={field._uid}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field._uid]}
                />
              );
          }
        })}
      {page > 0 && <button onClick={prevPage}>Back</button>}&nbsp;
      {page < formData.length - 1 && <button onClick={nextPage}>Next</button>}
      <hr />
      <button type="button" onClick={() => console.log(created_date)}>Imprimir input</button>
      <p/>
      <button type="button" onClick={onSubmit}>Publicar</button>
    </form>
  );
};

export default Form;