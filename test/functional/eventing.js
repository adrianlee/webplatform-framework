var srcPath = __dirname + "/../../lib/",
    chrome = {internal : require(srcPath + "chrome/internal")},
    blackberry = {},
    utils = require(srcPath + "utils"), 
    events = ['PropertyViewportEvent', 'QNXWebDestroyedEvent', 'Destroyed', 'Created', 'PropertyLoadProgressEvent', 'PropertyLocationEvent', 'PropertyTitleEvent', 
        'PropertyCanGoBackEvent', 'PropertyCanGoForwardEvent', 'PropertyFaviconEvent', 'PropertySecureTypeEvent', 'JavaScriptResult', 'ContentRendered',
        'JavaScriptWindowObjectCleared', 'PropertyTooltipEvent', 'Created', 'DocumentLoadCommitted', 'DocumentLoaded', 'DocumentLoadFinished', 'LocationChange', 
        'LocationChanging', 'NetworkError', 'PropertyActiveEvent', 'PropertyBackgroundColorEvent', 'PropertyCertificateInfoEvent', 'PropertyContentRectangleEvent',
        'PropertyEnableWebInspectorEvent', 'PropertyEncryptionInfoEvent', 'PropertyHistoryListEvent', 'PropertyHistoryPositionEvent',
        'PropertyJavaScriptInterruptTimeoutEvent', 'PropertyOriginalLocationEvent', 'PropertyScaleEvent', 'PropertyScrollPositionEvent', 'PropertyStatusEvent',
        'PropertyVisibleEvent', 'PropertyWebInspectorPortEvent'],
    mockedQnx = { 
        callExtensionMethod: jasmine.createSpy().andReturn(999)
    };

describe("webviewFactory", function () {

    beforeEach(function () {
        spyOn(utils, "getQnxNamespace").andReturn(mockedQnx);
        blackberry = require(srcPath + "webviewFactory");
    });

    it("Can create a webviewFactory that can listen to system events", function () {
        var //webview = blackberry.createWebview(),
            spy = jasmine.createSpy(),
            value = {};
        events.forEach(function (event) {
            //webview.on(event, spy);
            //chrome.internal.webEvent(webview.id, event, value);
            //expect(spy).toHaveBeenCalledWith([value]);
        });
    
    });
});

