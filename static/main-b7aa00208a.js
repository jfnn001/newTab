"use strict";
const version = "20200601"
  , LSPAge = parseInt((new Date().getTime() - new Date("2020-06-01").getTime()) / 864e5)
  , consoleColor = "color: #70C000; "
  , consoleLineHeight = "line-height: 20px; "
  , consoleFontFamily = "font-family: 'Microsoft Yahei',PingFangSC-Regular,Helvetica,sans-serif,'\u7B49\u7EBF'; "
  , consoleStyle1 = consoleColor + consoleFontFamily + consoleLineHeight
  , consoleStyle2 = consoleFontFamily + consoleLineHeight;
console.log("\n%c Start Page %cVersion 20200601\n%c\u6B22\u8FCE\u6765\u5230\u8D77\u59CB\u9875\uFF01\n%c%c\u8D77\u59CB\u9875\u5DF2\u4E0A\u7EBF %c" + LSPAge + "%c \u5929\n%c \n", consoleStyle1, consoleStyle2, consoleStyle1, consoleColor, consoleStyle1, consoleStyle2, consoleStyle1, consoleStyle2);
const backend = "https://a.maorx.cn/backend/lime/"
  , fetchGetInit = {
    credentials: "include"
}
  , ua = navigator.userAgent.toLowerCase()
  , isIpad = -1 != ua.indexOf("ipad")
  , isIphone = !isIpad && -1 != ua.indexOf("iphone")
  , isAndroid = -1 != ua.indexOf("android")
  , isMobile = isIphone || isAndroid
  , isEdge = -1 != ua.indexOf("edge/")
  , isSafari = -1 != ua.indexOf("safari/") && -1 == ua.indexOf("chrome/")
  , originalStatus = txtNoteCloudStatus.innerText
  //, ypoctonod = [window[atob("bG9jYXRpb24=")], "aHJlZg=="]
  , localVersion = localStorage.getItem("localVersion")
  , isNotFirstRun = !!localVersion;
