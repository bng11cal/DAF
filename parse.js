var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
Parse.initialize("tLbiqADD10mxnXGkav2u6gwCUXM5BMKbaH2rNB3z", "c3JFFGdo7HIXM48YVI692ZAWCIkd5dMkF0c0JIXb");

/* Description: Gets all objects of class
 * Params: string class
 * Return: results, an array with all the objects of the class
 * Example: parseGetAllObjectsOfClass("Account") or parseGetAllObjectsOfClass("Service")
 */
function parseGetAllObjectsOfClass(class) {
  var C = Parse.Object.extend(class);
  var query = new Parse.Query(C);
  query.find({
  success: function(results) {
    console.log("Successfully retrieved " + results.length + " objects.");
    return results;
  },
  error: function(error) {
    console.log("Error code: " + error.code + "; Error message: " + error.message);
    return null;
  }
  });
}
