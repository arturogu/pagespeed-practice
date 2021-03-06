(function(t){function e(t,e,n){switch(arguments.length){case 2:return null!=t?t:e
case 3:return null!=t?t:null!=e?e:n
default:throw Error("Implement me")}}function n(t,e){return Tt.call(t,e)}function s(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function a(t){wt.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function i(t,e){var n=!0
return _(function(){return n&&(a(t),n=!1),e.apply(this,arguments)},e)}function r(t,e){ge[t]||(a(e),ge[t]=!0)}function o(t,e){return function(n){return p(t.call(this,n),e)}}function u(t,e){return function(n){return this.localeData().ordinal(t.call(this,n),e)}}function c(t,e){var n,s,a=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(a,"months")
return 0>e-i?(n=t.clone().add(a-1,"months"),s=(e-i)/(i-n)):(n=t.clone().add(a+1,"months"),s=(e-i)/(n-i)),-(a+s)}function l(t,e,n){var s
return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?(s=t.isPM(n),s&&12>e&&(e+=12),s||12!==e||(e=0),e):e}function d(){}function h(t,e){e!==!1&&F(t),m(this,t),this._d=new Date(+t._d),De===!1&&(De=!0,wt.updateOffset(this),De=!1)}function f(t){var e=S(t),n=e.year||0,s=e.quarter||0,a=e.month||0,i=e.week||0,r=e.day||0,o=e.hour||0,u=e.minute||0,c=e.second||0,l=e.millisecond||0
this._milliseconds=+l+1e3*c+6e4*u+36e5*o,this._days=+r+7*i,this._months=+a+3*s+12*n,this._data={},this._locale=wt.localeData(),this._bubble()}function _(t,e){for(var s in e)n(e,s)&&(t[s]=e[s])
return n(e,"toString")&&(t.toString=e.toString),n(e,"valueOf")&&(t.valueOf=e.valueOf),t}function m(e,n){var s,a,i
if(t!==n._isAMomentObject&&(e._isAMomentObject=n._isAMomentObject),t!==n._i&&(e._i=n._i),t!==n._f&&(e._f=n._f),t!==n._l&&(e._l=n._l),t!==n._strict&&(e._strict=n._strict),t!==n._tzm&&(e._tzm=n._tzm),t!==n._isUTC&&(e._isUTC=n._isUTC),t!==n._offset&&(e._offset=n._offset),t!==n._pf&&(e._pf=n._pf),t!==n._locale&&(e._locale=n._locale),It.length>0)for(s in It)a=It[s],i=n[a],t!==i&&(e[a]=i)
return e}function y(t){return 0>t?Math.ceil(t):Math.floor(t)}function p(t,e,n){for(var s=""+Math.abs(t),a=t>=0;s.length<e;)s="0"+s
return(a?n?"+":"":"-")+s}function g(t,e){var n={milliseconds:0,months:0}
return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function M(t,e){var n
return e=H(e,t),t.isBefore(e)?n=g(t,e):(n=g(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n}function D(t,e){return function(n,s){var a,i
return null===s||isNaN(+s)||(r(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period)."),i=n,n=s,s=i),n="string"==typeof n?+n:n,a=wt.duration(n,s),w(this,a,t),this}}function w(t,e,n,s){var a=e._milliseconds,i=e._days,r=e._months
s=null==s?!0:s,a&&t._d.setTime(+t._d+a*n),i&&mt(t,"Date",_t(t,"Date")+i*n),r&&ft(t,_t(t,"Month")+r*n),s&&wt.updateOffset(t,i||r)}function Y(t){return"[object Array]"===Object.prototype.toString.call(t)}function v(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}function k(t,e,n){var s,a=Math.min(t.length,e.length),i=Math.abs(t.length-e.length),r=0
for(s=0;a>s;s++)(n&&t[s]!==e[s]||!n&&O(t[s])!==O(e[s]))&&r++
return r+i}function b(t){if(t){var e=t.toLowerCase().replace(/(.)s$/,"$1")
t=de[t]||he[e]||e}return t}function S(t){var e,s,a={}
for(s in t)n(t,s)&&(e=b(s),e&&(a[e]=t[s]))
return a}function T(e){var n,s
if(0===e.indexOf("week"))n=7,s="day"
else{if(0!==e.indexOf("month"))return
n=12,s="month"}wt[e]=function(a,i){var r,o,u=wt._locale[e],c=[]
if("number"==typeof a&&(i=a,a=t),o=function(t){var e=wt().utc().set(s,t)
return u.call(wt._locale,e,a||"")},null!=i)return o(i)
for(r=0;n>r;r++)c.push(o(r))
return c}}function O(t){var e=+t,n=0
return 0!==e&&isFinite(e)&&(n=e>=0?Math.floor(e):Math.ceil(e)),n}function U(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function W(t,e,n){return ct(wt([t,11,31+e-n]),e,n).week}function C(t){return G(t)?366:365}function G(t){return t%4===0&&t%100!==0||t%400===0}function F(t){var e
t._a&&-2===t._pf.overflow&&(e=t._a[Ut]<0||t._a[Ut]>11?Ut:t._a[Wt]<1||t._a[Wt]>U(t._a[Ot],t._a[Ut])?Wt:t._a[Ct]<0||t._a[Ct]>24||24===t._a[Ct]&&(0!==t._a[Gt]||0!==t._a[Ft]||0!==t._a[Pt])?Ct:t._a[Gt]<0||t._a[Gt]>59?Gt:t._a[Ft]<0||t._a[Ft]>59?Ft:t._a[Pt]<0||t._a[Pt]>999?Pt:-1,t._pf._overflowDayOfYear&&(Ot>e||e>Wt)&&(e=Wt),t._pf.overflow=e)}function P(e){return null==e._isValid&&(e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated,e._strict&&(e._isValid=e._isValid&&0===e._pf.charsLeftOver&&0===e._pf.unusedTokens.length&&e._pf.bigHour===t)),e._isValid}function L(t){return t?t.toLowerCase().replace("_","-"):t}function I(t){for(var e,n,s,a,i=0;i<t.length;){for(a=L(t[i]).split("-"),e=a.length,n=L(t[i+1]),n=n?n.split("-"):null;e>0;){if(s=x(a.slice(0,e).join("-")))return s
if(n&&n.length>=e&&k(a,n,!0)>=e-1)break
e--}i++}return null}function x(t){var e=null
if(!Lt[t]&&xt)try{e=wt.locale(),require("./locale/"+t),wt.locale(e)}catch(n){}return Lt[t]}function H(t,e){var n,s
return e._isUTC?(n=e.clone(),s=(wt.isMoment(t)||v(t)?+t:+wt(t))-+n,n._d.setTime(+n._d+s),wt.updateOffset(n,!1),n):wt(t).local()}function A(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function z(t){var e,n,s=t.match(Zt)
for(e=0,n=s.length;n>e;e++)pe[s[e]]?s[e]=pe[s[e]]:s[e]=A(s[e])
return function(a){var i=""
for(e=0;n>e;e++)i+=s[e]instanceof Function?s[e].call(a,t):s[e]
return i}}function Z(t,e){return t.isValid()?(e=E(e,t.localeData()),fe[e]||(fe[e]=z(e)),fe[e](t)):t.localeData().invalidDate()}function E(t,e){function n(t){return e.longDateFormat(t)||t}var s=5
for(Et.lastIndex=0;s>=0&&Et.test(t);)t=t.replace(Et,n),Et.lastIndex=0,s-=1
return t}function N(t,e){var n,s=e._strict
switch(t){case"Q":return Kt
case"DDDD":return ee
case"YYYY":case"GGGG":case"gggg":return s?ne:qt
case"Y":case"G":case"g":return ae
case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return s?se:Vt
case"S":if(s)return Kt
case"SS":if(s)return te
case"SSS":if(s)return ee
case"DDD":return jt
case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Jt
case"a":case"A":return e._locale._meridiemParse
case"x":return Qt
case"X":return Xt
case"Z":case"ZZ":return Rt
case"T":return Bt
case"SSSS":return $t
case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return s?te:Nt
case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Nt
case"Do":return s?e._locale._ordinalParse:e._locale._ordinalParseLenient
default:return n=RegExp(X(Q(t.replace("\\","")),"i"))}}function j(t){t=t||""
var e=t.match(Rt)||[],n=e[e.length-1]||[],s=(n+"").match(ce)||["-",0,0],a=+(60*s[1])+O(s[2])
return"+"===s[0]?a:-a}function q(t,e,n){var s,a=n._a
switch(t){case"Q":null!=e&&(a[Ut]=3*(O(e)-1))
break
case"M":case"MM":null!=e&&(a[Ut]=O(e)-1)
break
case"MMM":case"MMMM":s=n._locale.monthsParse(e,t,n._strict),null!=s?a[Ut]=s:n._pf.invalidMonth=e
break
case"D":case"DD":null!=e&&(a[Wt]=O(e))
break
case"Do":null!=e&&(a[Wt]=O(parseInt(e.match(/\d{1,2}/)[0],10)))
break
case"DDD":case"DDDD":null!=e&&(n._dayOfYear=O(e))
break
case"YY":a[Ot]=wt.parseTwoDigitYear(e)
break
case"YYYY":case"YYYYY":case"YYYYYY":a[Ot]=O(e)
break
case"a":case"A":n._meridiem=e
break
case"h":case"hh":n._pf.bigHour=!0
case"H":case"HH":a[Ct]=O(e)
break
case"m":case"mm":a[Gt]=O(e)
break
case"s":case"ss":a[Ft]=O(e)
break
case"S":case"SS":case"SSS":case"SSSS":a[Pt]=O(1e3*("0."+e))
break
case"x":n._d=new Date(O(e))
break
case"X":n._d=new Date(1e3*parseFloat(e))
break
case"Z":case"ZZ":n._useUTC=!0,n._tzm=j(e)
break
case"dd":case"ddd":case"dddd":s=n._locale.weekdaysParse(e),null!=s?(n._w=n._w||{},n._w.d=s):n._pf.invalidWeekday=e
break
case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":t=t.substr(0,1)
case"gggg":case"GGGG":case"GGGGG":t=t.substr(0,2),e&&(n._w=n._w||{},n._w[t]=O(e))
break
case"gg":case"GG":n._w=n._w||{},n._w[t]=wt.parseTwoDigitYear(e)}}function V(t){var n,s,a,i,r,o,u
n=t._w,null!=n.GG||null!=n.W||null!=n.E?(r=1,o=4,s=e(n.GG,t._a[Ot],ct(wt(),1,4).year),a=e(n.W,1),i=e(n.E,1)):(r=t._locale._week.dow,o=t._locale._week.doy,s=e(n.gg,t._a[Ot],ct(wt(),r,o).year),a=e(n.w,1),null!=n.d?(i=n.d,r>i&&++a):i=null!=n.e?n.e+r:r),u=lt(s,a,i,o,r),t._a[Ot]=u.year,t._dayOfYear=u.dayOfYear}function $(t){var n,s,a,i,r=[]
if(!t._d){for(a=R(t),t._w&&null==t._a[Wt]&&null==t._a[Ut]&&V(t),t._dayOfYear&&(i=e(t._a[Ot],a[Ot]),t._dayOfYear>C(i)&&(t._pf._overflowDayOfYear=!0),s=it(i,0,t._dayOfYear),t._a[Ut]=s.getUTCMonth(),t._a[Wt]=s.getUTCDate()),n=0;3>n&&null==t._a[n];++n)t._a[n]=r[n]=a[n]
for(;7>n;n++)t._a[n]=r[n]=null==t._a[n]?2===n?1:0:t._a[n]
24===t._a[Ct]&&0===t._a[Gt]&&0===t._a[Ft]&&0===t._a[Pt]&&(t._nextDay=!0,t._a[Ct]=0),t._d=(t._useUTC?it:at).apply(null,r),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[Ct]=24)}}function J(t){var e
t._d||(e=S(t._i),t._a=[e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],$(t))}function R(t){var e=new Date
return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function B(e){if(e._f===wt.ISO_8601)return tt(e),t
e._a=[],e._pf.empty=!0
var n,s,a,i,r,o=""+e._i,u=o.length,c=0
for(a=E(e._f,e._locale).match(Zt)||[],n=0;n<a.length;n++)i=a[n],s=(o.match(N(i,e))||[])[0],s&&(r=o.substr(0,o.indexOf(s)),r.length>0&&e._pf.unusedInput.push(r),o=o.slice(o.indexOf(s)+s.length),c+=s.length),pe[i]?(s?e._pf.empty=!1:e._pf.unusedTokens.push(i),q(i,s,e)):e._strict&&!s&&e._pf.unusedTokens.push(i)
e._pf.charsLeftOver=u-c,o.length>0&&e._pf.unusedInput.push(o),e._pf.bigHour===!0&&e._a[Ct]<=12&&(e._pf.bigHour=t),e._a[Ct]=l(e._locale,e._a[Ct],e._meridiem),$(e),F(e)}function Q(t){return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,s,a){return e||n||s||a})}function X(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function K(e){var n,a,i,r,o
if(0===e._f.length)return e._pf.invalidFormat=!0,e._d=new Date(NaN),t
for(r=0;r<e._f.length;r++)o=0,n=m({},e),null!=e._useUTC&&(n._useUTC=e._useUTC),n._pf=s(),n._f=e._f[r],B(n),P(n)&&(o+=n._pf.charsLeftOver,o+=10*n._pf.unusedTokens.length,n._pf.score=o,(null==i||i>o)&&(i=o,a=n))
_(e,a||n)}function tt(t){var e,n,s=t._i,a=ie.exec(s)
if(a){for(t._pf.iso=!0,e=0,n=oe.length;n>e;e++)if(oe[e][1].exec(s)){t._f=oe[e][0]+(a[6]||" ")
break}for(e=0,n=ue.length;n>e;e++)if(ue[e][1].exec(s)){t._f+=ue[e][0]
break}s.match(Rt)&&(t._f+="Z"),B(t)}else t._isValid=!1}function et(t){tt(t),t._isValid===!1&&(delete t._isValid,wt.createFromInputFallback(t))}function nt(t,e){var n,s=[]
for(n=0;n<t.length;++n)s.push(e(t[n],n))
return s}function st(e){var n,s=e._i
s===t?e._d=new Date:v(s)?e._d=new Date(+s):null!==(n=Ht.exec(s))?e._d=new Date(+n[1]):"string"==typeof s?et(e):Y(s)?(e._a=nt(s.slice(0),function(t){return parseInt(t,10)}),$(e)):"object"==typeof s?J(e):"number"==typeof s?e._d=new Date(s):wt.createFromInputFallback(e)}function at(t,e,n,s,a,i,r){var o=new Date(t,e,n,s,a,i,r)
return 1970>t&&o.setFullYear(t),o}function it(t){var e=new Date(Date.UTC.apply(null,arguments))
return 1970>t&&e.setUTCFullYear(t),e}function rt(t,e){if("string"==typeof t)if(isNaN(t)){if(t=e.weekdaysParse(t),"number"!=typeof t)return null}else t=parseInt(t,10)
return t}function ot(t,e,n,s,a){return a.relativeTime(e||1,!!n,t,s)}function ut(t,e,n){var s=wt.duration(t).abs(),a=St(s.as("s")),i=St(s.as("m")),r=St(s.as("h")),o=St(s.as("d")),u=St(s.as("M")),c=St(s.as("y")),l=a<_e.s&&["s",a]||1===i&&["m"]||i<_e.m&&["mm",i]||1===r&&["h"]||r<_e.h&&["hh",r]||1===o&&["d"]||o<_e.d&&["dd",o]||1===u&&["M"]||u<_e.M&&["MM",u]||1===c&&["y"]||["yy",c]
return l[2]=e,l[3]=+t>0,l[4]=n,ot.apply({},l)}function ct(t,e,n){var s,a=n-e,i=n-t.day()
return i>a&&(i-=7),a-7>i&&(i+=7),s=wt(t).add(i,"d"),{week:Math.ceil(s.dayOfYear()/7),year:s.year()}}function lt(t,e,n,s,a){var i,r,o=it(t,0,1).getUTCDay()
return o=0===o?7:o,n=null!=n?n:a,i=a-o+(o>s?7:0)-(a>o?7:0),r=7*(e-1)+(n-a)+i+1,{year:r>0?t:t-1,dayOfYear:r>0?r:C(t-1)+r}}function dt(e){var n,s=e._i,a=e._f
return e._locale=e._locale||wt.localeData(e._l),null===s||a===t&&""===s?wt.invalid({nullInput:!0}):("string"==typeof s&&(e._i=s=e._locale.preparse(s)),wt.isMoment(s)?new h(s,!0):(a?Y(a)?K(e):B(e):st(e),n=new h(e),n._nextDay&&(n.add(1,"d"),n._nextDay=t),n))}function ht(t,e){var n,s
if(1===e.length&&Y(e[0])&&(e=e[0]),!e.length)return wt()
for(n=e[0],s=1;s<e.length;++s)e[s][t](n)&&(n=e[s])
return n}function ft(t,e){var n
return"string"==typeof e&&(e=t.localeData().monthsParse(e),"number"!=typeof e)?t:(n=Math.min(t.date(),U(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t)}function _t(t,e){return t._d["get"+(t._isUTC?"UTC":"")+e]()}function mt(t,e,n){return"Month"===e?ft(t,n):t._d["set"+(t._isUTC?"UTC":"")+e](n)}function yt(t,e){return function(n){return null!=n?(mt(this,t,n),wt.updateOffset(this,e),this):_t(this,t)}}function pt(t){return 400*t/146097}function gt(t){return 146097*t/400}function Mt(t){wt.duration.fn[t]=function(){return this._data[t]}}function Dt(t){"undefined"==typeof ender&&(Yt=bt.moment,t?bt.moment=i("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",wt):bt.moment=wt)}for(var wt,Yt,vt,kt="2.9.0",bt="undefined"==typeof global||"undefined"!=typeof window&&window!==global.window?this:global,St=Math.round,Tt=Object.prototype.hasOwnProperty,Ot=0,Ut=1,Wt=2,Ct=3,Gt=4,Ft=5,Pt=6,Lt={},It=[],xt="undefined"!=typeof module&&module&&module.exports,Ht=/^\/?Date\((\-?\d+)/i,At=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,zt=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Zt=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Et=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Nt=/\d\d?/,jt=/\d{1,3}/,qt=/\d{1,4}/,Vt=/[+\-]?\d{1,6}/,$t=/\d+/,Jt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Rt=/Z|[\+\-]\d\d:?\d\d/gi,Bt=/T/i,Qt=/[\+\-]?\d+/,Xt=/[\+\-]?\d+(\.\d{1,3})?/,Kt=/\d/,te=/\d\d/,ee=/\d{3}/,ne=/\d{4}/,se=/[+-]?\d{6}/,ae=/[+-]?\d+/,ie=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,re="YYYY-MM-DDTHH:mm:ssZ",oe=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],ue=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ce=/([\+\-]|\d\d)/gi,le=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),de={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},he={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},fe={},_e={s:45,m:45,h:22,d:26,M:11},me="DDD w W M D d".split(" "),ye="M D H h m s w W".split(" "),pe={M:function(){return this.month()+1},MMM:function(t){return this.localeData().monthsShort(this,t)},MMMM:function(t){return this.localeData().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.localeData().weekdaysMin(this,t)},ddd:function(t){return this.localeData().weekdaysShort(this,t)},dddd:function(t){return this.localeData().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var t=this.year(),e=t>=0?"+":"-"
return e+p(Math.abs(t),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return O(this.milliseconds()/100)},SS:function(){return p(O(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var t=this.utcOffset(),e="+"
return 0>t&&(t=-t,e="-"),e+p(O(t/60),2)+":"+p(O(t)%60,2)},ZZ:function(){var t=this.utcOffset(),e="+"
return 0>t&&(t=-t,e="-"),e+p(O(t/60),2)+p(O(t)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},ge={},Me=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"],De=!1;me.length;)vt=me.pop(),pe[vt+"o"]=u(pe[vt],vt)
for(;ye.length;)vt=ye.pop(),pe[vt+vt]=o(pe[vt],2)
pe.DDDD=o(pe.DDD,3),_(d.prototype,{set:function(t){var e,n
for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e
this._ordinalParseLenient=RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t,e,n){var s,a,i
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;12>s;s++){if(a=wt.utc([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(i="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[s]=RegExp(i.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[s].test(t))return s
if(n&&"MMM"===e&&this._shortMonthsParse[s].test(t))return s
if(!n&&this._monthsParse[s].test(t))return s}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},weekdaysParse:function(t){var e,n,s
for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(n=wt([2e3,1]).day(e),s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=RegExp(s.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t]
return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},isPM:function(t){return"p"===(t+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,e,n){var s=this._calendar[t]
return"function"==typeof s?s.apply(e,[n]):s},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,s){var a=this._relativeTime[n]
return"function"==typeof a?a(t,e,n,s):a.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"]
return"function"==typeof n?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(t){return t},postformat:function(t){return t},week:function(t){return ct(t,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},firstDayOfWeek:function(){return this._week.dow},firstDayOfYear:function(){return this._week.doy},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),wt=function(e,n,a,i){var r
return"boolean"==typeof a&&(i=a,a=t),r={},r._isAMomentObject=!0,r._i=e,r._f=n,r._l=a,r._strict=i,r._isUTC=!1,r._pf=s(),dt(r)},wt.suppressDeprecationWarnings=!1,wt.createFromInputFallback=i("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),wt.min=function(){var t=[].slice.call(arguments,0)
return ht("isBefore",t)},wt.max=function(){var t=[].slice.call(arguments,0)
return ht("isAfter",t)},wt.utc=function(e,n,a,i){var r
return"boolean"==typeof a&&(i=a,a=t),r={},r._isAMomentObject=!0,r._useUTC=!0,r._isUTC=!0,r._l=a,r._i=e,r._f=n,r._strict=i,r._pf=s(),dt(r).utc()},wt.unix=function(t){return wt(1e3*t)},wt.duration=function(t,e){var s,a,i,r,o=t,u=null
return wt.isDuration(t)?o={ms:t._milliseconds,d:t._days,M:t._months}:"number"==typeof t?(o={},e?o[e]=t:o.milliseconds=t):(u=At.exec(t))?(s="-"===u[1]?-1:1,o={y:0,d:O(u[Wt])*s,h:O(u[Ct])*s,m:O(u[Gt])*s,s:O(u[Ft])*s,ms:O(u[Pt])*s}):(u=zt.exec(t))?(s="-"===u[1]?-1:1,i=function(t){var e=t&&parseFloat(t.replace(",","."))
return(isNaN(e)?0:e)*s},o={y:i(u[2]),M:i(u[3]),d:i(u[4]),h:i(u[5]),m:i(u[6]),s:i(u[7]),w:i(u[8])}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(r=M(wt(o.from),wt(o.to)),o={},o.ms=r.milliseconds,o.M=r.months),a=new f(o),wt.isDuration(t)&&n(t,"_locale")&&(a._locale=t._locale),a},wt.version=kt,wt.defaultFormat=re,wt.ISO_8601=function(){},wt.momentProperties=It,wt.updateOffset=function(){},wt.relativeTimeThreshold=function(e,n){return _e[e]===t?!1:n===t?_e[e]:(_e[e]=n,!0)},wt.lang=i("moment.lang is deprecated. Use moment.locale instead.",function(t,e){return wt.locale(t,e)}),wt.locale=function(e,n){var s
return e&&(s=t!==n?wt.defineLocale(e,n):wt.localeData(e),s&&(wt.duration._locale=wt._locale=s)),wt._locale._abbr},wt.defineLocale=function(t,e){return null!==e?(e.abbr=t,Lt[t]||(Lt[t]=new d),Lt[t].set(e),wt.locale(t),Lt[t]):(delete Lt[t],null)},wt.langData=i("moment.langData is deprecated. Use moment.localeData instead.",function(t){return wt.localeData(t)}),wt.localeData=function(t){var e
if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return wt._locale
if(!Y(t)){if(e=x(t))return e
t=[t]}return I(t)},wt.isMoment=function(t){return t instanceof h||null!=t&&n(t,"_isAMomentObject")},wt.isDuration=function(t){return t instanceof f}
for(vt=Me.length-1;vt>=0;--vt)T(Me[vt])
wt.normalizeUnits=function(t){return b(t)},wt.invalid=function(t){var e=wt.utc(NaN)
return null!=t?_(e._pf,t):e._pf.userInvalidated=!0,e},wt.parseZone=function(){return wt.apply(null,arguments).parseZone()},wt.parseTwoDigitYear=function(t){return O(t)+(O(t)>68?1900:2e3)},wt.isDate=v,_(wt.fn=h.prototype,{clone:function(){return wt(this)},valueOf:function(){return+this._d-6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var t=wt(this).utc()
return 0<t.year()&&t.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():Z(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):Z(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this
return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return P(this)},isDSTShifted:function(){return this._a?this.isValid()&&k(this._a,(this._isUTC?wt.utc(this._a):wt(this._a)).toArray())>0:!1},parsingFlags:function(){return _({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(t){return this.utcOffset(0,t)},local:function(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(this._dateUtcOffset(),"m")),this},format:function(t){var e=Z(this,t||wt.defaultFormat)
return this.localeData().postformat(e)},add:D(1,"add"),subtract:D(-1,"subtract"),diff:function(t,e,n){var s,a,i=H(t,this),r=6e4*(i.utcOffset()-this.utcOffset())
return e=b(e),"year"===e||"month"===e||"quarter"===e?(a=c(this,i),"quarter"===e?a/=3:"year"===e&&(a/=12)):(s=this-i,a="second"===e?s/1e3:"minute"===e?s/6e4:"hour"===e?s/36e5:"day"===e?(s-r)/864e5:"week"===e?(s-r)/6048e5:s),n?a:y(a)},from:function(t,e){return wt.duration({to:this,from:t}).locale(this.locale()).humanize(!e)},fromNow:function(t){return this.from(wt(),t)},calendar:function(t){var e=t||wt(),n=H(e,this).startOf("day"),s=this.diff(n,"days",!0),a=-6>s?"sameElse":-1>s?"lastWeek":0>s?"lastDay":1>s?"sameDay":2>s?"nextDay":7>s?"nextWeek":"sameElse"
return this.format(this.localeData().calendar(a,this,wt(e)))},isLeapYear:function(){return G(this.year())},isDST:function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay()
return null!=t?(t=rt(t,this.localeData()),this.add(t-e,"d")):e},month:yt("Month",!0),startOf:function(t){switch(t=b(t)){case"year":this.month(0)
case"quarter":case"month":this.date(1)
case"week":case"isoWeek":case"day":this.hours(0)
case"hour":this.minutes(0)
case"minute":this.seconds(0)
case"second":this.milliseconds(0)}return"week"===t?this.weekday(0):"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(e){return e=b(e),e===t||"millisecond"===e?this:this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms")},isAfter:function(e,n){var s
return n=b(t!==n?n:"millisecond"),"millisecond"===n?(e=wt.isMoment(e)?e:wt(e),+this>+e):(s=wt.isMoment(e)?+e:+wt(e),s<+this.clone().startOf(n))},isBefore:function(e,n){var s
return n=b(t!==n?n:"millisecond"),"millisecond"===n?(e=wt.isMoment(e)?e:wt(e),+e>+this):(s=wt.isMoment(e)?+e:+wt(e),+this.clone().endOf(n)<s)},isBetween:function(t,e,n){return this.isAfter(t,n)&&this.isBefore(e,n)},isSame:function(t,e){var n
return e=b(e||"millisecond"),"millisecond"===e?(t=wt.isMoment(t)?t:wt(t),+this===+t):(n=+wt(t),+this.clone().startOf(e)<=n&&n<=+this.clone().endOf(e))},min:i("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(t){return t=wt.apply(null,arguments),this>t?this:t}),max:i("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(t){return t=wt.apply(null,arguments),t>this?this:t}),zone:i("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",function(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}),utcOffset:function(t,e){var n,s=this._offset||0
return null!=t?("string"==typeof t&&(t=j(t)),Math.abs(t)<16&&(t=60*t),!this._isUTC&&e&&(n=this._dateUtcOffset()),this._offset=t,this._isUTC=!0,null!=n&&this.add(n,"m"),s!==t&&(!e||this._changeInProgress?w(this,wt.duration(t-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,wt.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?s:this._dateUtcOffset()},isLocal:function(){return!this._isUTC},isUtcOffset:function(){return this._isUTC},isUtc:function(){return this._isUTC&&0===this._offset},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(j(this._i)),this},hasAlignedHourOffset:function(t){return t=t?wt(t).utcOffset():0,(this.utcOffset()-t)%60===0},daysInMonth:function(){return U(this.year(),this.month())},dayOfYear:function(t){var e=St((wt(this).startOf("day")-wt(this).startOf("year"))/864e5)+1
return null==t?e:this.add(t-e,"d")},quarter:function(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)},weekYear:function(t){var e=ct(this,this.localeData()._week.dow,this.localeData()._week.doy).year
return null==t?e:this.add(t-e,"y")},isoWeekYear:function(t){var e=ct(this,1,4).year
return null==t?e:this.add(t-e,"y")},week:function(t){var e=this.localeData().week(this)
return null==t?e:this.add(7*(t-e),"d")},isoWeek:function(t){var e=ct(this,1,4).week
return null==t?e:this.add(7*(t-e),"d")},weekday:function(t){var e=(this.day()+7-this.localeData()._week.dow)%7
return null==t?e:this.add(t-e,"d")},isoWeekday:function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},isoWeeksInYear:function(){return W(this.year(),1,4)},weeksInYear:function(){var t=this.localeData()._week
return W(this.year(),t.dow,t.doy)},get:function(t){return t=b(t),this[t]()},set:function(t,e){var n
if("object"==typeof t)for(n in t)this.set(n,t[n])
else t=b(t),"function"==typeof this[t]&&this[t](e)
return this},locale:function(e){var n
return e===t?this._locale._abbr:(n=wt.localeData(e),null!=n&&(this._locale=n),this)},lang:i("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===t?this.localeData():this.locale(e)}),localeData:function(){return this._locale},_dateUtcOffset:function(){return 15*-Math.round(this._d.getTimezoneOffset()/15)}}),wt.fn.millisecond=wt.fn.milliseconds=yt("Milliseconds",!1),wt.fn.second=wt.fn.seconds=yt("Seconds",!1),wt.fn.minute=wt.fn.minutes=yt("Minutes",!1),wt.fn.hour=wt.fn.hours=yt("Hours",!0),wt.fn.date=yt("Date",!0),wt.fn.dates=i("dates accessor is deprecated. Use date instead.",yt("Date",!0)),wt.fn.year=yt("FullYear",!0),wt.fn.years=i("years accessor is deprecated. Use year instead.",yt("FullYear",!0)),wt.fn.days=wt.fn.day,wt.fn.months=wt.fn.month,wt.fn.weeks=wt.fn.week,wt.fn.isoWeeks=wt.fn.isoWeek,wt.fn.quarters=wt.fn.quarter,wt.fn.toJSON=wt.fn.toISOString,wt.fn.isUTC=wt.fn.isUtc,_(wt.duration.fn=f.prototype,{_bubble:function(){var t,e,n,s=this._milliseconds,a=this._days,i=this._months,r=this._data,o=0
r.milliseconds=s%1e3,t=y(s/1e3),r.seconds=t%60,e=y(t/60),r.minutes=e%60,n=y(e/60),r.hours=n%24,a+=y(n/24),o=y(pt(a)),a-=y(gt(o)),i+=y(a/30),a%=30,o+=y(i/12),i%=12,r.days=a,r.months=i,r.years=o},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return y(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*O(this._months/12)},humanize:function(t){var e=ut(this,!t,this.localeData())
return t&&(e=this.localeData().pastFuture(+this,e)),this.localeData().postformat(e)},add:function(t,e){var n=wt.duration(t,e)
return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(t,e){var n=wt.duration(t,e)
return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(t){return t=b(t),this[t.toLowerCase()+"s"]()},as:function(t){var e,n
if(t=b(t),"month"===t||"year"===t)return e=this._days+this._milliseconds/864e5,n=this._months+12*pt(e),"month"===t?n:n/12
switch(e=this._days+Math.round(gt(this._months/12)),t){case"week":return e/7+this._milliseconds/6048e5
case"day":return e+this._milliseconds/864e5
case"hour":return 24*e+this._milliseconds/36e5
case"minute":return 24*e*60+this._milliseconds/6e4
case"second":return 24*e*60*60+this._milliseconds/1e3
case"millisecond":return Math.floor(24*e*60*60*1e3)+this._milliseconds
default:throw Error("Unknown unit "+t)}},lang:wt.fn.lang,locale:wt.fn.locale,toIsoString:i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var t=Math.abs(this.years()),e=Math.abs(this.months()),n=Math.abs(this.days()),s=Math.abs(this.hours()),a=Math.abs(this.minutes()),i=Math.abs(this.seconds()+this.milliseconds()/1e3)
return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(t?t+"Y":"")+(e?e+"M":"")+(n?n+"D":"")+(s||a||i?"T":"")+(s?s+"H":"")+(a?a+"M":"")+(i?i+"S":""):"P0D"},localeData:function(){return this._locale},toJSON:function(){return this.toISOString()}}),wt.duration.fn.toString=wt.duration.fn.toISOString
for(vt in le)n(le,vt)&&Mt(vt.toLowerCase())
wt.duration.fn.asMilliseconds=function(){return this.as("ms")},wt.duration.fn.asSeconds=function(){return this.as("s")},wt.duration.fn.asMinutes=function(){return this.as("m")},wt.duration.fn.asHours=function(){return this.as("h")},wt.duration.fn.asDays=function(){return this.as("d")},wt.duration.fn.asWeeks=function(){return this.as("weeks")},wt.duration.fn.asMonths=function(){return this.as("M")},wt.duration.fn.asYears=function(){return this.as("y")},wt.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=1===O(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th"
return t+n}}),xt?module.exports=wt:"function"==typeof define&&define.amd?(define(function(t,e,n){return n.config&&n.config()&&n.config().noGlobal===!0&&(bt.moment=Yt),wt}),Dt(!0)):Dt()}).call(this)
