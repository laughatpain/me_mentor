/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document, Office, require */

const ssoAuthHelper = require("./../helpers/ssoauthhelper");

Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("addSignatures").onclick = addSign;

   
  }
});
// finish tomorrow morning
function addSign(){
  var sign = document.querySelector('[name="email"]').value;
    if (sign === "")
      return;
  var ul = document.getElementById("myList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(sign));
  ul.appendChild(li);

  console.log(sign);
}


function function1() {
  var ul = document.getElementById("myList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("newEmail"));
  ul.appendChild(li);
}git 