const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AdzHG-L3NmIWDl2k9I7yNxpva775T0dMkxh3ID6u4FuzHNjZ2-N4gnOjAC3bhjsVMR0J3Tom_03V57FO",
  client_secret: "ECjK2xmANnahDhcmjQRRAr80vtk-O3gsky5ZDUYJ0tsqS_KyFvSD5rqV7JxmWJL77uUAsgqVYJuBMVuo",
});

module.exports = paypal;
