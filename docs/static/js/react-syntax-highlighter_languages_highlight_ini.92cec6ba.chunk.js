(this["webpackJsonp@material-docs/material-docs-documentation"]=this["webpackJsonp@material-docs/material-docs-documentation"]||[]).push([[80],{1206:function(n,e){function a(n){return n?"string"===typeof n?n:n.source:null}function s(){for(var n=arguments.length,e=new Array(n),s=0;s<n;s++)e[s]=arguments[s];var i=e.map((function(n){return a(n)})).join("");return i}n.exports=function(n){var e={className:"number",relevance:0,variants:[{begin:/([\+\-]+)?[\d]+_[\d_]+/},{begin:n.NUMBER_RE}]},i=n.COMMENT();i.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];var r={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)}/}]},t={className:"literal",begin:/\bon|off|true|false|yes|no\b/},o={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},c={begin:/\[/,end:/\]/,contains:[i,t,r,o,e,"self"],relevance:0},l=function(){for(var n=arguments.length,e=new Array(n),s=0;s<n;s++)e[s]=arguments[s];var i="("+e.map((function(n){return a(n)})).join("|")+")";return i}(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/);return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[i,{className:"section",begin:/\[+/,end:/\]+/},{begin:s(l,"(\\s*\\.\\s*",l,")*",s("(?=",/\s*=\s*[^#\s]/,")")),className:"attr",starts:{end:/$/,contains:[i,c,t,r,o,e]}}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_ini.92cec6ba.chunk.js.map