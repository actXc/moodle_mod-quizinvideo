YUI.add("moodle-mod_quizinvideo-autosave",function(e,t){M.mod_quizinvideo=M.mod_quizinvideo||{},M.mod_quizinvideo.autosave={TINYMCE_DETECTION_DELAY:500,TINYMCE_DETECTION_REPEATS:20,WATCH_HIDDEN_DELAY:1e3,FAILURES_BEFORE_NOTIFY:1,FIRST_SUCCESSFUL_SAVE:-1,SELECTORS:{quizinvideo_FORM:"#responseform",VALUE_CHANGE_ELEMENTS:'input, textarea, [contenteditable="true"]',CHANGE_ELEMENTS:"input, select",HIDDEN_INPUTS:"input[type=hidden]",CONNECTION_ERROR:"#connection-error",CONNECTION_OK:"#connection-ok"},AUTOSAVE_HANDLER:M.cfg.wwwroot+"/mod/quizinvideo/autosave.ajax.php",delay:12e4,form:null,dirty:!1,delay_timer:null,save_transaction:null,savefailures:0,editor_change_handler:null,hidden_field_values:{},init:function(t){this.form=e.one(this.SELECTORS.quizinvideo_FORM);if(!this.form)return;this.delay=t*1e3,this.form.delegate("valuechange",this.value_changed,this.SELECTORS.VALUE_CHANGE_ELEMENTS,this),this.form.delegate("change",this.value_changed,this.SELECTORS.CHANGE_ELEMENTS,this),this.form.on("submit",this.stop_autosaving,this),this.init_tinymce(this.TINYMCE_DETECTION_REPEATS),this.save_hidden_field_values(),this.watch_hidden_fields()},save_hidden_field_values:function(){this.form.all(this.SELECTORS.HIDDEN_INPUTS).each(function(e){var t=e.get("name");if(!t)return;this.hidden_field_values[t]=e.get("value")},this)},watch_hidden_fields:function(){this.detect_hidden_field_changes(),e.later(this.WATCH_HIDDEN_DELAY,this,this.watch_hidden_fields)},detect_hidden_field_changes:function(){this.form.all(this.SELECTORS.HIDDEN_INPUTS).each(function(e){var t=e.get("name"),n=e.get("value");if(!t)return;if(!(t in this.hidden_field_values)||n!==this.hidden_field_values[t])this.hidden_field_values[t]=n,this.value_changed({target:e})},this)},init_tinymce:function(t){if(typeof tinyMCE=="undefined"){t>0&&e.later(this.TINYMCE_DETECTION_DELAY,this,this.init_tinymce,[t-1]);return}this.editor_change_handler=e.bind(this.editor_changed,this),tinyMCE.onAddEditor.add(e.bind(this.init_tinymce_editor,this))},init_tinymce_editor:function(e,t){t.onChange.add(this.editor_change_handler),t.onRedo.add(this.editor_change_handler),t.onUndo.add(this.editor_change_handler),t.onKeyDown.add(this.editor_change_handler)},value_changed:function(e){var t=e.target.getAttribute("name");if(t==="thispage"||t==="scrollpos"||t&&t.match(/_:flagged$/))return;t=t||"#"+e.target.getAttribute("id"),this.start_save_timer_if_necessary()},editor_changed:function(e){this.start_save_timer_if_necessary()},start_save_timer_if_necessary:function(){this.dirty=!0;if(this.delay_timer||this.save_transaction)return;this.start_save_timer()},start_save_timer:function(){this.cancel_delay(),this.delay_timer=e.later(this.delay,this,this.save_changes)},cancel_delay:function(){this.delay_timer&&this.delay_timer!==!0&&this.delay_timer.cancel(),this.delay_timer=null},save_changes:function(){this.cancel_delay(),this.dirty=!1;if(this.is_time_nearly_over()){this.stop_autosaving();return}typeof tinyMCE!="undefined"&&tinyMCE.triggerSave(),this.save_transaction=e.io(this.AUTOSAVE_HANDLER,{method:"POST",form:{id:this.form},on:{success:this.save_done,failure:this.save_failed},context:this})},save_done:function(t,n){if(n.responseText!=="OK"){this.save_failed(t,n);return}this.save_transaction=null,this.dirty&&this.start_save_timer(),this.savefailures>0?(e.one(this.SELECTORS.CONNECTION_ERROR).hide(),e.one(this.SELECTORS.CONNECTION_OK).show(),this.savefailures=this.FIRST_SUCCESSFUL_SAVE):this.savefailures===this.FIRST_SUCCESSFUL_SAVE&&(e.one(this.SELECTORS.CONNECTION_OK).hide(),this.savefailures=0)},save_failed:function(){this.save_transaction=null,this.start_save_timer(),this.savefailures=Math.max(1,this.savefailures+1),this.savefailures===this.FAILURES_BEFORE_NOTIFY&&(e.one(this.SELECTORS.CONNECTION_ERROR).show(),e.one(this.SELECTORS.CONNECTION_OK).hide())},is_time_nearly_over:function(){return M.mod_quizinvideo.timer&&M.mod_quizinvideo.timer.endtime&&(new Date).getTime()+2*this.delay>M.mod_quizinvideo.timer.endtime},stop_autosaving:function(){this.cancel_delay(),this.delay_timer=!0,this.save_transaction&&this.save_transaction.abort()}}},"@VERSION@",{requires:["base","node","event","event-valuechange","node-event-delegate","io-form"]});