let thePopUp, currentAddingNav, currentDeletingNav, currentEditingNav, theTextArea, pushClass, pushTitle, pushContent, pushStartTime, pushStopTime, konamiCode = "38384040373937396665", konamiCodeInputed = "", lastModified0 = "", username = "", birthday = "", popUpClosing = !1, cusNavIconErrCount = 0, cusNavSubmitCount = 0, selectedKeyword = -1, cusNavEditingMode = !1, currentSearchEngine = localStorage.getItem("searchEngPref"), cusSearchEngURL = localStorage.getItem("cusSearchEngURL"), bgPreference = localStorage.getItem("bgPreference"), cusWallpaper = localStorage.getItem("cusWallpaper"), autoClrSearchBar = "off" != localStorage.getItem("autoClrSearchBar"), openInNew = "off" != localStorage.getItem("openInNew"), searchHistory = "on" == localStorage.getItem("searchHistory"), autoFocus = "off" != localStorage.getItem("autoFocus"), autoShowSecondPage = "on" == localStorage.getItem("autoShowSecondPage"), noteAsDefault = "on" == localStorage.getItem("noteAsDefault"), hitokoto = "off" != localStorage.getItem("hitokoto"), liteMode = "on" == localStorage.getItem("liteMode"), reduceMotion = !!(isEdge || isSafari) || "on" == localStorage.getItem("reduceMotion"), navLinksBlurEf = "on" == localStorage.getItem("navLinksBlurEf"), browserWarning = !1, searchHistoryArray = JSON.parse(localStorage.getItem("searchHistoryArray")) || [];
oncontextmenu = a=>{
    if (a)
        switch (a.target) {
        case cover:
        case quotebox:
            "1" === menuSearch.style.opacity && hideMenu(menuSearch),
            title.onclick();
            break;
        case inputCustomUrl:
        case inputCustomTitle:
        case textNote:
        case input0:
            theTextArea = a.target,
            showSearchMenu(a);
        }
    return !1
}
,
onload = ()=>{
    onblur = ()=>{
        liteMode && bgPreference.startsWith("Live") && liveBgBox.pause()
    }
    ,
    onerror = (a,b)=>{
        if (window.loaded && b && b.startsWith(location.href) && "Script error." != a)
            if (-1 == a.indexOf("bingWallpaper") ? -1 == a.indexOf("login") ? -1 != a.indexOf("noteList.load") && (a = "\u4FBF\u7B3A\u7EC4\u4EF6\u52A0\u8F7D\u5931\u8D25") : a = "\u70ED\u94C1\u76D2\u767B\u5F55\u7EC4\u4EF6\u672A\u52A0\u8F7D\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5" : a = "\u65E0\u6CD5\u8FDE\u63A5\u5230\u5FC5\u5E94\u670D\u52A1\u5668",
            a = a + " at " + b.split("/").pop(),
            window.errorContent)
                errorContent.innerText += "\n" + a;
            else {
                const b = document.createElement("div")
                  , c = document.createElement("div");
                window.errorContent = document.createElement("div"),
                b.classList.add("error"),
                b.onclick = function() {
                    "clipboard"in navigator && navigator.clipboard.writeText(errorContent.innerText),
                    delete window.errorContent,
                    this.parentElement.removeChild(this)
                }
                ,
                c.classList.add("error-title"),
                c.innerText = "\u274C \u9519\u8BEF\uFF08\u70B9\u51FB\u6B64\u5904" + ("clipboard"in navigator ? "\u590D\u5236\u5E76" : "") + "\u5173\u95ED\u6B64\u4FE1\u606F\uFF09",
                errorContent.innerText = a,
                b.appendChild(c),
                b.appendChild(errorContent),
                document.body.appendChild(b)
            }
        return !1
    }
    ,
    onfocus = ()=>{
        liteMode && bgPreference.startsWith("Live") && liveBgBox.play()
    }
    ,
    onkeydown = a=>{
        if ((a.ctrlKey || a.metaKey) && 83 == a.keyCode)
            return !1;
        if ("0" != input0.style.opacity && "block" != cover1.style.display && input0.focus(),
        konamiCode)
            if (konamiCodeInputed += a.keyCode,
            konamiCodeInputed == konamiCode) {
                const a = document.title
                  , b = ["\u9752\u67E0\u7ED3\u675F\u9875", "\u4F60\u5FEB\u56DE\u6765\u554A~", "\u60F3\u6211\u4E86\u5417", "\u5624\u5624\u5624", "\u563B\u563B\u563B", "\u5566\u5566\u5566\u5566\u5566", "\u8D81\u6CA1\u4EBA\u6CE8\u610F\u5077\u5077\u653E\u4E2A\u5C41", "\u8D81\u6CA1\u4EBA\u6CE8\u610F\u9AD8\u6B4C\u4E00\u66F2", "\u4F60\u770B\u4E0D\u5230\u6211", "\u6DE1\u9EC4\u7684\u957F\u88D9 \u84EC\u677E\u7684\u5934\u53D1", "_(\xB0\u03C9\xB0\uFF63\u2220)_", "(*/\u03C9\uFF3C*)", "(\u3003'\u25BD'\u3003)", "(\uFF40\u30FB\u03C9\u30FB\xB4)", "(\uFF5E\uFFE3\u25BD\uFFE3)\uFF5E "];
                konamiCode = null,
                document.querySelector(":root").setAttribute("style", "--theme-color: #FF4B68; --selection-color: rgba(255,75,104,.35);"),
                addEventListener("visibilitychange", ()=>document.title = document.hidden ? b[Math.floor(Math.random() * b.length)] : a),
                alert("\u5F69\u86CB\u5DF2\u6FC0\u6D3B (\uFF40\u30FB\u03C9\u30FB\xB4)")
            } else
                konamiCode.startsWith(konamiCodeInputed) || (konamiCodeInputed = "")
    }
    ,
    addEventListener("visibilitychange", ()=>{
        bgPreference.startsWith("Live") && (document.hidden ? liveBgBox.pause() : liveBgBox.play())
    }
    );
    const a = /chrome\/([\d]+)/i.exec(ua);
    
    loadJs("https://cdn.sencdn.com/widget/static/js/widget-cc5d550.js"),
    document.body.classList.remove("preload"),
    "0px" != topNotificationBar.style.top && processTopNotification(),
    (a && 76 > a[1] || isEdge) && 600 < innerWidth && (!isNotFirstRun && showMenu(tipBoxBrowser),
    browserWarning = !0)
}
,
input0.onkeydown = a=>{
    switch (a.keyCode) {
    case 13:
        return search(),
        !1;
    case 38:
        return selectKeyword(-1),
        !1;
    case 40:
        return selectKeyword(1),
        !1;
    }
}
,
input0.onfocus = ()=>{
    if (!1 === autoClrSearchBar && input0.select(),
    !0 === hitokoto && (quotebox.style.opacity = "1"),
    document.body.classList.add("search"),
    600 >= innerWidth && (title.style.top = "30px"),
    bgPreference.startsWith("Live") ? (!1 === reduceMotion && (liveBgBox.style.transform = "scale(1.1)"),
    liveBgBox.classList.add("focus")) : (!1 === reduceMotion && (bgbox.style.transform = "scale(1.1)"),
    bgbox.classList.add("focus")),
    !0 === searchHistory && 0 < searchHistoryArray.length) {
        keyword.innerHTML = "",
        keyword.style.display = "block";
        for (let a = 0; a < searchHistoryArray.length; a++) {
            const b = document.createElement("div");
            b.innerText = searchHistoryArray[a],
            b.onclick = ()=>{
                input0.value = searchHistoryArray[a],
                search("fromHistory")
            }
            ,
            keyword.appendChild(b)
        }
        const a = document.createElement("div");
        a.classList.add("clrSearchHistory"),
        a.innerHTML = "<i class='iconfont'>&#xeb95;</i>\u6E05\u9664\u5386\u53F2\u8BB0\u5F55",
        a.onclick = ()=>{
            searchHistoryArray = [],
            localStorage.removeItem("searchHistoryArray"),
            quotebox.classList.remove("searchHistoryOn"),
            hideKeyword()
        }
        ,
        quotebox.classList.add("searchHistoryOn"),
        keyword.appendChild(a),
        setTimeout(()=>{
            keyword.style.height = 30 * (searchHistoryArray.length + 1) + "px",
            keyword.style.opacity = "1"
        }
        , 50)
    }
}
,
input0.oninput = ()=>{
    if (searchOptBox.classList.remove("fold"),
    input0.value.trim()) {
        const a = document.createElement("div");
        keyword.innerHTML = "",
        a.innerText = "\u7FFB\u8BD1\uFF1A" + input0.value,
        a.onclick = ()=>{
            input0.value = a.innerText,
            search()
        }
        ,
        keyword.appendChild(a),
        keyword.style.display = "block",
        setTimeout(()=>{
            keyword.style.height = "30px",
            keyword.style.opacity = "1"
        }
        , 25),
        window.time = Date.now(),
        fetch("https://maorx.cn/a/code?" + encodeData({
            action: "keyword",
            time: window.time,
            word: input0.value.trim()
        })).then(a=>a.text()).then(a=>new Function(a)())
    } else
        hideKeyword()
}
,
input0.onmouseenter = ()=>searchOptBox.classList.remove("fold"),
cover.onclick = ()=>inputBlur();
function inputBlur() {
    !0 === autoClrSearchBar ? input0.value = "" : window.getSelection().empty(),
    !0 === hitokoto && (quotebox.style.opacity = "0",
    quotebox.style.animation = "none"),
    document.body.classList.contains("search") && (document.body.classList.remove("search"),
    setTimeout(()=>{
        searchOptBox.classList.add("fold"),
        setTimeout(()=>searchOptBox.classList.remove("fold"), 1e3)
    }
    , 1)),
    600 >= innerWidth && (title.style.top = "100px",
    input0.style.top = ""),
    bgPreference.startsWith("Live") ? (!1 === reduceMotion && (liveBgBox.style.transform = ""),
    liveBgBox.classList.remove("focus")) : (!1 === reduceMotion && (bgbox.style.transform = ""),
    bgbox.classList.remove("focus")),
    hideKeyword()
}
function keydata(a) {
    for (let b = 0; b < a.s.length; b++) {
        const c = document.createElement("div");
        c.innerText = a.s[b],
        c.onclick = ()=>{
            input0.value = a.s[b],
            search()
        }
        ,
        keyword.appendChild(c)
    }
    !0 === hitokoto && (quotebox.style.opacity = "0"),
    keyword.style.height = 30 * (a.s.length + 1) + "px"
}
function search(a) {
    const b = input0.value
      , c = encodeURIComponent(b.replace("\u7FFB\u8BD1\uFF1A", ""));
    let d;
    if (/^[a-z]+:\/\/[a-z0-9_\-\/.#?=%]+$/i.test(b))
        open(b);
    else if (b.startsWith("\u7FFB\u8BD1\uFF1A"))
        d = "https://fanyi.baidu.com/#en/zh/" + c;
    else if ("custom" == currentSearchEngine)
        cusSearchEngURL.startsWith("https://") ? d = cusSearchEngURL + c : (alert("\u641C\u7D22URL\u683C\u5F0F\u4E0D\u89C4\u8303\u3002\u5DF2\u81EA\u52A8\u5207\u6362\u4E3A\u9ED8\u8BA4\u641C\u7D22\u5F15\u64CE\u3002"),
        d = "https://www.baidu.com/s?ie=utf-8&word=" + c,
        switchSearchEng("baidu"));
    else {
        const a = document.getElementById(currentSearchEngine + "SearchEngUrl");
        a && (d = a.innerText + c)
    }
    d && (openInNew ? open(d) : location.href = d),
    b.trim() && !0 === searchHistory && "fromHistory" != a && (searchHistoryArray.unshift(b),
    5 <= searchHistoryArray.length && searchHistoryArray.splice(5, 1),
    localStorage.setItem("searchHistoryArray", JSON.stringify(searchHistoryArray))),
    setTimeout(()=>inputBlur(), 50)
}
function selectKeyword(a) {
    const b = keyword.getElementsByTagName("div");
    selectedKeyword + a >= b.length ? selectedKeyword = 0 : 0 > selectedKeyword + a ? selectedKeyword = b.length - 1 : selectedKeyword += a;
    for (let c = 0; c < b.length; c++)
        b[c].classList.remove("focus");
    b[selectedKeyword] && (b[selectedKeyword].classList.add("focus"),
    input0.value = b[selectedKeyword].innerText)
}
const searchOpts = document.getElementsByClassName("searchOpt");
for (let a = 0; a < searchOpts.length; a++) {
    const b = searchOpts[a].id.replace("SearchOpt", "");
    searchOpts[a].onclick = ()=>{
        document.body.classList.contains("search") && (switchSearchEng(b),
        input0.value && search())
    }
}
const searchEngListItems = document.getElementsByClassName("searchEngListItem");
for (let a = 0; a < searchEngListItems.length; a++) {
    const b = searchEngListItems[a].firstElementChild.id.replace("RadioSearchEng", "");
    searchEngListItems[a].onclick = ()=>switchSearchEng(b)
}
function switchSearchEng(a) {
    currentSearchEngine = a,
    localStorage.setItem("searchEngPref", a),
    baiduSearchOpt.classList.remove("selected"),
    bingSearchOpt.classList.remove("selected"),
    googleSearchOpt.classList.remove("selected"),
    document.getElementById(a + "RadioSearchEng").click();
    "baidu" === a ? (baiduSearchOpt.classList.add("selected"),
    navlinkTranslate.href = "https://fanyi.baidu.com/",
    navlinkMap.href = "https://map.baidu.com/",
    navlinkImage.href = "https://image.baidu.com/",
    navlinkCloudDrive.href = "https://pan.baidu.com/") : "bing" === a ? (bingSearchOpt.classList.add("selected"),
    navlinkTranslate.href = "https://cn.bing.com/translator/",
    navlinkMap.href = "https://cn.bing.com/maps/",
    navlinkImage.href = "https://cn.bing.com/images/",
    navlinkCloudDrive.href = "https://onedrive.live.com/") : "google" === a ? (googleSearchOpt.classList.add("selected"),
    navlinkTranslate.href = "https://translate.google.cn/",
    navlinkMap.href = "https://www.google.com/maps/",
    navlinkImage.href = "https://www.google.com/imghp",
    navlinkCloudDrive.href = "https://drive.google.com/") : "custom" === a ? (cusSearchEngURL = inputCusSearchEngUrl.value,
    localStorage.setItem("cusSearchEngURL", cusSearchEngURL)) : void 0;
    "1" != popSearchEng.style.opacity && input0.focus()
}
keyword.onclick = ()=>{
    setTimeout(()=>inputBlur(), 50)
}
;
function hideKeyword() {
    keyword.style.height = "0px",
    keyword.style.opacity = "0",
    setTimeout(()=>{
        keyword.style.display = "none",
        keyword.innerHTML = "",
        keyword.style.height = "auto"
    }
    , 250)
}
title.onclick = a=>{
    "block" == navbox.style.display ? navbox.onclick(a) : (input0.style.opacity = "0",
    inputBlur(),
    !0 === hitokoto && (quotebox.style.opacity = "0",
    quotebox.style.animation = "none"),
    bgPreference.startsWith("Live") ? (!1 === reduceMotion && (liveBgBox.style.transform = "scale(1.1)"),
    liveBgBox.classList.add("focus")) : (!1 === reduceMotion && (bgbox.style.transform = "scale(1.1)"),
    bgbox.classList.add("focus")),
    navbox.style.display = "block",
    btnUser.style.display = "block",
    btnSettings.style.display = "block",
    !0 === browserWarning && (btnWarn.style.display = "block"),
    "Bing" == bgPreference && (btnLike.style.display = "block"),
    document.getElementById("tp-weather-widget").style.opacity = "0.5",
    document.getElementById("tp-weather-widget").style.pointerEvents = "auto")
}
,
title.onmouseenter = ()=>{
    title.style.transform = "scale(1.15)",
    setTimeout(()=>title.style.transform = "scale(1.1)", 250)
}
,
title.onmouseleave = ()=>{
    title.style.transform = "scale(0.95)",
    setTimeout(()=>title.style.transform = "scale(1)", 250)
}
,
navbox.onclick = a=>{
    const b = a && a.target;
    b && !1 == b.classList.contains("shouldNotFade") && (input0.style.opacity = "1",
    bgPreference.startsWith("Live") ? (!1 === reduceMotion && (liveBgBox.style.transform = ""),
    liveBgBox.classList.remove("focus")) : (!1 === reduceMotion && (bgbox.style.transform = ""),
    bgbox.classList.remove("focus")),
    navbox.style.opacity = "0",
    btnUser.style.opacity = "0",
    btnSettings.style.opacity = "0",
    btnLike.style.opacity = "0",
    !0 === browserWarning && (btnWarn.style.opacity = "0"),
    setTimeout(()=>{
        navbox.style.display = "none",
        btnUser.style.display = "none",
        btnSettings.style.display = "none",
        btnLike.style.display = "none",
        !0 === browserWarning && (btnWarn.style.display = "none"),
        navbox.style.opacity = "",
        btnUser.style.opacity = "",
        btnSettings.style.opacity = "",
        btnLike.style.opacity = "",
        !0 === browserWarning && (btnWarn.style.opacity = "")
    }
    , 250),
    document.getElementById("tp-weather-widget").style.opacity = "0",
    document.getElementById("tp-weather-widget").style.pointerEvents = "none",
    (frmSetCustomNav.style.opacity = "1") && btnCloseFrmCusNav.onclick())
}
;
function encodeData(a) {
    const b = [];
    for (const c in a)
        a[c] && b.push(c + "=" + encodeURIComponent(a[c]));
    return b.join("&")
}
textNote.onclick = ()=>isLoggedIn(),
textNote.oninput = ()=>{
    if (window.login && login.username) {
        const a = currentTime()
          , b = textNote.value;
        if (1 >= noteList.list.text.length && (b ? (noteListWrap.classList.add("unfold"),
        noteToolBar.style.display = "block") : (noteList.currentIsNew ? (noteList.current = 0,
        noteList.list.text.splice(0, 1)) : noteList.delete(),
        noteListWrap.classList.remove("unfold"),
        noteToolBar.style.display = "none")),
        b && !noteList.current && (noteList.list.text.push({
            created: Date.now(),
            encrypt: !1,
            text: b,
            time: currentTime(),
            title: ""
        }),
        noteList.current = noteList.list.text.length,
        noteToolBar.style.display = "block"),
        noteList.isOpened() && (noteList.list.text[noteList.current - 1].text = b,
        noteList.list.text[noteList.current - 1].time = a),
        noteList.changed = !0,
        txtNoteCloudStatus.innerText = "\u672A\u4FDD\u5B58",
        0 < noteList.pinned.length)
            for (let c = 0; c < noteList.pinned.length; c++)
                noteList.pinned[c] == noteList.list.text[noteList.current - 1].created && (b ? (document.getElementById("pinnedNoteContent" + noteList.pinned[c]) && (document.getElementById("pinnedNoteContent" + noteList.pinned[c]).innerText = b),
                document.getElementById("pinnedNoteTime" + noteList.pinned[c]) && (document.getElementById("pinnedNoteTime" + noteList.pinned[c]).innerText = a)) : unpinNote(c))
    }
}
,
textNote.onkeydown = a=>{
    (a.ctrlKey || a.metaKey) && 83 == a.keyCode && noteList.save()
}
,
btnDelNote.onclick = ()=>noteList.isOpened() && confirm("\u5220\u9664\u8FD9\u6761\u4FBF\u7B3A\uFF1F") && noteList.delete(),
btnSaveNote.onclick = ()=>noteList.save();
function createPinnedNote(a, b, c) {
    const d = document.createElement("div")
      , e = document.createElement("div")
      , f = document.createElement("div")
      , g = document.createElement("span");
    d.className = "pinnedNote",
    d.id = "pinnedNote" + a,
    d.onclick = ()=>pinnedNoteClick(a),
    d.onmousemove = pinnedNoteHover,
    d.onmouseout = pinnedNoteHover2,
    e.className = "pinnedNoteContent",
    e.id = "pinnedNoteContent" + a,
    e.innerText = b,
    f.className = "pinnedNoteTime",
    f.id = "pinnedNoteTime" + a,
    f.innerText = c,
    g.className = "btnCloseS",
    g.id = "btnUnpin" + a,
    g.onclick = b=>{
        b.stopPropagation(),
        unpinNote(a)
    }
    ,
    d.appendChild(e),
    d.appendChild(f),
    d.appendChild(g),
    pinnedBox.appendChild(d)
}
btnPinNote.onclick = ()=>{
    if (noteList.isOpened())
        if (3 > noteList.pinned.length) {
            const a = noteList.list.text[noteList.current - 1].created;
            noteList.currentIsNew && noteList.save(),
            -1 == noteList.pinned.indexOf(a) && (noteList.pinned.push(a),
            createPinnedNote(a, textNote.value, noteList.list.text[noteList.current - 1].time),
            showPinnedNote())
        } else
            alert("\u6700\u591A\u53EA\u80FD\u56FA\u5B9A\u4E09\u6761\u4FBF\u7B3A\u5594")
}
;
function showPinnedNote() {
    pinnedBox.style.display = "block";
    const a = document.getElementsByClassName("pinnedNote");
    for (let b = 0; b < a.length; b++)
        setTimeout(()=>{
            a[b].style.opacity = "1",
            a[b].style.transform = "scale(1.05)"
        }
        , 100 + 100 * b),
        setTimeout(()=>{
            a[b].style.transform = "scale(1)"
        }
        , 350 + 100 * b)
}
function unpinNote(a) {
    const b = document.getElementById("pinnedNote" + a);
    noteList.pinned.splice(noteList.pinned.indexOf(a), 1),
    b && (b.style.transform = "scale(1.05)",
    setTimeout(()=>{
        b.style.transform = "scale(0.5)",
        b.style.opacity = "0"
    }
    , 250),
    setTimeout(()=>b.remove(), 500),
    1 > noteList.pinned.length && setTimeout(()=>pinnedBox.style.display = "none", 500))
}
function pinnedNoteClick(a) {
    noteList.open(noteList.getIndex(a) + 1),
    "block" != navbox.style.display && title.onclick(),
    nbSwitch2.onclick()
}
function navboxScale0() {
    navbox1.style.transform = "scale(0.9)",
    navbox2.style.transform = "scale(0.9)"
}
function navboxScale1() {
    navbox1.style.transform = "scale(1)",
    navbox2.style.transform = "scale(1)"
}
nbSwitch1.onclick = ()=>{
    "0px" != navbox1.style.left && (nbSwitch2_0.classList.remove("current"),
    nbSwitch1_0.classList.add("current"),
    !1 === reduceMotion ? (navboxScale0(),
    setTimeout(()=>{
        navbox1.style.left = "0px",
        navbox2.style.left = "100%"
    }
    , 100),
    setTimeout(()=>navboxScale1(), 400)) : (navbox1.style.left = "0px",
    navbox2.style.left = "100%"),
    window.cooldownScroll = !0,
    setTimeout(()=>window.cooldownScroll = !1, 400))
}
,
nbSwitch2.onclick = ()=>{
    "0px" != navbox2.style.left && (nbSwitch1_0.classList.remove("current"),
    nbSwitch2_0.classList.add("current"),
    !1 === reduceMotion ? (navboxScale0(),
    setTimeout(()=>{
        navbox1.style.left = "-100%",
        navbox2.style.left = "0px"
    }
    , 100),
    setTimeout(()=>navboxScale1(), 400)) : (navbox1.style.left = "-100%",
    navbox2.style.left = "0px"),
    window.cooldownScroll = !0,
    setTimeout(()=>window.cooldownScroll = !1, 400))
}
;
function showAbout() {
    pVersion.innerText = version,
    changeLog.innerHTML || fetch("changelog.html").then(a=>a.text()).then(a=>{
        changeLog.innerHTML = a,
        txtDays.innerText = LSPAge
    }
    ),
    showPop(popAbout)
}
function showPop(a) {
    if (cover1.style.display = "block",
    a.style.display = "block",
    !1 === reduceMotion) {
        const b = a.getElementsByClassName("btnClose")[0];
        b && !b.onmouseenter && (b.onmouseenter = function() {
            !1 === reduceMotion && (a = this.parentNode,
            a.style.transform = "rotate3d(1,1,0,5deg)")
        }
        ,
        b.onmouseleave = function() {
            !1 === reduceMotion && !1 == popUpClosing && (a.style.transform = "none")
        }
        ),
        setTimeout(()=>{
            cover1.style.opacity = "1",
            a.style.opacity = "1",
            a.classList.add("showPop"),
            setTimeout(()=>{
                a.style.transform = "none",
                a.classList.remove("showPop")
            }
            , 350)
        }
        , 100)
    } else
        cover1.style.opacity = "1",
        a.style.transition = "all 0s",
        a.style.transform = "none",
        a.style.transition = "all 0.25s",
        setTimeout(()=>a.style.opacity = "1", 25)
}
const btnCloses = document.getElementsByClassName("btnClose");
for (let a = 0; a < btnCloses.length; a++) {
    const b = btnCloses[a].parentNode;
    btnCloses[a].onclick = ()=>closePop(b)
}
function closePop(a) {
    popUpClosing = !0,
    cover1.style.opacity = "0",
    a.style.opacity = "0",
    !1 === reduceMotion && (a.style.transform = "rotate3d(1,1,0,20deg)"),
    setTimeout(()=>{
        cover1.style.display = "none",
        a.style.display = "none",
        !1 === reduceMotion && (a.style.transform = "rotate3d(1,1,0,90deg)"),
        popUpClosing = !1
    }
    , 350)
}
btnBrowse.onclick = ()=>{
    inputImg.value = "",
    inputImg.click()
}
,
inputImg.onchange = a=>{
    const b = new FileReader;
    b.onload = ()=>{
        try {
            localStorage.setItem("cusWallpaper", b.result)
        } catch (a) {
            return void alert("\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u9009\u62E9\u5C0F\u4E8E 4MB \u7684\u56FE\u7247\u5594")
        }
        cusWallpaper = b.result,
        bgPreBoxInCus.classList.remove("unset"),
        bgPreBoxInCus.style.backgroundImage = "url(" + cusWallpaper + ")",
        changeWp("bgPreBoxCus")
    }
    ,
    b.readAsDataURL(a.target.files[0])
}
;
const bgPreBoxes = document.getElementsByClassName("bgPreviewBox");
for (let a = 0; a < bgPreBoxes.length; a++) {
    const b = bgPreBoxes[a].id;
    bgPreBoxes[a].onclick = ()=>changeWp(b)
}
function changeWp(a) {
    const b = document.getElementsByClassName("bgPreBoxInner");
    for (let c = 0; c < b.length; c++)
        b[c].classList.remove("selected");
    "bgPreBoxCus" === a ? cusWallpaper && (liveBgBox.style.display = "none",
    liveBgBox.pause(),
    bgbox.src = cusWallpaper,
    bgbox.style.opacity = "1",
    bgPreBoxInCus.classList.add("selected"),
    localStorage.setItem("bgPreference", "Custom"),
    bgPreference = "Custom",
    bgbox.classList.add("focus")) : "bgPreBoxD1" === a ? (liveBgBox.style.display = "none",
    liveBgBox.pause(),
    bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_1.jpg",
    bgbox.style.opacity = "1",
    bgPreBoxIn1.classList.add("selected"),
    localStorage.setItem("bgPreference", "Default"),
    bgPreference = "Default",
    bgbox.classList.add("focus")) : "bgPreBoxD2" === a ? (liveBgBox.style.display = "none",
    liveBgBox.pause(),
    bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_2.jpg",
    bgbox.style.opacity = "1",
    bgPreBoxIn2.classList.add("selected"),
    localStorage.setItem("bgPreference", "Default2"),
    bgPreference = "Default2",
    bgbox.classList.add("focus")) : "bgPreBoxD3" === a ? (liveBgBox.style.display = "none",
    liveBgBox.pause(),
    bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_3.jpg",
    bgbox.style.opacity = "1",
    bgPreBoxIn3.classList.add("selected"),
    localStorage.setItem("bgPreference", "Default3"),
    bgPreference = "Default3",
    bgbox.classList.add("focus")) : "bgPreBoxD4" === a ? (liveBgBox.style.display = "none",
    liveBgBox.pause(),
    bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_4.jpg",
    bgbox.style.opacity = "1",
    bgPreBoxIn4.classList.add("selected"),
    localStorage.setItem("bgPreference", "Default4"),
    bgPreference = "Default4",
    bgbox.classList.add("focus")) : "bgPreBoxD5" === a ? (liveBgBox.style.display = "none",
    liveBgBox.pause(),
    bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_5.jpg",
    bgbox.style.opacity = "1",
    bgPreBoxIn5.classList.add("selected"),
    localStorage.setItem("bgPreference", "Default5"),
    bgPreference = "Default5",
    bgbox.classList.add("focus")) : "bgPreBoxD6" === a ? (liveBgBox.style.display = "none",
    liveBgBox.pause(),
    bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_6.jpg",
    bgbox.style.opacity = "1",
    bgPreBoxIn6.classList.add("selected"),
    localStorage.setItem("bgPreference", "Default6"),
    bgPreference = "Default6",
    bgbox.classList.add("focus")) : "bgPreBoxBing" === a ? (liveBgBox.style.display = "none",
    liveBgBox.pause(),
    bgbox.src = bingWallpaper.url,
    bgbox.style.opacity = "1",
    bgPreBoxInBing.classList.add("selected"),
    localStorage.setItem("bgPreference", "Bing"),
    bgPreference = "Bing",
    bgbox.classList.add("focus")) : "bgPreBoxLive" === a ? (liveBgBox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/videos/Live_Wallpaper_1.mp4",
    liveBgBox.style.display = "block",
    liveBgBox.play(),
    setTimeout(()=>liveBgBox.style.opacity = "1", 50),
    bgbox.style.opacity = "0",
    bgPreBoxInLive.classList.add("selected"),
    localStorage.setItem("bgPreference", "Live"),
    bgPreference = "Live",
    liveBgBox.classList.add("focus"),
    !0 === liteMode && location.reload()) : "bgPreBoxLive2" === a ? (liveBgBox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/videos/Live_Wallpaper_2.mp4",
    liveBgBox.style.display = "block",
    liveBgBox.play(),
    setTimeout(()=>liveBgBox.style.opacity = "1", 50),
    bgbox.style.opacity = "0",
    bgPreBoxInLive2.classList.add("selected"),
    localStorage.setItem("bgPreference", "Live2"),
    bgPreference = "Live2",
    liveBgBox.classList.add("focus"),
    !0 === liteMode && location.reload()) : void 0
}
function getPostData(a) {
    const b = new FormData;
    for (const c in a)
        a[c] && b.append(c, a[c]);
    return {
        body: b,
        credentials: "include",
        method: "POST"
    }
}
btnLike.onclick = ()=>{
    btnLike.classList.add("rebound"),
    fetch("like.php", getPostData({
        action: "updateLikedCount"
    })).then(a=>{
        if (a.ok)
            return a.text()
    }
    ).then(a=>{
        a && ("liked" === a ? alert("\u5DF2\u7ECF\u70B9\u8FC7\u559C\u6B22\u5566") : numLiked.innerText = a)
    }
    )
}
,
btnLike.onmouseenter = ()=>showMenu(wallpaperInfo),
btnLike.onmouseleave = ()=>hideMenu(wallpaperInfo);
function currentTime() {
    const a = new Date
      , b = a.getFullYear()
      , c = a.getMonth() + 1
      , d = a.getDate()
      , e = a.getHours();
    let f = a.getMinutes();
    return 10 > f && (f = "0" + f),
    titleText.innerText = e + ":" + f,
    b + "\u5E74" + c + "\u6708" + d + "\u65E5 " + e + ":" + f
}
setInterval(currentTime, 1e3);
function pinnedNoteHover(a) {
    if ("0px" != topNotificationBar.style.top) {
        const b = a.clientX - this.offsetLeft
          , c = a.clientY - this.offsetTop
          , d = window.getComputedStyle(this).width.replace("px", "")
          , e = window.getComputedStyle(this).height.replace("px", "");
        b < .3 * d && c < .3 * e && (this.style.transform = "rotateX(10deg) rotateY(-5deg)"),
        b > .3 * d && b < .7 * d && c < .3 * e && (this.style.transform = "rotateX(10deg)"),
        b > .7 * d && c < .3 * e && (this.style.transform = "rotateX(10deg) rotateY(5deg)"),
        b < .3 * d && c > .3 * e && c < .7 * e && (this.style.transform = "rotateY(-5deg)"),
        b > .3 * d && b < .7 * d && c > .3 * e && c < .7 * e && (this.style.transform = "none"),
        b > .7 * d && c > .3 * e && c < .7 * e && (this.style.transform = "rotateY(5deg)"),
        b < .3 * d && c > .7 * e && (this.style.transform = "rotateX(-10deg) rotateY(-5deg)"),
        b > .3 * d && b < .7 * d && c > .7 * e && (this.style.transform = "rotateX(-10deg)"),
        b > .7 * d && c > .7 * e && (this.style.transform = "rotateX(-10deg) rotateY(5deg)")
    }
    document.getElementById("btnUnpin" + 1 * this.id.replace(/[^\d]/g, "")).style.opacity = "1"
}
function pinnedNoteHover2() {
    this.style.transform = "none",
    document.getElementById("btnUnpin" + 1 * this.id.replace(/[^\d]/g, "")).style.opacity = "0"
}
function cusNavClick(a, b) {
    if (currentAddingNav != b || "0" === frmSetCustomNav.style.opacity) {
        !0 === cusNavEditingMode ? (captionSetCusNav.innerText = "\u7F16\u8F91\u7F51\u7AD9\u6377\u5F84",
        btnAddCusNav.innerText = "\u4FDD\u5B58") : (captionSetCusNav.innerText = "\u6DFB\u52A0\u7F51\u7AD9\u6377\u5F84",
        btnAddCusNav.innerText = "\u6DFB\u52A0");
        let c = a.clientX - 150;
        currentAddingNav = b,
        0 > c ? c = 10 : c + 300 > innerWidth && (c = innerWidth - 310),
        frmSetCustomNav.style.left = c + "px",
        frmSetCustomNav.style.top = a.clientY - 180 + "px",
        frmSetCustomNav.style.display = "block",
        setTimeout(()=>{
            frmSetCustomNav.style.opacity = "1",
            frmSetCustomNav.style.transform = "scale(1.05)"
        }
        , 50),
        setTimeout(()=>frmSetCustomNav.style.transform = "scale(1)", 300)
    } else
        btnCloseFrmCusNav.onclick(),
        currentAddingNav = "",
        currentEditingNav = ""
}
btnCloseFrmCusNav.onclick = ()=>{
    frmSetCustomNav.style.transform = "scale(0.5)",
    frmSetCustomNav.style.opacity = "0",
    setTimeout(()=>frmSetCustomNav.style.display = "none", 250)
}
,
inputCustomUrl.onkeydown = inputCustomTitle.onkeydown = a=>{
    13 == a.keyCode && btnAddCusNav.onclick()
}
,
btnAddCusNav.onclick = ()=>{
    isLoggedIn() && inputCustomUrl.value && (window.cusNavIconUrl = inputCustomUrl.value,
    !cusNavIconUrl.startsWith("http") && (cusNavIconUrl = "https://" + cusNavIconUrl),
    window.cusNavIconUrlParsed = new URL(cusNavIconUrl),
    fetch("https://a.maorx.cn/backend/lime/code?" + encodeData({
        action: "favicon",
        title: inputCustomTitle.value,
        url: cusNavIconUrl
    })).then(a=>a.ok ? a.json() : void getDefaultCusNavIcon()).then(a=>{
        a && (cusNavIconUrl = a.icon,
        a.title && !inputCustomTitle.value && (inputCustomTitle.value = a.title),
        !0 === cusNavEditingMode ? document.getElementById(currentEditingNav).innerHTML = `
						<img class="cusNavIcon shouldNotFade" src="` + cusNavIconUrl + `" onerror="getDefaultCusNavIcon(this)" onload="getDefaultCusNavIcon(this);submitCusNav();">
						<div class="cusNavTitle shouldNotFade">` + inputCustomTitle.value + `</div>` : (currentAddingNav.innerHTML = `
						<img class="cusNavIcon shouldNotFade" src="` + cusNavIconUrl + `" onerror="getDefaultCusNavIcon(this)" onload="getDefaultCusNavIcon(this);submitCusNav();">
						<div class="cusNavTitle shouldNotFade">` + inputCustomTitle.value + `</div>`,
        currentAddingNav.classList.add("added")),
        btnCloseFrmCusNav.onclick())
    }
    ))
}
;
function getDefaultCusNavIcon(a) {
    if (!a.naturalWidth || 17 > a.naturalWidth && confirm("\u6B64\u7F51\u7AD9\u7684\u56FE\u6807\u5206\u8FA8\u7387\u8FC7\u4F4E\uFF0C\u8981\u4F7F\u7528\u81EA\u52A8\u751F\u6210\u7684\u56FE\u6807\u5417\uFF1F")) {
        let b = cusNavIconUrlParsed.host;
        b.startsWith("www.") && (b = b.substring(4)),
        b = b.substring(0, 1).toUpperCase();
        const c = ["333&fg=70BF00", "333&fg=FF4B68", "333&fg=F0C419", "333&fg=C0CA55", "333&fg=5CA1FF", "333&fg=916BC5", "56626B&fg=FFF", "6C9380&fg=FFF", "C0CA55&fg=333", "F07C6C&fg=333", "AD5472&fg=FFF"]
          , d = c[Math.floor(Math.random() * c.length)];
        cusNavIconUrl = "https://iph.href.lu/128x128?bg=" + d + "&text=" + b,
        a.src = cusNavIconUrl,
        a.classList.add("round"),
        cusNavIconErrCount = 0
    }
}
function submitCusNav() {
    if (++cusNavSubmitCount,
    1 == cusNavSubmitCount) {
        let a = inputCustomUrl.value;
        a = a.startsWith("http") ? encodeURIComponent(a) : encodeURIComponent("http://" + a),
        a = "\"" + a + "\"",
        cusNavIconUrl = encodeURIComponent(cusNavIconUrl);
        let b;
        !0 === cusNavEditingMode ? b = "editCusNav" : (b = "submitCusNav",
        currentEditingNav = ""),
        fetch("cusNav.php", getPostData({
            action: b,
            cusNavUrl: a,
            cusNavTitle: inputCustomTitle.value,
            cusNavIconUrl: cusNavIconUrl,
            editIndex: currentEditingNav
        })).then(a=>{
            if (a.ok)
                return a.text()
        }
        ).then(getCusNav)
    }
    setTimeout(()=>cusNavSubmitCount = 0, 2e3)
}
onclick = ()=>{
    "1" === menuUser.style.opacity && hideMenu(menuUser),
    "1" === menuSettings.style.opacity && hideMenu(menuSettings),
    "1" === menuCusNav.style.opacity && hideMenu(menuCusNav),
    "1" === menuSearch.style.opacity && hideMenu(menuSearch),
    "1" === tipBoxCopyPaste.style.opacity && hideMenu(tipBoxCopyPaste),
    "1" === tipBoxLogin.style.opacity && hideMenu(tipBoxLogin),
    "1" === tipBoxBrowser.style.opacity && hideMenu(tipBoxBrowser)
}
,
btnWarn.onmouseenter = ()=>{
    showMenu(tipBoxBrowser)
}
,
tipBoxBrowser.onmouseleave = ()=>{
    "1" === tipBoxBrowser.style.opacity && hideMenu(tipBoxBrowser)
}
,
btnUser.onclick = ()=>{
    isLoggedIn() && ("1" === menuUser.style.opacity ? hideMenu(menuUser) : showMenu(menuUser))
}
,
btnUser.onmouseenter = ()=>{
    login.username || (showMenu(tipBoxLogin),
    offlineMark.style.opacity = 0)
}
,
btnUser.onmouseout = ()=>{
    "1" === tipBoxLogin.style.opacity && hideMenu(tipBoxLogin)
}
,
userMenuMyAccount.onclick = ()=>showPop(popAccount),
userMenuLogout.onclick = ()=>logOut(),
btnSettings.onclick = ()=>{
    "1" === menuSettings.style.opacity ? hideMenu(menuSettings) : showMenu(menuSettings)
}
,
setMenuGeneral.onclick = ()=>showPop(popGeneralSettings),
setMenuSearchEngPref.onclick = ()=>showPop(popSearchEng),
setMenuBgPref.onclick = ()=>showPop(popBg),
setMenuDonate.onclick = ()=>showPop(popDonate),
setMenuFeedback.onclick = ()=>showPop(popFeedback);
function showMenu(a) {
    a.style.display = "block",
    setTimeout(()=>{
        a.style.opacity = "1",
        a.style.transform = "scale(1.05)"
    }
    , 50),
    setTimeout(()=>a.style.transform = "scale(1)", 300)
}
function hideMenu(a) {
    a.style.transform = "scale(0.5)",
    a.style.opacity = "0",
    setTimeout(()=>a.style.display = "none", 250)
}
function isLoggedIn() {
    return !!login.username || (window.frmLogin || (window.frmLogin = document.createElement("iframe"),
    frmLogin.id = "frmLogin",
    frmLogin.title = "\u767B\u5F55",
    frmLogin.src = "https://account.rthsoftware.cn/login-mobius-start.html",
    popLogin.appendChild(frmLogin)),
    showPop(popLogin),
    !1)
}
function loggedIn(a) {
    a && closePop(popLogin),
    accInfoTextEmail.innerText = login.email,
    accInfoTextUid.innerText = login.username,
    fetch("https://a.maorx.cn/backend/lime/account?" + encodeData({
        action: "verifyUsername",
        email: login.email
    }), fetchGetInit).then(a=>{
        if (a.ok)
            return a.text()
    }
    ).then(a=>{
        if (a)
            if ("0" === a)
                showPop(popCompleteReg);
            else {
                const b = JSON.parse(a);
                let c, d;
                if (username = b[0].username,
                birthday = b[0].birthday,
                birthday) {
                    let a = new Date().getMonth() + 1;
                    const b = new Date().getDate();
                    10 > a && (a = "0" + a),
                    d = a + "-" + b,
                    c = birthday.substring(5)
                }
                c && c == d ? showGreeting("", "\u751F\u65E5\u5FEB\u4E50\uFF0C" + username) : showGreeting(username, ""),
                menuTextUsername.innerText = username,
                titlePopAccount.innerText = "\u6B22\u8FCE\u4F60\uFF0C" + username,
                accInfoTextUid.innerText = b[0].uid,
                accInfoTextUsername.innerText = username,
                accInfoTextBirthday.innerText = birthday,
                inputEditUsername.value = username,
                inputEditBirthday.value = birthday
            }
    }
    ),
    getCusNav(),
    noteList.load(),
    textNote.value = "",
    offlineMark.style.opacity = 0
}
function getCusNav() {
    fetch("cusNav.php?" + encodeData({
        action: "getCusNav"
    }), fetchGetInit).then(a=>{
        if (a.ok)
            return a.text()
    }
    ).then(a=>{
        a && (navboxCustom.innerHTML = a)
    }
    ),
    inputCustomUrl.value = "",
    inputCustomTitle.value = ""
}
function loadCusNavSlots() {
    fetch("cusNav.php?" + encodeData({
        action: "loadCusNavSlots"
    })).then(a=>{
        if (a.ok)
            return a.text()
    }
    ).then(a=>{
        a && (navboxCustom.innerHTML = a)
    }
    )
}
function showCusNavMenu(a, b) {
    "1" === frmSetCustomNav.style.opacity && btnCloseFrmCusNav.onclick(),
    menuCusNav.style.left = a.clientX + 3 + "px",
    menuCusNav.style.top = a.clientY + 3 + "px",
    currentEditingNav = b.id,
    currentDeletingNav = b.id,
    showMenu(menuCusNav)
}
cusNavMenuDel.onclick = ()=>{
    fetch("cusNav.php", getPostData({
        action: "delCusNav",
        delIndex: currentDeletingNav
    })).then(a=>{
        a.ok && getCusNav()
    }
    )
}
,
cusNavMenuEdit.onclick = ()=>{
    cusNavEditingMode = !0;
    let a = document.getElementById(currentEditingNav).getAttributeNode("onclick").nodeValue.replace(`window.open("`, "");
    a = a.replace(`")`, ""),
    inputCustomUrl.value = a,
    inputCustomTitle.value = document.getElementById(currentEditingNav).lastChild.innerText,
    cusNavClick(event, this)
}
,
inputEditUsername.onkeyup = inputUsername.onkeyup = ()=>checkUsername();
function checkUsername() {
    const a = inputUsername.value.length - 1;
    let b = inputUsername.value.charAt(a);
    0 <= "[`~!#$^&*()=|{}':;',\\[\\].<>/?~\uFF01#\uFFE5\u2026\u2026&*\uFF08\uFF09\u2014\u2014|{}\u3010\u3011\u2018\uFF1B\uFF1A\u201D\u201C'\u3002\uFF0C\u3001\uFF1F]\u2018'".indexOf(b) && (b = inputUsername.value.substring(0, a),
    inputUsername.value = b),
    20 < inputUsername.value.length ? (loginTipUsername.innerText = "\u7528\u6237\u540D\u957F\u5EA6\u4E0D\u7B26\u5408\u9650\u5236",
    loginTipUsername.style.color = isDark ? "#FF565F" : "#FF2F3C") : (loginTipUsername.innerText = "\u4E3A\u81EA\u5DF1\u8D77\u4E00\u4E2A\u597D\u542C\u7684\u7528\u6237\u540D",
    loginTipUsername.style.color = isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)")
}
btnCompleteReg.onclick = ()=>{
    btnCompleteReg.style.pointerEvents = "none",
    0 < inputUsername.value.length && 21 > inputUsername.value.length && (username = inputUsername.value,
    fetch("https://a.maorx.cn/backend/lime/account", getPostData({
        action: "completeReg",
        username: username,
        birthday: inputBirthday.value
    })).then(a=>{
        a.ok && (closePop(popCompleteReg),
        showGreeting(username, ""))
    }
    ))
}
,
btnEditUsername.onclick = ()=>editBtnClick("username"),
btnUpdateUsername.onclick = ()=>updateUserInfo("username"),
btnEditBirthday.onclick = ()=>editBtnClick("birthday"),
btnUpdateBirthday.onclick = ()=>updateUserInfo("birthday");
function editBtnClick(a) {
    "username" === a ? (btnEditUsername.style.display = "none",
    inputEditUsername.style.display = "inline-block",
    btnUpdateUsername.style.display = "inline-block") : "birthday" === a ? (btnEditBirthday.style.display = "none",
    inputEditBirthday.style.display = "inline-block",
    btnUpdateBirthday.style.display = "inline-block") : void 0
}
function updateUserInfo() {
    if (0 < inputEditUsername.value.length && 21 > inputEditUsername.value.length) {
        const a = inputEditUsername.value
          , b = inputEditBirthday.value;
        (a != username || b != birthday) && fetch("https://a.maorx.cn/backend/lime/account", getPostData({
            action: "completeReg",
            username: a,
            birthday: b
        })).then(c=>{
            c.ok && (menuTextUsername.innerText = a,
            titlePopAccount.innerText = "\u6B22\u8FCE\u4F60\uFF0C" + a,
            accInfoTextUsername.innerText = a,
            accInfoTextBirthday.innerText = b,
            username = a,
            birthday = b)
        }
        ),
        btnEditUsername.style.display = "inline-block",
        inputEditUsername.style.display = "none",
        btnUpdateUsername.style.display = "none",
        btnEditBirthday.style.display = "inline-block",
        inputEditBirthday.style.display = "none",
        btnUpdateBirthday.style.display = "none"
    }
}
function showGreeting(a, b) {
    if ("block" != greetingBox.style.display) {
        if ("" === b) {
            const b = new Date().getHours();
            (21 < b || 4 > b) && (greeting.innerText = "\u665A\u5B89\uFF0C" + a),
            4 <= b && 9 > b && (greeting.innerText = "\u65E9\u5B89\uFF0C" + a),
            9 === b && (greeting.innerText = "\u65E9\u4E0A\u597D\uFF0C" + a),
            9 < b && 12 > b && (greeting.innerText = "\u4E0A\u5348\u597D\uFF0C" + a),
            12 === b && (greeting.innerText = "\u4E2D\u5348\u597D\uFF0C" + a),
            12 < b && 15 > b && (greeting.innerText = "\u5348\u5B89\uFF0C" + a),
            15 <= b && 18 > b && (greeting.innerText = "\u4E0B\u5348\u597D\uFF0C" + a),
            18 === b && (greeting.innerText = "\u508D\u665A\u597D\uFF0C" + a),
            18 < b && 21 >= b && (greeting.innerText = "\u665A\u4E0A\u597D\uFF0C" + a)
        } else
            greeting.innerHTML = b;
        greetingBox.style.display = "block",
        setTimeout(()=>{
            greeting.style.opacity = "1",
            greeting.style.top = "0px"
        }
        , 50),
        setTimeout(()=>{
            greeting.style.opacity = "0",
            greeting.style.top = "-100px"
        }
        , 3e3),
        setTimeout(()=>greetingBox.style.display = "none", 3500)
    }
}
function navboxScroll(a) {
    window.cooldownScroll || -1 != a.target.className.indexOf("note") || "textNote" == a.target.id || "iconAdd" == a.target.id || (0 > a.deltaX || 0 > a.deltaY ? nbSwitch1.onclick() : nbSwitch2.onclick())
}
chkAutoClrSearchBarInner.onclick = ()=>{
    !0 == chkAutoClrSearchBar.checked ? (autoClrSearchBar = !1,
    localStorage.setItem("autoClrSearchBar", "off")) : (autoClrSearchBar = !0,
    localStorage.setItem("autoClrSearchBar", "on"))
}
,
chkOpenInNewInner.onclick = ()=>{
    !0 == chkOpenInNew.checked ? (openInNew = !1,
    localStorage.setItem("openInNew", "off")) : (openInNew = !0,
    localStorage.setItem("openInNew", "on"))
}
,
chkSearchHistoryInner.onclick = ()=>{
    !0 == chkSearchHistory.checked ? (searchHistory = !1,
    quotebox.classList.remove("searchHistoryOn"),
    localStorage.setItem("searchHistory", "off")) : (searchHistory = !0,
    localStorage.setItem("searchHistory", "on"))
}
,
chkAutoFocusInner.onclick = ()=>{
    !0 == chkAutoFocus.checked ? (autoFocus = !1,
    localStorage.setItem("autoFocus", "off")) : (autoFocus = !0,
    localStorage.setItem("autoFocus", "on"))
}
,
chkAutoShowSecondPageInner.onclick = ()=>{
    !0 == chkAutoShowSecondPage.checked ? (autoShowSecondPage = !1,
    localStorage.setItem("autoShowSecondPage", "off"),
    setOptCapAutoFocus.classList.remove("invalid")) : (autoShowSecondPage = !0,
    localStorage.setItem("autoShowSecondPage", "on"),
    setOptCapAutoFocus.classList.add("invalid"))
}
,
chkNoteAsDefaultInner.onclick = ()=>{
    !0 == chkNoteAsDefault.checked ? (noteAsDefault = !1,
    localStorage.setItem("noteAsDefault", "off"),
    nbSwitch1.onclick()) : (noteAsDefault = !0,
    localStorage.setItem("noteAsDefault", "on"),
    nbSwitch2.onclick())
}
,
chkHitokotoInner.onclick = ()=>{
    !0 == chkHitokoto.checked ? (hitokoto = !1,
    localStorage.setItem("hitokoto", "off"),
    quotebox.style.display = "none") : (hitokoto = !0,
    localStorage.setItem("hitokoto", "on"),
    quotebox.style.display = "block")
}
,
chkLiteModeInner.onclick = ()=>{
    !0 == chkLiteMode.checked ? (liteMode = !1,
    localStorage.setItem("liteMode", "off"),
    document.body.classList.remove("lite")) : (liteMode = !0,
    localStorage.setItem("liteMode", "on"),
    document.body.classList.add("lite"),
    !1 === reduceMotion && (setReduceMotion(),
    chkReduceMotion.checked = !0),
    !0 === navLinksBlurEf && (setNavLinksBlurEf(),
    chkNavLinksBlurEf.checked = !1))
}
,
chkReduceMotionInner.onclick = ()=>setReduceMotion();
function setReduceMotion() {
    !0 == chkReduceMotion.checked ? (reduceMotion = !1,
    localStorage.setItem("reduceMotion", "off")) : (reduceMotion = !0,
    localStorage.setItem("reduceMotion", "on"))
}
chkNavLinksBlurEfInner.onclick = ()=>setNavLinksBlurEf();
function setNavLinksBlurEf() {
    !0 == chkNavLinksBlurEf.checked ? (navLinksBlurEf = !1,
    localStorage.setItem("navLinksBlurEf", "off"),
    navLinkBox.classList.remove("blurEf")) : (navLinksBlurEf = !0,
    localStorage.setItem("navLinksBlurEf", "on"),
    navLinkBox.classList.add("blurEf"))
}
chkDarkModeInner.onclick = ()=>{
    !0 == chkDarkMode.checked ? (isDark = !1,
    localStorage.setItem("darkMode", "off"),
    document.documentElement.classList.remove("dark")) : (isDark = !0,
    localStorage.setItem("darkMode", "on"),
    document.documentElement.classList.add("dark"))
}
,
btnReset.onclick = ()=>{
    confirm("\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F\n\n\u6B64\u64CD\u4F5C\u5C06\u6E05\u9664\u672C\u5730\u7F13\u5B58\u3001\u91CD\u7F6E\u60A8\u7684\u80CC\u666F\u56FE\u50CF\u504F\u597D\u8BBE\u7F6E\u548C\u641C\u7D22\u5F15\u64CE\u504F\u597D\u8BBE\u7F6E\uFF0C\u5E76\u5C06\u6240\u6709\u5E38\u89C4\u8BBE\u7F6E\u9879\u8FD8\u539F\u4E3A\u8D77\u59CB\u9875\u9ED8\u8BA4\u503C\u3002\n\u60A8\u7684\u81EA\u5B9A\u4E49\u7F51\u7AD9\u6377\u5F84\u53CA\u4FBF\u7B3A\u4E0D\u4F1A\u88AB\u6E05\u9664\u3002") && (localStorage.clear(),
    location.reload())
}
;
function loadCss(a) {
    let b = !0;
    const c = document.getElementsByTagName("link");
    for (let d = 0; d < c.length; d++)
        c[d] && c[d].href && -1 != c[d].href.indexOf(a) && (b = !1);
    if (b) {
        const b = document.createElement("link");
        b.rel = "stylesheet",
        b.href = a,
        document.head.appendChild(b)
    }
}
function removeCss(a) {
    const b = document.getElementsByTagName("link");
    for (let c = 0; c < b.length; c++)
        b[c] && b[c].href && -1 != b[c].href.indexOf(a) && b[c].parentNode.removeChild(b[c])
}
function getTopNotification() {
    fetch("push.php?action=get").then(a=>{
        if (a.ok)
            return a.json()
    }
    ).then(a=>{
        if (a) {
            pushClass = a[0].classification,
            pushTitle = a[0].title,
            pushContent = a[0].content,
            pushStartTime = a[0].pushStartTime,
            pushStopTime = a[0].pushStopTime;
            const b = localStorage.getItem("pushClass")
              , c = localStorage.getItem("pushTitle")
              , d = localStorage.getItem("pushContent")
              , e = localStorage.getItem("pushStartTime")
              , f = localStorage.getItem("pushStopTime");
            localStorage.setItem("pushClass", pushClass),
            localStorage.setItem("pushTitle", pushTitle),
            localStorage.setItem("pushContent", pushContent),
            localStorage.setItem("pushStartTime", pushStartTime),
            localStorage.setItem("pushStopTime", pushStopTime),
            f ? (b != pushClass || c != pushTitle || d != pushContent || e != pushStartTime || f != pushStopTime) && processTopNotification() : processTopNotification()
        }
    }
    )
}
function processTopNotification() {
    if (pushClass = localStorage.getItem("pushClass"),
    pushTitle = localStorage.getItem("pushTitle"),
    pushContent = localStorage.getItem("pushContent"),
    pushStartTime = localStorage.getItem("pushStartTime"),
    pushStopTime = localStorage.getItem("pushStopTime"),
    pushStopTime) {
        const a = new Date;
        pushStartTime = new Date(pushStartTime),
        pushStopTime = new Date(pushStopTime),
        a.getTime() > pushStartTime.getTime() && a.getTime() < pushStopTime.getTime() && ("0" === pushClass ? topNotificationBar.classList.add("class0") : "1" === pushClass ? topNotificationBar.classList.add("class1") : "2" === pushClass ? topNotificationBar.classList.add("class2") : void 0,
        marqueeTitle.innerText = pushTitle,
        marqueeText.innerText = pushContent,
        showTopNbar())
    }
}
function showTopNbar() {
    topNotificationBar.style.display = "block",
    marqueeBar.start(),
    setTimeout(()=>{
        topNotificationBar.style.top = "0",
        bodyBox.style.top = "50px",
        bodyBox.style.height = "calc(100% - 50px)",
        navbox.style.top = "50px",
        navbox.style.height = "calc(100% - 50px)"
    }
    , 50)
}
btnClosetopNBar.onclick = ()=>{
    topNotificationBar.style.top = "-50px",
    bodyBox.style.top = "0",
    bodyBox.style.height = "100%",
    navbox.style.top = "0",
    navbox.style.height = "100%",
    setTimeout(()=>{
        marqueeBar.stop(),
        topNotificationBar.style.display = "none"
    }
    , 250)
}
;
function showSearchMenu(a) {
    menuSearch.style.left = a.clientX + 3 + "px",
    menuSearch.style.top = a.clientY + 3 + "px";
    const b = window.getSelection().toString();
    b ? (searchMenuCut.classList.remove("disabled"),
    searchMenuCopy.classList.remove("disabled")) : (searchMenuCut.classList.add("disabled"),
    searchMenuCopy.classList.add("disabled")),
    showMenu(menuSearch)
}
searchMenuCut.onclick = ()=>{
    window.getSelection().toString(),
    document.execCommand("cut"),
    theTextArea.focus()
}
,
searchMenuCopy.onclick = ()=>{
    navigator.clipboard.writeText(window.getSelection().toString()),
    theTextArea.focus()
}
,
searchMenuPaste.onclick = a=>{
    try {
        navigator.clipboard.readText().then(a=>theTextArea.value += a)
    } catch (b) {
        tipBoxCopyPaste.style.left = a.clientX + 3 + "px",
        tipBoxCopyPaste.style.top = a.clientY + 3 + "px",
        showMenu(tipBoxCopyPaste)
    }
    theTextArea.focus()
}
;
function loadJs(a, b, c) {
    setTimeout(()=>{
        const d = document.createElement("script");
        d.src = a,
        d.onload = b,
        d.onerror = c,
        document.body.appendChild(d)
    }
    , 1)
}
btnAddQuoteToNote.onclick = ()=>{
    if (isLoggedIn()) {
        const a = document.getElementsByClassName("quote-content")[0].innerText.replace(/^(\s|「 )+|(\s| 」)+$/g, "") + "\n\n" + document.getElementsByClassName("quote-author")[0].innerText
          , b = {
            created: Date.now(),
            encrypt: !1,
            text: a,
            time: currentTime(),
            title: ""
        };
        noteList.list.text.push(b),
        noteList.submit(JSON.stringify(b), -1),
        noteListWrap.classList.add("unfold"),
        iconAddQuoteToNote.innerHTML = "&#xe65f;",
        txtAddQuoteToNote.innerText = " \u5DF2\u6536\u85CF",
        btnAddQuoteToNote.style.pointerEvents = "none"
    }
}
,
inputCusSearchEngUrl.oninput = ()=>{
    cusSearchEngURL = inputCusSearchEngUrl.value,
    localStorage.setItem("cusSearchEngURL", cusSearchEngURL)
}
,
linkAbout.onclick = ()=>showAbout(),
linkDonate.onclick = ()=>{
    closePop(popAbout),
    setTimeout(()=>showPop(popDonate), 400)
}
,
popWelcomeStart.onclick = ()=>closePop(popWelcome),
//-1 == ypoctonod[0][atob(ypoctonod[1])].indexOf(atob("YS5tYW9yeC5jbg==")) ? ypoctonod[0][atob(ypoctonod[1])] = atob("aHR0cHM6Ly9hLm1hb3J4LmNuLw==") : ypoctonod.length = 0,
loadCusNavSlots(),
isMobile && (bgbox.style.backgroundSize = "auto 100%",
bgbox.style.backgroundPosition = "center"),
isEdge && (input0.style.transition = "none"),
currentSearchEngine || (currentSearchEngine = "baidu"),
cusSearchEngURL && (inputCusSearchEngUrl.value = cusSearchEngURL),
switchSearchEng(currentSearchEngine),
cusWallpaper && (bgPreBoxInCus.classList.remove("unset"),
bgPreBoxInCus.style.backgroundImage = "url(" + cusWallpaper + ")"),
bgPreference || (localStorage.setItem("bgPreference", "Default"),
bgPreference = "Default");
"Custom" === bgPreference ? (bgbox.src = cusWallpaper,
bgPreBoxInCus.classList.add("selected")) : "Default" === bgPreference ? (bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_1.jpg",
bgPreBoxIn1.classList.add("selected")) : "Default2" === bgPreference ? (bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_2.jpg",
bgPreBoxIn2.classList.add("selected")) : "Default3" === bgPreference ? (bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_3.jpg",
bgPreBoxIn3.classList.add("selected")) : "Default4" === bgPreference ? (bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_4.jpg",
bgPreBoxIn4.classList.add("selected")) : "Default5" === bgPreference ? (bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_5.jpg",
bgPreBoxIn5.classList.add("selected")) : "Default6" === bgPreference ? (bgbox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/images/BG_A_Default_6.jpg",
bgPreBoxIn6.classList.add("selected")) : "Bing" === bgPreference ? bgPreBoxInBing.classList.add("selected") : "Live" === bgPreference ? (liveBgBox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/videos/Live_Wallpaper_1.mp4",
liveBgBox.style.display = "block",
setTimeout(()=>liveBgBox.style.opacity = "1", 50),
bgPreBoxInLive.classList.add("selected")) : "Live2" === bgPreference ? (liveBgBox.src = "https://cdn.jsdelivr.net/gh/MobiusBeta/assets/videos/Live_Wallpaper_2.mp4",
liveBgBox.style.display = "block",
setTimeout(()=>liveBgBox.style.opacity = "1", 50),
bgPreBoxInLive2.classList.add("selected")) : void 0;
bgbox.onload = ()=>{
    bgbox.style.display = "block",
    setTimeout(()=>bgbox.style.opacity = "1", 50),
    setTimeout(()=>cover.style.opacity = "1", 100)
}
,
fetch("like.php", getPostData({
    action: "getLikedCount",
    lastModified0: lastModified0
})).then(a=>a.text()).then(a=>{
    a && (numLiked.innerText = a)
}
),
fetch("https://v1.hitokoto.cn/?c=d&c=i&encode=json").then(a=>a.json()).then(a=>{
    document.getElementsByClassName("quote-content")[0].innerText = "\u300C " + a.hitokoto + " \u300D",
    document.getElementsByClassName("quote-author")[0].innerText = "\u2014\u2014" + a.from
}
),
localVersion && localVersion.substring(0, 6) != "20w23a2".substring(0, 6) && showGreeting("", "\u6B22\u8FCE\u56DE\u6765~\u4F60\u7684\u8D77\u59CB\u9875\u521A\u521A\u66F4\u65B0\u5230\u4E86<span class='links1' onclick='showAbout()'>\u6700\u65B0\u7248\u672C</span>\u3002"),
localStorage.setItem("localVersion", "20w23a2"),
navbox.addEventListener("wheel", navboxScroll, {
    passive: !0
}),
window.ThinkPageWeatherWidgetObject = "tpwidget",
window.tpwidget || (window.tpwidget = function() {
    (window.tpwidget.q = window.tpwidget.q || []).push(arguments)
}
),
window.tpwidget.l = +new Date,
tpwidget("init", JSON.parse(atob("eyJmbGF2b3IiOiJzbGltIiwibG9jYXRpb24iOiJXUzdHUUJSTlI2VjgiLCJnZW9sb2NhdGlvbiI6ImVuYWJsZWQiLCJsYW5ndWFnZSI6ImF1dG8iLCJ1bml0IjoiYyIsInRoZW1lIjoiY2hhbWVsZW9uIiwiY29udGFpbmVyIjoidHAtd2VhdGhlci13aWRnZXQiLCJidWJibGUiOiJlbmFibGVkIiwiYWxhcm1UeXBlIjoiYmFkZ2UiLCJjb2xvciI6IiNGRkZGRkYiLCJ1aWQiOiJVRTE3RDRDOTkxIiwiaGFzaCI6IjEwNWJmNmE3ZjYxZjQ3NDk1ZjNiYjU2OTNlYmUzNmRlIn0="))),
tpwidget("show"),
marqueeBar.stop(),
getTopNotification(),
chkAutoClrSearchBar.checked = autoClrSearchBar,
chkOpenInNew.checked = openInNew,
chkSearchHistory.checked = searchHistory,
chkAutoFocus.checked = autoFocus,
chkAutoShowSecondPage.checked = autoShowSecondPage,
chkNoteAsDefault.checked = noteAsDefault,
chkHitokoto.checked = hitokoto,
chkLiteMode.checked = liteMode,
chkReduceMotion.checked = reduceMotion,
chkNavLinksBlurEf.checked = navLinksBlurEf,
chkDarkMode.checked = isDark,
!1 === autoFocus && !1 === autoShowSecondPage && (inputBlur(),
input0.blur()),
!0 === autoShowSecondPage && (input0.blur(),
title.onclick(),
setOptCapAutoFocus.classList.add("invalid")),
!0 === noteAsDefault && nbSwitch2.onclick(),
!1 === hitokoto && (quotebox.style.display = "none"),
!0 === liteMode && document.body.classList.add("lite"),
!0 === navLinksBlurEf && navLinkBox.classList.add("blurEf"),
Waves.init(),
window.noteList = new Vue({
    el: "#noteList",
    data: {
        changed: !1,
        current: 0,
        currentIsNew: !0,
        list: {
            text: [],
            time: Date.now()
        },
        pinned: (()=>{
            try {
                return JSON.parse(localStorage.getItem("pinnedNoteNum")) || []
            } catch (a) {
                return localStorage.removeItem("pinnedNoteNum"),
                []
            }
        }
        )()
    },
    watch: {
        pinned: function() {
            localStorage.setItem("pinnedNoteNum", JSON.stringify(this.pinned)),
            this.pinned.length ? pinnedBox.style.display = "block" : setTimeout(()=>pinnedBox.style.display = "none", 500)
        }
    },
    methods: {
        delete: function() {
            const a = this.list.text[this.current - 1];
            textNote.value = "",
            a && (this.list.text.splice(this.current - 1, 1),
            this.submit(JSON.stringify({
                created: a.created,
                delete: !0
            }), a.created || this.current),
            this.pinned && -1 != this.pinned.indexOf(a.created) && unpinNote(a.created),
            this.current = 0,
            this.currentIsNew = !0),
            this.list.text.length || noteListWrap.classList.remove("unfold"),
            noteToolBar.style.display = "none"
        },
        getIndex: function(a) {
            let b = null;
            for (let c = 0; c < this.list.text.length; c++)
                this.list.text[c].created == a && (b = c);
            return b
        },
        isOpened: function() {
            return window.login && login.username && this.list && this.list.text && this.list.text[this.current - 1]
        },
        load: function() {
            fetch("https://a.maorx.cn/backend/text/get?" + encodeData({
                token: login.token,
                username: login.username
            })).then(a=>a.ok ? a.json() : void (404 == a.status && this.submit())).then(a=>{
                const b = localStorage.getItem("maximumNoteNumber")
                  , c = [];
                if (a && (this.list = a),
                b) {
                    for (let a = 1; a < +b + 1; a++) {
                        const b = localStorage.getItem("note" + a);
                        if (b) {
                            const c = localStorage.getItem("noteTime" + a);
                            this.list.text.push({
                                created: c ? new Date(c.replace(/年|月/g, "-").replace("\u65E5", "")).getTime() : null,
                                encrypt: !1,
                                text: b,
                                time: c,
                                title: ""
                            })
                        }
                        localStorage.removeItem("note" + a),
                        localStorage.removeItem("noteTime" + a)
                    }
                    localStorage.removeItem("maximumNoteNumber"),
                    this.submit()
                }
                0 < this.list.text.length && noteListWrap.classList.add("unfold");
                for (let b = 0; b < this.pinned.length; b++)
                    null !== this.getIndex(this.pinned[b]) && -1 == c.indexOf(this.pinned[b]) && c.push(this.pinned[b]);
                this.pinned = c;
                for (let b = 0; b < this.pinned.length; b++) {
                    const a = this.getIndex(this.pinned[b]);
                    createPinnedNote(this.pinned[b], this.list.text[a].text, this.list.text[a].time)
                }
                showPinnedNote()
            }
            )
        },
        newNote: function() {
            this.changed && this.save(),
            this.list.text.push({
                created: Date.now(),
                encrypt: !1,
                text: "",
                time: currentTime(),
                title: ""
            }),
            this.current = this.list.text.length,
            this.currentIsNew = !0,
            textNote.value = "",
            textNote.focus(),
            noteToolBar.style.display = "block",
            setTimeout(()=>document.getElementById("noteList").scrollTop = document.getElementById("noteList").scrollHeight, 1)
        },
        open: function(a) {
            this.changed && this.save(),
            this.current = 1 * a,
            this.currentIsNew = !1,
            this.list.text[this.current - 1] && (textNote.value = this.list.text[this.current - 1].text),
            txtNoteCloudStatus.innerText = originalStatus,
            noteToolBar.style.display = "block",
            textNote.focus()
        },
        save: function() {
            if (this.isOpened()) {
                const a = this.list.text[this.current - 1];
                a.encrypt = !1,
                this.submit(JSON.stringify(a), this.currentIsNew ? -1 : a.created || this.current),
                this.changed = !1,
                this.currentIsNew = !1
            }
        },
        submit: function(a, b) {
            if (login.username) {
                const c = {
                    token: login.token,
                    username: login.username,
                    value: JSON.stringify(this.list)
                };
                this.list.time = Date.now(),
                b && (c.key = b,
                c.time = this.list.time,
                c.value = a),
                txtNoteCloudStatus.innerText = "\u6B63\u5728\u4FDD\u5B58",
                fetch("https://a.maorx.cn/backend/text/upload", getPostData(c)).then(a=>{
                    txtNoteCloudStatus.innerText = a.ok ? "\u5DF2\u4FDD\u5B58" : "\u4FDD\u5B58\u5931\u8D25",
                    setTimeout(()=>txtNoteCloudStatus.innerText = originalStatus, 1e3)
                }
                )
            }
        }
    }
});
