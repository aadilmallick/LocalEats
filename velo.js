// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixAnimations from 'wix-animations';
import wixWindow from 'wix-window';

$w.onReady(function () {

    // Write your Javascript code here using the Velo framework API

    // Print hello world:
    // console.log("Hello world!");

    // Call functions on page elements, e.g.:
    // $w("#button1").label = "Click me!";

    // Click "Run", or Preview your site, to execute your code
    let timeline = wixAnimations.timeline({ "repeat": -1 });
    timeline = timeline.add($w('#happydonut'), { y: -5, duration: 500, easing: "easeInOutQuint" })
    timeline = timeline.add($w('#happydonut'), { y: 0, duration: 500, easing: "easeInOutQuint" })
    timeline = timeline.add($w('#happysoda'), { y: -5, duration: 500, easing: "easeInOutQuint" })
    timeline = timeline.add($w('#happysoda'), { y: 0, duration: 500, easing: "easeInOutQuint" })
    timeline.replay()

    $w('#brxImage').onClick(() => {
        wixWindow.openModal("https://www.brxgf.com/", {
            "width": 750,
            "height": 500
        })
    });

    $w('#EugeniaImage').onClick(() => {
        wixWindow.openModal("https://www.ourmomeugenia.com/", {
            "width": 750,
            "height": 500
        })
    });

    $w('#villageFoodImage').onClick(() => {
        wixWindow.openModal("https://www.allmenus.com/va/great-falls/633878-the-village-grill/menu/", {
            "width": 750,
            "height": 500
        })
    });

    $w('#grillFoodImage').onClick(() => {
        wixWindow.openModal("https://grillkabobdmv.com/", {
            "width": 750,
            "height": 500
        })
    });

});
