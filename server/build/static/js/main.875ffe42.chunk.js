(this["webpackJsonptic-tac-toe-react"]=this["webpackJsonptic-tac-toe-react"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n),t.d(n,"calculateWinner",(function(){return r}));var a=t(1);function r(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var r=Object(a.a)(n[t],3),c=r[0],o=r[1],l=r[2];if(e[c]&&e[c]===e[o]&&e[c]===e[l])return{winner:e[c],line:n[t]}}return null}},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(3),o=t.n(c),l=(t(9),t(1));var i=function(e){var n="square ".concat(e.winner);return r.a.createElement("button",{className:n,onClick:e.onClick},e.value)};var u=function(e){var n=Array(Math.sqrt(e.squares.length)).fill(null),t=n;return n.map((function(a,c){var o=t.map((function(t,a){var o=c*n.length+a;return r.a.createElement("span",{key:o},function(n){var t=e.squares,a=e.winner;return r.a.createElement(i,{value:t[n],onClick:function(){return e.onClick(n)},winner:a&&a.includes(n)?"highlight-win":""})}(o))}));return r.a.createElement("div",{key:c},o)}))},s=t(10).calculateWinner;var m=function(e){var n,t=Object(a.useState)([{squares:Array(9).fill(null)}]),c=Object(l.a)(t,2),o=c[0],i=c[1],m=Object(a.useState)(0),v=Object(l.a)(m,2),f=v[0],h=v[1],g=Object(a.useState)(!0),d=Object(l.a)(g,2),E=d[0],b=d[1],k=Object(a.useState)(!1),w=Object(l.a)(k,2),q=w[0],p=w[1],O=function(e){h(e),b(e%2===0)},j=o.map((function(e,n){var t=n?"Go to move #".concat(n," (").concat(e.moveLocation[0],", ").concat(e.moveLocation[1],")"):"Go to game start";return console.log("".concat(n," - ").concat(f)),n===f?r.a.createElement("li",{key:n},r.a.createElement("button",{className:"move-selected",onClick:function(){return O(n)}},t)):r.a.createElement("li",{key:n},r.a.createElement("button",{onClick:function(){return O(n)}},t))})),y=o[f],C=s(y.squares);return C?n="Winner: "+C.winner:(console.log(y.squares),n=0===y.squares.filter((function(e){return null===e})).length?"Draw":"Next player: "+(E?"X":"O")),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(u,{squares:y.squares,onClick:function(e){return function(e){var n=o.slice(0,f+1),t=n[n.length-1].squares.slice();if(!s(t)&&!t[e]){var a=Math.sqrt(t.length);t[e]=E?"X":"O";var r=[Math.floor(e/a+1),e%a+1];i(n.concat([{squares:t,moveLocation:r}])),h(n.length),b(!E)}}(e)},winner:C&&C.line})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,n),r.a.createElement("button",{onClick:function(){p(!q)}},"Reverse moves"),r.a.createElement("ol",{reversed:q?"reverse":""},q?j.reverse():j)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.875ffe42.chunk.js.map