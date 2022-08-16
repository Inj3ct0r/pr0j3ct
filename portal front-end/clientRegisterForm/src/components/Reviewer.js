/*-Reviewer.js-*/

import './../styles/generic.css';
import React, { Fragment } from "react";
import Layout from './reviewerLayout';
import Body from './reviewerBody'

/* Supposedly, this was the reviewer page that is only allowed to the editors that will check the
   submitted articles, events and promotions, but since we dont have a State holder for the logged
   user it remains open to anyone, that could be solved by Redux, but then again, somebody's gotta
   do it ¯\_(ツ)_/¯ */

function Reviewer() {
  return (
    <Fragment>
      <div className="Reviewer">
        <Layout>
          <Body/>
        </Layout>
      </div>
    </Fragment>
  );
}

export default Reviewer;