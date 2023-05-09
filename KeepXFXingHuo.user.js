// ==UserScript==
// @name              KeepXFXingHuo
// @description       这是一款体验优化插件，沉浸式体验科大讯飞的星火认知大模型。支持国产，感觉讯飞星火体验还不错，智商在线。
// @version           2.0
// @author            xcanwin
// @namespace         https://github.com/xcanwin/KeepXFXingHuo/
// @supportURL        https://github.com/xcanwin/KeepXFXingHuo/
// @updateURL         https://raw.githubusercontent.com/xcanwin/KeepXFXingHuo/main/KeepXFXingHuo.user.js
// @downloadURL       https://raw.githubusercontent.com/xcanwin/KeepXFXingHuo/main/KeepXFXingHuo.user.js
// @license           GPL-2.0-only
// @match             https://xinghuo.xfyun.cn/desk
// @run-at            document-idle
// ==/UserScript==

(function() {
    'use strict';

    const $ = (Selector, el) => (el || document).querySelector(Selector);
    const $$ = (Selector, el) => (el || document).querySelectorAll(Selector);

    window.onload = function() {
        setTimeout(function() {
            $(".pages_switchTheme__2DNsU").lastElementChild.click(); //切换沉浸主题
            $(".pages_switchTheme__2DNsU").remove(); //清理主题切换按钮
            $(".pages_window_switch__J40yj").lastElementChild.click(); //进入历史对话
            $(".pages_window_switch__J40yj").firstElementChild.remove(); //清理推荐对话
            $("#watermark-wrapper").remove(); //清理水印
            $(".header_version_select__qCy40").remove(); //清理顶部
            $(".welcome-window_prompt_wrapper__nExUq").remove(); //清理首页提示词指引
            $(".affix_affix_content__-gEBT").parentElement.remove(); //清理侧边栏
            $(".pages_live_enter__k6Noy").style.visibility = "hidden"; //清理直播回顾
            $(".chat-window_tip__-THKF").remove(); //清理尾部
            const welcomecontent = $$(".welcome-window_content_welcome_gpt__OPad5>p");
            welcomecontent[1].style.visibility = "hidden"; //简洁欢迎用语
            welcomecontent[2].style.visibility = "hidden"; //简洁欢迎用语
        }, 1500);
    };

})();