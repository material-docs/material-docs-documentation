(this["webpackJsonpmaterial-docs-documentation"]=this["webpackJsonpmaterial-docs-documentation"]||[]).push([[94],{1163:function(e,n){e.exports=function(e){var n="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",a="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?",i={className:"literal",begin:"\\b(t{1}|nil)\\b"},s={className:"number",variants:[{begin:a,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+a+" +"+a,end:"\\)"}]},t=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),b=e.COMMENT(";","$",{relevance:0}),l={begin:"\\*",end:"\\*"},c={className:"symbol",begin:"[:&]"+n},g={begin:n,relevance:0},o={begin:"\\|[^]*?\\|"},r={contains:[s,t,l,c,{begin:"\\(",end:"\\)",contains:["self",i,t,s,g]},g],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'\\|[^]*?\\|"}]},d={variants:[{begin:"'"+n},{begin:"#'"+n+"(::"+n+")*"}]},m={begin:"\\(\\s*",end:"\\)"},u={endsWithParent:!0,relevance:0};return m.contains=[{className:"name",variants:[{begin:n},{begin:"\\|[^]*?\\|"}]},u],u.contains=[r,d,m,i,s,t,b,l,c,o,g],{name:"Lisp",illegal:/\S/,contains:[s,e.SHEBANG(),i,t,b,r,d,m,g]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_lisp.983758e5.chunk.js.map