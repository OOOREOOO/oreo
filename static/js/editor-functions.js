function addshortcode(a,b){"title-plane"==a?addContentToEditer(1,'[title-plane title\x3d"\u6807\u9898"]\u5185\u5bb9[/title-plane]'):"start-plane"==a?addContentToEditer(1,'[start-plane type\x3d"'+b+'"]\u5185\u5bb9[/start-plane]'):"icon-url"==a?addContentToEditer(1,'[icon-url href\x3d"\u7f51\u5740"]\u7f51\u5740[/icon-url]'):"loginshow"==a?addContentToEditer(1,"[loginshow]\u767b\u5f55\u53ef\u89c1\u7684\u5185\u5bb9[/loginshow]"):"zd-plane"==a?addContentToEditer(1,'[zd-plane title\x3d"\u6298\u53e0\u6807\u9898"]\u6298\u53e0\u5185\u5bb9[/zd-plane]'):"clickshow"==a?addContentToEditer(1,"[clickshow]\u70b9\u51fb\u53ef\u89c1\u5185\u5bb9[/clickshow]"):"c-alert"==a?addContentToEditer(1,'[c-alert type\x3d"'+b+'"]\u63d0\u793a\u9762\u677f\u5185\u5bb9[/c-alert]'):"pwdshow"==a?addContentToEditer(1,'[pwdshow pwd\x3d"\u5bc6\u7801"]\u5bc6\u7801\u53ef\u89c1\u5185\u5bb9[/pwdshow]'):"c-downbtn"==a?addContentToEditer(1,'[c-downbtn type\x3d"'+b+'" url\x3d"" pwd\x3d""]\u8d44\u6e90\u6587\u4ef6\u4e0b\u8f7d[/c-downbtn]'):"corepress-code"==a?layer.open({type:1,title:"\u63d2\u5165\u4ee3\u7801",shadeClose:!0,shade:!1,area:["500px","500px"],content:'\x3cdiv\x3e\x3cdiv class\x3d"corepress-edit-window"\x3e\n                       \x3ctextarea class\x3d"corepress-edit-code"\x3e\x3c/textarea\x3e\n                        \n                       \x3cbutton class\x3d"el-button el-button--default el-button--small " onclick\x3d"corepress_addcode(1)"\x3e\u63d2\u5165\u4ee3\u7801\x3c/button\x3e\n                       \x3cbutton class\x3d"el-button el-button--default el-button--small " onclick\x3d"corepress_clearcode()"\x3e\u6e05\u7a7a\u5185\u5bb9\x3c/button\x3e\n                      \x3c/div\x3e \x3c/div\x3e\n                        '}):"corepress-code-line"==a&&layer.open({type:1,title:"\u884c\u5185\u4ee3\u7801",shadeClose:!0,shade:!1,area:["500px","300px"],content:'\x3cdiv\x3e\x3cdiv class\x3d"corepress-edit-window"\x3e\n                       \x3ctextarea class\x3d"corepress-edit-code-line"\x3e\x3c/textarea\x3e\n                       \x3cbutton class\x3d"el-button el-button--default el-button--small " onclick\x3d"corepress_addcode(0)"\x3e\u63d2\u5165\u4ee3\u7801\x3c/button\x3e\n                      \x3c/div\x3e \x3c/div\x3e\n                        '})}function corepress_clearcode(){$(".corepress-edit-code").val("")}function corepress_addcode(a){0==a?(a=$(".corepress-edit-code-line").val(),addContentToEditer(1,"\x3ccode\x3e"+a+"\x3c/code\x3e\x26nbsp;")):(a=$(".corepress-edit-code").val(),addContentToEditer(1,'\x3cpre class\x3d"corepress-code-pre"\x3e\x3ccode\x3e'+htmlEncodeByRegExp(a)+"\x3c/code\x3e\x3c/pre\x3e\x26nbsp;"))}function corepress_updatecode(){window.$codedom.html(htmlEncodeByRegExp($(".corepress-edit-code").val()));layer.closeAll()}function editcode(a,b){window.$codedom=b;layer.open({type:1,title:"\u4fee\u6539\u4ee3\u7801",shadeClose:!0,shade:!1,area:["500px","500px"],content:'\x3cdiv class\x3d"corepress-edit-window"\x3e\x3ctextarea class\x3d"corepress-edit-code"\x3e'+a+'\x3c/textarea\x3e\x3cbr\x3e\x3cbutton class\x3d"el-button el-button--default el-button--small" onclick\x3d"corepress_updatecode()"\x3e\u66f4\u65b0\x3c/button\x3e\x3c/div\x3e'})}function addContentToEditer(a,b){parent.tinymce.activeEditor.selection.setContent(b)};