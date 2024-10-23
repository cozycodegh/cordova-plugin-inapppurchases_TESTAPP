//cozycode.ca (c) cordova-plugin-inapppurchases

//Enter product ids for testing here:
var product_id_1 = "";
var product_id_2 = "";
var product_id_3 = "";
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

/* (c) cozycode.ca */
function testPlugin(){
    try { inAppPurchases; }
    catch {
        showTestResults("Error: plugin not installed","run `cordova plugin add cordova-plugin-inapppurchases` to install to the current project");
        return false;
    }
    return true;
}
function testGet(){
    if (!testPlugin) return;
    var productId1 = document.getElementById("product1");
    if (!productId1){ alert("missing page element"); return; }
    var productId2 = document.getElementById("product2");
    if (!productId2){ alert("missing page element"); return; }
    var productId3 = document.getElementById("product3");
    if (!productId3){ alert("missing page element"); return; }
    productId1 = productId1.value;
    productId2 = productId2.value;
    productId3 = productId3.value;
    var all_product_ids = [];
    if (productId1) all_product_ids.push(productId1);
    if (productId2) all_product_ids.push(productId2);
    if (productId3) all_product_ids.push(productId3);
    //using plugin:
    inAppPurchases.getAllProductInfo(all_product_ids).then(function(products){
        showTestResults("getAllProductInfo(["+all_product_ids+"])",products);  
    }).catch(function(err){
        showTestResults("Error caught from getAllProductInfo(["+all_product_ids+"])",err);
    });
}
function testRestore(){
    if (!testPlugin) return;
    //using plugin:
    inAppPurchases.restorePurchases().then(function(products){
        showTestResults("restorePurchases()",products);  
    }).catch(function(err){
        showTestResults("Error caught from restorePurchases()",err);
    });
}
function testPurchase(productId){
    if (!testPlugin) return;
    //using plugin:
    inAppPurchases.purchase(productId).then(function(purchase){
        showTestResults("purchase("+productId+")",purchase);  
    }).catch(function(err){
        showTestResults("Error caught from purchase("+productId+")",err);
    });
}
function testCompletePurchase(productId){
    if (!testPlugin) return;
    //using plugin:
    inAppPurchases.completePurchase(productId).then(function(purchase){
        showTestResults("completePurchase("+productId+")",purchase);  
    }).catch(function(err){
        showTestResults("Error caught from completePurchase("+productId+")",err);
    });
}
function showTestResults(title,results){
    if (!testPlugin) return;
    var result_heading = document.getElementById("inAppPurchases_heading");
    var result_output = document.getElementById("inAppPurchases_result"); 
    if (!result_heading || !result_output){ 
        alert("missing page element");
        return;
    }
    result_heading.innerHTML = title;
    if (results != "") result_output.innerHTML = JSON.stringify(results);
    else result_output.innerHTML = "";
}
function testPurchase1(){
    if (!testPlugin) return;
    var productId1 = document.getElementById("product1");
    if (!productId1){ alert("missing page element"); return; }
    testPurchase(productId1.value);
}
function testPurchase2(){
    if (!testPlugin) return;
    var productId2 = document.getElementById("product2");
    if (!productId2){ alert("missing page element"); return; }
    testPurchase(productId2.value);
}
function testPurchase3(){
    if (!testPlugin) return;
    var productId3 = document.getElementById("product3");
    if (!productId3){ alert("missing page element"); return; }
    testPurchase(productId3.value);
}
function testCompletePurchase1(){
    if (!testPlugin) return;
    var productId1 = document.getElementById("product1");
    if (!productId1){ alert("missing page element"); return; }
    testCompletePurchase(productId1.value);
}
function testCompletePurchase2(){
    if (!testPlugin) return;
    var productId2 = document.getElementById("product2");
    if (!productId2){ alert("missing page element"); return; }
    testCompletePurchase(productId2.value);
}
function testCompletePurchase3(){
    if (!testPlugin) return;
    var productId3 = document.getElementById("product3");
    if (!productId3){ alert("missing page element"); return; }
    testCompletePurchase(productId3.value);
}
function clearResultOutput(){
    var clear_button = document.getElementById("clear_button");
    if (!clear_button){ alert("missing page element"); return; }
    showTestResults("","");
}
function startInAppPurchasesTest(){
    var pi1 = document.getElementById("product1");
    if (!pi1) alert("missing page element");
    else pi1.value = product_id_1;
    var pi2 = document.getElementById("product3");
    if (!pi2) alert("missing page element");
    else pi2.value = product_id_2;
    var pi3 = document.getElementById("product3");
    if (!pi3) alert("missing page element");
    else pi3.value = product_id_3;
    if (product_id_1 || product_id_2 || product_id_3){
        var inf = document.getElementById("enter_products");
        if (inf) inf.parentElement.removeChild(inf);
    }
    var purchase1 = document.getElementById("purchase1");
    if (!purchase1){ alert("missing page element p1"); }
    purchase1.onclick = testPurchase1;
    var purchase2 = document.getElementById("purchase2");
    if (!purchase2){ alert("missing page element p2"); }
    purchase2.onclick = testPurchase2;
    var purchase3 = document.getElementById("purchase3");
    if (!purchase3){ alert("missing page element p3"); }
    purchase3.onclick = testPurchase3;
    var completePurchase1 = document.getElementById("completePurchase1");
    if (!completePurchase1){ alert("missing page element cp1"); }
    completePurchase1.onclick = testCompletePurchase1;
    var completePurchase2 = document.getElementById("completePurchase2");
    if (!completePurchase2){ alert("missing page element cp2"); }
    completePurchase2.onclick = testCompletePurchase2;
    var completePurchase3 = document.getElementById("completePurchase3");
    if (!completePurchase3){ alert("missing page element cp3"); }
    completePurchase3.onclick = testCompletePurchase3;
    var get_all_product_info = document.getElementById("get_all_product_info");
    if (!get_all_product_info){ alert("missing page elemen gapit"); }
    get_all_product_info.onclick = testGet;
    var restore_purchases = document.getElementById("restore_purchases");
    if (!restore_purchases){ alert("missing page element rp"); }
    restore_purchases.onclick = testRestore;
    var clear_button = document.getElementById("clear_button");
    if (!clear_button){ alert("missing page element cb"); }
    clear_button.onclick = clearResultOutput;
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    // add event listeners for buttons
    startInAppPurchasesTest();
}
