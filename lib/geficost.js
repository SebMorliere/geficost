/*jshint esversion: 6 */
const logLevel = "debug";
const log = {
    "info": function (text) {
        console.log(text);
    },
    "debug": function (text) {
        if (logLevel === "debug" || logLevel === "full") {
            console.log(text);
        }
    },
    "full": function (text) {
        if (logLevel === "full") {
            console.log(text);
        }
    }
};

/* DOM functions */
let
    language = "",
    configFileName = "",
    settingsTypeId = "",
    loader = function () {
        /*clearItems();*/
        /*logAllStorage();*/
        log.full("loader:");
        language = getDefaultParam("language");
        settingsTypeId = getDefaultParam("settingsType");
        configFileName = getDefaultParam("configFileName");
        addLanguageDropdown();
        addSettingsRadio();
        addSettingsForm("engineSettings");
        addSettingsForm("gameSettings");
        addGenerateSettingFile();
        log.full("END of loader");

    },
    $ = function (id) {
        log.full("$:");
        return document.getElementById(id);
    },
    $class = function (className) {
        log.full("$class:");
        return document.getElementsByClassName(className);
    },
    newElement = function (element, className, id) {
        log.full("newElement:");
        const e = document.createElement(element);
        if (className) {
            e.className = className;
        }
        if (id) {
            e.id = id;
        }
        return e;
    },
    newElementWithAtt = function (object) {
        /* Expected object format : 
            {
                "element": "elementName"
                "attributes": {
                    "name1": "value1",
                    "name2": "value2,
                    ...
                    "nameN": "valueN"
                }
            }
        */
        log.full("newElementWithAtt:");
        const e = document.createElement(object.element);
        for (var key in object.attributes) {
            if (object.attributes.hasOwnProperty(key)) {
                log.full(key + ": " + object.attributes[key]);
                e.setAttribute(key, object.attributes[key]);
            }
        }
        log.full(e);
        return e;
    },
    newTextNode = function (text) {
        log.full("newTextNode:");
        return document.createTextNode(text);
    },
    addLanguageDropdown = function () {
        log.full("addLanguageDropdown:");
        const parent = $("language-dropdown");
        const dropdownBtn = newElementWithAtt({
            "element": "a",
            "attributes": {
                "class": "dropdown-toggle",
                "href": "#",
                "data-toggle": "dropdown",
                "role": "button",
                "aria-haspopup": "true",
                "aria-expanded": "false"
            }
        });

        dropdownBtn.appendChild(newTextNode(language));
        dropdownBtn.appendChild(newElement("span", "caret"));
        parent.appendChild(dropdownBtn);

        const newUl = newElement("ul", "dropdown-menu");
        for (let i = 0; i < availableLanguage.length; i++) {
            const newLi = newElement("li");
            const newA = newElementWithAtt({
                "element": "a",
                "attributes": {
                    "title": availableLanguage[i].full,
                    "href": "#"
                }
            });
            newA.addEventListener("click", () => changePageSetting("language", availableLanguage[i].short));

            let textNode = newTextNode(availableLanguage[i].full);
            if (availableLanguage[i].short === language) {
                let temp = newElement("strong");
                temp.appendChild(textNode);
                textNode = temp;
            }
            newA.appendChild(textNode);
            newLi.appendChild(newA);
            newUl.appendChild(newLi);
        }
        parent.appendChild(newUl);
    },
    addSettingsRadio = function () {
        log.full("addSettingsRadio:");
        const parent = $("settings-type");
        const mainLabel = newElement("label", "radio-inline");

        mainLabel.appendChild(newTextNode("type :"));
        parent.appendChild(mainLabel);

        // get which radio button is checked from browser localStorage
        // by default set it on the first
        settingsTypeId = getLSItem("settingsType");
        if (settingsTypeId === "" || settingsTypeId === null) {
            setLSItem("settingsType", settingsType.param[0].id);
            settingsTypeId = settingsType.param[0].id;
        }

        // creation of settings radio choice
        for (let i = 0; i < settingsType.length; i++) {
            const radioLabel = newElement("label", "radio-inline");
            const newRadioChoice = newElementWithAtt({
                "element": "input",
                "attributes": {
                    "id": settingsType[i].id,
                    "type": "radio",
                    "name": "inlineRadioOptions",
                    "value": settingsType[i].name
                }
            });
            newRadioChoice.addEventListener("click", () => changePageSetting("settingsType", settingsType[i].id));

            if (settingsTypeId === newRadioChoice.id) {
                newRadioChoice.checked = true;
            }
            const newContent = newTextNode(settingsType[i].text);

            radioLabel.appendChild(newRadioChoice);
            radioLabel.appendChild(newContent);
            parent.appendChild(radioLabel);
        }
        log.full("END of addSettingsRadio");
    },

    addSettingsForm = function (category) {
        log.debug("addSettingsForm: " + category);
        // get the sub-object data[category] from the file 'settings.json.js'
        const settings = data[category];
        // get the parent element where the new input will be appended
        const parent = $(category);
        // the forms are separated according to category
        const parentForm = newElement("form", "form-horizontal", category + "Form");
        // get setting type from localstorage
        settingsTypeId = getLSItem("settingsType");

        // creation of settings form
        for (let i = 0; i < settings.length; i++) {
            // filter settings elements to build depending on settings type choice (radio)
            if (settingsTypeId === "fast" && (settings[i].settingsType > 1)) continue;
            if (settingsTypeId === "simplified" && settings[i].settingsType === 3) continue;

            // mainDiv to receive the new form elements inline, with specific bootstrap class and no id
            const mainDiv = newElement("div", "form-group form-group-sm");
            // subDiv to be appended to mainDiv, with specific bootstrap class and no id
            const subDiv = newElement("div", "col-sm-2");
            // input to be customized according to settings parameters with specific id
            // it is not const because it is redefined in case 'file' and 'file multiple'
            let newInput = newElement("input", "form-control", settings[i].name);

            // variables and const used for type 'file' and 'file multiple' 
            let subInput = null;
            let fileInput = null;
            const mainSpan = newElement("span", "input-group-btn");
            const btn = newElementWithAtt({
                    "element": "button",
                    "attributes": {
                        "class": "btn btn-default btn-sm",
                        "type": "button"
                    }
                });
            const icon = newElement("span", "glyphicon glyphicon-folder-open");
            btn.appendChild(icon);

            // input customisation according to settings type
            switch (settings[i].type) {
            case "checkbox":
                newInput.type = settings[i].type;
                // tick or not the checkbox according to settings values
                if (settingsTypeId === "fast") {
                    newInput.checked = settings[i].fastValue === "1" ? true : false;
                } else {
                    newInput.checked = settings[i].default === "1" ? true : false;
                }
                // setting input value depending on if the checkbox is checked or not
                newInput.value = newInput.checked ? "1" : "0";
                // changing input value whith checkbox onChange event
                newInput.addEventListener("change", () => {
                    newInput.value = newInput.checked ? "1" : "0";
                });
                break;
            case "ip":
                newInput.type = "text";
                newInput.placeholder = settings[i].default;
                if (settingsTypeId === "fast") {
                    newInput.value = settings[i].fastValue;
                }
                // TOFIX : check validity using pattern
                const pattern = /((^|\.)((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]?\d))){4}$/;
                newInput.addEventListener("blur", () => {
                    if (newInput.value !== "") {
                        log.debug("pattern.test(newInput.value) : " + pattern.test(newInput.value));
                        /*data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."*/
                    }
                });
                break;
            case "file":
                log.debug("adding custom 'file' type input for");
                log.debug(settings[i]);

                // in this case, subInput can be set manually (by editing text) or by using the button (which pop a file selection window)
                subInput = newElement("input", "form-control", settings[i].name);
                subInput.type = "text";
                subInput.placeholder = settings[i].default;
                if (settingsTypeId === "fast") {
                    log.debug("fastValue added: " + settings[i].fastValue);
                    subInput.value = settings[i].fastValue;
                }

                // newInput gather multiple elements
                newInput = newElement("div", "input-group");

                // event to call the file input
                btn.addEventListener("click", () => $(subInput.id + "Hidden").click());

                mainSpan.appendChild(btn);

                // this element handle file input process
                fileInput = newElementWithAtt({
                    "element": "input",
                    "attributes": {
                        "id": subInput.id + "Hidden",
                        "style": "display: none",
                        "type": "file",
                        "accept": ".map"
                    }
                });
                // TOFIX : file name is erased when nothing is selected
                fileInput.addEventListener("change", () => {
                    const filename = fileInput.value
                        .split("\\").pop()
                        .split("/").pop()
                        .split(" ").pop()
                        .split(".").shift();
                    log.full("filename: " + filename);
                    subInput.value = filename;
                });

                newInput.appendChild(fileInput);
                newInput.appendChild(subInput);
                newInput.appendChild(mainSpan);
                break;
            case "file multiple":
                log.debug("adding custom 'file multiple' type input");

                subInput = newElement("input", "form-control", settings[i].name);
                subInput.type = "text";
                subInput.placeholder = settings[i].default;
                if (settingsTypeId === "fast") {
                    subInput.value = settings[i].fastValue;
                }

                newInput = newElement("div", "input-group");

                btn.addEventListener("click", () => $(subInput.id + "Hidden").click());

                mainSpan.appendChild(btn);

                fileInput = newElementWithAtt({
                    "element": "input",
                    "attributes": {
                        "id": subInput.id + "Hidden",
                        "style": "display: none",
                        "type": "file",
                        "accept": ".map",
                        "multiple": true
                    }
                });
                fileInput.addEventListener("change", () => {
                    const files = fileInput.files;
                    let fileNames = "";
                    for (var i = 0; i < files.length; i++) {
                        fileNames += files[i].name.split(" ")
                            .pop()
                            .split(".")
                            .shift() + " ";
                    }
                    fileNames = fileNames.substring(0, fileNames.length - 1);

                    log.debug("fileNames: " + fileNames);
                    subInput.value = fileNames;
                });

                newInput.appendChild(fileInput);
                newInput.appendChild(subInput);
                newInput.appendChild(mainSpan);
                break;
            case "port":
                newInput.type = "number";
                newInput.min = "0";
                newInput.max = "65535";
                newInput.placeholder = settings[i].default;
                if (settingsTypeId === "fast") {
                    newInput.value = settings[i].fastValue;
                }
                break;
            case "number":
                newInput.type = "number";
                newInput.min = "0";
                newInput.max = "99";
                newInput.placeholder = settings[i].default;
                if (settingsTypeId === "fast") {
                    newInput.value = settings[i].fastValue;
                }
                break;
            default:
                newInput.type = settings[i].type;
                newInput.placeholder = settings[i].default;
                if (settingsTypeId === "fast") {
                    newInput.value = settings[i].fastValue;
                }
            }
            subDiv.appendChild(newInput);
            mainDiv.appendChild(subDiv);

            // setting the input label using labels.json.js 
            const labelName = settings[i].name;
            const newLabel = newElementWithAtt({
                "element": "label",
                "attributes": {
                    "class": "control-label",
                    "for": labelName
                }
            });
            const description = getLabel("settingsDescription", labelName);
            const newText = newTextNode(description);
            newLabel.appendChild(newText);
            mainDiv.appendChild(newLabel);
            parentForm.appendChild(mainDiv);
            parent.appendChild(parentForm);
        }
    },
    addGenerateSettingFile = function () {
        log.full("addGenerateSettingFile:");
        const parent = $("generateSettingFile");
        const btn = newElementWithAtt({
            "element": "button",
            "attributes": {
                "class": "btn btn-primary btn-lg",
                "type": "button"
            }
        });
        btn.addEventListener("click", () => {
            log.full("generateSettingFile btn onclick:");
            const inputList = $class("form-control");
            let serverSettings = "";
            for (let input of inputList) {
                if (isEmptyOrDefault(input)) continue;
                log.full(input.id + " " + input.value);
                serverSettings += input.id + " " + input.value + "\r\n";
            }
            log.full("serverSettings:\r\n" + serverSettings);
            if (serverSettings !== "") {
                const blob = new Blob([serverSettings], {
                    type: "text/plain;charset=utf-8"
                });
                saveAs(blob, getDefaultParam("configFileName"), true);
                log.full("serverSettings: " + serverSettings);
            }
        });
        const icon = newElement("span", "glyphicon glyphicon-floppy-save");
        btn.appendChild(icon);
        parent.appendChild(btn);
    },
    isEmptyOrDefault = function (input) {
        log.full("isEmptyOrDefault:");
        if (input.value === null || input.value === "") {
            return true;
        }
        if (input.type === "checkbox") {
            log.full(input.id +
                " is checkbox and is " +
                (input.checked ? "checked" : "unchecked"));
            const param = getSettingParam(input.id);
            if ((param.default === "0" && !input.checked) ||
                (param.default === "1" && input.checked)) {
                return true;
            }
            return false;
        }
    },
    getSettingParam = function (name) {
        log.full("getSettingParam:");
        for (let setting of Object.keys(data)) {
            log.full("setting: " + setting);
            for (let param of data[setting]) {
                if (param.name === name) {
                    return param;
                }
            }
        }
    },

    /* accessing data functions */
    getLabel = function (tag, name, optLang) {
        log.full("getLabel: (" + tag + ", " + name + ")");
        const noDesc = "information not available";
        const lang = (optLang === undefined) ? language : optLang;
        if (!labels[tag]) {
            log.debug("ERROR with label tag : " + tag + " not found");
            return noDesc;
        }
        if (!labels[tag][name]) {
            log.debug("ERROR with label name : " + tag + "." + name + " not found");
            return noDesc;
        }
        const label = labels[tag][name][lang];
        if (label === undefined || label === "") {
            log.full("ERROR with label : " + tag + "." + name + "." + lang + " not found");
            if (lang === defaultParam.language) {
                return noDesc;
            }
            return getLabel(tag, name, defaultParam.language);
        }
        return label;
    },
    getDefaultParam = function (param) {
        log.full("getDefaultParam:");
        const val = getLSItem(param);
        if ((val === undefined) ||
            (val === "") ||
            (val === null)) {
            setLSItem(param, defaultParam[param]);
            return defaultParam[param];
        }
        return val;
    },
    changePageSetting = function (sname, value) {
        log.full("changePageSetting:");
        if (getLSItem(sname) === value) return;
        setLSItem(sname, value);
        window.location.reload();
    },

    /* localStroage functions */
    setLSItem = function (name, value) {
        log.full("setLSItem(" + name + "; " + value + ")");
        localStorage.setItem(name, value);
    },
    getLSItem = function (name) {
        const value = localStorage.getItem(name);
        log.full("getLSItem(" + name + "): " + value);
        return value;
    },
    logAllStorage = function () {
        console.log("logAllStorage: [key] : [value]");
        for (let i = 0; i <= localStorage.length - 1; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            console.log(i + ": [" + key + "] : [" + value + "]");
        }
    },
    clearItems = function () {
        log.full("clearItems:");
        localStorage.clear();
    };

document.body.onload = loader;
