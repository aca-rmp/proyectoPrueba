sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"publishersmanagement/test/integration/pages/PublishersObjectPage"
], function (JourneyRunner, PublishersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('publishersmanagement') + '/test/flpSandbox.html#publishersmanagement-tile',
        pages: {
			onThePublishersObjectPage: PublishersObjectPage
        },
        async: true
    });

    return runner;
});

