var args = arguments[0] || {};

// Options object
// For altering behaviour
var options = {
    title: L('loadingTitle', 'Loading'),
    message: L('loadingMessage', 'Please wait while loading...')
};

// Global widget vars
var view, activityIndicator, overlay;

// Run setup when init
setup(args);

/**
 * Setup
 *
 * @param  object _options
 * @return void
 */
function setup(_options) {
    // Merge options
    _.extend(options, _options);

    // Create GUI parts

    // Android view for the alert dialog
    view = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    });

    // The activity indicator wich performs visual feedback
    activityIndicator = Ti.UI.createActivityIndicator({
        top: '10dp',
        bottom: '10dp'
    });

    // Append activity indicator to the android view
    view.add(activityIndicator);

    // We use a alert dialog for the overlay because this
    // will allow us to take up the whole screen no matter what
    // layout settings the parent window has
    overlay = Ti.UI.createAlertDialog({
        androidView: view
    });

    // Set the title for the overlay
    if ( ! options.titleid) {
        overlay.title = options.title;
    } else {
        overlay.title = L(options.titleid);
    }

    // Set the message for the activity indicator
    if ( ! options.messageid) {
        activityIndicator.message = options.message;
    } else {
        activityIndicator.message = L(options.messageid);
    }
}

/**
 * Show overlay
 *
 * @param  boolean waitForParent
 * @return void
 */
function show(waitForParent) {
    // If the loading overlay are used when a new window is opened
    // we have to wait for it to become available
    if (waitForParent) {
        __parentSymbol.addEventListener('open', function(e) {
            overlay.show();
            activityIndicator.show();
        });
    } else {
        overlay.show();
        activityIndicator.show();
    }
}

/**
 * Hide overlay
 *
 * @return void
 */
function hide() {
    activityIndicator.hide();
    overlay.hide();
}

exports.show = show;
exports.hide = hide;
exports.setup = setup;
