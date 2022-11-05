/*! For license information please see 690.392200bf.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkthink_single_editor=self.webpackChunkthink_single_editor||[]).push([[690],{"./src/extensions/mind/menu/kityminder/hotbox.js":()=>{!function(){var _p={r:function(index){if(_p[index].inited)return _p[index].value;if("function"!=typeof _p[index].value)return _p[index].inited=!0,_p[index].value;var module={exports:{}},returnValue=_p[index].value(null,module.exports,module);if(_p[index].inited=!0,_p[index].value=returnValue,void 0!==returnValue)return returnValue;for(var key in module.exports)if(module.exports.hasOwnProperty(key))return _p[index].inited=!0,_p[index].value=module.exports,module.exports}};_p[0]={value:function(require,exports,module){module.exports=window.HotBox=_p.r(1)}},_p[1]={value:function(require,exports,module){var key=_p.r(2),KeyControl=_p.r(3);function createElement(name){return document.createElement(name)}function addElementClass(element,name){element.classList.add(name)}function removeElementClass(element,name){element.classList.remove(name)}function appendChild(parent,child){parent.appendChild(child)}var IDLE=HotBox.STATE_IDLE="idle",div="div";function format(template,args){return"object"!=typeof args&&(args=[].slice.apply(arguments,1)),String(template).replace(/\{(\w+)\}/g,(function(match,name){return args[name]||match}))}function HotBox($container){if("string"==typeof $container&&($container=document.querySelector($container)),!($container&&$container instanceof HTMLElement))throw new Error("No container or not invalid container for hot box");var $hotBox=createElement(div);addElementClass($hotBox,"hotbox"),appendChild($container,$hotBox),this.$element=$hotBox,this.$container=$container,this.isIME=!1,this.browser={sg:/se[\s\S]+metasr/.test(navigator.userAgent.toLowerCase())},this._parentFSM={},this.position={};var _controler,_states={},_mainState=null,_currentState=IDLE,_stateStack=[],_this=this;function _activeState(name,position){if(_this.position=position,name==IDLE)_currentState!=IDLE&&(_stateStack.shift().deactive(),_stateStack=[]),_currentState=IDLE;else if("back"==name)_currentState!=IDLE&&(_currentState.deactive(),_stateStack.shift(),(_currentState=_stateStack[0])?_currentState.active():_currentState="idle");else{_currentState!=IDLE&&_currentState.deactive();var newState=_states[name];_stateStack.unshift(newState),"function"==typeof _this.position&&(position=_this.position(position)),newState.active(position),_currentState=newState}}this.control=function _control(Controller){if(!_controler)return(_controler=new(Controller=Controller||KeyControl)(_this)).active(),$hotBox.onmousedown=function(e){e.stopPropagation(),e.preventDefault()},_this;_controler.active()},this.state=function _addState(name){if(!name)return _currentState;if(name==IDLE)throw new Error("Can not define or use the `idle` state.");return _states[name]=_states[name]||new HotBoxState(this,name),"main"==name&&(_mainState=_states[name]),_states[name]},this.active=_activeState,this.dispatch=function _dispatchKey(e){var type=e.type.toLowerCase();if(e.keyHash=key.hash(e),e.isKey=function(keyExpression){if(!keyExpression)return!1;for(var expressions=keyExpression.split(/\s*\|\s*/);expressions.length;)if(e.keyHash==key.hash(expressions.shift()))return!0;return!1},e[type]=!0,!(e.keyup&&_this.activeKey&&e.isKey(_this.activeKey)&&_currentState==IDLE&&_mainState)){var handleState=_currentState==IDLE?_mainState:_currentState;if(handleState){var handleResult=handleState.handleKeyEvent(e);return"function"==typeof _this.onkeyevent&&(e.handleResult=handleResult,_this.onkeyevent(e,handleResult)),handleResult}return null}_activeState("main",{x:$container.clientWidth/2,y:$container.clientHeight/2})},this.setParentFSM=function setParentFSM(fsm){_this._parentFSM=fsm},this.getParentFSM=function getParentFSM(){return _this._parentFSM},this.activeKey="space",this.actionKey="space"}function HotBoxState(hotBox,stateName){var $state=createElement(div),$center=createElement(div),$ring=createElement(div),$ringShape=createElement("div"),$top=createElement(div),$bottom=createElement(div);addElementClass($state,"state"),addElementClass($state,stateName),addElementClass($center,"center"),addElementClass($ring,"ring"),addElementClass($ringShape,"ring-shape"),addElementClass($top,"top"),addElementClass($bottom,"bottom"),appendChild(hotBox.$element,$state),appendChild($state,$ringShape),appendChild($state,$center),appendChild($state,$ring),appendChild($state,$top),appendChild($state,$bottom),this.name=stateName;var buttons={center:null,ring:[],top:[],bottom:[],behind:[]},allButtons=[],selectedButton=null,pressedButton=null,stateActived=!1,needLayout=!0;function alwaysEnable(){return!0}function defaultButtonRender(format,option){return format('<span class="label">{label}</span><span class="key">{key}</span>',{label:option.label,key:option.key&&option.key.split("|")[0]})}function press(button){pressedButton&&pressedButton.$button&&removeElementClass(pressedButton.$button,"pressed"),(pressedButton=button)&&pressedButton.$button&&addElementClass(pressedButton.$button,"pressed")}function select(button){selectedButton&&selectedButton.$button&&selectedButton.$button&&removeElementClass(selectedButton.$button,"selected"),(selectedButton=button)&&selectedButton.$button&&addElementClass(selectedButton.$button,"selected")}function execute(button){button&&(button.enable&&!button.enable()||(button.action&&button.action(button),hotBox.active(button.next||IDLE,hotBox.position)),press(null),select(null))}this.button=function(option){var button=function createButton(option){var $button=createElement(div);addElementClass($button,"button");var render=option.render||defaultButtonRender;switch($button.innerHTML=render(format,option),option.position){case"center":appendChild($center,$button);break;case"ring":appendChild($ring,$button);break;case"top":appendChild($top,$button);break;case"bottom":appendChild($bottom,$button)}return{action:option.action,enable:option.enable||alwaysEnable,beforeShow:option.beforeShow,key:option.key,next:option.next,label:option.label,data:option.data||null,$button}}(option);"center"==option.position?buttons.center=button:buttons[option.position]&&buttons[option.position].push(button),allButtons.push(button),needLayout=!0},this.active=function activeState(position){(position=position||{x:hotBox.$container.clientWidth/2,y:hotBox.$container.clientHeight/2})&&($state.style.left=position.x+"px",$state.style.top=position.y+"px"),allButtons.forEach((function(button){var $button=button.$button;$button&&$button.classList[button.enable()?"add":"remove"]("enabled"),button.beforeShow&&button.beforeShow()})),addElementClass($state,"active"),needLayout&&function layout(){var radius=15*buttons.ring.length;!function layoutRing(radius){var $button,angle,x,y,ring=buttons.ring,step=2*Math.PI/ring.length;buttons.center&&(buttons.center.indexedPosition=[0,0]),$ringShape.style.marginLeft=$ringShape.style.marginTop=-radius+"px",$ringShape.style.width=$ringShape.style.height=radius+radius+"px";for(var i=0;i<ring.length;i++)$button=ring[i].$button,angle=step*i-Math.PI/2,x=radius*Math.cos(angle),y=radius*Math.sin(angle),ring[i].indexedPosition=[x,y],$button.style.left=x+"px",$button.style.top=y+"px"}(radius),function layoutTop(radius){var xOffset=-$top.clientWidth/2,yOffset=2*-radius-$top.clientHeight/2;$top.style.marginLeft=xOffset+"px",$top.style.marginTop=yOffset+"px",buttons.top.forEach((function(topButton){var $button=topButton.$button;topButton.indexedPosition=[xOffset+$button.offsetLeft+$button.clientWidth/2,yOffset]}))}(radius),function layoutBottom(radius){var xOffset=-$bottom.clientWidth/2,yOffset=2*radius-$bottom.clientHeight/2;$bottom.style.marginLeft=xOffset+"px",$bottom.style.marginTop=yOffset+"px",buttons.bottom.forEach((function(bottomButton){var $button=bottomButton.$button;bottomButton.indexedPosition=[xOffset+$button.offsetLeft+$button.clientWidth/2,yOffset]}))}(radius),function indexPosition(){var positionedButtons=allButtons.filter((function(button){return button.indexedPosition}));positionedButtons.forEach((function findNeightbour(button){var candidatePosition,dx,dy,ds,possible,dir,neighbor={},coef=0,minCoef={},homePosition=button.indexedPosition,abs=Math.abs;positionedButtons.forEach((function(candidate){if(button!=candidate)for(candidatePosition=candidate.indexedPosition,possible=[],dx=candidatePosition[0]-homePosition[0],dy=candidatePosition[1]-homePosition[1],ds=Math.sqrt(dx*dx+dy*dy),abs(dx)>2&&(possible.push(dx>0?"right":"left"),possible.push(ds+abs(dy))),abs(dy)>2&&(possible.push(dy>0?"down":"up"),possible.push(ds+abs(dx)));possible.length;)dir=possible.shift(),coef=possible.shift(),(!neighbor[dir]||coef<minCoef[dir])&&(neighbor[dir]=candidate,minCoef[dir]=coef)})),button.neighbor=neighbor}))}(),needLayout=!1}(),selectedButton||select(buttons.center||buttons.ring[0]||buttons.top[0]||buttons.bottom[0]),stateActived=!0},this.deactive=function deactiveState(){removeElementClass($state,"active"),select(null),stateActived=!1},$state.onmouseup=function(e){if(!e.button)for(var target=e.target;target&&target!=$state;)target.classList.contains("button")&&allButtons.forEach((function(button){button.$button==target&&execute(button)})),target=target.parentNode},this.handleKeyEvent=function(e){var handleResult=null;if(hotBox.browser.sg&&e.isKey("esc"))return pressedButton?e.isKey(pressedButton.key)||press(null):hotBox.active("back",hotBox.position),"back";if(e.keydown||hotBox.isIME&&e.keyup){if(allButtons.forEach((function(button){if(button.enable()&&e.isKey(button.key)){if(stateActived||hotBox.hintDeactiveMainState){if(select(button),press(button),handleResult="buttonpress",e.keyup)return execute(button),handleResult="execute"}else execute(button),handleResult="execute";e.preventDefault(),e.stopPropagation(),!stateActived&&hotBox.hintDeactiveMainState&&hotBox.active(stateName,hotBox.position)}})),stateActived){if(e.isKey("esc"))return pressedButton?e.isKey(pressedButton.key)||press(null):hotBox.active("back",hotBox.position),"back";["up","down","left","right"].forEach((function(dir){if(e.isKey(dir))if(selectedButton){for(var neighbor=selectedButton.neighbor[dir];neighbor&&!neighbor.enable();)neighbor=neighbor.neighbor[dir];neighbor&&select(neighbor),handleResult="navigate"}else select(buttons.center||buttons.ring[0]||buttons.top[0]||buttons.bottom[0])})),e.isKey("space")&&e.keyup?(execute(selectedButton),e.preventDefault(),e.stopPropagation(),handleResult="execute"):e.isKey("space")&&selectedButton?(press(selectedButton),handleResult="buttonpress"):pressedButton&&pressedButton!=selectedButton&&(press(null),handleResult="selectcancel")}}else!e.keyup||!stateActived&&hotBox.hintDeactiveMainState||pressedButton&&(e.isKey("space")&&selectedButton==pressedButton||e.isKey(pressedButton.key))&&(execute(pressedButton),e.preventDefault(),e.stopPropagation(),handleResult="execute");return hotBox.isIME=229==e.keyCode&&e.keydown,handleResult}}module.exports=HotBox}},_p[2]={value:function(require,exports,module){var keymap=_p.r(4);function hash(unknown){return"string"==typeof unknown?function hashKeyExpression(keyExpression){var hashCode=0;return keyExpression.toLowerCase().split(/\s*\+\s*/).forEach((function(name){switch(name){case"ctrl":case"cmd":hashCode|=4096;break;case"alt":hashCode|=8192;break;case"shift":hashCode|=16384;break;default:hashCode|=keymap[name]}})),hashCode}(unknown):function hashKeyEvent(keyEvent){var hashCode=0;(keyEvent.ctrlKey||keyEvent.metaKey)&&(hashCode|=4096);keyEvent.altKey&&(hashCode|=8192);keyEvent.shiftKey&&(hashCode|=16384);-1==[16,17,18,91].indexOf(keyEvent.keyCode)&&(hashCode|=keyEvent.keyCode);return hashCode}(unknown)}exports.hash=hash,exports.is=function is(a,b){return a&&b&&hash(a)==hash(b)}}},_p[3]={value:function(require,exports,module){_p.r(2);module.exports=function KeyControl(hotbox){var _receiver,_actived=!0,_receiverIsSelfCreated=!1,$container=hotbox.$container;function _handle(keyEvent){_actived&&hotbox.dispatch(keyEvent)}function _active(){_receiver.select(),_receiver.focus(),_actived=!0,$container.classList.add("hotbox-focus")}function _deactive(){_receiver.blur(),_actived=!1,$container.classList.remove("hotbox-focus")}!function _createReceiver(){(_receiver=document.createElement("input")).classList.add("hotbox-key-receiver"),$container.appendChild(_receiver),_receiverIsSelfCreated=!0}(),function _bindReceiver(){_receiver.onkeyup=_handle,_receiver.onkeypress=_handle,_receiver.onkeydown=_handle,_receiver.onfocus=_active,_receiver.onblur=_deactive,_receiverIsSelfCreated&&(_receiver.oninput=function(e){_receiver.value=null})}(),function _bindContainer(){$container.onmousedown=function(e){_active(),e.preventDefault()}}(),_active(),this.handle=_handle,this.active=_active,this.deactive=_deactive}}},_p[4]={value:function(require,exports,module){var keymap={Shift:16,Control:17,Alt:18,CapsLock:20,BackSpace:8,Tab:9,Enter:13,Esc:27,Space:32,PageUp:33,PageDown:34,End:35,Home:36,Insert:45,Left:37,Up:38,Right:39,Down:40,Direction:{37:1,38:1,39:1,40:1},Delete:46,NumLock:144,Cmd:91,CmdFF:224,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"`":192,"=":187,"-":189,"/":191,".":190};for(var key in keymap)keymap.hasOwnProperty(key)&&(keymap[key.toLowerCase()]=keymap[key]);var aCharCode="a".charCodeAt(0);"abcdefghijklmnopqrstuvwxyz".split("").forEach((function(letter){keymap[letter]=letter.charCodeAt(0)-aCharCode+65}));var n=9;do{keymap[n.toString()]=n+48}while(n--);module.exports=keymap}};var moduleMapping={expose:0};!function use(name){_p.r([moduleMapping[name]])}("expose")}()}}]);