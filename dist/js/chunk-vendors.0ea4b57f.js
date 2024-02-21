(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ha})),n.d(e,"b",(function(){return wo})),n.d(e,"c",(function(){return sa})),n.d(e,"d",(function(){return Eo})),n.d(e,"e",(function(){return aa})),n.d(e,"f",(function(){return ca}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("9c44");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.23.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(t,...e){if(h.logLevel<=s["a"].DEBUG){const n=e.map(g);h.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=s["a"].ERROR){const n=e.map(g);h.error(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(h.logLevel<=s["a"].WARN){const n=e.map(g);h.warn(`Firestore (${l}): ${t}`,...n)}}function g(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function y(t,e){t||v()}function w(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends o["c"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class C{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class S{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(y("string"==typeof e.accessToken),new T(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return y(null===t||"string"==typeof t),new u(t)}}class k{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class A{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new k(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.T;return this.T=t.token,f("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?r(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(y("string"==typeof t.token),this.T=t.token,new O(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=R(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function x(t,e){return t<e?-1:t>e?1:0}function P(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new _(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new _(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new _(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return L.fromMillis(Date.now())}static fromDate(t){return L.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new L(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?x(this.nanoseconds,t.nanoseconds):x(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new L(0,0))}static max(){return new M(new L(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===j.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof j?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends j{construct(t,e,n){return new F(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new _(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new F(e)}static emptyPath(){return new F([])}}const U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class V extends j{construct(t,e,n){return new V(t,e,n)}static isValidIdentifier(t){return U.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),V.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new V(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new _(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new _(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new _(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new _(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new V(e)}static emptyPath(){return new V([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.path=t}static fromPath(t){return new $(F.fromString(t))}static fromName(t){return new $(F.fromString(t).popFirst(5))}static empty(){return new $(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===F.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $(new F(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}B.UNKNOWN_ID=-1;function z(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=M.fromTimestamp(1e9===r?new L(n+1,0):new L(n,r));return new H(i,$.empty(),e)}function q(t){return new H(t.readTime,t.key,-1)}class H{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new H(M.min(),$.empty(),-1)}static max(){return new H(M.max(),$.empty(),-1)}}function K(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=$.comparator(t.documentKey,e.documentKey),0!==n?n:x(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==G)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new J((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof J?e:J.resolve(e)}catch(t){return J.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):J.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):J.reject(e)}static resolve(t){return new J((e,n)=>{e(t)})}static reject(t){return new J((e,n)=>{n(t)})}static waitFor(t){return new J((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=J.resolve(!1);for(const n of t)e=e.next(t=>t?J.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new J((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next(t=>{s[c]=t,++o,o===i&&n(s)},t=>r(t))}})}static doWhile(t,e){return new J((n,r)=>{const i=()=>{!0===t()?e().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function Z(t){return null==t}function tt(t){return 0===t&&1/t==-1/0}function et(t){return"number"==typeof t&&Number.isInteger(t)&&!tt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Y.ct=-1;const nt=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],rt=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],it=rt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function st(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ot(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function at(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new ct(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ut(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ut(this.root,t,this.comparator,!1)}getReverseIterator(){return new ut(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ut(this.root,t,this.comparator,!0)}}class ut{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:lt.RED,this.left=null!=r?r:lt.EMPTY,this.right=null!=i?i:lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new lt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return lt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1,lt.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(t){this.comparator=t,this.data=new ct(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new dt(this.data.getIterator())}getIteratorFrom(t){return new dt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof ht))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class dt{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(t){this.fields=t,t.sort(V.comparator)}static empty(){return new ft([])}unionWith(t){let e=new ht(V.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ft(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return P(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new pt("Invalid base64 string: "+t):t}}(t);return new mt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new mt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const gt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(t){if(y(!!t),"string"==typeof t){let e=0;const n=gt.exec(t);if(y(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:yt(t.seconds),nanos:yt(t.nanos)}}function yt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function wt(t){return"string"==typeof t?mt.fromBase64String(t):mt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function _t(t){const e=t.mapValue.fields.__previous_value__;return bt(e)?_t(e):e}function Et(t){const e=vt(t.mapValue.fields.__local_write_time__.timestampValue);return new L(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class It{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new It("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof It&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function St(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bt(t)?4:Ut(t)?9007199254740991:10:v()}function kt(t,e){if(t===e)return!0;const n=St(t);if(n!==St(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Et(t).isEqual(Et(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=vt(t.timestampValue),r=vt(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return wt(t.bytesValue).isEqual(wt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return yt(t.geoPointValue.latitude)===yt(e.geoPointValue.latitude)&&yt(t.geoPointValue.longitude)===yt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return yt(t.integerValue)===yt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=yt(t.doubleValue),r=yt(e.doubleValue);return n===r?tt(n)===tt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return P(t.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(st(n)!==st(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!kt(n[i],r[i])))return!1;return!0}(t,e);default:return v()}}function At(t,e){return void 0!==(t.values||[]).find(t=>kt(t,e))}function Ot(t,e){if(t===e)return 0;const n=St(t),r=St(e);if(n!==r)return x(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=yt(t.integerValue||t.doubleValue),r=yt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Nt(t.timestampValue,e.timestampValue);case 4:return Nt(Et(t),Et(e));case 5:return x(t.stringValue,e.stringValue);case 6:return function(t,e){const n=wt(t),r=wt(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=x(n[i],r[i]);if(0!==t)return t}return x(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=x(yt(t.latitude),yt(e.latitude));return 0!==n?n:x(yt(t.longitude),yt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Ot(n[i],r[i]);if(t)return t}return x(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Ct.mapValue&&e===Ct.mapValue)return 0;if(t===Ct.mapValue)return 1;if(e===Ct.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=x(r[o],s[o]);if(0!==t)return t;const e=Ot(n[r[o]],i[s[o]]);if(0!==e)return e}return x(r.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function Nt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return x(t,e);const n=vt(t),r=vt(e),i=x(n.seconds,r.seconds);return 0!==i?i:x(n.nanos,r.nanos)}function Rt(t){return Dt(t)}function Dt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=vt(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?wt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Dt(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Dt(t.fields[i])}`;return n+"}"}(t.mapValue):v();var e,n}function xt(t){return!!t&&"integerValue"in t}function Pt(t){return!!t&&"arrayValue"in t}function Lt(t){return!!t&&"nullValue"in t}function Mt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jt(t){return!!t&&"mapValue"in t}function Ft(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ot(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Ft(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ft(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ut(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!jt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ft(e)}setAll(t){let e=V.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Ft(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());jt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];jt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ot(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new Vt(Ft(this.value))}}function $t(t){const e=[];return ot(t.fields,(t,n)=>{const r=new V([t]);if(jt(n)){const t=$t(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new ft(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Bt{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Bt(t,0,M.min(),M.min(),M.min(),Vt.empty(),0)}static newFoundDocument(t,e,n,r){return new Bt(t,1,e,M.min(),n,r,0)}static newNoDocument(t,e){return new Bt(t,2,e,M.min(),M.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new Bt(t,3,e,M.min(),M.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Bt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e){this.position=t,this.inclusive=e}}function qt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?$.comparator($.fromName(o.referenceValue),n.key):Ot(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ht(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Gt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{}class Qt extends Wt{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new re(t,e,n):"array-contains"===e?new ae(t,n):"in"===e?new ce(t,n):"not-in"===e?new ue(t,n):"array-contains-any"===e?new le(t,n):new Qt(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new ie(t,n):new se(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Ot(e,this.value)):null!==e&&St(this.value)===St(e)&&this.matchesComparison(Ot(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Jt extends Wt{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new Jt(t,e)}matches(t){return Xt(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(t=>t.isInequality());return null!==t?t.field:null}ft(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Xt(t){return"and"===t.op}function Yt(t){return Zt(t)&&Xt(t)}function Zt(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function te(t){if(t instanceof Qt)return t.field.canonicalString()+t.op.toString()+Rt(t.value);if(Yt(t))return t.filters.map(t=>te(t)).join(",");{const e=t.filters.map(t=>te(t)).join(",");return`${t.op}(${e})`}}function ee(t,e){return t instanceof Qt?function(t,e){return e instanceof Qt&&t.op===e.op&&t.field.isEqual(e.field)&&kt(t.value,e.value)}(t,e):t instanceof Jt?function(t,e){return e instanceof Jt&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&ee(n,e.filters[r]),!0)}(t,e):void v()}function ne(t){return t instanceof Qt?function(t){return`${t.field.canonicalString()} ${t.op} ${Rt(t.value)}`}(t):t instanceof Jt?function(t){return t.op.toString()+" {"+t.getFilters().map(ne).join(" ,")+"}"}(t):"Filter"}class re extends Qt{constructor(t,e,n){super(t,e,n),this.key=$.fromName(n.referenceValue)}matches(t){const e=$.comparator(t.key,this.key);return this.matchesComparison(e)}}class ie extends Qt{constructor(t,e){super(t,"in",e),this.keys=oe("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class se extends Qt{constructor(t,e){super(t,"not-in",e),this.keys=oe("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function oe(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>$.fromName(t.referenceValue))}class ae extends Qt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Pt(e)&&At(e.arrayValue,this.value)}}class ce extends Qt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&At(this.value.arrayValue,e)}}class ue extends Qt{constructor(t,e){super(t,"not-in",e)}matches(t){if(At(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!At(this.value.arrayValue,e)}}class le extends Qt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Pt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>At(this.value.arrayValue,t))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function de(t,e=null,n=[],r=[],i=null,s=null,o=null){return new he(t,e,n,r,i,s,o)}function fe(t){const e=w(t);if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>te(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Z(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>Rt(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>Rt(t)).join(",")),e.dt=t}return e.dt}function pe(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Gt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ee(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ht(t.startAt,e.startAt)&&Ht(t.endAt,e.endAt)}function me(t){return $.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function ve(t,e,n,r,i,s,o,a){return new ge(t,e,n,r,i,s,o,a)}function ye(t){return new ge(t)}function we(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function be(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function _e(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Ee(t){return null!==t.collectionGroup}function Te(t){const e=w(t);if(null===e.wt){e.wt=[];const t=_e(e),n=be(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new Kt(t)),e.wt.push(new Kt(V.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Kt(V.keyField(),t))}}}return e.wt}function Ie(t){const e=w(t);if(!e._t)if("F"===e.limitType)e._t=de(e.path,e.collectionGroup,Te(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Te(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Kt(i.field,e))}const n=e.endAt?new zt(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new zt(e.startAt.position,e.startAt.inclusive):null;e._t=de(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function Ce(t,e,n){return new ge(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Se(t,e){return pe(Ie(t),Ie(e))&&t.limitType===e.limitType}function ke(t){return`${fe(Ie(t))}|lt:${t.limitType}`}function Ae(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>ne(t)).join(", ")}]`),Z(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>Rt(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>Rt(t)).join(",")),`Target(${e})`}(Ie(t))}; limitType=${t.limitType})`}function Oe(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):$.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Te(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=qt(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Te(t),e))&&!(t.endAt&&!function(t,e,n){const r=qt(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Te(t),e))}(t,e)}function Ne(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Re(t){return(e,n)=>{let r=!1;for(const i of Te(t)){const t=De(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function De(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Ot(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ot(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return at(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new ct($.comparator);function Le(){return Pe}const Me=new ct($.comparator);function je(...t){let e=Me;for(const n of t)e=e.insert(n.key,n);return e}function Fe(t){let e=Me;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Ue(){return $e()}function Ve(){return $e()}function $e(){return new xe(t=>t.toString(),(t,e)=>t.isEqual(e))}const Be=new ct($.comparator),ze=new ht($.comparator);function qe(...t){let e=ze;for(const n of t)e=e.add(n);return e}const He=new ht(x);function Ke(){return He}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tt(e)?"-0":e}}function We(t){return{integerValue:""+t}}function Qe(t,e){return et(e)?We(e):Ge(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(){this._=void 0}}function Xe(t,e,n){return t instanceof tn?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&bt(e)&&(e=_t(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof en?nn(t,e):t instanceof rn?sn(t,e):function(t,e){const n=Ze(t,e),r=an(n)+an(t.gt);return xt(n)&&xt(t.gt)?We(r):Ge(t.serializer,r)}(t,e)}function Ye(t,e,n){return t instanceof en?nn(t,e):t instanceof rn?sn(t,e):n}function Ze(t,e){return t instanceof on?xt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class tn extends Je{}class en extends Je{constructor(t){super(),this.elements=t}}function nn(t,e){const n=cn(e);for(const r of t.elements)n.some(t=>kt(t,r))||n.push(r);return{arrayValue:{values:n}}}class rn extends Je{constructor(t){super(),this.elements=t}}function sn(t,e){let n=cn(e);for(const r of t.elements)n=n.filter(t=>!kt(t,r));return{arrayValue:{values:n}}}class on extends Je{constructor(t,e){super(),this.serializer=t,this.gt=e}}function an(t){return yt(t.integerValue||t.doubleValue)}function cn(t){return Pt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,e){this.field=t,this.transform=e}}function ln(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof en&&e instanceof en||t instanceof rn&&e instanceof rn?P(t.elements,e.elements,kt):t instanceof on&&e instanceof on?kt(t.gt,e.gt):t instanceof tn&&e instanceof tn}(t.transform,e.transform)}class hn{constructor(t,e){this.version=t,this.transformResults=e}}class dn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new dn}static exists(t){return new dn(void 0,t)}static updateTime(t){return new dn(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class pn{}function mn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Cn(t.key,dn.none()):new bn(t.key,t.data,dn.none());{const n=t.data,r=Vt.empty();let i=new ht(V.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new _n(t.key,r,new ft(i.toArray()),dn.none())}}function gn(t,e,n){t instanceof bn?function(t,e,n){const r=t.value.clone(),i=Tn(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof _n?function(t,e,n){if(!fn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Tn(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(En(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function vn(t,e,n,r){return t instanceof bn?function(t,e,n,r){if(!fn(t.precondition,e))return n;const i=t.value.clone(),s=In(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof _n?function(t,e,n,r){if(!fn(t.precondition,e))return n;const i=In(t.fieldTransforms,r,e),s=e.data;return s.setAll(En(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return fn(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function yn(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Ze(r.transform,t||null);null!=i&&(null===n&&(n=Vt.empty()),n.set(r.field,i))}return n||null}function wn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&P(t,e,(t,e)=>ln(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bn extends pn{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class _n extends pn{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function En(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tn(t,e,n){const r=new Map;y(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Ye(o,a,n[i]))}return r}function In(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Xe(t,s,e))}return r}class Cn extends pn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sn extends pn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&gn(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=vn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=vn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ve();return this.mutations.forEach(r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=mn(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(M.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),qe())}isEqual(t){return this.batchId===t.batchId&&P(this.mutations,t.mutations,(t,e)=>wn(t,e))&&P(this.baseMutations,t.baseMutations,(t,e)=>wn(t,e))}}class An{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){y(t.mutations.length===n.length);let r=Be;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new An(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn,Dn;function xn(t){switch(t){default:return v();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Pn(t){if(void 0===t)return p("GRPC error has no .code"),b.UNKNOWN;switch(t){case Rn.OK:return b.OK;case Rn.CANCELLED:return b.CANCELLED;case Rn.UNKNOWN:return b.UNKNOWN;case Rn.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Rn.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Rn.INTERNAL:return b.INTERNAL;case Rn.UNAVAILABLE:return b.UNAVAILABLE;case Rn.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Rn.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Rn.NOT_FOUND:return b.NOT_FOUND;case Rn.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Rn.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Rn.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Rn.ABORTED:return b.ABORTED;case Rn.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Rn.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Rn.DATA_LOSS:return b.DATA_LOSS;default:return v()}}(Dn=Rn||(Rn={}))[Dn.OK=0]="OK",Dn[Dn.CANCELLED=1]="CANCELLED",Dn[Dn.UNKNOWN=2]="UNKNOWN",Dn[Dn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Dn[Dn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Dn[Dn.NOT_FOUND=5]="NOT_FOUND",Dn[Dn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Dn[Dn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Dn[Dn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Dn[Dn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Dn[Dn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Dn[Dn.ABORTED=10]="ABORTED",Dn[Dn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Dn[Dn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Dn[Dn.INTERNAL=13]="INTERNAL",Dn[Dn.UNAVAILABLE=14]="UNAVAILABLE",Dn[Dn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ln{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Mn}static getOrCreateInstance(){return null===Mn&&(Mn=new Ln),Mn}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(e=>e(t))}}let Mn=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new a["e"]([4294967295,4294967295],0);function Un(t){const e=jn().encode(t),n=new a["f"];return n.update(e),new Uint8Array(n.digest())}function Vn(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new a["e"]([n,r],0),new a["e"]([i,s],0)]}class $n{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Bn("Invalid padding: "+e);if(n<0)throw new Bn("Invalid hash count: "+n);if(t.length>0&&0===this.hashCount)throw new Bn("Invalid hash count: "+n);if(0===t.length&&0!==e)throw new Bn("Invalid padding when bitmap length is 0: "+e);this.It=8*t.length-e,this.Tt=a["e"].fromNumber(this.It)}Et(t,e,n){let r=t.add(e.multiply(a["e"].fromNumber(n)));return 1===r.compare(Fn)&&(r=new a["e"]([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}vt(t){if(0===this.It)return!1;const e=Un(t),[n,r]=Vn(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,r,i);if(!this.At(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new $n(i,r,e);return n.forEach(t=>s.insert(t)),s}insert(t){if(0===this.It)return;const e=Un(t),[n,r]=Vn(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,r,i);this.Rt(t)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Bn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,qn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new zn(M.min(),r,new ct(x),Le(),qe())}}class qn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new qn(n,e,qe(),qe(),qe())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e,n,r){this.Pt=t,this.removedTargetIds=e,this.key=n,this.bt=r}}class Kn{constructor(t,e){this.targetId=t,this.Vt=e}}class Gn{constructor(t,e,n=mt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Wn{constructor(){this.St=0,this.Dt=Xn(),this.Ct=mt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=qe(),e=qe(),n=qe();return this.Dt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}}),new qn(this.Ct,this.xt,t,e,n)}Ft(){this.Nt=!1,this.Dt=Xn()}Bt(t,e){this.Nt=!0,this.Dt=this.Dt.insert(t,e)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Qn{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=Le(),this.zt=Jn(),this.Wt=new ct(x)}Ht(t){for(const e of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(e,t.bt):this.Yt(e,t.key,t.bt);for(const e of t.removedTargetIds)this.Yt(e,t.key,t.bt)}Xt(t){this.forEachTarget(t,e=>{const n=this.Zt(e);switch(t.state){case 0:this.te(e)&&n.$t(t.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(t.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(e);break;case 3:this.te(e)&&(n.Kt(),n.$t(t.resumeToken));break;case 4:this.te(e)&&(this.ee(e),n.$t(t.resumeToken));break;default:v()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qt.forEach((t,n)=>{this.te(n)&&e(n)})}ne(t){var e;const n=t.targetId,r=t.Vt.count,i=this.se(n);if(i){const s=i.target;if(me(s))if(0===r){const t=new $(s.path);this.Yt(n,t,Bt.newNoDocument(t,M.min()))}else y(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(t,i);if(0!==r){this.ee(n);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,t)}null===(e=Ln.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var r,i,s,o,a,c;const u={localCacheCount:e,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===t,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,t.Vt))}}}}re(t,e){const{unchangedNames:n,count:r}=t.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=wt(i).toUint8Array()}catch(t){if(t instanceof pt)return m("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new $n(a,s,o)}catch(t){return m(t instanceof Bn?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.It?1:r!==e-this.oe(t.targetId,c)?2:0}oe(t,e){const n=this.Gt.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.vt(s)||(this.Yt(t,n,null),r++)}),r}ce(t){const e=new Map;this.Qt.forEach((n,r)=>{const i=this.se(r);if(i){if(n.current&&me(i.target)){const e=new $(i.target.path);null!==this.jt.get(e)||this.ae(r,e)||this.Yt(r,e,Bt.newNoDocument(e,t))}n.Mt&&(e.set(r,n.Ot()),n.Ft())}});let n=qe();this.zt.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.se(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.jt.forEach((e,n)=>n.setReadTime(t));const r=new zn(t,e,this.Wt,this.jt,n);return this.jt=Le(),this.zt=Jn(),this.Wt=new ct(x),r}Jt(t,e){if(!this.te(t))return;const n=this.ae(t,e.key)?2:0;this.Zt(t).Bt(e.key,n),this.jt=this.jt.insert(e.key,e),this.zt=this.zt.insert(e.key,this.he(e.key).add(t))}Yt(t,e,n){if(!this.te(t))return;const r=this.Zt(t);this.ae(t,e)?r.Bt(e,1):r.Lt(e),this.zt=this.zt.insert(e,this.he(e).delete(t)),n&&(this.jt=this.jt.insert(e,n))}removeTarget(t){this.Qt.delete(t)}ie(t){const e=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let e=this.Qt.get(t);return e||(e=new Wn,this.Qt.set(t,e)),e}he(t){let e=this.zt.get(t);return e||(e=new ht(x),this.zt=this.zt.insert(t,e)),e}te(t){const e=null!==this.se(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}se(t){const e=this.Qt.get(t);return e&&e.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new Wn),this.Gt.getRemoteKeysForTarget(t).forEach(e=>{this.Yt(t,e,null)})}ae(t,e){return this.Gt.getRemoteKeysForTarget(t).has(e)}}function Jn(){return new ct($.comparator)}function Xn(){return new ct($.comparator)}const Yn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Zn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),tr=(()=>{const t={and:"AND",or:"OR"};return t})();class er{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function nr(t,e){return t.useProto3Json||Z(e)?e:{value:e}}function rr(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ir(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sr(t,e){return rr(t,e.toTimestamp())}function or(t){return y(!!t),M.fromTimestamp(function(t){const e=vt(t);return new L(e.seconds,e.nanos)}(t))}function ar(t,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function cr(t){const e=F.fromString(t);return y(Rr(e)),e}function ur(t,e){return ar(t.databaseId,e.path)}function lr(t,e){const n=cr(e);if(n.get(1)!==t.databaseId.projectId)throw new _(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(pr(n))}function hr(t,e){return ar(t.databaseId,e)}function dr(t){const e=cr(t);return 4===e.length?F.emptyPath():pr(e)}function fr(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pr(t){return y(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function mr(t,e,n){return{name:ur(t,e),fields:n.value.mapValue.fields}}function gr(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:v()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(y(void 0===e||"string"==typeof e),mt.fromBase64String(e||"")):(y(void 0===e||e instanceof Uint8Array),mt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?b.UNKNOWN:Pn(t.code);return new _(e,t.message||"")}(o);n=new Gn(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lr(t,r.document.name),s=or(r.document.updateTime),o=r.document.createTime?or(r.document.createTime):M.min(),a=new Vt({mapValue:{fields:r.document.fields}}),c=Bt.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Hn(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lr(t,r.document),s=r.readTime?or(r.readTime):M.min(),o=Bt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Hn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lr(t,r.document),s=r.removedTargetIds||[];n=new Hn([],s,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Nn(r,i),o=t.targetId;n=new Kn(o,s)}}return n}function vr(t,e){let n;if(e instanceof bn)n={update:mr(t,e.key,e.value)};else if(e instanceof Cn)n={delete:ur(t,e.key)};else if(e instanceof _n)n={update:mr(t,e.key,e.data),updateMask:Nr(e.fieldMask)};else{if(!(e instanceof Sn))return v();n={verify:ur(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof tn)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof en)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof rn)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof on)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw v()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:sr(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:v()}(t,e.precondition)),n}function yr(t,e){return t&&t.length>0?(y(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?or(t.updateTime):or(e);return n.isEqual(M.min())&&(n=or(e)),new hn(n,t.transformResults||[])}(t,e))):[]}function wr(t,e){return{documents:[hr(t,e.path)]}}function br(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=hr(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=hr(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return Or(Jt.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:kr(t.field),direction:Ir(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=nr(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function _r(t){let e=dr(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){y(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Tr(t);return e instanceof Jt&&Yt(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Kt(Ar(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Z(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new zt(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new zt(n,e)}(n.endAt)),ve(e,i,o,s,a,"F",c,u)}function Er(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Tr(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ar(t.unaryFilter.field);return Qt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ar(t.unaryFilter.field);return Qt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ar(t.unaryFilter.field);return Qt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ar(t.unaryFilter.field);return Qt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?function(t){return Qt.create(Ar(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Jt.create(t.compositeFilter.filters.map(t=>Tr(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return v()}}(t.compositeFilter.op))}(t):v()}function Ir(t){return Yn[t]}function Cr(t){return Zn[t]}function Sr(t){return tr[t]}function kr(t){return{fieldPath:t.canonicalString()}}function Ar(t){return V.fromServerFormat(t.fieldPath)}function Or(t){return t instanceof Qt?function(t){if("=="===t.op){if(Mt(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NAN"}};if(Lt(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Mt(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NAN"}};if(Lt(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(t.field),op:Cr(t.op),value:t.value}}}(t):t instanceof Jt?function(t){const e=t.getFilters().map(t=>Or(t));return 1===e.length?e[0]:{compositeFilter:{op:Sr(t.op),filters:e}}}(t):v()}function Nr(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Rr(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,e,n,r,i=M.min(),s=M.min(),o=mt.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Dr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.fe=t}}function Pr(t){const e=_r({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ce(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lr{constructor(){}_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(yt(t.integerValue));else if("doubleValue"in t){const n=yt(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),tt(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(""+(n.seconds||"")),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(wt(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?Ut(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):v()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){const n=t.fields||{};this.ye(e,55);for(const r of Object.keys(n))this.Te(r,e),this.me(n[r],e)}Pe(t,e){const n=t.values||[];this.ye(e,50);for(const r of n)this.me(r,e)}ve(t,e){this.ye(e,37),$.fromName(t).path.forEach(t=>{this.ye(e,60),this.be(t,e)})}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}}Lr.Ve=new Lr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(){this.rn=new jr}addToCollectionParentIndex(t,e){return this.rn.add(e),J.resolve()}getCollectionParents(t,e){return J.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return J.resolve()}deleteFieldIndex(t,e){return J.resolve()}getDocumentsMatchingTarget(t,e){return J.resolve(null)}getIndexType(t,e){return J.resolve(0)}getFieldIndexes(t,e){return J.resolve([])}getNextCollectionGroupToUpdate(t){return J.resolve(null)}getMinOffset(t,e){return J.resolve(H.min())}getMinOffsetFromCollectionGroup(t,e){return J.resolve(H.min())}updateCollectionGroup(t,e,n){return J.resolve()}updateIndexEntries(t,e){return J.resolve()}}class jr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ht(F.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ht(F.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Fr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Fr(t,Fr.DEFAULT_COLLECTION_PERCENTILE,Fr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fr.DEFAULT_COLLECTION_PERCENTILE=10,Fr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fr.DEFAULT=new Fr(41943040,Fr.DEFAULT_COLLECTION_PERCENTILE,Fr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fr.DISABLED=new Fr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Ur(0)}static Mn(){return new Ur(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{constructor(){this.changes=new xe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Bt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?J.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&vn(n.mutation,t,ft.empty(),L.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,qe()).next(()=>e))}getLocalViewOfDocuments(t,e,n=qe()){const r=Ue();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=je();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=Ue();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,qe()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let i=Le();const s=$e(),o=$e();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof _n)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),vn(o.mutation,e,o.mutation.getFieldMask(),L.now())):s.set(e.key,ft.empty())}),this.recalculateAndSaveOverlays(t,i).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new $r(e,null!==(n=s.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){const n=$e();let r=new ct((t,e)=>t-e),i=qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const i of t)i.keys().forEach(t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||ft.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||qe()).add(t);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Ve();c.forEach(t=>{if(!i.has(t)){const r=mn(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return J.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return function(t){return $.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ee(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):J.resolve(Ue());let o=-1,a=i;return s.next(e=>J.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?J.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,i)).next(()=>this.computeViews(t,a,e,qe())).next(t=>({batchId:o,changes:Fe(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new $(e)).next(t=>{let e=je();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=je();return this.indexManager.getCollectionParents(t,r).next(s=>J.forEach(s,s=>{const o=function(t,e){return new ge(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r))).next(t=>{r.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Bt.newInvalidDocument(r)))});let n=je();return t.forEach((t,i)=>{const s=r.get(t);void 0!==s&&vn(s.mutation,i,ft.empty(),L.now()),Oe(e,i)&&(n=n.insert(t,i))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return J.resolve(this.cs.get(e))}saveBundleMetadata(t,e){var n;return this.cs.set(e.id,{id:(n=e).id,version:n.version,createTime:or(n.createTime)}),J.resolve()}getNamedQuery(t,e){return J.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,function(t){return{name:t.name,query:Pr(t.bundledQuery),readTime:or(t.readTime)}}(e)),J.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.overlays=new ct($.comparator),this.ls=new Map}getOverlay(t,e){return J.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ue();return J.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.we(t,e,r)}),J.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.ls.delete(n)),J.resolve()}getOverlaysForCollection(t,e,n){const r=Ue(),i=e.length+1,s=new $(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return J.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new ct((t,e)=>t-e);const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Ue(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ue(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>o.set(t,e)),o.size()>=r)break;return J.resolve(o)}we(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new On(e,n));let i=this.ls.get(e);void 0===i&&(i=qe(),this.ls.set(e,i)),this.ls.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.fs=new ht(Kr.ds),this.ws=new ht(Kr._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){const n=new Kr(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.ys(new Kr(t,e))}ps(t,e){t.forEach(t=>this.removeReference(t,e))}Is(t){const e=new $(new F([])),n=new Kr(e,t),r=new Kr(e,t+1),i=[];return this.ws.forEachInRange([n,r],t=>{this.ys(t),i.push(t.key)}),i}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const e=new $(new F([])),n=new Kr(e,t),r=new Kr(e,t+1);let i=qe();return this.ws.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Kr(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Kr{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return $.comparator(t.key,e.key)||x(t.As,e.As)}static _s(t,e){return x(t.As,e.As)||$.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new ht(Kr.ds)}checkEmpty(t){return J.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new kn(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new Kr(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return J.resolve(s)}lookupMutationBatch(t,e){return J.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.bs(n),i=r<0?0:r;return J.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Kr(e,0),r=new Kr(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],t=>{const e=this.Ps(t.As);i.push(e)}),J.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ht(x);return e.forEach(t=>{const e=new Kr(t,0),r=new Kr(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,r],t=>{n=n.add(t.As)})}),J.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;$.isDocumentKey(i)||(i=i.child(""));const s=new Kr(new $(i),0);let o=new ht(x);return this.Rs.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.As)),!0)},s),J.resolve(this.Vs(o))}Vs(t){const e=[];return t.forEach(t=>{const n=this.Ps(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){y(0===this.Ss(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return J.forEach(e.mutations,r=>{const i=new Kr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Rs=n})}Cn(t){}containsKey(t,e){const n=new Kr(e,0),r=this.Rs.firstAfterOrEqual(n);return J.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,J.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){const e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t){this.Ds=t,this.docs=new ct($.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return J.resolve(n?n.document.mutableCopy():Bt.newInvalidDocument(e))}getEntries(t,e){let n=Le();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Bt.newInvalidDocument(t))}),J.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Le();const s=e.path,o=new $(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||K(q(o),n)<=0||(r.has(o.key)||Oe(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return J.resolve(i)}getAllFromCollectionGroup(t,e,n,r){v()}Cs(t,e){return J.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Qr(this)}getSize(t){return J.resolve(this.size)}}class Qr extends Vr{constructor(t){super(),this.os=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.os.addEntry(t,r)):this.os.removeEntry(n)}),J.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t){this.persistence=t,this.xs=new xe(t=>fe(t),pe),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Hr,this.targetCount=0,this.Ms=Ur.kn()}forEachTarget(t,e){return this.xs.forEach((t,n)=>e(n)),J.resolve()}getLastRemoteSnapshotVersion(t){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return J.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),J.resolve()}Fn(t){this.xs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ms=new Ur(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,J.resolve()}updateTargetData(t,e){return this.Fn(e),J.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,J.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.xs.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),J.waitFor(i).next(()=>r)}getTargetCount(t){return J.resolve(this.targetCount)}getTargetData(t,e){const n=this.xs.get(e)||null;return J.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),J.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),J.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),J.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ks.Es(e);return J.resolve(n)}containsKey(t,e){return J.resolve(this.ks.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,e){this.$s={},this.overlays={},this.Os=new Y(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Jr(this),this.indexManager=new Mr,this.remoteDocumentCache=function(t){return new Wr(t)}(t=>this.referenceDelegate.Ls(t)),this.serializer=new xr(e),this.qs=new zr(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new qr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new Gr(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new Yr(this.Os.next());return this.referenceDelegate.Us(),n(r).next(t=>this.referenceDelegate.Ks(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Gs(t,e){return J.or(Object.values(this.$s).map(n=>()=>n.containsKey(t,e)))}}class Yr extends W{constructor(t){super(),this.currentSequenceNumber=t}}class Zr{constructor(t){this.persistence=t,this.Qs=new Hr,this.js=null}static zs(t){return new Zr(t)}get Ws(){if(this.js)return this.js;throw v()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),J.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),J.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),J.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach(t=>this.Ws.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Ws.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Us(){this.js=new Set}Ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.Ws,n=>{const r=$.fromPath(n);return this.Hs(t,r).next(t=>{t||e.removeEntry(r,M.min())})}).next(()=>(this.js=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hs(t,e).next(t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())})}Ls(t){return 0}Hs(t,e){return J.or([()=>J.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ti{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=r}static Li(t,e){let n=qe(),r=qe();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ti(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ki(t,e).next(i=>i||this.Gi(t,e,r,n)).next(n=>n||this.Qi(t,e))}Ki(t,e){if(we(e))return J.resolve(null);let n=Ie(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=Ce(e,null,"F"),n=Ie(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const i=qe(...r);return this.Ui.getDocuments(t,i).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const s=this.ji(e,r);return this.zi(e,s,i,n.readTime)?this.Ki(t,Ce(e,null,"F")):this.Wi(t,s,e,n)}))})))}Gi(t,e,n,r){return we(e)||r.isEqual(M.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next(i=>{const o=this.ji(e,i);return this.zi(e,o,n,r)?this.Qi(t,e):(d()<=s["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ae(e)),this.Wi(t,o,e,z(r,-1)))})}ji(t,e){let n=new ht(Re(t));return e.forEach((e,r)=>{Oe(t,r)&&(n=n.add(r))}),n}zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(t,e){return d()<=s["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Ae(e)),this.Ui.getDocumentsMatchingQuery(t,e,H.min())}Wi(t,e,n,r){return this.Ui.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e,n,r){this.persistence=t,this.Hi=e,this.serializer=r,this.Ji=new ct(x),this.Yi=new xe(t=>fe(t),pe),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Br(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}function ri(t,e,n,r){return new ni(t,e,n,r)}async function ii(t,e){const n=w(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const i=[],s=[];let o=qe();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({er:t,removedBatchIds:i,addedBatchIds:s}))})})}function si(t,e){const n=w(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=J.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);y(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=qe();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}function oi(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function ai(t,e){const n=w(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];e.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.Bs.addMatchingKeys(t,s.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(mt.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Bs.updateTargetData(t,u))});let a=Le(),c=qe();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(ci(t,s,e.documentUpdates).next(t=>{a=t.nr,c=t.sr})),!r.isEqual(M.min())){const e=n.Bs.getLastRemoteSnapshotVersion(t).next(e=>n.Bs.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return J.waitFor(o).next(()=>s.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.Ji=i,t))}function ci(t,e,n){let r=qe(),i=qe();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=Le();return n.forEach((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(M.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{nr:r,sr:i}})}function ui(t,e){const n=w(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function li(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Bs.getTargetData(t,e).next(i=>i?(r=i,J.resolve(r)):n.Bs.allocateTargetId(t).next(i=>(r=new Dr(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Bs.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Ji.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t})}async function hi(t,e,n){const r=w(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!X(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function di(t,e,n){const r=w(t);let i=M.min(),s=qe();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=w(t),i=r.Yi.get(n);return void 0!==i?J.resolve(r.Ji.get(i)):r.Bs.getTargetData(e,n)}(r,t,Ie(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Hi.getDocumentsMatchingQuery(t,e,n?i:M.min(),n?s:qe())).next(t=>(fi(r,Ne(e),t),{documents:t,ir:s})))}function fi(t,e,n){let r=t.Xi.get(e)||M.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Xi.set(e,r)}class pi{constructor(){this.activeTargetIds=Ke()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mi{constructor(){this.Hr=new pi,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new pi,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{Yr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi=null;function wi(){return null===yi?yi=268435456+Math.round(2147483648*Math.random()):yi++,"0x"+yi.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const bi={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="WebChannelConnection";class Ti extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,n,r,i){const s=wi(),o=this.To(t,e);f("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(t,o,a,n).then(e=>(f("RestConnection",`Received RPC '${t}' ${s}: `,e),e),e=>{throw m("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e})}vo(t,e,n,r,i,s){return this.Io(t,e,n,r,i)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}To(t,e){const n=bi[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,r){const i=wi();return new Promise((s,o)=>{const c=new a["i"];c.setWithCredentials(!0),c.listenOnce(a["c"].COMPLETE,()=>{try{switch(c.getLastErrorCode()){case a["a"].NO_ERROR:const e=c.getResponseJson();f(Ei,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case a["a"].TIMEOUT:f(Ei,`RPC '${t}' ${i} timed out`),o(new _(b.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=c.getStatus();if(f(Ei,`RPC '${t}' ${i} failed with status:`,n,"response text:",c.getResponseText()),n>0){let t=c.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(e.status);o(new _(t,e.message))}else o(new _(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else o(new _(b.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{f(Ei,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(r);f(Ei,`RPC '${t}' ${i} sending request:`,r),c.send(e,"POST",u,n,15)})}Ro(t,e,n){const r=wi(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Object(a["j"])(),o=Object(a["k"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.Eo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const l=i.join("");f(Ei,`Creating RPC '${t}' stream ${r}: ${l}`,c);const h=s.createWebChannel(l,c);let d=!1,p=!1;const g=new _i({ro:e=>{p?f(Ei,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(d||(f(Ei,`Opening RPC '${t}' stream ${r} transport.`),h.open(),d=!0),f(Ei,`RPC '${t}' stream ${r} sending:`,e),h.send(e))},oo:()=>h.close()}),v=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return v(h,a["h"].EventType.OPEN,()=>{p||f(Ei,`RPC '${t}' stream ${r} transport opened.`)}),v(h,a["h"].EventType.CLOSE,()=>{p||(p=!0,f(Ei,`RPC '${t}' stream ${r} transport closed`),g.wo())}),v(h,a["h"].EventType.ERROR,e=>{p||(p=!0,m(Ei,`RPC '${t}' stream ${r} transport errored:`,e),g.wo(new _(b.UNAVAILABLE,"The operation could not be completed")))}),v(h,a["h"].EventType.MESSAGE,e=>{var n;if(!p){const i=e.data[0];y(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){f(Ei,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Rn[t];if(void 0!==e)return Pn(e)}(e),i=o.message;void 0===n&&(n=b.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),p=!0,g.wo(new _(n,i)),h.close()}else f(Ei,`RPC '${t}' stream ${r} received:`,i),g._o(i)}}),v(o,a["b"].STAT_EVENT,e=>{e.stat===a["g"].PROXY?f(Ei,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===a["g"].NOPROXY&&f(Ei,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){return new er(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e,n=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,e,n,r,i,s,o,a){this.ii=t,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Si(t,e)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Fo===e&&this.Zo(t,n)},e=>{t(()=>{const t=new _(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)})})}Zo(t,e){const n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo(()=>{n(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(t=>{n(()=>this.tu(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget(()=>this.Fo===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ai extends ki{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}eu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.qo.reset();const e=gr(this.serializer,t),n=function(t){if(!("targetChange"in t))return M.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?M.min():e.readTime?or(e.readTime):M.min()}(t);return this.listener.nu(e,n)}su(t){const e={};e.database=fr(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=me(r)?{documents:wr(t,r)}:{query:br(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=ir(t,e.resumeToken);const r=nr(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(M.min())>0){n.readTime=rr(t,e.snapshotVersion.toTimestamp());const r=nr(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=Er(this.serializer,t);n&&(e.labels=n),this.Wo(e)}iu(t){const e={};e.database=fr(this.serializer),e.removeTarget=t,this.Wo(e)}}class Oi extends ki{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){if(y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const e=yr(t.writeResults,t.commitTime),n=or(t.commitTime);return this.listener.cu(n,e)}return y(!t.writeResults||0===t.writeResults.length),this.ru=!0,this.listener.au()}hu(){const t={};t.database=fr(this.serializer),this.Wo(t)}uu(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>vr(this.serializer,t))};this.Wo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new _(b.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _(b.UNKNOWN,t.toString())})}vo(t,e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.vo(t,e,n,i,s,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _(b.UNKNOWN,t.toString())})}terminate(){this.lu=!0}}class Ri{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu("Connection failed 1 times. Most recent error: "+t.toString()),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(p(e),this.mu=!1):f("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(t=>{n.enqueueAndForget(async()=>{$i(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e.vu.add(4),await Pi(e),e.bu.set("Unknown"),e.vu.delete(4),await xi(e)}(this))})}),this.bu=new Ri(n,r)}}async function xi(t){if($i(t))for(const e of t.Ru)await e(!0)}async function Pi(t){for(const e of t.Ru)await e(!1)}function Li(t,e){const n=w(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Vi(n)?Ui(n):ss(n).Ko()&&ji(n,e))}function Mi(t,e){const n=w(t),r=ss(n);n.Au.delete(e),r.Ko()&&Fi(n,e),0===n.Au.size&&(r.Ko()?r.jo():$i(n)&&n.bu.set("Unknown"))}function ji(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(M.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ss(t).su(e)}function Fi(t,e){t.Vu.qt(e),ss(t).iu(e)}function Ui(t){t.Vu=new Qn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),ss(t).start(),t.bu.gu()}function Vi(t){return $i(t)&&!ss(t).Uo()&&t.Au.size>0}function $i(t){return 0===w(t).vu.size}function Bi(t){t.Vu=void 0}async function zi(t){t.Au.forEach((e,n)=>{ji(t,e)})}async function qi(t,e){Bi(t),Vi(t)?(t.bu.Iu(e),Ui(t)):t.bu.set("Unknown")}async function Hi(t,e,n){if(t.bu.set("Online"),e instanceof Gn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Au.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Au.delete(r),t.Vu.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ki(t,n)}else if(e instanceof Hn?t.Vu.Ht(e):e instanceof Kn?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(M.min()))try{const e=await oi(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Vu.ce(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Au.get(r);i&&t.Au.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const r=t.Au.get(e);if(!r)return;t.Au.set(e,r.withResumeToken(mt.EMPTY_BYTE_STRING,r.snapshotVersion)),Fi(t,e);const i=new Dr(r.target,e,n,r.sequenceNumber);ji(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await Ki(t,e)}}async function Ki(t,e,n){if(!X(e))throw e;t.vu.add(1),await Pi(t),t.bu.set("Offline"),n||(n=()=>oi(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await xi(t)})}function Gi(t,e){return e().catch(n=>Ki(t,n,e))}async function Wi(t){const e=w(t),n=os(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Qi(e);)try{const t=await ui(e.localStore,r);if(null===t){0===e.Eu.length&&n.jo();break}r=t.batchId,Ji(e,t)}catch(t){await Ki(e,t)}Xi(e)&&Yi(e)}function Qi(t){return $i(t)&&t.Eu.length<10}function Ji(t,e){t.Eu.push(e);const n=os(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Xi(t){return $i(t)&&!os(t).Uo()&&t.Eu.length>0}function Yi(t){os(t).start()}async function Zi(t){os(t).hu()}async function ts(t){const e=os(t);for(const n of t.Eu)e.uu(n.mutations)}async function es(t,e,n){const r=t.Eu.shift(),i=An.from(r,e,n);await Gi(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wi(t)}async function ns(t,e){e&&os(t).ou&&await async function(t,e){if(n=e.code,xn(n)&&n!==b.ABORTED){const n=t.Eu.shift();os(t).Qo(),await Gi(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Wi(t)}var n}(t,e),Xi(t)&&Yi(t)}async function rs(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=$i(n);n.vu.add(3),await Pi(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await xi(n)}async function is(t,e){const n=w(t);e?(n.vu.delete(2),await xi(n)):e||(n.vu.add(2),await Pi(n),n.bu.set("Unknown"))}function ss(t){return t.Su||(t.Su=function(t,e,n){const r=w(t);return r.fu(),new Ai(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{uo:zi.bind(null,t),ao:qi.bind(null,t),nu:Hi.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Vi(t)?Ui(t):t.bu.set("Unknown")):(await t.Su.stop(),Bi(t))})),t.Su}function os(t){return t.Du||(t.Du=function(t,e,n){const r=w(t);return r.fu(),new Oi(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{uo:Zi.bind(null,t),ao:ns.bind(null,t),au:ts.bind(null,t),cu:es.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Wi(t)):(await t.Du.stop(),t.Eu.length>0&&(f("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class as{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new as(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cs(t,e){if(p("AsyncQueue",`${e}: ${t}`),X(t))return new _(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t){this.comparator=t?(e,n)=>t(e,n)||$.comparator(e.key,n.key):(t,e)=>$.comparator(t.key,e.key),this.keyedMap=je(),this.sortedSet=new ct(this.comparator)}static emptySet(t){return new us(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof us))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new us;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.Cu=new ct($.comparator)}track(t){const e=t.doc.key,n=this.Cu.get(e);n?0!==t.type&&3===n.type?this.Cu=this.Cu.insert(e,t):3===t.type&&1!==n.type?this.Cu=this.Cu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Cu=this.Cu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Cu=this.Cu.remove(e):1===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):v():this.Cu=this.Cu.insert(e,t)}xu(){const t=[];return this.Cu.inorderTraversal((e,n)=>{t.push(n)}),t}}class hs{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach(t=>{s.push({type:0,doc:t})}),new hs(t,e,us.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Se(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.Nu=void 0,this.listeners=[]}}class fs{constructor(){this.queries=new xe(t=>ke(t),Se),this.onlineState="Unknown",this.ku=new Set}}async function ps(t,e){const n=w(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new ds),i)try{s.Nu=await n.onListen(r)}catch(t){const n=cs(t,`Initialization of query '${Ae(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&ys(n)}async function ms(t,e){const n=w(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function gs(t,e){const n=w(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.$u(i)&&(r=!0);e.Nu=i}}r&&ys(n)}function vs(t,e,n){const r=w(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ys(t){t.ku.forEach(t=>{t.next()})}class ws{constructor(t,e,n){this.query=t,this.Ou=e,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new hs(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),e=!0):this.qu(t,this.onlineState)&&(this.Uu(t),e=!0),this.Bu=t,e}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let e=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),e=!0),e}qu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Lu(t){if(t.docChanges.length>0)return!0;const e=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Uu(t){t=hs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bs{constructor(t){this.key=t}}class _s{constructor(t){this.key=t}}class Es{constructor(t,e){this.query=t,this.Yu=e,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=qe(),this.mutatedKeys=qe(),this.tc=Re(t),this.ec=new us(this.tc)}get nc(){return this.Yu}sc(t,e){const n=e?e.ic:new ls,r=e?e.ec:this.ec;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=Oe(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.tc(t.doc,e.doc)),this.oc(n);const s=e?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new hs(this.query,t.ec,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ls,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=qe(),this.ec.forEach(t=>{this.ac(t.key)&&(this.Zu=this.Zu.add(t.key))});const e=[];return t.forEach(t=>{this.Zu.has(t)||e.push(new _s(t))}),this.Zu.forEach(n=>{t.has(n)||e.push(new bs(n))}),e}hc(t){this.Yu=t.ir,this.Zu=qe();const e=this.sc(t.documents);return this.applyChanges(e,!0)}lc(){return hs.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class Ts{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Is{constructor(t){this.key=t,this.fc=!1}}class Cs{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new xe(t=>ke(t),Se),this._c=new Map,this.mc=new Set,this.gc=new ct($.comparator),this.yc=new Map,this.Ic=new Hr,this.Tc={},this.Ec=new Map,this.Ac=Ur.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function Ss(t,e){const n=Hs(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const t=await li(n.localStore,Ie(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await ks(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&Li(n.remoteStore,t)}return i}async function ks(t,e,n,r,i){t.Rc=(e,n,r)=>async function(t,e,n,r){let i=e.view.sc(n);i.zi&&(i=await di(t.localStore,e.query,!1).then(({documents:t})=>e.view.sc(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Us(t,e.targetId,o.cc),o.snapshot}(t,e,n,r);const s=await di(t.localStore,e,!0),o=new Es(e,s.ir),a=o.sc(s.documents),c=qn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);Us(t,n,u.cc);const l=new Ts(e,n,o);return t.wc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function As(t,e){const n=w(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(t=>!Se(t,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await hi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Mi(n.remoteStore,r.targetId),js(n,r.targetId)}).catch(Q)):(js(n,r.targetId),await hi(n.localStore,r.targetId,!0))}async function Os(t,e,n){const r=Ks(t);try{const t=await function(t,e){const n=w(t),r=L.now(),i=e.reduce((t,e)=>t.add(e.key),qe());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=Le(),c=qe();return n.Zi.getEntries(t,i).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(i=>{s=i;const o=[];for(const t of e){const e=yn(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new _n(t.key,e,$t(e.value.mapValue),dn.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:Fe(s)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Tc[t.currentUser.toKey()];r||(r=new ct(x)),r=r.insert(e,n),t.Tc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Bs(r,t.changes),await Wi(r.remoteStore)}catch(t){const e=cs(t,"Failed to persist write");n.reject(e)}}async function Ns(t,e){const n=w(t);try{const t=await ai(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.yc.get(e);r&&(y(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.fc=!0:t.modifiedDocuments.size>0?y(r.fc):t.removedDocuments.size>0&&(y(r.fc),r.fc=!1))}),await Bs(n,t,e)}catch(t){await Q(t)}}function Rs(t,e,n){const r=w(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.wc.forEach((n,r)=>{const i=r.view.Mu(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=w(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.Mu(e)&&(r=!0)}),r&&ys(n)}(r.eventManager,e),t.length&&r.dc.nu(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ds(t,e,n){const r=w(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let t=new ct($.comparator);t=t.insert(s,Bt.newNoDocument(s,M.min()));const n=qe().add(s),i=new zn(M.min(),new Map,new ct(x),t,n);await Ns(r,i),r.gc=r.gc.remove(s),r.yc.delete(e),$s(r)}else await hi(r.localStore,e,!1).then(()=>js(r,e,n)).catch(Q)}async function xs(t,e){const n=w(t),r=e.batch.batchId;try{const t=await si(n.localStore,e);Ms(n,r,null),Ls(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bs(n,t)}catch(t){await Q(t)}}async function Ps(t,e,n){const r=w(t);try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(y(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);Ms(r,e,n),Ls(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bs(r,t)}catch(n){await Q(n)}}function Ls(t,e){(t.Ec.get(e)||[]).forEach(t=>{t.resolve()}),t.Ec.delete(e)}function Ms(t,e,n){const r=w(t);let i=r.Tc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function js(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(e=>{t.Ic.containsKey(e)||Fs(t,e)})}function Fs(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);null!==n&&(Mi(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),$s(t))}function Us(t,e,n){for(const r of n)r instanceof bs?(t.Ic.addReference(r.key,e),Vs(t,r)):r instanceof _s?(f("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||Fs(t,r.key)):v()}function Vs(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(f("SyncEngine","New document in limbo: "+n),t.mc.add(r),$s(t))}function $s(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new $(F.fromString(e)),r=t.Ac.next();t.yc.set(r,new Is(n)),t.gc=t.gc.insert(n,r),Li(t.remoteStore,new Dr(Ie(ye(n.path)),r,"TargetPurposeLimboResolution",Y.ct))}}async function Bs(t,e,n){const r=w(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((t,a)=>{o.push(r.Rc(a,e,n).then(t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=ti.Li(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.dc.nu(i),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>J.forEach(e,e=>J.forEach(e.Fi,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>J.forEach(e.Bi,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!X(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,i)}}}(r.localStore,s))}async function zs(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await ii(n.localStore,e);n.currentUser=e,function(t,e){t.Ec.forEach(t=>{t.forEach(t=>{t.reject(new _(b.CANCELLED,e))})}),t.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Bs(n,t.er)}}function qs(t,e){const n=w(t),r=n.yc.get(e);if(r&&r.fc)return qe().add(r.key);{let t=qe();const r=n._c.get(e);if(!r)return t;for(const e of r){const r=n.wc.get(e);t=t.unionWith(r.view.nc)}return t}}function Hs(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ns.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qs.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ds.bind(null,e),e.dc.nu=gs.bind(null,e.eventManager),e.dc.Pc=vs.bind(null,e.eventManager),e}function Ks(t){const e=w(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xs.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ps.bind(null,e),e}class Gs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ci(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ri(this.persistence,new ei,t.initialUser,this.serializer)}createPersistence(t){return new Xr(Zr.zs,this.serializer)}createSharedClientState(t){return new mi}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ws{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Rs(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=zs.bind(null,this.syncEngine),await is(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new fs}createDatastore(t){const e=Ci(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ti(r));var r;return function(t,e,n,r){return new Ni(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Rs(this.syncEngine,t,0),s=vi.D()?new vi:new gi,new Di(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Cs(t,e,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);f("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await Pi(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):p("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Js{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=D.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(f("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=cs(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Xs(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await ii(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ys(t,e){t.asyncQueue.verifyOperationInProgress();const n=await to(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>rs(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>rs(e.remoteStore,n)),t._onlineComponents=e}function Zs(t){return"FirebaseError"===t.name?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function to(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){f("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xs(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Zs(n))throw n;m("Error using user provided cache. Falling back to memory cache: "+n),await Xs(t,new Gs)}}else f("FirestoreClient","Using default OfflineComponentProvider"),await Xs(t,new Gs);return t._offlineComponents}async function eo(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(f("FirestoreClient","Using user provided OnlineComponentProvider"),await Ys(t,t._uninitializedComponentsProvider._online)):(f("FirestoreClient","Using default OnlineComponentProvider"),await Ys(t,new Ws))),t._onlineComponents}function no(t){return eo(t).then(t=>t.syncEngine)}async function ro(t){const e=await eo(t),n=e.eventManager;return n.onListen=Ss.bind(null,e.syncEngine),n.onUnlisten=As.bind(null,e.syncEngine),n}function io(t,e,n={}){const r=new E;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Qs({next:s=>{e.enqueueAndForget(()=>ms(t,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new _(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new _(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new ws(ye(n.path),s,{includeMetadataChanges:!0,Ku:!0});return ps(t,o)}(await ro(t),t.asyncQueue,e,n,r)),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function so(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const oo=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t,e,n){if(!n)throw new _(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function co(t,e,n,r){if(!0===e&&!0===r)throw new _(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uo(t){if(!$.isDocumentKey(t))throw new _(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lo(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":v()}function ho(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lo(t);throw new _(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fo{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new _(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new _(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}co("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=so(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new _(b.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new _(b.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new _(b.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class po{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new _(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fo(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new I;switch(t.type){case"firstParty":return new A(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new _(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=oo.get(t);e&&(f("ComponentProvider","Removing Datastore"),oo.delete(t),e.terminate())}(this),Promise.resolve()}}function mo(t,e,n,r={}){var i;const s=(t=ho(t,po))._getSettings(),a=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&m("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=u.MOCK_USER;else{e=Object(o["f"])(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new _(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}t._authCredentials=new C(new T(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yo(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new go(this.firestore,t,this._key)}}class vo{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new vo(this.firestore,t,this._query)}}class yo extends vo{constructor(t,e,n){super(t,e,ye(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new go(this.firestore,null,new $(t))}withConverter(t){return new yo(this.firestore,t,this._path)}}function wo(t,e,...n){if(t=Object(o["n"])(t),1===arguments.length&&(e=D.A()),ao("doc","path",e),t instanceof po){const r=F.fromString(e,...n);return uo(r),new go(t,null,new $(r))}{if(!(t instanceof go||t instanceof yo))throw new _(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return uo(r),new go(t.firestore,t instanceof yo?t.converter:null,new $(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Si(this,"async_queue_retry"),this.Xc=()=>{const t=Ii();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const t=Ii();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=Ii();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const e=new E;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!X(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const e=this.Gc.then(()=>(this.Hc=!0,t().catch(t=>{this.Wc=t,this.Hc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Hc=!1,t))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const r=as.createAndSchedule(this,t,e,n,t=>this.na(t));return this.zc.push(r),r}Zc(){this.Wc&&v()}verifyOperationInProgress(){}async sa(){let t;do{t=this.Gc,await t}while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.zc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}}class _o extends po{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new bo,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Io(this),this._firestoreClient.terminate()}}function Eo(t,e){const n="object"==typeof t?t:Object(r["e"])(),i="string"==typeof t?t:e||"(default)",s=Object(r["b"])(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const t=Object(o["l"])("firestore");t&&mo(s,...t)}return s}function To(t){return t._firestoreClient||Io(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Io(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new Tt(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,so(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Js(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Co(mt.fromBase64String(t))}catch(t){throw new _(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Co(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new _(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new V(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ko{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new _(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new _(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return x(this._lat,t._lat)||x(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=/^__.*__$/;class No{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new _n(t,this.data,this.fieldMask,e,this.fieldTransforms):new bn(t,this.data,e,this.fieldTransforms)}}class Ro{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new _n(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Do(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class xo{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new xo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.fa(t),r}da(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.ua(),r}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Qo(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(Do(this.ca)&&Oo.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class Po{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ci(t)}ya(t,e,n,r=!1){return new xo({ca:t,methodName:e,ga:n,path:V.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lo(t){const e=t._freezeSettings(),n=Ci(t._databaseId);return new Po(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Mo(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Ho("Data must be an object, but it was:",o,r);const a=zo(r,o);let c,u;if(s.merge)c=new ft(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Ko(e,r,n);if(!o.contains(i))throw new _(b.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Jo(t,i)||t.push(i)}c=new ft(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new No(new Vt(a),c,u)}class jo extends ko{_toFieldTransform(t){if(2!==t.ca)throw 1===t.ca?t._a(this._methodName+"() can only appear at the top level of your update data"):t._a(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof jo}}function Fo(t,e,n){return new xo({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Uo extends ko{constructor(t,e){super(t),this.pa=e}_toFieldTransform(t){const e=Fo(this,t,!0),n=this.pa.map(t=>Bo(t,e)),r=new en(n);return new un(t.path,r)}isEqual(t){return this===t}}function Vo(t,e,n,r){const i=t.ya(1,e,n);Ho("Data must be an object, but it was:",i,r);const s=[],a=Vt.empty();ot(r,(t,r)=>{const c=Wo(e,t,n);r=Object(o["n"])(r);const u=i.da(c);if(r instanceof jo)s.push(c);else{const t=Bo(r,u);null!=t&&(s.push(c),a.set(c,t))}});const c=new ft(s);return new Ro(a,c,i.fieldTransforms)}function $o(t,e,n,r,i,s){const a=t.ya(1,e,n),c=[Ko(e,r,n)],u=[i];if(s.length%2!=0)throw new _(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Ko(e,s[o])),u.push(s[o+1]);const l=[],h=Vt.empty();for(let f=c.length-1;f>=0;--f)if(!Jo(l,c[f])){const t=c[f];let e=u[f];e=Object(o["n"])(e);const n=a.da(t);if(e instanceof jo)l.push(t);else{const r=Bo(e,n);null!=r&&(l.push(t),h.set(t,r))}}const d=new ft(l);return new Ro(h,d,a.fieldTransforms)}function Bo(t,e){if(qo(t=Object(o["n"])(t)))return Ho("Unsupported field value:",e,t),zo(t,e);if(t instanceof ko)return function(t,e){if(!Do(e.ca))throw e._a(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e._a(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&4!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Bo(i,e.wa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["n"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Qe(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=L.fromDate(t);return{timestampValue:rr(e.serializer,n)}}if(t instanceof L){const n=new L(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:rr(e.serializer,n)}}if(t instanceof Ao)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Co)return{bytesValue:ir(e.serializer,t._byteString)};if(t instanceof go){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ar(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a("Unsupported field value: "+lo(t))}(t,e)}function zo(t,e){const n={};return at(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ot(t,(t,r)=>{const i=Bo(r,e.ha(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function qo(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof L||t instanceof Ao||t instanceof Co||t instanceof go||t instanceof ko)}function Ho(t,e,n){if(!qo(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=lo(n);throw"an object"===r?e._a(t+" a custom object"):e._a(t+" "+r)}}function Ko(t,e,n){if((e=Object(o["n"])(e))instanceof So)return e._internalPath;if("string"==typeof e)return Wo(t,e);throw Qo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Go=new RegExp("[~\\*/\\[\\]]");function Wo(t,e,n){if(e.search(Go)>=0)throw Qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new So(...e.split("."))._internalPath}catch(r){throw Qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new _(b.INVALID_ARGUMENT,a+t+c)}function Jo(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new go(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Yo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Zo("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Yo extends Xo{data(){return super.data()}}function Zo(t,e){return"string"==typeof e?Wo(t,e):e instanceof So?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{convertValue(t,e="none"){switch(St(t)){case 0:return null;case 1:return t.booleanValue;case 2:return yt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(wt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ot(t,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new Ao(yt(t.latitude),yt(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=_t(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Et(t));default:return null}}convertTimestamp(t){const e=vt(t);return new L(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=F.fromString(t);y(Rr(n));const r=new It(n.get(1),n.get(3)),i=new $(n.popFirst(5));return r.isEqual(e)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class na{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ra extends Xo{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Zo("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ia extends ra{data(t={}){return super.data(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sa(t){t=ho(t,go);const e=ho(t.firestore,_o);return io(To(e),t._key).then(n=>la(e,t,n))}class oa extends ta{constructor(t){super(),this.firestore=t}convertBytes(t){return new Co(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new go(this.firestore,null,e)}}function aa(t,e,n){t=ho(t,go);const r=ho(t.firestore,_o),i=ea(t.converter,e,n);return ua(r,[Mo(Lo(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,dn.none())])}function ca(t,e,n,...r){t=ho(t,go);const i=ho(t.firestore,_o),s=Lo(i);let a;return a="string"==typeof(e=Object(o["n"])(e))||e instanceof So?$o(s,"updateDoc",t._key,e,n,r):Vo(s,"updateDoc",t._key,e),ua(i,[a.toMutation(t._key,dn.exists(!0))])}function ua(t,e){return function(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>Os(await no(t),e,n)),n.promise}(To(t),e)}function la(t,e,n){const r=n.docs.get(e._key),i=new oa(t);return new ra(t,i,e._key,r,new na(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(...t){return new Uo("arrayUnion",t)}!function(t,e=!0){!function(t){l=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new _o(new S(t.getProvider("auth-internal")),new N(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new _(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new It(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Object(r["g"])(c,"3.13.0",t),Object(r["g"])(c,"3.13.0","esm2017")}()}).call(this,n("4362"))},1494:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]})),n.d(e,"e",(function(){return r["e"]})),n.d(e,"f",(function(){return r["f"]}))},"1fd5":function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return x})),n.d(e,"c",(function(){return D})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return _})),n.d(e,"g",(function(){return B})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return $})),n.d(e,"j",(function(){return y})),n.d(e,"k",(function(){return g})),n.d(e,"l",(function(){return v})),n.d(e,"m",(function(){return w})),n.d(e,"n",(function(){return K})),n.d(e,"o",(function(){return E})),n.d(e,"p",(function(){return C})),n.d(e,"q",(function(){return M})),n.d(e,"r",(function(){return k})),n.d(e,"s",(function(){return O})),n.d(e,"t",(function(){return T})),n.d(e,"u",(function(){return S})),n.d(e,"v",(function(){return A})),n.d(e,"w",(function(){return U})),n.d(e,"x",(function(){return V})),n.d(e,"y",(function(){return N}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==u||null==h)throw new a;const d=e<<2|o>>4;if(r.push(d),64!==u){const t=o<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(t){const e=i(t);return o.encodeByteArray(e,!0)},u=function(t){return c(t).replace(/\./g,"")},l=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t)return t;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>h().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof r)return;const t=Object({NODE_ENV:"production",BASE_URL:"/"}).__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},m=()=>{try{return d()||f()||p()}catch(t){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+t)}},g=t=>{var e,n;return null===(n=null===(e=m())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},v=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=m())||void 0===t?void 0:t.config},w=t=>{var e;return null===(e=m())||void 0===e?void 0:e["_"+t]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function T(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function I(){var e;const n=null===(e=m())||void 0===e?void 0:e.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(r){return!1}}function C(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function k(){const t=E();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function A(){return!I()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O(){try{return"object"===typeof indexedDB}catch(t){return!1}}function N(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R="FirebaseError";class D extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=R,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?P(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new D(r,o,n);return a}}function P(t,e){return t.replace(L,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function j(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(F(n)&&F(s)){if(!j(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function V(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function $(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e){const n=new z(t,e);return n.subscribe.bind(n)}class z{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=q(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=H),void 0===r.error&&(r.error=H),void 0===r.complete&&(r.complete=H);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function H(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"),n("4362"))},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,s,o,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},"2b0e":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Yr}));
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
var r=Object.freeze({}),i=Array.isArray;function s(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function a(t){return!0===t}function c(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var d=Object.prototype.toString;function f(t){return"[object Object]"===d.call(t)}function p(t){return"[object RegExp]"===d.call(t)}function m(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function g(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===d?JSON.stringify(t,y,2):String(t)}function y(t,e){return e&&e.__v_isRef?e.value:e}function w(t){var e=parseFloat(t);return isNaN(e)?t:e}function b(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}b("slot,component",!0);var _=b("key,ref,slot,slot-scope,is");function E(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var T=Object.prototype.hasOwnProperty;function I(t,e){return T.call(t,e)}function C(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var S=/-(\w)/g,k=C((function(t){return t.replace(S,(function(t,e){return e?e.toUpperCase():""}))})),A=C((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),O=/\B([A-Z])/g,N=C((function(t){return t.replace(O,"-$1").toLowerCase()}));function R(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function D(t,e){return t.bind(e)}var x=Function.prototype.bind?D:R;function P(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function L(t,e){for(var n in e)t[n]=e[n];return t}function M(t){for(var e={},n=0;n<t.length;n++)t[n]&&L(e,t[n]);return e}function j(t,e,n){}var F=function(t,e,n){return!1},U=function(t){return t};function V(t,e){if(t===e)return!0;var n=h(t),r=h(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every((function(t,n){return V(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return V(t[n],e[n])}))}catch(c){return!1}}function $(t,e){for(var n=0;n<t.length;n++)if(V(t[n],e))return n;return-1}function B(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function z(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var q="data-server-rendered",H=["component","directive","filter"],K=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],G={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:F,isReservedAttr:F,isUnknownElement:F,getTagNamespace:j,parsePlatformTagName:U,mustUseProp:F,async:!0,_lifecycleHooks:K},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function J(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var X=new RegExp("[^".concat(W.source,".$_\\d]"));function Y(t){if(!X.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Z="__proto__"in{},tt="undefined"!==typeof window,et=tt&&window.navigator.userAgent.toLowerCase(),nt=et&&/msie|trident/.test(et),rt=et&&et.indexOf("msie 9.0")>0,it=et&&et.indexOf("edge/")>0;et&&et.indexOf("android");var st=et&&/iphone|ipad|ipod|ios/.test(et);et&&/chrome\/\d+/.test(et),et&&/phantomjs/.test(et);var ot,at=et&&et.match(/firefox\/(\d+)/),ct={}.watch,ut=!1;if(tt)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){ut=!0}}),window.addEventListener("test-passive",null,lt)}catch(Zo){}var ht=function(){return void 0===ot&&(ot=!tt&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),ot},dt=tt&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ft(t){return"function"===typeof t&&/native code/.test(t.toString())}var pt,mt="undefined"!==typeof Symbol&&ft(Symbol)&&"undefined"!==typeof Reflect&&ft(Reflect.ownKeys);pt="undefined"!==typeof Set&&ft(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var gt=null;function vt(t){void 0===t&&(t=null),t||gt&&gt._scope.off(),gt=t,t&&t._scope.on()}var yt=function(){function t(t,e,n,r,i,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),wt=function(t){void 0===t&&(t="");var e=new yt;return e.text=t,e.isComment=!0,e};function bt(t){return new yt(void 0,void 0,void 0,String(t))}function _t(t){var e=new yt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}"function"===typeof SuppressedError&&SuppressedError;var Et=0,Tt=[],It=function(){for(var t=0;t<Tt.length;t++){var e=Tt[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}Tt.length=0},Ct=function(){function t(){this._pending=!1,this.id=Et++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,Tt.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,r=e.length;n<r;n++){var i=e[n];0,i.update()}},t}();Ct.target=null;var St=[];function kt(t){St.push(t),Ct.target=t}function At(){St.pop(),Ct.target=St[St.length-1]}var Ot=Array.prototype,Nt=Object.create(Ot),Rt=["push","pop","shift","unshift","splice","sort","reverse"];Rt.forEach((function(t){var e=Ot[t];J(Nt,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var Dt=Object.getOwnPropertyNames(Nt),xt={},Pt=!0;function Lt(t){Pt=t}var Mt={notify:j,depend:j,addSub:j,removeSub:j},jt=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Mt:new Ct,this.vmCount=0,J(t,"__ob__",this),i(t)){if(!n)if(Z)t.__proto__=Nt;else for(var r=0,s=Dt.length;r<s;r++){var o=Dt[r];J(t,o,Nt[o])}e||this.observeArray(t)}else{var a=Object.keys(t);for(r=0;r<a.length;r++){o=a[r];Ut(t,o,xt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ft(t[e],!1,this.mock)},t}();function Ft(t,e,n){return t&&I(t,"__ob__")&&t.__ob__ instanceof jt?t.__ob__:!Pt||!n&&ht()||!i(t)&&!f(t)||!Object.isExtensible(t)||t.__v_skip||Kt(t)||t instanceof yt?void 0:new jt(t,e,n)}function Ut(t,e,n,r,s,o,a){void 0===a&&(a=!1);var c=new Ct,u=Object.getOwnPropertyDescriptor(t,e);if(!u||!1!==u.configurable){var l=u&&u.get,h=u&&u.set;l&&!h||n!==xt&&2!==arguments.length||(n=t[e]);var d=s?n&&n.__ob__:Ft(n,!1,o);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=l?l.call(t):n;return Ct.target&&(c.depend(),d&&(d.dep.depend(),i(e)&&Bt(e))),Kt(e)&&!s?e.value:e},set:function(e){var r=l?l.call(t):n;if(z(r,e)){if(h)h.call(t,e);else{if(l)return;if(!s&&Kt(r)&&!Kt(e))return void(r.value=e);n=e}d=s?e&&e.__ob__:Ft(e,!1,o),c.notify()}}}),c}}function Vt(t,e,n){if(!Ht(t)){var r=t.__ob__;return i(t)&&m(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),r&&!r.shallow&&r.mock&&Ft(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||r&&r.vmCount?n:r?(Ut(r.value,e,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(t[e]=n,n)}}function $t(t,e){if(i(t)&&m(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||Ht(t)||I(t,e)&&(delete t[e],n&&n.dep.notify())}}function Bt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),i(e)&&Bt(e)}function zt(t){return qt(t,!0),J(t,"__v_isShallow",!0),t}function qt(t,e){if(!Ht(t)){Ft(t,e,ht());0}}function Ht(t){return!(!t||!t.__v_isReadonly)}function Kt(t){return!(!t||!0!==t.__v_isRef)}function Gt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Kt(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Kt(r)&&!Kt(t)?r.value=t:e[n]=t}})}var Wt="watcher";"".concat(Wt," callback"),"".concat(Wt," getter"),"".concat(Wt," cleanup");var Qt;var Jt=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qt,!t&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Qt;try{return Qt=this,t()}finally{Qt=e}}else 0},t.prototype.on=function(){Qt=this},t.prototype.off=function(){Qt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Xt(t,e){void 0===e&&(e=Qt),e&&e.active&&e.effects.push(t)}function Yt(){return Qt}function Zt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var te=C((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function ee(t,e){function n(){var t=n.fns;if(!i(t))return Xe(t,null,arguments,e,"v-on handler");for(var r=t.slice(),s=0;s<r.length;s++)Xe(r[s],null,arguments,e,"v-on handler")}return n.fns=t,n}function ne(t,e,n,r,i,o){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=te(c),s(u)||(s(l)?(s(u.fns)&&(u=t[c]=ee(u,o)),a(h.once)&&(u=t[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)s(t[c])&&(h=te(c),r(h.name,e[c],h.capture))}function re(t,e,n){var r;t instanceof yt&&(t=t.data.hook||(t.data.hook={}));var i=t[e];function c(){n.apply(this,arguments),E(r.fns,c)}s(i)?r=ee([c]):o(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=ee([i,c]),r.merged=!0,t[e]=r}function ie(t,e,n){var r=e.options.props;if(!s(r)){var i={},a=t.attrs,c=t.props;if(o(a)||o(c))for(var u in r){var l=N(u);se(i,c,u,l,!0)||se(i,a,u,l,!1)}return i}}function se(t,e,n,r,i){if(o(e)){if(I(e,n))return t[n]=e[n],i||delete e[n],!0;if(I(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function oe(t){for(var e=0;e<t.length;e++)if(i(t[e]))return Array.prototype.concat.apply([],t);return t}function ae(t){return u(t)?[bt(t)]:i(t)?ue(t):void 0}function ce(t){return o(t)&&o(t.text)&&c(t.isComment)}function ue(t,e){var n,r,c,l,h=[];for(n=0;n<t.length;n++)r=t[n],s(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=ue(r,"".concat(e||"","_").concat(n)),ce(r[0])&&ce(l)&&(h[c]=bt(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?ce(l)?h[c]=bt(l.text+r):""!==r&&h.push(bt(r)):ce(r)&&ce(l)?h[c]=bt(l.text+r.text):(a(t._isVList)&&o(r.tag)&&s(r.key)&&o(e)&&(r.key="__vlist".concat(e,"_").concat(n,"__")),h.push(r)));return h}function le(t,e){var n,r,s,a,c=null;if(i(t)||"string"===typeof t)for(c=new Array(t.length),n=0,r=t.length;n<r;n++)c[n]=e(t[n],n);else if("number"===typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(h(t))if(mt&&t[Symbol.iterator]){c=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)c.push(e(l.value,c.length)),l=u.next()}else for(s=Object.keys(t),c=new Array(s.length),n=0,r=s.length;n<r;n++)a=s[n],c[n]=e(t[a],a,n);return o(c)||(c=[]),c._isVList=!0,c}function he(t,e,n,r){var i,s=this.$scopedSlots[t];s?(n=n||{},r&&(n=L(L({},r),n)),i=s(n)||(l(e)?e():e)):i=this.$slots[t]||(l(e)?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function de(t){return Cr(this.$options,"filters",t,!0)||U}function fe(t,e){return i(t)?-1===t.indexOf(e):t!==e}function pe(t,e,n,r,i){var s=G.keyCodes[e]||n;return i&&r&&!G.keyCodes[e]?fe(i,r):s?fe(s,t):r?N(r)!==e:void 0===t}function me(t,e,n,r,s){if(n)if(h(n)){i(n)&&(n=M(n));var o=void 0,a=function(i){if("class"===i||"style"===i||_(i))o=t;else{var a=t.attrs&&t.attrs.type;o=r||G.mustUseProp(e,a,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=k(i),u=N(i);if(!(c in o)&&!(u in o)&&(o[i]=n[i],s)){var l=t.on||(t.on={});l["update:".concat(i)]=function(t){n[i]=t}}};for(var c in n)a(c)}else;return t}function ge(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),ye(r,"__static__".concat(t),!1)),r}function ve(t,e,n){return ye(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function ye(t,e,n){if(i(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&we(t[r],"".concat(e,"_").concat(r),n);else we(t,e,n)}function we(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function be(t,e){if(e)if(f(e)){var n=t.on=t.on?L({},t.on):{};for(var r in e){var i=n[r],s=e[r];n[r]=i?[].concat(i,s):s}}else;return t}function _e(t,e,n,r){e=e||{$stable:!n};for(var s=0;s<t.length;s++){var o=t[s];i(o)?_e(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Ee(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Te(t,e){return"string"===typeof t?e+t:t}function Ie(t){t._o=ve,t._n=w,t._s=v,t._l=le,t._t=he,t._q=V,t._i=$,t._m=ge,t._f=de,t._k=pe,t._b=me,t._v=bt,t._e=wt,t._u=_e,t._g=be,t._d=Ee,t._p=Te}function Ce(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var s=t[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Se)&&delete n[u];return n}function Se(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t){return t.isComment&&t.asyncFactory}function Ae(t,e,n,i){var s,o=Object.keys(n).length>0,a=e?!!e.$stable:!o,c=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&i&&i!==r&&c===i.$key&&!o&&!i.$hasNormal)return i;for(var u in s={},e)e[u]&&"$"!==u[0]&&(s[u]=Oe(t,n,u,e[u]))}else s={};for(var l in n)l in s||(s[l]=Ne(n,l));return e&&Object.isExtensible(e)&&(e._normalized=s),J(s,"$stable",a),J(s,"$key",c),J(s,"$hasNormal",o),s}function Oe(t,e,n,r){var s=function(){var e=gt;vt(t);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:ae(n);var s=n&&n[0];return vt(e),n&&(!s||1===n.length&&s.isComment&&!ke(s))?void 0:n};return r.proxy&&Object.defineProperty(e,n,{get:s,enumerable:!0,configurable:!0}),s}function Ne(t,e){return function(){return t[e]}}function Re(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=De(t);vt(t),kt();var i=Xe(n,null,[t._props||zt({}),r],t,"setup");if(At(),vt(),l(i))e.render=i;else if(h(i))if(t._setupState=i,i.__sfc){var s=t._setupProxy={};for(var o in i)"__sfc"!==o&&Gt(s,i,o)}else for(var o in i)Q(o)||Gt(t,i,o);else 0}}function De(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};J(e,"_v_attr_proxy",!0),xe(e,t.$attrs,r,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};xe(e,t.$listeners,r,t,"$listeners")}return t._listenersProxy},get slots(){return Le(t)},emit:x(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Gt(t,e,n)}))}}}function xe(t,e,n,r,i){var s=!1;for(var o in e)o in t?e[o]!==n[o]&&(s=!0):(s=!0,Pe(t,o,r,i));for(var o in t)o in e||(s=!0,delete t[o]);return s}function Pe(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function Le(t){return t._slotsProxy||Me(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function Me(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function je(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=Ce(e._renderChildren,i),t.$scopedSlots=n?Ae(t.$parent,n.data.scopedSlots,t.$slots):r,t._c=function(e,n,r,i){return Ke(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Ke(t,e,n,r,i,!0)};var s=n&&n.data;Ut(t,"$attrs",s&&s.attrs||r,null,!0),Ut(t,"$listeners",e._parentListeners||r,null,!0)}var Fe=null;function Ue(t){Ie(t.prototype),t.prototype.$nextTick=function(t){return ln(t,this)},t.prototype._render=function(){var t=this,e=t.$options,n=e.render,r=e._parentVnode;r&&t._isMounted&&(t.$scopedSlots=Ae(t.$parent,r.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Me(t._slotsProxy,t.$scopedSlots)),t.$vnode=r;var s,o=gt,a=Fe;try{vt(t),Fe=t,s=n.call(t._renderProxy,t.$createElement)}catch(Zo){Je(Zo,t,"render"),s=t._vnode}finally{Fe=a,vt(o)}return i(s)&&1===s.length&&(s=s[0]),s instanceof yt||(s=wt()),s.parent=r,s}}function Ve(t,e){return(t.__esModule||mt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function $e(t,e,n,r,i){var s=wt();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:r,tag:i},s}function Be(t,e){if(a(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=Fe;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var r=t.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return E(r,n)}));var l=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=B((function(n){t.resolved=Ve(n,e),i?r.length=0:l(!0)})),f=B((function(e){o(t.errorComp)&&(t.error=!0,l(!0))})),p=t(d,f);return h(p)&&(g(p)?s(t.resolved)&&p.then(d,f):g(p.component)&&(p.component.then(d,f),o(p.error)&&(t.errorComp=Ve(p.error,e)),o(p.loading)&&(t.loadingComp=Ve(p.loading,e),0===p.delay?t.loading=!0:c=setTimeout((function(){c=null,s(t.resolved)&&s(t.error)&&(t.loading=!0,l(!1))}),p.delay||200)),o(p.timeout)&&(u=setTimeout((function(){u=null,s(t.resolved)&&f(null)}),p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function ze(t){if(i(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||ke(n)))return n}}var qe=1,He=2;function Ke(t,e,n,r,s,o){return(i(n)||u(n))&&(s=r,r=n,n=void 0),a(o)&&(s=He),Ge(t,e,n,r,s)}function Ge(t,e,n,r,s){if(o(n)&&o(n.__ob__))return wt();if(o(n)&&o(n.is)&&(e=n.is),!e)return wt();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),s===He?r=ae(r):s===qe&&(r=oe(r)),"string"===typeof e){var u=void 0;c=t.$vnode&&t.$vnode.ns||G.getTagNamespace(e),a=G.isReservedTag(e)?new yt(G.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Cr(t.$options,"components",e))?new yt(e,n,r,void 0,void 0,t):cr(u,n,t,r,e)}else a=cr(e,n,t,r);return i(a)?a:o(a)?(o(c)&&We(a,c),o(n)&&Qe(n),a):wt()}function We(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var r=0,i=t.children.length;r<i;r++){var c=t.children[r];o(c.tag)&&(s(c.ns)||a(n)&&"svg"!==c.tag)&&We(c,e,n)}}function Qe(t){h(t.style)&&mn(t.style),h(t.class)&&mn(t.class)}function Je(t,e,n){kt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,t,e,n);if(o)return}catch(Zo){Ye(Zo,r,"errorCaptured hook")}}}Ye(t,e,n)}finally{At()}}function Xe(t,e,n,r,i){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&g(s)&&!s._handled&&(s.catch((function(t){return Je(t,r,i+" (Promise/async)")})),s._handled=!0)}catch(Zo){Je(Zo,r,i)}return s}function Ye(t,e,n){if(G.errorHandler)try{return G.errorHandler.call(null,t,e,n)}catch(Zo){Zo!==t&&Ze(Zo,null,"config.errorHandler")}Ze(t,e,n)}function Ze(t,e,n){if(!tt||"undefined"===typeof console)throw t;console.error(t)}var tn,en=!1,nn=[],rn=!1;function sn(){rn=!1;var t=nn.slice(0);nn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ft(Promise)){var on=Promise.resolve();tn=function(){on.then(sn),st&&setTimeout(j)},en=!0}else if(nt||"undefined"===typeof MutationObserver||!ft(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())tn="undefined"!==typeof setImmediate&&ft(setImmediate)?function(){setImmediate(sn)}:function(){setTimeout(sn,0)};else{var an=1,cn=new MutationObserver(sn),un=document.createTextNode(String(an));cn.observe(un,{characterData:!0}),tn=function(){an=(an+1)%2,un.data=String(an)},en=!0}function ln(t,e){var n;if(nn.push((function(){if(t)try{t.call(e)}catch(Zo){Je(Zo,e,"nextTick")}else n&&n(e)})),rn||(rn=!0,tn()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function hn(t){return function(e,n){if(void 0===n&&(n=gt),n)return dn(n,t,e)}}function dn(t,e,n){var r=t.$options;r[e]=vr(r[e],n)}hn("beforeMount"),hn("mounted"),hn("beforeUpdate"),hn("updated"),hn("beforeDestroy"),hn("destroyed"),hn("activated"),hn("deactivated"),hn("serverPrefetch"),hn("renderTracked"),hn("renderTriggered"),hn("errorCaptured");var fn="2.7.16";var pn=new pt;function mn(t){return gn(t,pn),pn.clear(),t}function gn(t,e){var n,r,s=i(t);if(!(!s&&!h(t)||t.__v_skip||Object.isFrozen(t)||t instanceof yt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(s){n=t.length;while(n--)gn(t[n],e)}else if(Kt(t))gn(t.value,e);else{r=Object.keys(t),n=r.length;while(n--)gn(t[r[n]],e)}}}var vn,yn=0,wn=function(){function t(t,e,n,r,i){Xt(this,Qt&&!Qt._vm?Qt:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++yn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pt,this.newDepIds=new pt,this.expression="",l(e)?this.getter=e:(this.getter=Y(e),this.getter||(this.getter=j)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;kt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Zo){if(!this.user)throw Zo;Je(Zo,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&mn(t),At(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Xn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Xe(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&E(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function bn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&In(t,e)}function _n(t,e){vn.$on(t,e)}function En(t,e){vn.$off(t,e)}function Tn(t,e){var n=vn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function In(t,e,n){vn=t,ne(e,n||{},_n,En,Tn,t),vn=void 0}function Cn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(i(t))for(var s=0,o=t.length;s<o;s++)r.$on(t[s],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(t)){for(var r=0,s=t.length;r<s;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var c=a.length;while(c--)if(o=a[c],o===e||o.fn===e){a.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?P(n):n;for(var r=P(arguments,1),i='event handler for "'.concat(t,'"'),s=0,o=n.length;s<o;s++)Xe(n[s],e,r,e,i)}return e}}var Sn=null;function kn(t){var e=Sn;return Sn=t,function(){Sn=e}}function An(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function On(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,s=kn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Ln(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||E(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Ln(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Nn(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=wt),Ln(t,"beforeMount"),r=function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&Ln(t,"beforeUpdate")}};new wn(t,r,j,i,!0),n=!1;var s=t._preWatchers;if(s)for(var o=0;o<s.length;o++)s[o].run();return null==t.$vnode&&(t._isMounted=!0,Ln(t,"mounted")),t}function Rn(t,e,n,i,s){var o=i.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==r&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),u=!!(s||t.$options._renderChildren||c),l=t.$vnode;t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=s;var h=i.data.attrs||r;t._attrsProxy&&xe(t._attrsProxy,h,l.data&&l.data.attrs||r,t,"$attrs")&&(u=!0),t.$attrs=h,n=n||r;var d=t.$options._parentListeners;if(t._listenersProxy&&xe(t._listenersProxy,n,d||r,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,In(t,n,d),e&&t.$options.props){Lt(!1);for(var f=t._props,p=t.$options._propKeys||[],m=0;m<p.length;m++){var g=p[m],v=t.$options.props;f[g]=Sr(g,v,e,t)}Lt(!0),t.$options.propsData=e}u&&(t.$slots=Ce(s,i.context),t.$forceUpdate())}function Dn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function xn(t,e){if(e){if(t._directInactive=!1,Dn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)xn(t.$children[n]);Ln(t,"activated")}}function Pn(t,e){if((!e||(t._directInactive=!0,!Dn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);Ln(t,"deactivated")}}function Ln(t,e,n,r){void 0===r&&(r=!0),kt();var i=gt,s=Yt();r&&vt(t);var o=t.$options[e],a="".concat(e," hook");if(o)for(var c=0,u=o.length;c<u;c++)Xe(o[c],t,n||null,t,a);t._hasHookEvent&&t.$emit("hook:"+e),r&&(vt(i),s&&s.on()),At()}var Mn=[],jn=[],Fn={},Un=!1,Vn=!1,$n=0;function Bn(){$n=Mn.length=jn.length=0,Fn={},Un=Vn=!1}var zn=0,qn=Date.now;if(tt&&!nt){var Hn=window.performance;Hn&&"function"===typeof Hn.now&&qn()>document.createEvent("Event").timeStamp&&(qn=function(){return Hn.now()})}var Kn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Gn(){var t,e;for(zn=qn(),Vn=!0,Mn.sort(Kn),$n=0;$n<Mn.length;$n++)t=Mn[$n],t.before&&t.before(),e=t.id,Fn[e]=null,t.run();var n=jn.slice(),r=Mn.slice();Bn(),Jn(n),Wn(r),It(),dt&&G.devtools&&dt.emit("flush")}function Wn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Ln(r,"updated")}}function Qn(t){t._inactive=!1,jn.push(t)}function Jn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,xn(t[e],!0)}function Xn(t){var e=t.id;if(null==Fn[e]&&(t!==Ct.target||!t.noRecurse)){if(Fn[e]=!0,Vn){var n=Mn.length-1;while(n>$n&&Mn[n].id>t.id)n--;Mn.splice(n+1,0,t)}else Mn.push(t);Un||(Un=!0,ln(Gn))}}function Yn(t){var e=t.$options.provide;if(e){var n=l(e)?e.call(t):e;if(!h(n))return;for(var r=Zt(t),i=mt?Reflect.ownKeys(n):Object.keys(n),s=0;s<i.length;s++){var o=i[s];Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(n,o))}}}function Zn(t){var e=tr(t.$options.inject,t);e&&(Lt(!1),Object.keys(e).forEach((function(n){Ut(t,n,e[n])})),Lt(!0))}function tr(t,e){if(t){for(var n=Object.create(null),r=mt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=t[s].from;if(o in e._provided)n[s]=e._provided[o];else if("default"in t[s]){var a=t[s].default;n[s]=l(a)?a.call(e):a}else 0}}return n}}function er(t,e,n,s,o){var c,u=this,l=o.options;I(s,"_uid")?(c=Object.create(s),c._original=s):(c=s,s=s._original);var h=a(l._compiled),d=!h;this.data=t,this.props=e,this.children=n,this.parent=s,this.listeners=t.on||r,this.injections=tr(l.inject,s),this.slots=function(){return u.$slots||Ae(s,t.scopedSlots,u.$slots=Ce(n,s)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ae(s,t.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Ae(s,t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,r){var o=Ke(c,t,e,n,r,d);return o&&!i(o)&&(o.fnScopeId=l._scopeId,o.fnContext=s),o}:this._c=function(t,e,n,r){return Ke(c,t,e,n,r,d)}}function nr(t,e,n,s,a){var c=t.options,u={},l=c.props;if(o(l))for(var h in l)u[h]=Sr(h,l,e||r);else o(n.attrs)&&ir(u,n.attrs),o(n.props)&&ir(u,n.props);var d=new er(n,u,a,s,t),f=c.render.call(null,d._c,d);if(f instanceof yt)return rr(f,n,d.parent,c,d);if(i(f)){for(var p=ae(f)||[],m=new Array(p.length),g=0;g<p.length;g++)m[g]=rr(p[g],n,d.parent,c,d);return m}}function rr(t,e,n,r,i){var s=_t(t);return s.fnContext=n,s.fnOptions=r,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function ir(t,e){for(var n in e)t[k(n)]=e[n]}function sr(t){return t.name||t.__name||t._componentTag}Ie(er.prototype);var or={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;or.prepatch(n,n)}else{var r=t.componentInstance=ur(t,Sn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Rn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Ln(n,"mounted")),t.data.keepAlive&&(e._isMounted?Qn(n):xn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pn(e,!0):e.$destroy())}},ar=Object.keys(or);function cr(t,e,n,r,i){if(!s(t)){var c=n.$options._base;if(h(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(s(t.cid)&&(u=t,t=Be(u,c),void 0===t))return $e(u,e,n,r,i);e=e||{},Jr(t),o(e.model)&&dr(t.options,e);var l=ie(e,t,i);if(a(t.options.functional))return nr(t,l,e,n,r);var d=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}lr(e);var p=sr(t.options)||i,m=new yt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:d,tag:i,children:r},u);return m}}}function ur(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function lr(t){for(var e=t.hook||(t.hook={}),n=0;n<ar.length;n++){var r=ar[n],i=e[r],s=or[r];i===s||i&&i._merged||(e[r]=i?hr(s,i):s)}}function hr(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function dr(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),a=s[r],c=e.model.callback;o(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(s[r]=[c].concat(a)):s[r]=c}var fr=j,pr=G.optionMergeStrategies;function mr(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var r,i,s,o=mt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)r=o[a],"__ob__"!==r&&(i=t[r],s=e[r],n&&I(t,r)?i!==s&&f(i)&&f(s)&&mr(i,s):Vt(t,r,s));return t}function gr(t,e,n){return n?function(){var r=l(e)?e.call(n,n):e,i=l(t)?t.call(n,n):t;return r?mr(r,i):i}:e?t?function(){return mr(l(e)?e.call(this,this):e,l(t)?t.call(this,this):t)}:e:t}function vr(t,e){var n=e?t?t.concat(e):i(e)?e:[e]:t;return n?yr(n):n}function yr(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function wr(t,e,n,r){var i=Object.create(t||null);return e?L(i,e):i}pr.data=function(t,e,n){return n?gr(t,e,n):e&&"function"!==typeof e?t:gr(t,e)},K.forEach((function(t){pr[t]=vr})),H.forEach((function(t){pr[t+"s"]=wr})),pr.watch=function(t,e,n,r){if(t===ct&&(t=void 0),e===ct&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var s={};for(var o in L(s,t),e){var a=s[o],c=e[o];a&&!i(a)&&(a=[a]),s[o]=a?a.concat(c):i(c)?c:[c]}return s},pr.props=pr.methods=pr.inject=pr.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return L(i,t),e&&L(i,e),i},pr.provide=function(t,e){return t?function(){var n=Object.create(null);return mr(n,l(t)?t.call(this):t),e&&mr(n,l(e)?e.call(this):e,!1),n}:e};var br=function(t,e){return void 0===e?t:e};function _r(t,e){var n=t.props;if(n){var r,s,o,a={};if(i(n)){r=n.length;while(r--)s=n[r],"string"===typeof s&&(o=k(s),a[o]={type:null})}else if(f(n))for(var c in n)s=n[c],o=k(c),a[o]=f(s)?s:{type:s};else 0;t.props=a}}function Er(t,e){var n=t.inject;if(n){var r=t.inject={};if(i(n))for(var s=0;s<n.length;s++)r[n[s]]={from:n[s]};else if(f(n))for(var o in n){var a=n[o];r[o]=f(a)?L({from:o},a):{from:a}}else 0}}function Tr(t){var e=t.directives;if(e)for(var n in e){var r=e[n];l(r)&&(e[n]={bind:r,update:r})}}function Ir(t,e,n){if(l(e)&&(e=e.options),_r(e,n),Er(e,n),Tr(e),!e._base&&(e.extends&&(t=Ir(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Ir(t,e.mixins[r],n);var s,o={};for(s in t)a(s);for(s in e)I(t,s)||a(s);function a(r){var i=pr[r]||br;o[r]=i(t[r],e[r],n,r)}return o}function Cr(t,e,n,r){if("string"===typeof n){var i=t[e];if(I(i,n))return i[n];var s=k(n);if(I(i,s))return i[s];var o=A(s);if(I(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Sr(t,e,n,r){var i=e[t],s=!I(n,t),o=n[t],a=Rr(Boolean,i.type);if(a>-1)if(s&&!I(i,"default"))o=!1;else if(""===o||o===N(t)){var c=Rr(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=kr(r,i,t);var u=Pt;Lt(!0),Ft(o),Lt(u)}return o}function kr(t,e,n){if(I(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:l(r)&&"Function"!==Or(e.type)?r.call(t):r}}var Ar=/^\s*function (\w+)/;function Or(t){var e=t&&t.toString().match(Ar);return e?e[1]:""}function Nr(t,e){return Or(t)===Or(e)}function Rr(t,e){if(!i(e))return Nr(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Nr(e[n],t))return n;return-1}var Dr={enumerable:!0,configurable:!0,get:j,set:j};function xr(t,e,n){Dr.get=function(){return this[e][n]},Dr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Dr)}function Pr(t){var e=t.$options;if(e.props&&Lr(t,e.props),Re(t),e.methods&&zr(t,e.methods),e.data)Mr(t);else{var n=Ft(t._data={});n&&n.vmCount++}e.computed&&Ur(t,e.computed),e.watch&&e.watch!==ct&&qr(t,e.watch)}function Lr(t,e){var n=t.$options.propsData||{},r=t._props=zt({}),i=t.$options._propKeys=[],s=!t.$parent;s||Lt(!1);var o=function(s){i.push(s);var o=Sr(s,e,n,t);Ut(r,s,o,void 0,!0),s in t||xr(t,"_props",s)};for(var a in e)o(a);Lt(!0)}function Mr(t){var e=t.$options.data;e=t._data=l(e)?jr(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var s=n[i];0,r&&I(r,s)||Q(s)||xr(t,"_data",s)}var o=Ft(e);o&&o.vmCount++}function jr(t,e){kt();try{return t.call(e,e)}catch(Zo){return Je(Zo,e,"data()"),{}}finally{At()}}var Fr={lazy:!0};function Ur(t,e){var n=t._computedWatchers=Object.create(null),r=ht();for(var i in e){var s=e[i],o=l(s)?s:s.get;0,r||(n[i]=new wn(t,o||j,j,Fr)),i in t||Vr(t,i,s)}}function Vr(t,e,n){var r=!ht();l(n)?(Dr.get=r?$r(e):Br(n),Dr.set=j):(Dr.get=n.get?r&&!1!==n.cache?$r(e):Br(n.get):j,Dr.set=n.set||j),Object.defineProperty(t,e,Dr)}function $r(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Ct.target&&e.depend(),e.value}}function Br(t){return function(){return t.call(this,this)}}function zr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?j:x(e[n],t)}function qr(t,e){for(var n in e){var r=e[n];if(i(r))for(var s=0;s<r.length;s++)Hr(t,n,r[s]);else Hr(t,n,r)}}function Hr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Kr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Vt,t.prototype.$delete=$t,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return Hr(r,t,e,n);n=n||{},n.user=!0;var i=new wn(r,t,e,n);if(n.immediate){var s='callback for immediate watcher "'.concat(i.expression,'"');kt(),Xe(e,r,[i.value],r,s),At()}return function(){i.teardown()}}}var Gr=0;function Wr(t){t.prototype._init=function(t){var e=this;e._uid=Gr++,e._isVue=!0,e.__v_skip=!0,e._scope=new Jt(!0),e._scope.parent=void 0,e._scope._vm=!0,t&&t._isComponent?Qr(e,t):e.$options=Ir(Jr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,An(e),bn(e),je(e),Ln(e,"beforeCreate",void 0,!1),Zn(e),Pr(e),Yn(e),Ln(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Qr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Jr(t){var e=t.options;if(t.super){var n=Jr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Xr(t);i&&L(t.extendOptions,i),e=t.options=Ir(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Xr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Yr(t){this._init(t)}function Zr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),l(t.install)?t.install.apply(t,n):l(t)&&t.apply(null,n),e.push(t),this}}function ti(t){t.mixin=function(t){return this.options=Ir(this.options,t),this}}function ei(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var s=sr(t)||sr(n.options);var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Ir(n.options,t),o["super"]=n,o.options.props&&ni(o),o.options.computed&&ri(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,H.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=L({},o.options),i[r]=o,o}}function ni(t){var e=t.options.props;for(var n in e)xr(t.prototype,"_props",n)}function ri(t){var e=t.options.computed;for(var n in e)Vr(t.prototype,n,e[n])}function ii(t){H.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&l(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function si(t){return t&&(sr(t.Ctor.options)||t.tag)}function oi(t,e){return i(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function ai(t,e){var n=t.cache,r=t.keys,i=t._vnode,s=t.$vnode;for(var o in n){var a=n[o];if(a){var c=a.name;c&&!e(c)&&ci(n,o,r,i)}}s.componentOptions.children=void 0}function ci(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,E(n,e)}Wr(Yr),Kr(Yr),Cn(Yr),On(Yr),Ue(Yr);var ui=[String,RegExp,Array],li={name:"keep-alive",abstract:!0,props:{include:ui,exclude:ui,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;e[i]={name:si(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&ci(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)ci(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){ai(t,(function(t){return oi(e,t)}))})),this.$watch("exclude",(function(e){ai(t,(function(t){return!oi(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=ze(t),n=e&&e.componentOptions;if(n){var r=si(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!oi(s,r))||o&&r&&oi(o,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,E(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},hi={KeepAlive:li};function di(t){var e={get:function(){return G}};Object.defineProperty(t,"config",e),t.util={warn:fr,extend:L,mergeOptions:Ir,defineReactive:Ut},t.set=Vt,t.delete=$t,t.nextTick=ln,t.observable=function(t){return Ft(t),t},t.options=Object.create(null),H.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,L(t.options.components,hi),Zr(t),ti(t),ei(t),ii(t)}di(Yr),Object.defineProperty(Yr.prototype,"$isServer",{get:ht}),Object.defineProperty(Yr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Yr,"FunctionalRenderContext",{value:er}),Yr.version=fn;var fi=b("style,class"),pi=b("input,textarea,option,select,progress"),mi=function(t,e,n){return"value"===n&&pi(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},gi=b("contenteditable,draggable,spellcheck"),vi=b("events,caret,typing,plaintext-only"),yi=function(t,e){return Ti(e)||"false"===e?"false":"contenteditable"===t&&vi(e)?e:"true"},wi=b("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),bi="http://www.w3.org/1999/xlink",_i=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Ei=function(t){return _i(t)?t.slice(6,t.length):""},Ti=function(t){return null==t||!1===t};function Ii(t){var e=t.data,n=t,r=t;while(o(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Ci(r.data,e));while(o(n=n.parent))n&&n.data&&(e=Ci(e,n.data));return Si(e.staticClass,e.class)}function Ci(t,e){return{staticClass:ki(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function Si(t,e){return o(t)||o(e)?ki(t,Ai(e)):""}function ki(t,e){return t?e?t+" "+e:t:e||""}function Ai(t){return Array.isArray(t)?Oi(t):h(t)?Ni(t):"string"===typeof t?t:""}function Oi(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Ai(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Ni(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Di=b("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),xi=b("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Pi=function(t){return Di(t)||xi(t)};function Li(t){return xi(t)?"svg":"math"===t?"math":void 0}var Mi=Object.create(null);function ji(t){if(!tt)return!0;if(Pi(t))return!1;if(t=t.toLowerCase(),null!=Mi[t])return Mi[t];var e=document.createElement(t);return t.indexOf("-")>-1?Mi[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Mi[t]=/HTMLUnknownElement/.test(e.toString())}var Fi=b("text,number,password,search,email,tel,url");function Ui(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Vi(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function $i(t,e){return document.createElementNS(Ri[t],e)}function Bi(t){return document.createTextNode(t)}function zi(t){return document.createComment(t)}function qi(t,e,n){t.insertBefore(e,n)}function Hi(t,e){t.removeChild(e)}function Ki(t,e){t.appendChild(e)}function Gi(t){return t.parentNode}function Wi(t){return t.nextSibling}function Qi(t){return t.tagName}function Ji(t,e){t.textContent=e}function Xi(t,e){t.setAttribute(e,"")}var Yi=Object.freeze({__proto__:null,createElement:Vi,createElementNS:$i,createTextNode:Bi,createComment:zi,insertBefore:qi,removeChild:Hi,appendChild:Ki,parentNode:Gi,nextSibling:Wi,tagName:Qi,setTextContent:Ji,setStyleScope:Xi}),Zi={create:function(t,e){ts(e)},update:function(t,e){t.data.ref!==e.data.ref&&(ts(t,!0),ts(e))},destroy:function(t){ts(t,!0)}};function ts(t,e){var n=t.data.ref;if(o(n)){var r=t.context,s=t.componentInstance||t.elm,a=e?null:s,c=e?void 0:s;if(l(n))Xe(n,r,[a],r,"template ref function");else{var u=t.data.refInFor,h="string"===typeof n||"number"===typeof n,d=Kt(n),f=r.$refs;if(h||d)if(u){var p=h?f[n]:n.value;e?i(p)&&E(p,s):i(p)?p.includes(s)||p.push(s):h?(f[n]=[s],es(r,n,f[n])):n.value=[s]}else if(h){if(e&&f[n]!==s)return;f[n]=c,es(r,n,a)}else if(d){if(e&&n.value!==s)return;n.value=a}else 0}}}function es(t,e,n){var r=t._setupState;r&&I(r,e)&&(Kt(r[e])?r[e].value=n:r[e]=n)}var ns=new yt("",{},[]),rs=["create","activate","update","remove","destroy"];function is(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&ss(t,e)||a(t.isAsyncPlaceholder)&&s(e.asyncFactory.error))}function ss(t,e){if("input"!==t.tag)return!0;var n,r=o(n=t.data)&&o(n=n.attrs)&&n.type,i=o(n=e.data)&&o(n=n.attrs)&&n.type;return r===i||Fi(r)&&Fi(i)}function os(t,e,n){var r,i,s={};for(r=e;r<=n;++r)i=t[r].key,o(i)&&(s[i]=r);return s}function as(t){var e,n,r={},c=t.modules,l=t.nodeOps;for(e=0;e<rs.length;++e)for(r[rs[e]]=[],n=0;n<c.length;++n)o(c[n][rs[e]])&&r[rs[e]].push(c[n][rs[e]]);function h(t){return new yt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function d(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=l.parentNode(t);o(e)&&l.removeChild(e,t)}function p(t,e,n,r,i,s,c){if(o(t.elm)&&o(s)&&(t=s[c]=_t(t)),t.isRootInsert=!i,!m(t,e,n,r)){var u=t.data,h=t.children,d=t.tag;o(d)?(t.elm=t.ns?l.createElementNS(t.ns,d):l.createElement(d,t),T(t),w(t,h,e),o(u)&&E(t,e),y(n,t.elm,r)):a(t.isComment)?(t.elm=l.createComment(t.text),y(n,t.elm,r)):(t.elm=l.createTextNode(t.text),y(n,t.elm,r))}}function m(t,e,n,r){var i=t.data;if(o(i)){var s=o(t.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(t,!1),o(t.componentInstance))return g(t,e),y(n,t.elm,r),a(s)&&v(t,e,n,r),!0}}function g(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,_(t)?(E(t,e),T(t)):(ts(t),e.push(t))}function v(t,e,n,i){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,o(s=a.data)&&o(s=s.transition)){for(s=0;s<r.activate.length;++s)r.activate[s](ns,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){o(t)&&(o(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function w(t,e,n){if(i(e)){0;for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0,e,r)}else u(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function _(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function E(t,n){for(var i=0;i<r.create.length;++i)r.create[i](ns,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(ns,t),o(e.insert)&&n.push(t))}function T(t){var e;if(o(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}o(e=Sn)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function I(t,e,n,r,i,s){for(;r<=i;++r)p(n[r],s,t,e,!1,n,r)}function C(t){var e,n,i=t.data;if(o(i))for(o(e=i.hook)&&o(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)C(t.children[n])}function S(t,e,n){for(;e<=n;++e){var r=t[e];o(r)&&(o(r.tag)?(k(r),C(r)):f(r.elm))}}function k(t,e){if(o(e)||o(t.data)){var n,i=r.remove.length+1;for(o(e)?e.listeners+=i:e=d(t.elm,i),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&k(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else f(t.elm)}function A(t,e,n,r,i){var a,c,u,h,d=0,f=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,w=n[0],b=n[y],_=!i;while(d<=m&&f<=y)s(g)?g=e[++d]:s(v)?v=e[--m]:is(g,w)?(N(g,w,r,n,f),g=e[++d],w=n[++f]):is(v,b)?(N(v,b,r,n,y),v=e[--m],b=n[--y]):is(g,b)?(N(g,b,r,n,y),_&&l.insertBefore(t,g.elm,l.nextSibling(v.elm)),g=e[++d],b=n[--y]):is(v,w)?(N(v,w,r,n,f),_&&l.insertBefore(t,v.elm,g.elm),v=e[--m],w=n[++f]):(s(a)&&(a=os(e,d,m)),c=o(w.key)?a[w.key]:O(w,e,d,m),s(c)?p(w,r,t,g.elm,!1,n,f):(u=e[c],is(u,w)?(N(u,w,r,n,f),e[c]=void 0,_&&l.insertBefore(t,u.elm,g.elm)):p(w,r,t,g.elm,!1,n,f)),w=n[++f]);d>m?(h=s(n[y+1])?null:n[y+1].elm,I(t,h,n,f,y,r)):f>y&&S(e,d,m)}function O(t,e,n,r){for(var i=n;i<r;i++){var s=e[i];if(o(s)&&is(t,s))return i}}function N(t,e,n,i,c,u){if(t!==e){o(e.elm)&&o(i)&&(e=i[c]=_t(e));var h=e.elm=t.elm;if(a(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?x(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;o(f)&&o(d=f.hook)&&o(d=d.prepatch)&&d(t,e);var p=t.children,m=e.children;if(o(f)&&_(e)){for(d=0;d<r.update.length;++d)r.update[d](t,e);o(d=f.hook)&&o(d=d.update)&&d(t,e)}s(e.text)?o(p)&&o(m)?p!==m&&A(h,p,m,n,u):o(m)?(o(t.text)&&l.setTextContent(h,""),I(h,null,m,0,m.length-1,n)):o(p)?S(p,0,p.length-1):o(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),o(f)&&o(d=f.hook)&&o(d=d.postpatch)&&d(t,e)}}}function R(t,e,n){if(a(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var D=b("attrs,class,staticClass,staticStyle,key");function x(t,e,n,r){var i,s=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,a(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(i=c.hook)&&o(i=i.init)&&i(e,!0),o(i=e.componentInstance)))return g(e,n),!0;if(o(s)){if(o(u))if(t.hasChildNodes())if(o(i=c)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,d=0;d<u.length;d++){if(!h||!x(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(e,u,n);if(o(c)){var f=!1;for(var p in c)if(!D(p)){f=!0,E(e,n);break}!f&&c["class"]&&mn(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,i){if(!s(e)){var c=!1,u=[];if(s(t))c=!0,p(e,u);else{var d=o(t.nodeType);if(!d&&is(t,e))N(t,e,u,null,null,i);else{if(d){if(1===t.nodeType&&t.hasAttribute(q)&&(t.removeAttribute(q),n=!0),a(n)&&x(t,e,u))return R(e,u,!0),t;t=h(t)}var f=t.elm,m=l.parentNode(f);if(p(e,u,f._leaveCb?null:m,l.nextSibling(f)),o(e.parent)){var g=e.parent,v=_(e);while(g){for(var y=0;y<r.destroy.length;++y)r.destroy[y](g);if(g.elm=e.elm,v){for(var w=0;w<r.create.length;++w)r.create[w](ns,g);var b=g.data.hook.insert;if(b.merged)for(var E=b.fns.slice(1),T=0;T<E.length;T++)E[T]()}else ts(g);g=g.parent}}o(m)?S([t],0,0):o(t.tag)&&C(t)}}return R(e,u,c),e.elm}o(t)&&C(t)}}var cs={create:us,update:us,destroy:function(t){us(t,ns)}};function us(t,e){(t.data.directives||e.data.directives)&&ls(t,e)}function ls(t,e){var n,r,i,s=t===ns,o=e===ns,a=ds(t.data.directives,t.context),c=ds(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,ps(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(ps(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)ps(u[n],"inserted",e,t)};s?re(e,"insert",h):h()}if(l.length&&re(e,"postpatch",(function(){for(var n=0;n<l.length;n++)ps(l[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||ps(a[n],"unbind",t,t,o)}var hs=Object.create(null);function ds(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if(r=t[n],r.modifiers||(r.modifiers=hs),i[fs(r)]=r,e._setupState&&e._setupState.__sfc){var s=r.def||Cr(e,"_setupState","v-"+r.name);r.def="function"===typeof s?{bind:s,update:s}:s}r.def=r.def||Cr(e.$options,"directives",r.name,!0)}return i}function fs(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function ps(t,e,n,r,i){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,r,i)}catch(Zo){Je(Zo,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var ms=[Zi,cs];function gs(t,e){var n=e.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!s(t.data.attrs)||!s(e.data.attrs))){var r,i,c,u=e.elm,l=t.data.attrs||{},h=e.data.attrs||{};for(r in(o(h.__ob__)||a(h._v_attr_proxy))&&(h=e.data.attrs=L({},h)),h)i=h[r],c=l[r],c!==i&&vs(u,r,i,e.data.pre);for(r in(nt||it)&&h.value!==l.value&&vs(u,"value",h.value),l)s(h[r])&&(_i(r)?u.removeAttributeNS(bi,Ei(r)):gi(r)||u.removeAttribute(r))}}function vs(t,e,n,r){r||t.tagName.indexOf("-")>-1?ys(t,e,n):wi(e)?Ti(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):gi(e)?t.setAttribute(e,yi(e,n)):_i(e)?Ti(n)?t.removeAttributeNS(bi,Ei(e)):t.setAttributeNS(bi,e,n):ys(t,e,n)}function ys(t,e,n){if(Ti(n))t.removeAttribute(e);else{if(nt&&!rt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var ws={create:gs,update:gs};function bs(t,e){var n=e.elm,r=e.data,i=t.data;if(!(s(r.staticClass)&&s(r.class)&&(s(i)||s(i.staticClass)&&s(i.class)))){var a=Ii(e),c=n._transitionClasses;o(c)&&(a=ki(a,Ai(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var _s,Es={create:bs,update:bs},Ts="__r",Is="__c";function Cs(t){if(o(t[Ts])){var e=nt?"change":"input";t[e]=[].concat(t[Ts],t[e]||[]),delete t[Ts]}o(t[Is])&&(t.change=[].concat(t[Is],t.change||[]),delete t[Is])}function Ss(t,e,n){var r=_s;return function i(){var s=e.apply(null,arguments);null!==s&&Os(t,i,n,r)}}var ks=en&&!(at&&Number(at[1])<=53);function As(t,e,n,r){if(ks){var i=zn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}_s.addEventListener(t,e,ut?{capture:n,passive:r}:n)}function Os(t,e,n,r){(r||_s).removeEventListener(t,e._wrapper||e,n)}function Ns(t,e){if(!s(t.data.on)||!s(e.data.on)){var n=e.data.on||{},r=t.data.on||{};_s=e.elm||t.elm,Cs(n),ne(n,r,As,Os,Ss,e.context),_s=void 0}}var Rs,Ds={create:Ns,update:Ns,destroy:function(t){return Ns(t,ns)}};function xs(t,e){if(!s(t.data.domProps)||!s(e.data.domProps)){var n,r,i=e.elm,c=t.data.domProps||{},u=e.data.domProps||{};for(n in(o(u.__ob__)||a(u._v_attr_proxy))&&(u=e.data.domProps=L({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=s(r)?"":String(r);Ps(i,l)&&(i.value=l)}else if("innerHTML"===n&&xi(i.tagName)&&s(i.innerHTML)){Rs=Rs||document.createElement("div"),Rs.innerHTML="<svg>".concat(r,"</svg>");var h=Rs.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Zo){}}}}function Ps(t,e){return!t.composing&&("OPTION"===t.tagName||Ls(t,e)||Ms(t,e))}function Ls(t,e){var n=!0;try{n=document.activeElement!==t}catch(Zo){}return n&&t.value!==e}function Ms(t,e){var n=t.value,r=t._vModifiers;if(o(r)){if(r.number)return w(n)!==w(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var js={create:xs,update:xs},Fs=C((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function Us(t){var e=Vs(t.style);return t.staticStyle?L(t.staticStyle,e):e}function Vs(t){return Array.isArray(t)?M(t):"string"===typeof t?Fs(t):t}function $s(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=Us(i.data))&&L(r,n)}(n=Us(t.data))&&L(r,n);var s=t;while(s=s.parent)s.data&&(n=Us(s.data))&&L(r,n);return r}var Bs,zs=/^--/,qs=/\s*!important$/,Hs=function(t,e,n){if(zs.test(e))t.style.setProperty(e,n);else if(qs.test(n))t.style.setProperty(N(e),n.replace(qs,""),"important");else{var r=Gs(e);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)t.style[r]=n[i];else t.style[r]=n}},Ks=["Webkit","Moz","ms"],Gs=C((function(t){if(Bs=Bs||document.createElement("div").style,t=k(t),"filter"!==t&&t in Bs)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Ks.length;n++){var r=Ks[n]+e;if(r in Bs)return r}}));function Ws(t,e){var n=e.data,r=t.data;if(!(s(n.staticStyle)&&s(n.style)&&s(r.staticStyle)&&s(r.style))){var i,a,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=Vs(e.data.style)||{};e.data.normalizedStyle=o(d.__ob__)?L({},d):d;var f=$s(e,!0);for(a in h)s(f[a])&&Hs(c,a,"");for(a in f)i=f[a],Hs(c,a,null==i?"":i)}}var Qs={create:Ws,update:Ws},Js=/\s+/;function Xs(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Js).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ys(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Js).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Zs(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&L(e,to(t.name||"v")),L(e,t),e}return"string"===typeof t?to(t):void 0}}var to=C((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),eo=tt&&!rt,no="transition",ro="animation",io="transition",so="transitionend",oo="animation",ao="animationend";eo&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(io="WebkitTransition",so="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(oo="WebkitAnimation",ao="webkitAnimationEnd"));var co=tt?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function uo(t){co((function(){co(t)}))}function lo(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Xs(t,e))}function ho(t,e){t._transitionClasses&&E(t._transitionClasses,e),Ys(t,e)}function fo(t,e,n){var r=mo(t,e),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===no?so:ao,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),t.addEventListener(a,l)}var po=/\b(transform|all)(,|$)/;function mo(t,e){var n,r=window.getComputedStyle(t),i=(r[io+"Delay"]||"").split(", "),s=(r[io+"Duration"]||"").split(", "),o=go(i,s),a=(r[oo+"Delay"]||"").split(", "),c=(r[oo+"Duration"]||"").split(", "),u=go(a,c),l=0,h=0;e===no?o>0&&(n=no,l=o,h=s.length):e===ro?u>0&&(n=ro,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?no:ro:null,h=n?n===no?s.length:c.length:0);var d=n===no&&po.test(r[io+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function go(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return vo(e)+vo(t[n])})))}function vo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function yo(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Zs(t.data.transition);if(!s(r)&&!o(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,m=r.appearActiveClass,g=r.beforeEnter,v=r.enter,y=r.afterEnter,b=r.enterCancelled,_=r.beforeAppear,E=r.appear,T=r.afterAppear,I=r.appearCancelled,C=r.duration,S=Sn,k=Sn.$vnode;while(k&&k.parent)S=k.context,k=k.parent;var A=!S._isMounted||!t.isRootInsert;if(!A||E||""===E){var O=A&&f?f:c,N=A&&m?m:d,R=A&&p?p:u,D=A&&_||g,x=A&&l(E)?E:v,P=A&&T||y,L=A&&I||b,M=w(h(C)?C.enter:C);0;var j=!1!==i&&!rt,F=_o(x),U=n._enterCb=B((function(){j&&(ho(n,R),ho(n,N)),U.cancelled?(j&&ho(n,O),L&&L(n)):P&&P(n),n._enterCb=null}));t.data.show||re(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),x&&x(n,U)})),D&&D(n),j&&(lo(n,O),lo(n,N),uo((function(){ho(n,O),U.cancelled||(lo(n,R),F||(bo(M)?setTimeout(U,M):fo(n,a,U)))}))),t.data.show&&(e&&e(),x&&x(n,U)),j||F||U()}}}function wo(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Zs(t.data.transition);if(s(r)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,m=r.leaveCancelled,g=r.delayLeave,v=r.duration,y=!1!==i&&!rt,b=_o(f),_=w(h(v)?v.leave:v);0;var E=n._leaveCb=B((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),y&&(ho(n,u),ho(n,l)),E.cancelled?(y&&ho(n,c),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));g?g(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),y&&(lo(n,c),lo(n,l),uo((function(){ho(n,c),E.cancelled||(lo(n,u),b||(bo(_)?setTimeout(E,_):fo(n,a,E)))}))),f&&f(n,E),y||b||E())}}function bo(t){return"number"===typeof t&&!isNaN(t)}function _o(t){if(s(t))return!1;var e=t.fns;return o(e)?_o(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Eo(t,e){!0!==e.data.show&&yo(e)}var To=tt?{create:Eo,activate:Eo,remove:function(t,e){!0!==t.data.show?wo(t,e):e()}}:{},Io=[ws,Es,Ds,js,Qs,To],Co=Io.concat(ms),So=as({nodeOps:Yi,modules:Co});rt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Po(t,"input")}));var ko={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?re(n,"postpatch",(function(){ko.componentUpdated(t,e,n)})):Ao(t,e,n.context),t._vOptions=[].map.call(t.options,Ro)):("textarea"===n.tag||Fi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",Do),t.addEventListener("compositionend",xo),t.addEventListener("change",xo),rt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Ao(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,Ro);if(i.some((function(t,e){return!V(t,r[e])}))){var s=t.multiple?e.value.some((function(t){return No(t,i)})):e.value!==e.oldValue&&No(e.value,i);s&&Po(t,"change")}}}};function Ao(t,e,n){Oo(t,e,n),(nt||it)&&setTimeout((function(){Oo(t,e,n)}),0)}function Oo(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=$(r,Ro(o))>-1,o.selected!==s&&(o.selected=s);else if(V(Ro(o),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function No(t,e){return e.every((function(e){return!V(e,t)}))}function Ro(t){return"_value"in t?t._value:t.value}function Do(t){t.target.composing=!0}function xo(t){t.target.composing&&(t.target.composing=!1,Po(t.target,"input"))}function Po(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Lo(t){return!t.componentInstance||t.data&&t.data.transition?t:Lo(t.componentInstance._vnode)}var Mo={bind:function(t,e,n){var r=e.value;n=Lo(n);var i=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,yo(n,(function(){t.style.display=s}))):t.style.display=r?s:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=Lo(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?yo(n,(function(){t.style.display=t.__vOriginalDisplay})):wo(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},jo={model:ko,show:Mo},Fo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Uo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Uo(ze(e.children)):t}function Vo(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[k(r)]=i[r];return e}function $o(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Bo(t){while(t=t.parent)if(t.data.transition)return!0}function zo(t,e){return e.key===t.key&&e.tag===t.tag}var qo=function(t){return t.tag||ke(t)},Ho=function(t){return"show"===t.name},Ko={name:"transition",props:Fo,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(qo),n.length)){0;var r=this.mode;0;var i=n[0];if(Bo(this.$vnode))return i;var s=Uo(i);if(!s)return i;if(this._leaving)return $o(t,i);var o="__transition-".concat(this._uid,"-");s.key=null==s.key?s.isComment?o+"comment":o+s.tag:u(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=Vo(this),c=this._vnode,l=Uo(c);if(s.data.directives&&s.data.directives.some(Ho)&&(s.data.show=!0),l&&l.data&&!zo(s,l)&&!ke(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=L({},a);if("out-in"===r)return this._leaving=!0,re(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),$o(t,i);if("in-out"===r){if(ke(s))return c;var d,f=function(){d()};re(a,"afterEnter",f),re(a,"enterCancelled",f),re(h,"delayLeave",(function(t){d=t}))}}return i}}},Go=L({tag:String,moveClass:String},Fo);delete Go.mode;var Wo={props:Go,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=kn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=Vo(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=o,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Qo),t.forEach(Jo),t.forEach(Xo),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;lo(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(so,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(so,t),n._moveCb=null,ho(n,e))})}})))},methods:{hasMove:function(t,e){if(!eo)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ys(n,t)})),Xs(n,e),n.style.display="none",this.$el.appendChild(n);var r=mo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Qo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Jo(t){t.data.newPos=t.elm.getBoundingClientRect()}function Xo(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),s.transitionDuration="0s"}}var Yo={Transition:Ko,TransitionGroup:Wo};Yr.config.mustUseProp=mi,Yr.config.isReservedTag=Pi,Yr.config.isReservedAttr=fi,Yr.config.getTagNamespace=Li,Yr.config.isUnknownElement=ji,L(Yr.options.directives,jo),L(Yr.options.components,Yo),Yr.prototype.__patch__=tt?So:j,Yr.prototype.$mount=function(t,e){return t=t&&tt?Ui(t):void 0,Nn(this,t,e)},tt&&setTimeout((function(){G.devtools&&dt&&dt.emit("init",Yr)}),0)}).call(this,n("c8ba"))},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return gt})),n.d(e,"b",(function(){return ht})),n.d(e,"c",(function(){return lt})),n.d(e,"d",(function(){return dt})),n.d(e,"e",(function(){return yt})),n.d(e,"f",(function(){return vt})),n.d(e,"g",(function(){return wt}));var r=n("22e5"),i=n("e691"),s=n("1fd5");const o=(t,e)=>e.some(e=>t instanceof e);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&h.set(e,t)}).catch(()=>{}),m.set(e,t),e}function v(t){if(d.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});d.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){y=t(y)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return f.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&v(t),o(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const T=t=>m.get(t);function I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{s&&t.addEventListener("close",()=>s()),i&&t.addEventListener("versionchange",t=>i(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}const C=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],k=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(k.get(e))return k.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!C.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return k.set(e,s),s}w(t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(N(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function N(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",D="0.9.13",x=new i["b"]("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",j="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",V="@firebase/auth-compat",$="@firebase/database",B="@firebase/database-compat",z="@firebase/functions",q="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",J="@firebase/performance-compat",X="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.23.0",st="[DEFAULT]",ot={[R]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[j]:"fire-app-check-compat",[U]:"fire-auth",[V]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-rtdb-compat",[z]:"fire-fn",[q]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[J]:"fire-perf-compat",[X]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){x.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return x.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dt(t,e,n=st){ht(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pt=new s["b"]("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=it;function vt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw pt.create("bad-app-name",{appName:String(o)});if(n||(n=Object(s["j"])()),!n)throw pt.create("no-options");const a=at.get(o);if(a){if(Object(s["h"])(n,a.options)&&Object(s["h"])(i,a.config))return a;throw pt.create("duplicate-app",{appName:o})}const c=new r["b"](o);for(const r of ct.values())c.addComponent(r);const u=new mt(n,i,c);return at.set(o,u),u}function yt(t=st){const e=at.get(t);if(!e&&t===st&&Object(s["j"])())return vt();if(!e)throw pt.create("no-app",{appName:t});return e}function wt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void x.warn(t.join(" "))}lt(new r["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt="firebase-heartbeat-database",_t=1,Et="firebase-heartbeat-store";let Tt=null;function It(){return Tt||(Tt=I(bt,_t,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Et)}}}).catch(t=>{throw pt.create("idb-open",{originalErrorMessage:t.message})})),Tt}async function Ct(t){try{const e=await It(),n=await e.transaction(Et).objectStore(Et).get(kt(t));return n}catch(e){if(e instanceof s["c"])x.warn(e.message);else{const t=pt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});x.warn(t.message)}}}async function St(t,e){try{const n=await It(),r=n.transaction(Et,"readwrite"),i=r.objectStore(Et);await i.put(e,kt(t)),await r.done}catch(n){if(n instanceof s["c"])x.warn(n.message);else{const t=pt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});x.warn(t.message)}}}function kt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1024,Ot=2592e6;class Nt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new xt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Rt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(t=>t.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Ot}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Rt(),{heartbeatsToSend:e,unsentEntries:n}=Dt(this._heartbeatsCache.heartbeats),r=Object(s["e"])(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Rt(){const t=new Date;return t.toISOString().substring(0,10)}function Dt(t,e=At){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),Pt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s["s"])()&&Object(s["y"])().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Pt(t){return Object(s["e"])(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){lt(new r["a"]("platform-logger",t=>new O(t),"PRIVATE")),lt(new r["a"]("heartbeat",t=>new Nt(t),"PRIVATE")),wt(R,D,t),wt(R,D,"esm2017"),wt("fire-js","")}Lt("")},"8c4f":function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}n.d(e,"a",(function(){return Ee}));var i=/[!'()*]/g,s=function(t){return"%"+t.charCodeAt(0).toString(16)},o=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,s).replace(o,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function u(t,e,n){void 0===e&&(e={});var r,i=n||h;try{r=i(t||"")}catch(a){r={}}for(var s in e){var o=e[s];r[s]=Array.isArray(o)?o.map(l):l(o)}return r}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))})),r.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var f=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,s=e.query||{};try{s=m(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:y(e,i),matched:t?v(t):[]};return n&&(o.redirectedFrom=y(n,i)),Object.freeze(o)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var g=p(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var s=e||d;return(n||"/")+s(r)+i}function w(t,e,n){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(f,"")===e.path.replace(f,"")&&(n||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var s=t[n],o=r[i];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?b(s,a):String(s)===String(a)}))}function _(t,e){return 0===t.path.replace(f,"/").indexOf(e.path.replace(f,"/"))&&(!e.hash||t.hash===e.hash)&&E(t.query,e.query)}function E(t,e){for(var n in e)if(!(n in t))return!1;return!0}function T(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var I={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,s=e.parent,o=e.data;o.routerView=!0;var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&C(m,o,p.route,p.configProps),a(m,o,i)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(t,e){var n=g.instances[c];(e&&n!==t||!e&&n===t)&&(g.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[c]&&(g.instances[c]=t.componentInstance),T(u)};var y=g.props&&g.props[c];return y&&(r(l[c],{route:u,configProps:y}),C(v,o,u,y)),a(v,o,i)}};function C(t,e,n,i){var s=e.props=S(n,i);if(s){s=e.props=r({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function S(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function k(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function A(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function O(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var N=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},R=J,D=j,x=F,P=$,L=Q,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function j(t,e){var n,r=[],i=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=M.exec(t))){var c=n[0],u=n[1],l=n.index;if(o+=t.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=t[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(r.push(o),o="");var y=null!=d&&null!=h&&h!==d,w="+"===g||"*"===g,b="?"===g||"*"===g,_=n[2]||a,E=p||m;r.push({name:f||i++,prefix:d||"",delimiter:_,optional:b,repeat:w,partial:y,asterisk:!!v,pattern:E?z(E):v?".*":"[^"+B(_)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&r.push(o),r}function F(t,e){return $(j(t,e),e)}function U(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function $(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",H(e)));return function(e,r){for(var i="",s=e||{},o=r||{},a=o.pretty?U:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(N(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?V(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function q(t,e){return t.keys=e,t}function H(t){return t&&t.sensitive?"":"i"}function K(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return q(t,e)}function G(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(J(t[i],e,n).source);var s=new RegExp("(?:"+r.join("|")+")",H(n));return q(s,e)}function W(t,e,n){return Q(j(t,n),e,n)}function Q(t,e,n){N(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=B(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",q(new RegExp("^"+s,H(n)),e)}function J(t,e,n){return N(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?K(t,e):N(t)?G(t,e,n):W(t,e,n)}R.parse=D,R.compile=x,R.tokensToFunction=P,R.tokensToRegExp=L;var X=Object.create(null);function Y(t,e,n){e=e||{};try{var r=X[t]||(X[t]=R.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Z(t,e,n,i){var s="string"===typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){s=r({},t);var o=s.params;return o&&"object"===typeof o&&(s.params=r({},o)),s}if(!s.path&&s.params&&e){s=r({},s),s._normalized=!0;var a=r(r({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;s.path=Y(c,a,"path "+e.path)}else 0;return s}var l=A(s.path||""),h=e&&e.path||"/",d=l.path?k(l.path,h,n||s.append):h,f=u(l.query,s.query,i&&i.options.parseQuery),p=s.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,s=n.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[g]=w(i,v,this.exactPath),u[m]=this.exact||this.exactPath?u[g]:_(i,v);var y=u[g]?this.ariaCurrentValue:null,b=function(t){st(t)&&(e.replace?n.replace(o,rt):n.push(o,rt))},E={click:st};Array.isArray(this.event)?this.event.forEach((function(t){E[t]=b})):E[this.event]=b;var T={class:u},I=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[m],isExactActive:u[g]});if(I){if(1===I.length)return I[0];if(I.length>1||!I.length)return 0===I.length?t():t("span",{},I)}if("a"===this.tag)T.on=E,T.attrs={href:c,"aria-current":y};else{var C=ot(this.$slots.default);if(C){C.isStatic=!1;var S=C.data=r({},C.data);for(var k in S.on=S.on||{},S.on){var A=S.on[k];k in E&&(S.on[k]=Array.isArray(A)?A:[A])}for(var O in E)O in S.on?S.on[O].push(E[O]):S.on[O]=b;var N=C.data.attrs=r({},C.data.attrs);N.href=c,N["aria-current"]=y}else T.on=E}return t(this.tag,T,this.$slots.default)}};function st(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ot(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=ot(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",I),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ct="undefined"!==typeof window;function ut(t,e,n,r,i){var s=e||[],o=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){lt(s,o,a,t,i)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function lt(t,e,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=dt(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:ht(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=s?O(s+"/"+r.path):void 0;lt(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};lt(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function ht(t,e){var n=R(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:O(e.path+"/"+t)}function ft(t,e){var n=ut(t),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(t){ut(t,r,i,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;ut([e||t],r,i,s,n),n&&n.alias.length&&ut(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,s,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,o){var a=Z(t,n,!1,e),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Y(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(pt(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var m=mt(c,t),g=Y(m,f,'redirect route with path "'+m+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var r=Y(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return e.params=i.params,d(o,e)}return d(null,e)}function d(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=t.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function mt(t,e){return k(t,e.parent?e.parent.path:"/",!0)}var gt=ct&&window.performance&&window.performance.now?window.performance:Date;function vt(){return gt.now().toFixed(3)}var yt=vt();function wt(){return yt}function bt(t){return yt=t}var _t=Object.create(null);function Et(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=wt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",Ct),function(){window.removeEventListener("popstate",Ct)}}function Tt(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var s=St(),o=i.call(t,e,n,r?s:null);o&&("function"===typeof o.then?o.then((function(t){xt(t,s)})).catch((function(t){0})):xt(o,s))}))}}function It(){var t=wt();t&&(_t[t]={x:window.pageXOffset,y:window.pageYOffset})}function Ct(t){It(),t.state&&t.state.key&&bt(t.state.key)}function St(){var t=wt();if(t)return _t[t]}function kt(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function At(t){return Rt(t.x)||Rt(t.y)}function Ot(t){return{x:Rt(t.x)?t.x:window.pageXOffset,y:Rt(t.y)?t.y:window.pageYOffset}}function Nt(t){return{x:Rt(t.x)?t.x:0,y:Rt(t.y)?t.y:0}}function Rt(t){return"number"===typeof t}var Dt=/^#\d/;function xt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Dt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=Nt(i),e=kt(r,i)}else At(t)&&(e=Ot(t))}else n&&At(t)&&(e=Ot(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Pt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Lt(t,e){It();var n=window.history;try{if(e){var i=r({},n.state);i.key=wt(),n.replaceState(i,"",t)}else n.pushState({key:bt(vt())},"",t)}catch(s){window.location[e?"replace":"assign"](t)}}function Mt(t){Lt(t,!0)}var jt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ft(t,e){return Bt(t,e,jt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+qt(e)+'" via a navigation guard.')}function Ut(t,e){var n=Bt(t,e,jt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Vt(t,e){return Bt(t,e,jt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function $t(t,e){return Bt(t,e,jt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Bt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var zt=["params","query","hash"];function qt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return zt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Ht(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Kt(t,e){return Ht(t)&&t._isRouter&&(null==e||t.type===e)}function Gt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}function Wt(t){return function(e,n,r){var i=!1,s=0,o=null;Qt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,s++;var c,u=Zt((function(e){Yt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,s--,s<=0&&r()})),l=Zt((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=Ht(t)?t:new Error(e),r(o))}));try{c=t(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Qt(t,e){return Jt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Jt(t){return Array.prototype.concat.apply([],t)}var Xt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Yt(t){return t.__esModule||Xt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Qt(t,(function(t,r,i,s){var o=ie(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,r,i,s)})):n(o,r,i,s)}));return Jt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function se(t){return re(t,"beforeRouteLeave",ae,!0)}function oe(t){return re(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return ue(t,n,r)}))}function ue(t,e,n){return function(r,i,s){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Kt(t,jt.redirected)&&s===g||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var s=function(t){!Kt(t)&&Ht(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,a=i.matched.length-1;if(w(t,i)&&o===a&&t.matched[o]===i.matched[a])return this.ensureURL(),t.hash&&Tt(this.router,i,t,!1),s(Ut(i,t));var c=ne(this.current.matched,t.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(se(l),this.router.beforeHooks,oe(u),h.map((function(t){return t.beforeEnter})),Wt(h)),f=function(e,n){if(r.pending!==t)return s(Vt(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),s($t(i,t))):Ht(e)?(r.ensureURL(!0),s(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(s(Ft(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(o){s(o)}};Gt(d,f,(function(){var n=ce(h),o=n.concat(r.router.resolveHooks);Gt(o,f,(function(){if(r.pending!==t)return s(Vt(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){T(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=g,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(Et());var i=function(){var n=t.current,i=he(t.base);t.current===g&&i===t._startLocation||t.transitionTo(i,(function(t){r&&Tt(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){Lt(O(r.base+t.fullPath)),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){Mt(O(r.base+t.fullPath)),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=O(this.base+this.current.fullPath);t?Lt(e):Mt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(O(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,r){t.call(this,e,n),r&&fe(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Pt&&n;r&&this.listeners.push(Et());var i=function(){var e=t.current;pe()&&t.transitionTo(me(),(function(n){r&&Tt(t.router,n,e,!0),Pt||ye(n.fullPath)}))},s=Pt?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push((function(){window.removeEventListener(s,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){ve(t.fullPath),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;me()!==e&&(t?ve(e):ye(e))},e.prototype.getCurrentLocation=function(){return me()},e}(te);function fe(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(O(t+"/#"+e)),!0}function pe(){var t=me();return"/"===t.charAt(0)||(ye("/"+t),!1)}function me(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ge(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ve(t){Pt?Lt(ge(t)):window.location.hash=t}function ye(t){Pt?Mt(ge(t)):window.location.replace(ge(t))}var we=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Kt(t,jt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),be=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ft(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Pt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},_e={currentRoute:{configurable:!0}};be.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},_e.currentRoute.get=function(){return this.history&&this.history.current},be.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof de){var r=function(t){var r=n.current,i=e.options.scrollBehavior,s=Pt&&i;s&&"fullPath"in t&&Tt(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},be.prototype.beforeEach=function(t){return Te(this.beforeHooks,t)},be.prototype.beforeResolve=function(t){return Te(this.resolveHooks,t)},be.prototype.afterEach=function(t){return Te(this.afterHooks,t)},be.prototype.onReady=function(t,e){this.history.onReady(t,e)},be.prototype.onError=function(t){this.history.onError(t)},be.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},be.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},be.prototype.go=function(t){this.history.go(t)},be.prototype.back=function(){this.go(-1)},be.prototype.forward=function(){this.go(1)},be.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},be.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Z(t,e,n,this),i=this.match(r,e),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=Ie(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},be.prototype.getRoutes=function(){return this.matcher.getRoutes()},be.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},be.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(be.prototype,_e);var Ee=be;function Te(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ie(t,e,n){var r="hash"===n?"#"+e:e;return t?O(t+"/"+r):r}be.install=at,be.version="3.6.5",be.isNavigationFailure=Kt,be.NavigationFailureType=jt,be.START_LOCATION=g,ct&&window.Vue&&window.Vue.use(be)},"9c44":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Lr})),n.d(e,"b",(function(){return jr})),n.d(e,"c",(function(){return Mr})),n.d(e,"d",(function(){return Ur})),n.d(e,"e",(function(){return zr})),n.d(e,"f",(function(){return Br})),n.d(e,"g",(function(){return Fr})),n.d(e,"h",(function(){return Vr})),n.d(e,"i",(function(){return $r})),n.d(e,"j",(function(){return xr})),n.d(e,"k",(function(){return Pr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t){return Object.prototype.hasOwnProperty.call(t,h)&&t[h]||(t[h]=++d)}var h="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(t,e,n){return t.call.apply(t.bind,arguments)}function p(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:p,m.apply(null,arguments)}function g(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function y(){this.s=this.s,this.o=this.o}var w=0;y.prototype.s=!1,y.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==w)||l(this)},y.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function E(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(c(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function T(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",()=>{},e),a.removeEventListener("test",()=>{},e)}catch(n){}return t}();function C(t){return/^[\s\xa0]*$/.test(t)}function S(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function k(t){return-1!=S().indexOf(t)}function A(t){return A[" "](t),t}function O(t,e){var n=gr;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}A[" "]=function(){};var N,R,D=k("Opera"),x=k("Trident")||k("MSIE"),P=k("Edge"),L=P||x,M=k("Gecko")&&!(-1!=S().toLowerCase().indexOf("webkit")&&!k("Edge"))&&!(k("Trident")||k("MSIE"))&&!k("Edge"),j=-1!=S().toLowerCase().indexOf("webkit")&&!k("Edge");function F(){var t=a.document;return t?t.documentMode:void 0}t:{var U="",V=function(){var t=S();return M?/rv:([^\);]+)(\)|;)/.exec(t):P?/Edge\/([\d\.]+)/.exec(t):x?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):j?/WebKit\/(\S+)/.exec(t):D?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(V&&(U=V?V[1]:""),x){var $=F();if(null!=$&&$>parseFloat(U)){N=String($);break t}}N=U}if(a.document&&x){var B=F();R=B||(parseInt(N,10)||void 0)}else R=void 0;var z=R;function q(t,e){if(T.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(M){t:{try{A(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:H[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&q.$.h.call(this)}}v(q,T);var H={2:"touch",3:"pen",4:"mouse"};q.prototype.h=function(){q.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var K="closure_listenable_"+(1e6*Math.random()|0),G=0;function W(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++G,this.fa=this.ia=!1}function Q(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function J(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function X(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Y(t){const e={};for(const n in t)e[n]=t[n];return e}const Z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tt(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<Z.length;e++)n=Z[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function et(t){this.src=t,this.g={},this.h=0}function nt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=b(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Q(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function rt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}et.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=rt(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new W(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};var it="closure_lm_"+(1e6*Math.random()|0),st={};function ot(t,e,n,r,i){if(r&&r.once)return ut(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ot(t,e[s],n,r,i);return null}return n=gt(n),t&&t[K]?t.O(e,n,u(r)?!!r.capture:!!r,i):at(t,e,n,!1,r,i)}function at(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=u(i)?!!i.capture:!!i,a=pt(t);if(a||(t[it]=a=new et(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ct(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)I||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(dt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ct(){function t(n){return e.call(t.src,t.listener,n)}const e=ft;return t}function ut(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ut(t,e[s],n,r,i);return null}return n=gt(n),t&&t[K]?t.P(e,n,u(r)?!!r.capture:!!r,i):at(t,e,n,!0,r,i)}function lt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)lt(t,e[s],n,r,i);else r=u(r)?!!r.capture:!!r,n=gt(n),t&&t[K]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=rt(s,n,r,i),-1<n&&(Q(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=pt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=rt(e,n,r,i)),(n=-1<t?e[t]:null)&&ht(n))}function ht(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[K])nt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(dt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=pt(e))?(nt(n,t),0==n.h&&(n.src=null,e[it]=null)):Q(t)}}}function dt(t){return t in st?st[t]:st[t]="on"+t}function ft(t,e){if(t.fa)t=!0;else{e=new q(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ht(t),t=n.call(r,e)}return t}function pt(t){return t=t[it],t instanceof et?t:null}var mt="__closure_events_fn_"+(1e9*Math.random()>>>0);function gt(t){return"function"===typeof t?t:(t[mt]||(t[mt]=function(e){return t.handleEvent(e)}),t[mt])}function vt(){y.call(this),this.i=new et(this),this.S=this,this.J=null}function yt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new T(e,t);else if(e instanceof T)e.target=e.target||t;else{var i=e;e=new T(r,t),tt(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=wt(o,r,!0,e)&&i}if(o=e.g=t,i=wt(o,r,!0,e)&&i,i=wt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=wt(o,r,!1,e)&&i}function wt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&nt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(vt,y),vt.prototype[K]=!0,vt.prototype.removeEventListener=function(t,e,n,r){lt(this,t,e,n,r)},vt.prototype.N=function(){if(vt.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Q(n[r]);delete e.g[t],e.h--}}this.J=null},vt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},vt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var bt=a.JSON.stringify;class _t{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Et(){var t=Nt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Tt{constructor(){this.h=this.g=null}add(t,e){const n=It.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var It=new _t(()=>new Ct,t=>t.reset());class Ct{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function St(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function kt(t){a.setTimeout(()=>{throw t},0)}let At,Ot=!1,Nt=new Tt,Rt=()=>{const t=a.Promise.resolve(void 0);At=()=>{t.then(Dt)}};var Dt=()=>{for(var t;t=Et();){try{t.h.call(t.g)}catch(n){kt(n)}var e=It;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ot=!1};function xt(t,e){vt.call(this),this.h=t||1,this.g=e||a,this.j=m(this.qb,this),this.l=Date.now()}function Pt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Lt(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Mt(t){t.g=Lt(()=>{t.g=null,t.i&&(t.i=!1,Mt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(xt,vt),r=xt.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),yt(this,"tick"),this.ga&&(Pt(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){xt.$.N.call(this),Pt(this),delete this.g};class jt extends y{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Mt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ft(t){y.call(this),this.h=t,this.g={}}v(Ft,y);var Ut=[];function Vt(t,e,n,r){Array.isArray(n)||(n&&(Ut[0]=n.toString()),n=Ut);for(var i=0;i<n.length;i++){var s=ot(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function $t(t){J(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ht(t)}),t),t.g={}}function Bt(){this.g=!0}function zt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function qt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Ht(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Gt(t,n)+(r?" "+r:"")}))}function Kt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Gt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return bt(n)}catch(a){return e}}Ft.prototype.N=function(){Ft.$.N.call(this),$t(this)},Ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Bt.prototype.Ea=function(){this.g=!1},Bt.prototype.info=function(){};var Wt={},Qt=null;function Jt(){return Qt=Qt||new vt}function Xt(t){T.call(this,Wt.Ta,t)}function Yt(t){const e=Jt();yt(e,new Xt(e))}function Zt(t,e){T.call(this,Wt.STAT_EVENT,t),this.stat=e}function te(t){const e=Jt();yt(e,new Zt(e,t))}function ee(t,e){T.call(this,Wt.Ua,t),this.size=e}function ne(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}Wt.Ta="serverreachability",v(Xt,T),Wt.STAT_EVENT="statevent",v(Zt,T),Wt.Ua="timingevent",v(ee,T);var re={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ie={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function se(){}function oe(t){return t.h||(t.h=t.i())}function ae(){}se.prototype.h=null;var ce,ue={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function le(){T.call(this,"d")}function he(){T.call(this,"c")}function de(){}function fe(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ft(this),this.P=me,t=L?125:void 0,this.V=new xt(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new pe}function pe(){this.i=null,this.g="",this.h=!1}v(le,T),v(he,T),v(de,se),de.prototype.g=function(){return new XMLHttpRequest},de.prototype.i=function(){return{}},ce=new de;var me=45e3,ge={},ve={};function ye(t,e,n){t.L=1,t.v=Ve(Le(e)),t.s=n,t.S=!0,we(t,null)}function we(t,e){t.G=Date.now(),Te(t),t.A=Le(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Ze(n.i,"t",r),t.C=0,n=t.l.J,t.h=new pe,t.g=sr(t.l,n?e:null,!t.s),0<t.O&&(t.M=new jt(m(t.Pa,t,t.g),t.O)),Vt(t.U,t.g,"readystatechange",t.nb),e=t.I?Y(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Yt(),zt(t.j,t.u,t.A,t.m,t.W,t.s)}function be(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function _e(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=Ee(t,n),r==ve){4==e&&(t.o=4,te(14),i=!1),Ht(t.j,t.m,null,"[Incomplete Response]");break}if(r==ge){t.o=4,te(15),Ht(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Ht(t.j,t.m,r,null),Ae(t,r)}be(t)&&r!=ve&&r!=ge&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,te(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xn(e),e.M=!0,te(11))):(Ht(t.j,t.m,n,"[Invalid Chunked Response]"),ke(t),Se(t))}function Ee(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ve:(n=Number(e.substring(n,r)),isNaN(n)?ge:(r+=1,r+n>e.length?ve:(e=e.slice(r,r+n),t.C=r+n,e)))}function Te(t){t.Y=Date.now()+t.P,Ie(t,t.P)}function Ie(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ne(m(t.lb,t),e)}function Ce(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Se(t){0==t.l.H||t.J||tr(t.l,t)}function ke(t){Ce(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Pt(t.V),$t(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ae(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||cn(n.i,t)))if(!t.K&&cn(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Zn(n),Bn(n)}Jn(n),te(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=ne(m(n.ib,n),6e3));if(1>=an(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else nr(n,11)}else if((t.K||n.g==t)&&Zn(n),!C(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(un(s,s.h),s.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,Ue(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ir(r,r.J?r.pa:null,r.Y),o.K){ln(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Ce(a),Te(a)),r.g=o}else Qn(r);0<n.j.length&&qn(n)}else"stop"!=u[0]&&"close"!=u[0]||nr(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?nr(n,7):$n(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}Yt(4)}catch(u){}}function Oe(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ne(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(c(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Re(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ne(t),r=Oe(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}r=fe.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==Pn(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const h=Pn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>h)&&(3!=h||L||this.g&&(this.h.h||this.g.ja()||Ln(this.g)))){this.J||4!=h||7==e||Yt(8==e||0>=d?3:2),Ce(this);var n=this.g.da();this.ca=n;e:if(be(this)){var r=Ln(this.g);t="";var i=r.length,s=4==Pn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){ke(this),Se(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,qt(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,te(12),ke(this),Se(this);break t}Ht(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ae(this,n)}this.S?(_e(this,h,o),L&&this.i&&3==h&&(Vt(this.U,this.V,"tick",this.mb),this.V.start())):(Ht(this.j,this.m,o,null),Ae(this,o)),4==h&&ke(this),this.i&&!this.J&&(4==h?tr(this.l,this):(this.i=!1,Te(this)))}else Mn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,te(12)):(this.o=0,te(13)),ke(this),Se(this)}}}catch(h){}},r.mb=function(){if(this.g){var t=Pn(this.g),e=this.g.ja();this.C<e.length&&(Ce(this),_e(this,t,e),this.i&&4!=t&&Te(this))}},r.cancel=function(){this.J=!0,ke(this)},r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Kt(this.j,this.A),2!=this.L&&(Yt(),te(17)),ke(this),this.o=2,Se(this)):Ie(this,this.Y-t)};var De=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pe(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pe){this.h=t.h,Me(this,t.j),this.s=t.s,this.g=t.g,je(this,t.m),this.l=t.l;var e=t.i,n=new Qe;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Fe(this,n),this.o=t.o}else t&&(e=String(t).match(De))?(this.h=!1,Me(this,e[1]||"",!0),this.s=$e(e[2]||""),this.g=$e(e[3]||"",!0),je(this,e[4]),this.l=$e(e[5]||"",!0),Fe(this,e[6]||"",!0),this.o=$e(e[7]||"")):(this.h=!1,this.i=new Qe(null,this.h))}function Le(t){return new Pe(t)}function Me(t,e,n){t.j=n?$e(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fe(t,e,n){e instanceof Qe?(t.i=e,en(t.i,t.h)):(n||(e=Be(e,Ge)),t.i=new Qe(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function Ve(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $e(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Be(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,ze),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ze(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Pe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Be(e,qe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Be(e,qe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Be(n,"/"==n.charAt(0)?Ke:He,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Be(n,We)),t.join("")};var qe=/[#\/\?@]/g,He=/[#\?:]/g,Ke=/[#\?]/g,Ge=/[#\?@]/g,We=/#/g;function Qe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Je(t){t.g||(t.g=new Map,t.h=0,t.i&&xe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Xe(t,e){Je(t),e=tn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ye(t,e){return Je(t),e=tn(t,e),t.g.has(e)}function Ze(t,e,n){Xe(t,e),0<n.length&&(t.i=null,t.g.set(tn(t,e),_(n)),t.h+=n.length)}function tn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function en(t,e){e&&!t.j&&(Je(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Xe(this,e),Ze(this,n,t))}),t)),t.j=e}r=Qe.prototype,r.add=function(t,e){Je(this),this.i=null,t=tn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){Je(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.ta=function(){Je(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){Je(this);let e=[];if("string"===typeof t)Ye(this,t)&&(e=e.concat(this.g.get(tn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return Je(this),this.i=null,t=tn(this,t),Ye(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var nn=class{constructor(t,e){this.g=t,this.map=e}};function rn(t){this.l=t||sn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ka&&a.g.Ka()&&a.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sn=10;function on(t){return!!t.h||!!t.g&&t.g.size>=t.j}function an(t){return t.h?1:t.g?t.g.size:0}function cn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function un(t,e){t.g?t.g.add(e):t.h=e}function ln(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function hn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return _(t.i)}rn.prototype.cancel=function(){if(this.i=hn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var dn=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function fn(){this.g=new dn}function pn(t,e,n){const r=n||"";try{Re(t,(function(t,n){let i=t;u(t)&&(i=bt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function mn(t,e){const n=new Bt;if(a.Image){const r=new Image;r.onload=g(gn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=g(gn,n,r,"TestLoadImage: error",!1,e),r.onabort=g(gn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=g(gn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function gn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function vn(t){this.l=t.fc||null,this.j=t.ob||!1}function yn(t,e){vt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=wn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}v(vn,se),vn.prototype.g=function(){return new yn(this.l,this.j)},vn.prototype.i=function(t){return function(){return t}}({}),v(yn,vt);var wn=0;function bn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function _n(t){t.readyState=4,t.l=null,t.j=null,t.A=null,En(t)}function En(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=yn.prototype,r.open=function(t,e){if(this.readyState!=wn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,En(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||a).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,_n(this)),this.readyState=wn},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_n(this):En(this),3==this.readyState&&bn(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,_n(this))},r.Ya=function(t){this.g&&(this.response=t,_n(this))},r.ka=function(){this.g&&_n(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(yn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Tn=a.JSON.parse;function In(t){vt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Cn,this.L=this.M=!1}v(In,vt);var Cn="",Sn=/^https?$/i,kn=["POST","PUT"];function An(t){return x&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function On(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Nn(t),Dn(t)}function Nn(t){t.F||(t.F=!0,yt(t,"complete"),yt(t,"error"))}function Rn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Pn(t)||2!=t.da()))if(t.v&&4==Pn(t))Lt(t.La,0,t);else if(yt(t,"readystatechange"),4==Pn(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.I).match(De)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!Sn.test(i?i.toLowerCase():"")}n=r}if(n)yt(t,"complete"),yt(t,"success");else{t.m=6;try{var s=2<Pn(t)?t.g.statusText:""}catch(c){s=""}t.j=s+" ["+t.da()+"]",Nn(t)}}finally{Dn(t)}}}function Dn(t,e){if(t.g){xn(t);const r=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||yt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function xn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Pn(t){return t.g?t.g.readyState:0}function Ln(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Cn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Mn(t){const e={};t=(t.g&&2<=Pn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(C(t[r]))continue;var n=St(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}X(e,(function(t){return t.join(", ")}))}function jn(t){let e="";return J(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Fn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=jn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ue(t,e,n))}function Un(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Vn(t){this.Ga=0,this.j=[],this.l=new Bt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Un("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Un("baseRetryDelayMs",5e3,t),this.hb=Un("retryDelaySeedMs",1e4,t),this.eb=Un("forwardChannelMaxRetries",2,t),this.xa=Un("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new rn(t&&t.concurrentRequestLimit),this.Ja=new fn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function $n(t){if(zn(t),3==t.H){var e=t.W++,n=Le(t.I);if(Ue(n,"SID",t.K),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),Gn(t,n),e=new fe(t,t.l,e),e.L=2,e.v=Ve(Le(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=sr(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Te(e)}rr(t)}function Bn(t){t.g&&(Xn(t),t.g.cancel(),t.g=null)}function zn(t){Bn(t),t.u&&(a.clearTimeout(t.u),t.u=null),Zn(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function qn(t){if(!on(t.i)&&!t.m){t.m=!0;var e=t.Na;At||Rt(),Ot||(At(),Ot=!0),Nt.add(e,t),t.C=0}}function Hn(t,e){return!(an(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=ne(m(t.Na,t,e),er(t,t.C)),t.C++,!0))}function Kn(t,e){var n;n=e?e.m:t.W++;const r=Le(t.I);Ue(r,"SID",t.K),Ue(r,"RID",n),Ue(r,"AID",t.V),Gn(t,r),t.o&&t.s&&Fn(r,t.o,t.s),n=new fe(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Wn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),un(t.i,n),ye(n,r,e)}function Gn(t,e){t.na&&J(t.na,(function(t,n){Ue(e,n,t)})),t.h&&Re({},(function(t,n){Ue(e,n,t)}))}function Wn(t,e,n){n=Math.min(t.j.length,n);var r=t.h?m(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{pn(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Qn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;At||Rt(),Ot||(At(),Ot=!0),Nt.add(e,t),t.A=0}}function Jn(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=ne(m(t.Ma,t),er(t,t.A)),t.A++,!0)}function Xn(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function Yn(t){t.g=new fe(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Le(t.wa);Ue(e,"RID","rpc"),Ue(e,"SID",t.K),Ue(e,"AID",t.V),Ue(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ue(e,"TO",t.qa),Ue(e,"TYPE","xmlhttp"),Gn(t,e),t.o&&t.s&&Fn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ve(Le(e)),n.s=null,n.S=!0,we(n,t)}function Zn(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function tr(t,e){var n=null;if(t.g==e){Zn(t),Xn(t),t.g=null;var r=2}else{if(!cn(t.i,e))return;n=e.F,ln(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Jt(),yt(r,new ee(r,n)),qn(t)}else Qn(t);else if(i=e.o,3==i||0==i&&0<e.ca||!(1==r&&Hn(t,e)||2==r&&Jn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:nr(t,5);break;case 4:nr(t,10);break;case 3:nr(t,6);break;default:nr(t,2)}}function er(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function nr(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=m(t.pb,t);n||(n=new Pe("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Me(n,"https"),Ve(n)),mn(n.toString(),r)}else te(2);t.H=0,t.h&&t.h.za(e),rr(t),zn(t)}function rr(t){if(t.H=0,t.ma=[],t.h){const e=hn(t.i);0==e.length&&0==t.j.length||(E(t.ma,e),E(t.ma,t.j),t.i.i.length=0,_(t.j),t.j.length=0),t.h.ya()}}function ir(t,e,n){var r=n instanceof Pe?Le(n):new Pe(n);if(""!=r.g)e&&(r.g=e+"."+r.g),je(r,r.m);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Pe(null);r&&Me(s,r),e&&(s.g=e),i&&je(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ue(r,n,e),Ue(r,"VER",t.ra),Gn(t,r),r}function sr(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new In(new vn({ob:!0})):new In(t.va),e.Oa(t.J),e}function or(){}function ar(){if(x&&!(10<=Number(z)))throw Error("Environmental error: no available transport.")}function cr(t,e){vt.call(this),this.g=new Vn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!C(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new hr(this)}function ur(t){le.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function lr(){he.call(this),this.status=1}function hr(t){this.g=t}function dr(){this.blockSize=-1}function fr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function pr(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function mr(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}r=In.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ce.g(),this.C=this.u?oe(this.u):oe(ce),this.g.onreadystatechange=m(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void On(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),i=a.FormData&&t instanceof a.FormData,!(0<=b(kn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xn(this),0<this.B&&((this.L=An(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.ua,this)):this.A=Lt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){On(this,s)}},r.ua=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,yt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,yt(this,"complete"),yt(this,"abort"),Dn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dn(this,!0)),In.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Rn(this):this.kb())},r.kb=function(){Rn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Pn(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Tn(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Vn.prototype,r.ra=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new fe(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Y(s),tt(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Wn(this,i,e),n=Le(this.I),Ue(n,"RID",t),Ue(n,"CVER",22),this.F&&Ue(n,"X-HTTP-Session-Id",this.F),Gn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(jn(s)))+"&"+e:this.o&&Fn(n,this.o,s)),un(this.i,i),this.bb&&Ue(n,"TYPE","init"),this.P?(Ue(n,"$req",e),Ue(n,"SID","null"),i.aa=!0,ye(i,n,null)):ye(i,n,e),this.H=2}}else 3==this.H&&(t?Kn(this,t):0==this.j.length||on(this.i)||Kn(this))},r.Ma=function(){if(this.u=null,Yn(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ne(m(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,te(10),Bn(this),Yn(this))},r.ib=function(){null!=this.v&&(this.v=null,Bn(this),Jn(this),te(19))},r.pb=function(t){t?(this.l.info("Successfully pinged google.com"),te(2)):(this.l.info("Failed to ping google.com"),te(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=or.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},ar.prototype.g=function(t,e){return new cr(t,e)},v(cr,vt),cr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;te(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ir(t,null,t.Y),qn(t)},cr.prototype.close=function(){$n(this.g)},cr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=bt(t),t=n);e.j.push(new nn(e.fb++,t)),3==e.H&&qn(e)},cr.prototype.N=function(){this.g.h=null,delete this.j,$n(this.g),delete this.g,cr.$.N.call(this)},v(ur,le),v(lr,he),v(hr,or),hr.prototype.Ba=function(){yt(this.g,"a")},hr.prototype.Aa=function(t){yt(this.g,new ur(t))},hr.prototype.za=function(t){yt(this.g,new lr)},hr.prototype.ya=function(){yt(this.g,"b")},v(fr,dr),fr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},fr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)pr(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){pr(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){pr(this,r),i=0;break}}this.h=i,this.i+=e},fr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var gr={};function vr(t){return-128<=t&&128>t?O(t,(function(t){return new mr([0|t],0>t?-1:0)})):new mr([0|t],0>t?-1:0)}function yr(t){if(isNaN(t)||!isFinite(t))return _r;if(0>t)return Sr(yr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=br;return new mr(e,0)}function wr(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Sr(wr(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=yr(Math.pow(e,8)),r=_r,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=yr(Math.pow(e,s)),r=r.R(s).add(yr(o))):(r=r.R(n),r=r.add(yr(o)))}return r}var br=4294967296,_r=vr(0),Er=vr(1),Tr=vr(16777216);function Ir(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Cr(t){return-1==t.h}function Sr(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new mr(n,~t.h).add(Er)}function kr(t,e){return t.add(Sr(e))}function Ar(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Or(t,e){this.g=t,this.h=e}function Nr(t,e){if(Ir(e))throw Error("division by zero");if(Ir(t))return new Or(_r,_r);if(Cr(t))return e=Nr(Sr(t),e),new Or(Sr(e.g),Sr(e.h));if(Cr(e))return e=Nr(t,Sr(e)),new Or(Sr(e.g),e.h);if(30<t.g.length){if(Cr(t)||Cr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Er,r=e;0>=r.X(t);)n=Rr(n),r=Rr(r);var i=Dr(n,1),s=Dr(r,1);for(r=Dr(r,2),n=Dr(n,2);!Ir(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Dr(r,1),n=Dr(n,1)}return e=kr(t,i.R(e)),new Or(i,e)}for(i=_r;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=yr(n),o=s.R(e);Cr(o)||0<o.X(t);)n-=r,s=yr(n),o=s.R(e);Ir(s)&&(s=Er),i=i.add(s),t=kr(t,o)}return new Or(i,t)}function Rr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new mr(n,t.h)}function Dr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new mr(i,t.h)}r=mr.prototype,r.ea=function(){if(Cr(this))return-Sr(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:br+r)*e,e*=br}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ir(this))return"0";if(Cr(this))return"-"+Sr(this).toString(t);for(var e=yr(Math.pow(t,6)),n=this,r="";;){var i=Nr(n,e).g;n=kr(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Ir(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=kr(this,t),Cr(t)?-1:Ir(t)?0:1},r.abs=function(){return Cr(this)?Sr(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new mr(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(Ir(this)||Ir(t))return _r;if(Cr(this))return Cr(t)?Sr(this).R(Sr(t)):Sr(Sr(this).R(t));if(Cr(t))return Sr(this.R(Sr(t)));if(0>this.X(Tr)&&0>t.X(Tr))return yr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=o*c,Ar(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Ar(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ar(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ar(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new mr(n,0)},r.gb=function(t){return Nr(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new mr(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new mr(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new mr(n,this.h^t.h)},ar.prototype.createWebChannel=ar.prototype.g,cr.prototype.send=cr.prototype.u,cr.prototype.open=cr.prototype.m,cr.prototype.close=cr.prototype.close,re.NO_ERROR=0,re.TIMEOUT=8,re.HTTP_ERROR=6,ie.COMPLETE="complete",ae.EventType=ue,ue.OPEN="a",ue.CLOSE="b",ue.ERROR="c",ue.MESSAGE="d",vt.prototype.listen=vt.prototype.O,In.prototype.listenOnce=In.prototype.P,In.prototype.getLastError=In.prototype.Sa,In.prototype.getLastErrorCode=In.prototype.Ia,In.prototype.getStatus=In.prototype.da,In.prototype.getResponseJson=In.prototype.Wa,In.prototype.getResponseText=In.prototype.ja,In.prototype.send=In.prototype.ha,In.prototype.setWithCredentials=In.prototype.Oa,fr.prototype.digest=fr.prototype.l,fr.prototype.reset=fr.prototype.reset,fr.prototype.update=fr.prototype.j,mr.prototype.add=mr.prototype.add,mr.prototype.multiply=mr.prototype.R,mr.prototype.modulo=mr.prototype.gb,mr.prototype.compare=mr.prototype.X,mr.prototype.toNumber=mr.prototype.ea,mr.prototype.toString=mr.prototype.toString,mr.prototype.getBits=mr.prototype.D,mr.fromNumber=yr,mr.fromString=wr;var xr=s.createWebChannelTransport=function(){return new ar},Pr=s.getStatEventTarget=function(){return Jt()},Lr=s.ErrorCode=re,Mr=s.EventType=ie,jr=s.Event=Wt,Fr=s.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ur=s.FetchXmlHttpFactory=vn,Vr=s.WebChannel=ae,$r=s.XhrIo=In,Br=s.Md5=fr,zr=s.Integer=mr}).call(this,n("c8ba"))},bc7b:function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["f"]}));var i="firebase",s="9.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(i,s,"app")},be8c:function(t,e,n){"use strict";n.d(e,"a",(function(){return Pr})),n.d(e,"b",(function(){return we}));var r=n("1fd5"),i=n("589b");function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),h=new o["b"]("@firebase/auth");function d(t,...e){h.logLevel<=o["a"].WARN&&h.warn(`Auth (${i["a"]}): ${t}`,...e)}function f(t,...e){h.logLevel<=o["a"].ERROR&&h.error(`Auth (${i["a"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw v(t,...e)}function m(t,...e){return v(t,...e)}function g(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r["b"]("auth","Firebase",i);return s.create(e,{appName:t.name})}function v(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function y(t,e,...n){if(!t)throw v(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function b(t,e){t||w(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function E(){return"http:"===T()||"https:"===T()}function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||Object(r["p"])()||"connection"in navigator))||navigator.onLine}function C(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["t"])()||Object(r["u"])()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},N=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function D(t,e,n,i,s={}){return x(t,s,async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=Object(r["w"])(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),A.fetch()(L(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function x(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},O),e);try{const e=new M(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw j(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw j(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);p(t,a)}}catch(s){if(s instanceof r["c"])throw s;p(t,"network-request-failed",{message:String(s)})}}async function P(t,e,n,r,i={}){const s=await D(t,e,n,r,i);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function L(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?k(t.config,i):`${t.config.apiScheme}://${i}`}class M{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(m(this.auth,"network-request-failed")),N.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F(t,e){return D(t,"POST","/v1/accounts:delete",e)}async function U(t,e){return D(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(t,e=!1){const n=Object(r["n"])(t),i=await n.getIdToken(e),s=z(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:V(B(s.auth_time)),issuedAtTime:V(B(s.iat)),expirationTime:V(B(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function B(t){return 1e3*Number(t)}function z(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["d"])(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function q(t){const e=z(t);return y(e,"internal-error"),y("undefined"!==typeof e.exp,"internal-error"),y("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["c"]&&K(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function K({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,r=await t.getIdToken(),i=await H(t,U(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?Y(s.providerUserInfo):[],a=X(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new W(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function J(t){const e=Object(r["n"])(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function Y(t){return t.map(t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e){const n=await x(t,{},async()=>{const n=Object(r["w"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=L(t,i,"/v1/token","key="+s),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){y(t.idToken,"internal-error"),y("undefined"!==typeof t.idToken,"internal-error"),y("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):q(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return y(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await Z(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new tt;return n&&(y("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new tt,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){y("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class nt{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new W(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await H(this,this.stsTokenManager.getToken(this.auth,t));return y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return $(this,t)}reload(){return J(this)}_assign(t){this!==t&&(y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new nt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await H(this,F(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:E,stsTokenManager:T}=e;y(w&&T,t,"internal-error");const I=tt.fromJSON(this.name,T);y("string"===typeof w,t,"internal-error"),et(l,t.name),et(h,t.name),y("boolean"===typeof b,t,"internal-error"),y("boolean"===typeof _,t,"internal-error"),et(d,t.name),et(f,t.name),et(p,t.name),et(m,t.name),et(g,t.name),et(v,t.name);const C=new nt({uid:w,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(C.providerData=E.map(t=>Object.assign({},t))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(t,e,n=!1){const r=new tt;r.updateFromServerResponse(e);const i=new nt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new Map;function it(t){b(t instanceof Function,"Expected a class definition");let e=rt.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rt.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}st.type="NONE";const ot=st;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e,n){return`firebase:${t}:${e}:${n}`}class ct{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=at(this.userKey,r.apiKey,i),this.fullPersistenceKey=at("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ct(it(ot),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||it(ot);const s=at(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=nt._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(s)}catch(c){}})),new ct(i,t,n)):new ct(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ft(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(gt(e))return"Webos";if(ht(e))return"Safari";if((e.includes("chrome/")||dt(e))&&!e.includes("edge/"))return"Chrome";if(pt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function lt(t=Object(r["o"])()){return/firefox\//i.test(t)}function ht(t=Object(r["o"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dt(t=Object(r["o"])()){return/crios\//i.test(t)}function ft(t=Object(r["o"])()){return/iemobile/i.test(t)}function pt(t=Object(r["o"])()){return/android/i.test(t)}function mt(t=Object(r["o"])()){return/blackberry/i.test(t)}function gt(t=Object(r["o"])()){return/webos/i.test(t)}function vt(t=Object(r["o"])()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yt(t=Object(r["o"])()){var e;return vt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function wt(){return Object(r["r"])()&&10===document.documentMode}function bt(t=Object(r["o"])()){return vt(t)||pt(t)||gt(t)||mt(t)||/windows phone/i.test(t)||ft(t)}function _t(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e=[]){let n;switch(t){case"Browser":n=ut(Object(r["o"])());break;case"Worker":n=`${ut(Object(r["o"])())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(t,e){return D(t,"GET","/v2/recaptchaConfig",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){return void 0!==t&&void 0!==t.enterprise}class Ct{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function kt(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=m("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",St().appendChild(r)})}function At(t){return`__${t}${Math.floor(1e6*Math.random())}`}const Ot="https://www.google.com/recaptcha/enterprise.js?render=",Nt="recaptcha-enterprise",Rt="NO_RECAPTCHA";class Dt{constructor(t){this.type=Nt,this.auth=Mt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise(async(e,n)=>{Tt(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Ct(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(t=>{n(t)})})}function r(e,n,r){const i=window.grecaptcha;It(i)?i.enterprise.ready(()=>{i.enterprise.execute(e,{action:t}).then(t=>{n(t)}).catch(()=>{n(Rt)})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((t,i)=>{n(this.auth).then(n=>{if(!e&&It(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));kt(Ot+n).then(()=>{r(n,t,i)}).catch(t=>{i(t)})}}).catch(t=>{i(t)})})}}async function xt(t,e,n,r=!1){const i=new Dt(t);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}});n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jt(this),this.idTokenSubscription=new jt(this),this.beforeStateQueue=new Pt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=it(e)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ct.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=C()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["n"])(t):null;return e&&y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(t))})}async initializeRecaptchaConfig(){const t=await Tt(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new Ct(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){const t=new Dt(this);t.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&it(t)||this._popupRedirectResolver;y(e,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[it(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Et(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&d("Error while retrieving App Check token: "+e.error),null===e||void 0===e?void 0:e.token}}function Mt(t){return Object(r["n"])(t)}class jt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["g"])(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){const n=Object(i["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r["h"])(i,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function Ut(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Vt(t,e,n){const r=Mt(t);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=$t(e),{host:o,port:a}=Bt(e),c=null===a?"":":"+a;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qt()}function $t(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bt(t){const e=$t(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:zt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:zt(e)}}}function zt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(t,e){return D(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Gt(t,e){return P(t,"POST","/v1/accounts:signInWithPassword",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wt(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}async function Qt(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ht{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Jt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Jt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await xt(t,n,"signInWithPassword");return Gt(t,e)}return Gt(t,n).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await xt(t,n,"signInWithPassword");return Gt(t,e)}return Promise.reject(e)});case"emailLink":return Wt(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Kt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qt(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(t,e){return P(t,"POST","/v1/accounts:signInWithIdp",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="http://localhost";class Zt extends Ht{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Zt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Zt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Xt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Xt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Xt(t,e)}buildRequest(){const t={requestUri:Yt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["w"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(t,e){return D(t,"POST","/v1/accounts:sendVerificationCode",R(t,e))}async function ee(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e))}async function ne(t,e){const n=await P(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e));if(n.temporaryProof)throw j(t,"account-exists-with-different-credential",n);return n}const re={["USER_NOT_FOUND"]:"user-not-found"};async function ie(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return P(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,n),re)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Ht{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new se({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new se({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ee(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ne(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return ie(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new se({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ae(t){const e=Object(r["x"])(Object(r["i"])(t))["link"],n=e?Object(r["x"])(Object(r["i"])(e))["deep_link_id"]:null,i=Object(r["x"])(Object(r["i"])(t))["deep_link_id"],s=i?Object(r["x"])(Object(r["i"])(i))["link"]:null;return s||i||n||e||t}class ce{constructor(t){var e,n,i,s,o,a;const c=Object(r["x"])(Object(r["i"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=oe(null!==(i=c["mode"])&&void 0!==i?i:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ae(t);try{return new ce(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(){this.providerId=ue.PROVIDER_ID}static credential(t,e){return Jt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ce.parseLink(e);return y(n,"argument-error"),Jt._fromEmailAndCode(t,n.code,n.tenantId)}}ue.PROVIDER_ID="password",ue.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ue.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends le{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de extends he{constructor(){super("facebook.com")}static credential(t){return Zt._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return de.credentialFromTaggedObject(t)}static credentialFromError(t){return de.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return de.credential(t.oauthAccessToken)}catch(e){return null}}}de.FACEBOOK_SIGN_IN_METHOD="facebook.com",de.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe extends he{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Zt._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return fe.credentialFromTaggedObject(t)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return fe.credential(e,n)}catch(r){return null}}}fe.GOOGLE_SIGN_IN_METHOD="google.com",fe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe extends he{constructor(){super("github.com")}static credential(t){return Zt._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return pe.credential(t.oauthAccessToken)}catch(e){return null}}}pe.GITHUB_SIGN_IN_METHOD="github.com",pe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends he{constructor(){super("twitter.com")}static credential(t,e){return Zt._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return me.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ge(t,e){return P(t,"POST","/v1/accounts:signUp",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */me.TWITTER_SIGN_IN_METHOD="twitter.com",me.PROVIDER_ID="twitter.com";class ve{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await nt._fromIdTokenResponse(t,n,r),s=ye(n),o=new ve({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ye(n);return new ve({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ye(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(t){var e;const n=Mt(t);if(await n._initializationPromise,null===(e=n.currentUser)||void 0===e?void 0:e.isAnonymous)return new ve({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await ge(n,{returnSecureToken:!0}),i=await ve._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends r["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,be.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new be(t,e,n,r)}}function _e(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw be._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(t,e,n=!1){const r=await H(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ve._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Te(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await H(t,_e(r,i,e,t),n);y(s.idToken,r,"internal-error");const o=z(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(t.uid===a,r,"user-mismatch"),ve._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(t,e,n=!1){const r="signIn",i=await _e(t,r,e),s=await ve._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Ce(t,e,n,i){return Object(r["n"])(t).onIdTokenChanged(e,n,i)}function Se(t,e,n){return Object(r["n"])(t).beforeAuthStateChanged(e,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ke(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",R(t,e))}function Ae(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",R(t,e))}function Oe(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",R(t,e))}function Ne(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",R(t,e))}new WeakMap;const Re="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Re,"1"),this.storage.removeItem(Re),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){const t=Object(r["o"])();return ht(t)||vt(t)}const Pe=1e3,Le=10;class Me extends De{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xe()&&_t(),this.fallbackToPolling=bt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);wt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Le):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},Pe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Me.type="LOCAL";const je=Me;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends De{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Fe.type="SESSION";const Ue=Fe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new $e(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async t=>t(e.origin,i)),a=await Ve(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Be(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e.receivers=[];class ze{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Be("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function He(t){qe().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return"undefined"!==typeof qe()["WorkerGlobalScope"]&&"function"===typeof qe()["importScripts"]}async function Ge(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function We(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Qe(){return Ke()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="firebaseLocalStorageDb",Xe=1,Ye="firebaseLocalStorage",Ze="fbase_key";class tn{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function en(t,e){return t.transaction([Ye],e?"readwrite":"readonly").objectStore(Ye)}function nn(){const t=indexedDB.deleteDatabase(Je);return new tn(t).toPromise()}function rn(){const t=indexedDB.open(Je,Xe);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Ye,{keyPath:Ze})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Ye)?e(n):(n.close(),await nn(),e(await rn()))})})}async function sn(t,e,n){const r=en(t,!0).put({[Ze]:e,value:n});return new tn(r).toPromise()}async function on(t,e){const n=en(t,!1).get(e),r=await new tn(n).toPromise();return void 0===r?null:r.value}function an(t,e){const n=en(t,!0).delete(e);return new tn(n).toPromise()}const cn=800,un=3;class ln{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await rn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>un)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ke()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$e._getInstance(Qe()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ge(),!this.activeServiceWorker)return;this.sender=new ze(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&We()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await rn();return await sn(t,Re,"1"),await an(t,Re),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sn(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>on(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>an(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=en(t,!1).getAll();return new tn(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ln.type="LOCAL";const hn=ln;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:start",R(t,e))}function fn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",R(t,e))}function pn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
At("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mn="recaptcha";async function gn(t,e,n){var r;const i=await n.verify();try{let s;if(y("string"===typeof i,t,"argument-error"),y(n.type===mn,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){y("enroll"===e.type,t,"internal-error");const n=await ke(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;y(n,t,"missing-multi-factor-info");const o=await dn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await te(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn{constructor(t){this.providerId=vn.PROVIDER_ID,this.auth=Mt(t)}verifyPhoneNumber(t,e){return gn(this.auth,t,Object(r["n"])(e))}static credential(t,e){return se._fromVerification(t,e)}static credentialFromResult(t){const e=t;return vn.credentialFromTaggedObject(e)}static credentialFromError(t){return vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?se._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yn(t,e){return e?it(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.PROVIDER_ID="phone",vn.PHONE_SIGN_IN_METHOD="phone";class wn extends Ht{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Xt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Xt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Xt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function bn(t){return Ie(t.auth,new wn(t),t.bypassAuthState)}function _n(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Te(n,new wn(t),t.bypassAuthState)}async function En(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Ee(n,new wn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return bn;case"linkViaPopup":case"linkViaRedirect":return En;case"reauthViaPopup":case"reauthViaRedirect":return _n;default:p(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new S(2e3,1e4);class Cn extends Tn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Cn.currentPopupAction&&Cn.currentPopupAction.cancel(),Cn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return y(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=Be();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(m(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(t,In.get())};t()}}Cn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sn="pendingRedirect",kn=new Map;class An extends Tn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=kn.get(this.auth._key());if(!t){try{const e=await On(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}kn.set(this.auth._key(),t)}return this.bypassAuthState||kn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function On(t,e){const n=Dn(e),r=Rn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Nn(t,e){kn.set(t._key(),e)}function Rn(t){return it(t._redirectPersistence)}function Dn(t){return at(Sn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(t,e,n=!1){const r=Mt(t),i=yn(r,e),s=new An(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn=6e5;class Ln{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Fn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!jn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(m(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Pn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mn(t))}saveEventToCache(t){this.cachedEventUids.add(Mn(t)),this.lastProcessedEventTime=Date.now()}}function Mn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function jn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Fn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(t,e={}){return D(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$n=/^https?/;async function Bn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Un(t);for(const r of e)try{if(zn(r))return}catch(n){}p(t,"unauthorized-domain")}function zn(t){const e=_(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!$n.test(n))return!1;if(Vn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new S(3e4,6e4);function Hn(){const t=qe().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Kn(t){return new Promise((e,n)=>{var r,i,s;function o(){Hn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hn(),n(m(t,"network-request-failed"))},timeout:qn.get()})}if(null===(i=null===(r=qe().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=qe().gapi)||void 0===s?void 0:s.load)){const e=At("iframefcb");return qe()[e]=()=>{gapi.load?o():n(m(t,"network-request-failed"))},kt("https://apis.google.com/js/api.js?onload="+e).catch(t=>n(t))}o()}}).catch(t=>{throw Gn=null,t})}let Gn=null;function Wn(t){return Gn=Gn||Kn(t),Gn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new S(5e3,15e3),Jn="__/auth/iframe",Xn="emulator/auth/iframe",Yn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tr(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?k(e,Xn):`https://${t.config.authDomain}/${Jn}`,s={apiKey:e.apiKey,appName:t.name,v:i["a"]},o=Zn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["w"])(s).slice(1)}`}async function er(t){const e=await Wn(t),n=qe().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:tr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yn,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=m(t,"network-request-failed"),s=qe().setTimeout(()=>{r(i)},Qn.get());function o(){qe().clearTimeout(s),n(e)}e.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rr=500,ir=600,sr="_blank",or="http://localhost";class ar{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function cr(t,e,n,i=rr,s=ir){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},nr),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["o"])().toLowerCase();n&&(c=dt(l)?sr:n),lt(l)&&(e=e||or,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(yt(l)&&"_self"!==c)return ur(e||"",c),new ar(null);const d=window.open(e||"",c,h);y(d,t,"popup-blocked");try{d.focus()}catch(f){}return new ar(d)}function ur(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="__/auth/handler",hr="emulator/auth/handler",dr=encodeURIComponent("fac");async function fr(t,e,n,s,o,a){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i["a"],eventId:o};if(e instanceof le){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(r["q"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof he){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await t._getAppCheckToken(),h=l?`#${dr}=${encodeURIComponent(l)}`:"";return`${pr(t)}?${Object(r["w"])(u).slice(1)}${h}`}function pr({config:t}){return t.emulator?k(t,hr):`https://${t.authDomain}/${lr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="webStorageSupport";class gr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ue,this._completeRedirectFn=xn,this._overrideRedirectResult=Nn}async _openPopup(t,e,n,r){var i;b(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await fr(t,e,n,_(),r);return cr(t,s,Be())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await fr(t,e,n,_(),r);return He(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await er(t),n=new Ln(t);return e.register("authEvent",e=>{y(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(mr,{type:mr},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[mr];void 0!==i&&e(!!i),p(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Bn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return bt()||ht()||vt()}}const vr=gr;class yr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class wr extends yr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new wr(t)}_finalizeEnroll(t,e,n){return Ae(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return fn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class br{constructor(){}static assertion(t){return wr._fromCredential(t)}}br.FACTOR_ID="phone";class _r{static assertionForEnrollment(t,e){return Er._fromSecret(t,e)}static assertionForSignIn(t,e){return Er._fromEnrollmentId(t,e)}static async generateSecret(t){const e=t;y("undefined"!==typeof e.auth,"internal-error");const n=await Oe(e.auth,{idToken:e.credential,totpEnrollmentInfo:{}});return Tr._fromStartTotpMfaEnrollmentResponse(n,e.auth)}}_r.FACTOR_ID="totp";class Er extends yr{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Er(e,void 0,t)}static _fromEnrollmentId(t,e){return new Er(e,t)}async _finalizeEnroll(t,e,n){return y("undefined"!==typeof this.secret,t,"argument-error"),Ne(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){y(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return pn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Tr{constructor(t,e,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Tr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(Ir(t)||Ir(e))&&(r=!0),r&&(Ir(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ir(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ir(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Cr="@firebase/auth",Sr="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Or(t){Object(i["c"])(new a["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Et(t)},u=new Lt(r,i,s,c);return Ut(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",t=>{const e=Mt(t.getProvider("auth").getImmediate());return(t=>new kr(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["g"])(Cr,Sr,Ar(t)),Object(i["g"])(Cr,Sr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=300,Rr=Object(r["m"])("authIdTokenMaxAge")||Nr;let Dr=null;const xr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Rr)return;const i=null===n||void 0===n?void 0:n.token;Dr!==i&&(Dr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:"Bearer "+i}:{}}))};function Pr(t=Object(i["e"])()){const e=Object(i["b"])(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ft(t,{popupRedirectResolver:vr,persistence:[hn,je,Ue]}),s=Object(r["m"])("authTokenSyncURL");if(s){const t=xr(s);Se(n,t,()=>t(n.currentUser)),Ce(n,e=>t(e))}const o=Object(r["k"])("auth");return o&&Vt(n,"http://"+o),n}Or("Browser")},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.0ea4b57f.js.map