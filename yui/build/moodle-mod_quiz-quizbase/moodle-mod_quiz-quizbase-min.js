YUI.add("moodle-mod_quizinvideo-quizinvideobase",function(e,t){var n="mod_quizinvideo-quizinvideobase",r=function(){r.superclass.constructor.apply(this,arguments)};e.extend(r,e.Base,{registermodules:[],register_module:function(e){return this.registermodules.push(e),this},invoke_function:function(e,t){var n;for(n in this.registermodules)e in this.registermodules[n]&&this.registermodules[n][e](t);return this}},{NAME:n,ATTRS:{}}),M.mod_quizinvideo=M.mod_quizinvideo||{},M.mod_quizinvideo.quizinvideobase=M.mod_quizinvideo.quizinvideobase||new r,M.mod_quizinvideo.edit=M.mod_quizinvideo.edit||{},M.mod_quizinvideo.edit.swap_sections=function(e,t,n){var r={COURSECONTENT:"mod-quizinvideo-edit-content",SECTIONADDMENUS:"section_add_menus"},i=e.Node.all("."+r.COURSECONTENT+" "+M.mod_quizinvideo.edit.get_section_selector(e));i.item(t).one("."+r.SECTIONADDMENUS).swap(i.item(n).one("."+r.SECTIONADDMENUS))},M.mod_quizinvideo.edit.process_sections=function(e,t,n,r,i){var s={SECTIONNAME:"sectionname"},o={SECTIONLEFTSIDE:".left .section-handle img"};if(n.action==="move"){if(r>i){var u=i;i=r,r=u}var a,f,l,c;for(var h=r;h<=i;h++)t.item(h).one("."+s.SECTIONNAME).setContent(n.sectiontitles[h]),a=t.item(h).one(o.SECTIONLEFTSIDE),f=a.getAttribute("alt"),l=f.lastIndexOf(" "),c=f.substr(0,l+1)+h,a.setAttribute("alt",c),a.setAttribute("title",c),t.item(h).removeClass("current");n.current!==-1&&t.item(n.current).addClass("current")}},M.mod_quizinvideo.edit.get_config=function(){return{container_node:"ul",container_class:"slots",section_node:"li",section_class:"section"}},M.mod_quizinvideo.edit.get_section_selector=function(){var e=M.mod_quizinvideo.edit.get_config();return e.section_node&&e.section_class?e.section_node+"."+e.section_class:null},M.mod_quizinvideo.edit.get_section_wrapper=function(e){var t=M.mod_quizinvideo.edit.get_config();return t.section_wrapper_node&&t.section_wrapper_class?t.section_wrapper_node+"."+t.section_wrapper_class:M.mod_quizinvideo.edit.get_section_selector(e)},M.mod_quizinvideo.edit.get_containernode=function(){var e=M.mod_quizinvideo.edit.get_config();if(e.container_node)return e.container_node},M.mod_quizinvideo.edit.get_containerclass=function(){var e=M.mod_quizinvideo.edit.get_config();if(e.container_class)return e.container_class},M.mod_quizinvideo.edit.get_sectionwrappernode=function(){var e=M.mod_quizinvideo.edit.get_config();return e.section_wrapper_node?e.section_wrapper_node:e.section_node},M.mod_quizinvideo.edit.get_sectionwrapperclass=function(){var e=M.mod_quizinvideo.edit.get_config();return e.section_wrapper_class?e.section_wrapper_class:e.section_class},M.mod_quizinvideo.edit.get_sectionnode=function(){var e=M.mod_quizinvideo.edit.get_config();if(e.section_node)return e.section_node},M.mod_quizinvideo.edit.get_sectionclass=function(){var e=M.mod_quizinvideo.edit.get_config();if(e.section_class)return e.section_class}},"@VERSION@",{requires:["base","node"]});
